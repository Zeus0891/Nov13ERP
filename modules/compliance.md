# 🟦 **MODULE 27 — COMPLIANCE (Max 10 tables)**

> Safety compliance, regulatory compliance, documentation, certifications, audits.
> Heavy integration with Safety, HR, Subcontractors, and Contracts.

---

## **1. ComplianceRequirement** *(PARENT)*

Any legal or contractual requirement:

* OSHA
* building codes
* environmental rules
* insurance requirements
* bonding
* subcontractor compliance

**Children:** ComplianceDocument, ComplianceCheck, ComplianceHistory

---

## **2. ComplianceDocument** *(CHILD)*

Certifications, COIs, permits, SDS, inspection reports.

---

## **3. ComplianceCheck** *(CHILD)*

Periodic or event-driven compliance checks.

---

## **4. ComplianceViolation**

When a requirement is not met.

---

## **5. ComplianceCorrectionAction**

Actions to resolve violations.

---

## **6. ComplianceAudit** *(PARENT)*

Formal audit event: internal or external.

**Child:** ComplianceAuditFinding

---

## **7. ComplianceAuditFinding** *(CHILD)*

Issues discovered during audit.

---

## **8. ComplianceTrainingRecord**

Training completions (OSHA 10/30, safety modules).

---

## **9. ComplianceAttachment**

Documents linked to requirements, audits, or violations.

---

## **10. ComplianceHistory**

Full audit log and timeline of compliance activity.

---

# ⭐ **COMPLIANCE — Structure Tree**

```
ComplianceRequirement (PARENT)
│   ├─ ComplianceDocument
│   ├─ ComplianceCheck
│   └─ ComplianceHistory
│
ComplianceViolation
│   └─ ComplianceCorrectionAction
│
ComplianceAudit (PARENT)
│   └─ ComplianceAuditFinding
│
ComplianceTrainingRecord
ComplianceAttachment
```

---