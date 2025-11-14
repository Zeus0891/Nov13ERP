# Estimating Module — Enterprise Architecture Report

## 1) Executive Summary

The **Estimating** module is the revenue origination hub of the platform. It centralizes estimate authoring, pricing, approvals, client delivery, and conversion to downstream **Invoice** and **Project** artifacts with 1:1:1 traceability (shared document number). It exposes admin oversight views, PM assignment, and client-facing flows (public URL with approve/decline/pay). It integrates tightly with **CRM (Account/Client)**, **Approvals**, **Documents**, **Projects**, **Invoice/AR**, and the **AI Agent** for assistance, search, and guided creation. The design follows multi-tenant, RLS-safe, audit-first standards and enforces financial integrity with appropriate delete semantics.

---

## 2) Scope & Objectives

* Provide a **List / Workbench** for estimates (filters: Approved, Declined, Overdue, Draft, Sent, etc.) including **financial metrics** at a glance.
* Support **Admin oversight** of PM-created estimates (sub-screen/modal).
* Offer **guided creation** via **AI Agent** (search, list, create, send, assign, delete, etc.).
* Deliver a **rich Estimate Form** with:

  * Line items (name, description, qty, unit price, price, total)
  * Per-line attachments (max 5 photos each)
  * Contract template selection (from Tenant Settings)
  * Totals, taxes, discounts, terms, signature, send/save/delete
* **Client delivery** via public URL with **Approve / Pay / Decline**.
* **Unified Approval System** integration for enterprise-grade approval workflows.
* **Auto-generate Project and Invoice** on dual approval (Client then Admin/PM) while preserving shared estimate number.

---

## 3) Core User Journeys (Happy Paths)

### 3.1 Home/List Screen

* **Filters**: Approved, Declined, Overdue, Draft, Sent, Client-Approved, Admin-Approved, Converted.
* **Financial KPIs**: pipeline value, approved value, overdue count/value, win rate, average cycle time.
* **Bulk actions**: assign PM, send/re-send, archive, export.

### 3.2 Admin Oversight (PM Inventory)

* Sub-screen/modal listing **all estimates created by PMs** in the tenant.
* Actions: view, reassign PM, enforce approval, revoke access, send.

### 3.3 Create / Edit Estimate

* **Select client** from CRM **Account** modal (with “Create New Client” path).
* **Line Items** (EstimateLineItem):

  * Inputs: Item/Service Name, Description, Qty, Unit Price, Line Total (computed), Tax/Discount applicability flags (optional).
  * **Add Files**: per line item, add up to 5 photos (EstimateAttachment relationship).
* **Header**:

  * Contract Template dropdown (from Tenant Settings: Residential, Commercial, Subcontractors, HomeOwner, HOA, …).
  * Subtotal, Taxes, Discounts, Terms & Conditions, Signature block.
* **Send / Save / Delete**:

  * Save → Draft.
  * Send → creates a **public URL** (tokenized) and emails client.
  * Delete → soft-delete, audited, only in non-approved states.

### 3.4 Client Flow (Public URL)

* Views the estimate, can **Approve** or **Decline** (and optionally **Pay**).
* Approval triggers **notification** to Admin or the Estimate’s PM.

### 3.5 Dual Approval → Conversion

* Client approves → **Admin/PM approval** step.
* On Admin approval:

  * **Auto-generate Invoice** (inherits Estimate Number and details).
  * **Auto-generate Project** (inherits Estimate Number; items → tasks with attachments).
  * Persist 1:1:1 continuity: Estimate ↔ Project ↔ Invoice share **DocumentGroup/Number**.

---

## 4) Data Model (Functional Responsibilities)

> Names below refer to your schema list; delete semantics and audit patterns assume the platform standards.

### 4.1 Estimate (Hybrid, Pattern B on header)

* **Purpose**: Master commercial document; holds client, totals, terms, contract template, lifecycle status.
* **Key links**:

  * CRM Account/Client (optional, SetNull) via composite tenant FKs.
  * ContractTemplate (Tenant Settings; optional).
  * Approved links: `approvedProjectId`, `approvedInvoiceId` (Restrict on delete to preserve legal traceability).
  * DocumentGroup for shared numbering (unique per tenant).
  * Unified Approval: `approvalRequestId` (optional, SetNull) links to centralized approval system.
* **Delete semantics**:

  * Ownership children: Cascade (Revisions, LineItems, Taxes, Discounts, Terms, Attachments, Comments, HistoryEvents).
  * Optional historical references: SetNull (only when all FK fields are optional).
  * Core finance links (Project/Invoice): Restrict.
  * Approval system: SetNull (preserves approval history in centralized system).
* **Indexes**: BRIN on `createdAt`; composites starting with `tenantId` for status, totals, accountId, etc.

### 4.2 EstimateRevision (Tenant, Pattern A)

* **Purpose**: Immutable snapshots for audit/regulatory recovery and price disputes.
* **Data**: Materialize financials, terms, tax/discount breakdowns at each send/approval.
* **Delete**: Cascade from Estimate.
* **Indexes**: BRIN on `createdAt` for time-series analytics.

### 4.3 EstimateLineItem (Tenant, Pattern A)

* **Purpose**: Item/service rows (qty, unit price, computed totals).
* **Links**:

  * **EstimateAttachment** (max 5 per line) for photos.
  * Optional **PriceListItem** from CRM (RLS-safe composite FK recommended).
  * Future: ProjectTask / PurchaseOrderLine (SetNull; activated on conversion).
* **Delete**: Cascade from Estimate.

### 4.4 EstimateTax / EstimateDiscount (Tenant, Pattern A)

* **Purpose**: Configurable, per-line or header scope; must snapshot into revisions.
* **Delete**: Cascade from Estimate.
* **Enums**: `EstimateTaxType`, `EstimateDiscountType`.

### 4.5 EstimateTerm (Tenant, Pattern A)

* **Purpose**: Structured T&Cs; ordered list; ties to contract template selection.
* **Delete**: Cascade.

### 4.6 EstimateAttachment (Tenant, Pattern A)

* **Purpose**: Files at header or per line; respects retention/classification.
* **Delete**: Cascade from parent entity (Estimate or LineItem via junction).

### 4.7 EstimateComment (Tenant, Pattern A)

* **Purpose**: Collaboration notes; internal/external visibility.
* **Delete**: Cascade.

### 4.8 EstimateHistoryEvent (Tenant, Pattern A)

* **Purpose**: Event sourcing trail: created, sent, viewed, client-approved, admin-approved, converted, declined.
* **Delete**: Cascade.

### 4.9 Unified Approval System Integration

* **Purpose**: Estimates integrate with the enterprise-wide unified approval system from `approvals.prisma`.
* **Key Models**: Uses `ApprovalRequest`, `ApprovalDecision`, and `ApprovalRule` for consistent approval workflows.
* **Integration**: Each estimate can have an optional `approvalRequestId` linking to the centralized approval system.
* **Benefits**: Configurable rules, delegation support, cross-module analytics, enterprise compliance features.

### 4.10 Bid / BidInvitation / BidSubmission / BidComparison (Tenant, Pattern A)

* **Purpose**: RFP flow attached to Estimate; submissions → comparison/ranking.
* **Delete**: Cascade from Bid; SetNull for optional outward links.
* **Note**: Optional in v1 if your workflow doesn’t use competitive bidding yet.

---

## 5) Enums & Lifecycle

### 5.1 EstimateStatus (proposed state machine)

`DRAFT → SENT → VIEWED → CLIENT_APPROVED/CLIENT_DECLINED → ADMIN_APPROVED/ADMIN_DECLINED → CONVERTED → EXPIRED → CANCELLED`

* Guardrails:

  * Only **SENT** estimates can transition to **VIEWED**.
  * Only **VIEWED/SENT** can move to **CLIENT_APPROVED/CLIENT_DECLINED**.
  * Only **CLIENT_APPROVED** can move to **ADMIN_APPROVED**.
  * **ADMIN_APPROVED** triggers conversion (Project + Invoice) → **CONVERTED**.
  * **ADMIN_DECLINED/CLIENT_DECLINED** are terminal (unless re-opened via admin).
  * **EXPIRED** occurs via scheduler on `validUntil`.

### 5.2 EstimateChildStatus

For children (LineItem, Attachment, etc.): `ACTIVE / INACTIVE / ARCHIVED`.

### 5.3 Bidding

* `BidStatus`: `DRAFT → OPEN → CLOSED → AWARDED/CANCELLED`
* `BidInvitationStatus`: `SENT → VIEWED → RESPONDED/EXPIRED/CANCELLED`
* `BidSubmissionStatus`: `DRAFT → SUBMITTED → UNDER_REVIEW → ACCEPTED/REJECTED/WITHDRAWN/EXPIRED`

### 5.4 Unified Approval Status

* **ApprovalRequest Status**: `PENDING → APPROVED/REJECTED/CANCELLED`
* **ApprovalDecision**: `APPROVED/REJECTED/REQUEST_CHANGES` with member attribution
* **Estimate Integration**: Estimate status reflects approval state automatically

---

## 6) Integrations

### 6.1 CRM (Account/Client)

* **Modal picker** to select existing client; “Create New Client” opens CRM Account form. On save, the new Account is injected back into the Estimate form.
* **FK pattern**: RLS-safe `[tenantId, accountId] → [tenantId, id]`.
* **Delete**: SetNull on Estimate if CRM Account is removed (history preserved).

### 6.2 Contract Templates (Tenant Settings)

* Estimate form shows only **tenant-owned** templates (Residential, Commercial, Subcontractors, HomeOwner, HOA, …).
* On selection, snapshot the template text into the Estimate (and into Revision on send).

### 6.3 Documents & Attachments

* Header and line-level photos (max 5 per line) via **EstimateAttachment**.
* **Classification** and **Retention** fields must be present for governance.

### 6.4 Unified Approval System

* **Enterprise Integration**: Uses centralized `approvals.prisma` system for all estimate approvals.
* **Configurable Rules**: `ApprovalRule` model supports amount-based, client-type-based, and conditional routing.
* **Approval Process**: 
  * Create `ApprovalRequest` with estimate context (document type, amount, number).
  * Route to appropriate approvers based on configured rules.
  * Record decisions in `ApprovalDecision` with full audit trail.
* **Advanced Features**: Delegation, escalation, parallel approvals, mobile notifications.
* **Cross-Module Benefits**: Unified approval dashboard, analytics, and compliance reporting.

### 6.5 Conversion to Project & Invoice

* On **Admin approval** after client approval:

  * Create **Project** and **Invoice** with **shared Estimate Number** (DocumentGroup)—strict 1:1:1.
  * **Project**: each line item becomes a **Project Task** with the same name/description; attachments are copied to the task/document area; notes are replicated to “Project Notes”; members are assignable in the project domain.
  * **Invoice**: header, line items, taxes/discounts cloned; **Invoice Number** may match the Estimate Number per DocumentGroup policy.

### 6.6 Payments & Change Orders (from Invoice domain)

* Client receives invoice after signature/approval; can **request Change Order** and **pay in installments**.
* These flows live in the **Invoice** module but are seeded by the Estimate conversion.

### 6.7 AI Agent

* Commands: **search**, **list by client/account**, **filter by status (draft/sent/approved/declined/saved/deleted)**, **create estimate (guided)**, **send**, **assign PM**, **delete** (soft).
* Conversational scaffolding for rapid authoring (pre-fill line items, suggest contract template, set terms).

---

## 7) Security, Compliance, & Data Integrity

* **Multi-Tenant RLS**: All tenant tables must include `tenantId`; composite FKs follow `[tenantId, fk] → [tenantId, id]`.
* **Audit-First**: `createdAt @db.Timestamptz(6)`, `updatedAt @updatedAt`, `deletedAt`, `createdByActorId/updatedByActorId/deletedByActorId`, `auditCorrelationId`, `dataClassification`, `retentionPolicy`.
* **Delete Semantics**:

  * **Cascade**: strict ownership (Estimate → children; Bid → submissions).
  * **Restrict**: legal/financial links (Estimate ↔ Project/Invoice).
  * **SetNull**: optional historical references (CRM, templates) **only if all FK fields are optional** (Prisma constraint).
* **Indexing**:

  * **BRIN** on `createdAt` for high-volume events.
  * Operational indexes must start with `tenantId`.
  * Unique per tenant for human numbers (`estimateNumber`); consider **partial unique** `WHERE deletedAt IS NULL`.
* **Financial Precision**:

  * Amounts `@db.Decimal(12,2)`; unit prices may use `@db.Decimal(12,4)` when needed.
* **PII/Exposure**:

  * Public URL should use secure, time-boxed token; log access (IP, UA) and decisions.

---

## 8) UX Artifacts (Concise)

### 8.1 List View

* Filters + KPI bar (pipeline, approved, overdue).
* Table columns: Estimate #, Client, Status, PM, Total, UpdatedAt, Actions.

### 8.2 Admin Oversight Modal

* List of PMs → list of their estimates → drill-down.

### 8.3 Estimate Form

* Header: Client picker (with “Create New Client”), Contract Template dropdown, Terms, Signature.
* Lines: name, description, qty, unit price, line total (calc), add files (max 5).
* Footer actions: Save, Send (with preview), Delete (soft), Assign PM/Client.

---

## 9) API & Events (Sketch)

* `POST /api/estimating/estimates` — create draft.
* `POST /api/estimating/estimates/:id/send` — create public token, email client, add HistoryEvent.
* `POST /api/estimating/estimates/:id/client-approve` — validate token, mark client approved, notify Admin/PM.
* `POST /api/estimating/estimates/:id/submit-for-approval` — create unified ApprovalRequest, route to configured approvers.
* `POST /api/approvals/:approvalRequestId/decisions` — unified approval decision endpoint (replaces estimate-specific approval).
* `POST /api/estimating/estimates/:id/decline` — client or admin decline.
* **Domain Events**:

  * `EstimateSent`, `EstimateViewed`, `EstimateClientApproved`, `EstimateAdminApproved`, `EstimateConverted`, `EstimateDeclined`.

---

## 10) Metrics & Observability

* **Funnel**: Draft → Sent → Viewed → Client Approved → Admin Approved → Converted.
* **Cycle times**: creation→send, send→view, view→client approval, client→admin approval, admin approval→conversion.
* **Financial**: pipeline value, approved value, average estimate amount, per-PM performance, overdue value.
* **Quality**: change rate per revision, decline reasons, attachment usage.

---

## 11) Risks & Edge Cases

* Client approves but Admin rejects → remain non-converted; notify client; allow revision.
* Client approves then asks changes → treat as **Change Request**; either new revision or change order after conversion.
* Token misuse: implement single-use or short TTL, rotate on resend.
* Partial payments on invoice: handled in **Invoice** module; ensure linkage back to Estimate for reporting.

---

## 12) Recommendations & Enhancements (to hit/extend Enterprise Grade)

**High priority (P1):**

1. **RLS Safety for Pricing**
   Ensure `PriceList`/`PriceListItem` are **tenant-scoped** (add `tenantId`, `@@unique([tenantId, id])`) so `EstimateLineItem → PriceListItem` can use composite FKs.
2. **External Approval Token Model**
   Add `EstimateExternalToken` (hash, expiresAt, scopes, attemptedAt, ip/ua) to secure public links and provide forensics.
3. **Partial Unique for Numbers**
   Add partial unique index for `estimateNumber` with `WHERE deletedAt IS NULL`.
4. **✅ COMPLETED: Unified Approval System**
   ~~EstimateApproval model replaced with enterprise-wide unified approval system from `approvals.prisma`.~~ ✅

**Medium priority (P2):**
4. **Bid Comparison Framework**
Add `BidEvaluationCriterion`, `BidScore`, `BidRiskFlag` to formalize vendor scoring beyond a single `BidComparison` table.
5. **Contract Template Versioning**
Version `ContractTemplate` and **snapshot** body into Estimate/Revision.
6. **Enum Refinements**

* `LineItemType` = {LABOR, MATERIAL, SERVICE, EQUIPMENT, OTHER}
* `DiscountScope` = {LINE, SUBTOTAL, TOTAL}
* `TaxScope` = {LINE, TOTAL}
* `CommentVisibility` = {INTERNAL, EXTERNAL}

7. **Back-Relations on Actor** (Pattern B completeness)
   Named back-relations for `EstimateCreatedByActor`, etc., in the Actor model file.

**Operational excellence:**
8. **Scheduled Jobs**

* Mark **Overdue** based on `validUntil`.
* Remind **Viewed but not approved** after N days.
* Rotate/resend expired public tokens.

9. **AI Agent Playbooks**

   * “Create estimate from prompt” (scaffold lines, suggest template and terms).
   * “List estimates for client X / status Y” (fast filters).
   * “Summarize estimate variance vs average”.

---

## 13) Acceptance Criteria (Definition of Done)

* ✅ **COMPLETED**: RLS composite FKs validated for all cross-module links.
* ✅ **COMPLETED**: `updatedAt` uses `@updatedAt` in all BT/BH models.
* ✅ **COMPLETED**: BRIN indexes on `createdAt` for Estimate, Revision, HistoryEvent.
* ✅ **COMPLETED**: Delete semantics enforced as specified (Cascade/Restrict/SetNull).
* ✅ **COMPLETED**: Unified approval system integration with configurable rules.
* Client public flow uses secure token model and logs access.
* Dual approval triggers conversion with 1:1:1 continuity (shared number).
* AI Agent commands implemented for search/list/create/send/assign/delete.

---

## 14) Conclusion

The Estimating module, as specified, implements a complete enterprise-grade origination flow with strong governance, observability, and cross-module continuity. **The unified approval system migration has been successfully completed**, eliminating the obsolete `EstimateApproval` model and integrating with the enterprise-wide approval engine. With the remaining P1 enhancements (tenant-scoped pricing artifacts, external approval token, partial unique constraints), it not only meets certification standards but establishes a **repeatable blueprint** for secure, auditable, multi-tenant revenue workflows across the platform.
