
# 🟦 **MODULE  — CONTRACTS — Max 10 tables**

 Supports customer contracts, subcontractor agreements, amendments, deliverables, signatures.

### **1. Contract (PARENT)**

Master contract between company ↔ client, or company ↔ subcontractor.
Contains contract value, scope, term, status, type.

### **2. ContractScope**

Description of inclusions/exclusions.

### **3. ContractTerm**

Legal terms & conditions; payment terms, insurance, warranties.

### **4. ContractDeliverable**

Deliverables required: “Foundations”, “Rough Plumbing”, etc.

### **5. ContractMilestone**

Milestones tied to payments or progress.

### **6. ContractAmendment**

Changes to the original contract (NOT change orders; these amend contract-level items).

### **7. ContractAttachment**

Signatures, exhibits, schedules, drawings, schedules.

### **8. ContractSignature**

Digital signatures from client, subcontractor, and internal stakeholders.

### **9. ContractCompliance**

Insurance, bonding, licensing compliance tied to contract.

### **10. ContractHistoryEvent**

Activity log: issued, negotiated, signed, amended, expired.

---

### ⭐ Contracts Module Tree

```
Contract (PARENT)
│
├─ ContractScope
├─ ContractTerm
├─ ContractDeliverable
├─ ContractMilestone
├─ ContractAmendment
├─ ContractAttachment
├─ ContractSignature
├─ ContractCompliance
└─ ContractHistoryEvent
```

---