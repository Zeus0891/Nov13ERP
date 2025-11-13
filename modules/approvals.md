
# 🟦 **MODULE 9 — APPROVALS (Max 10 tables)**

 A central approvals engine reused by Projects, Estimates, COs, Invoices, POs, etc.
 Similar to Netsuite, SAP Workflow or Procore Review Workflow.

### **1. ApprovalRequest** *(PARENT)*

Representa una solicitud de aprobación para cualquier entidad (estimate, invoice, CO, PO, etc.).

### **2. ApprovalRule**

Reglas: monto mínimo, departamentos, threshold, autoría, multi-nivel.

### **3. ApprovalLevel**

Niveles de aprobación necesarios (Level 1, Level 2, Final Approval).

### **4. ApprovalDecision**

Actions por aprobador: approve, reject, request changes.

### **5. ApprovalAssignment**

Quién debe aprobar (user, role, department).

### **6. ApprovalStep**

Pasos secuenciales del workflow.

### **7. ApprovalEscalation**

Reglas de escalamiento si no aprueban a tiempo.

### **8. ApprovalCondition**

Condiciones basadas en datos: (amount > X), (scope change > Y%).

### **9. ApprovalAttachment**

Documentación usada para la aprobación.

### **10. ApprovalHistoryEvent**

Auditoría: enviado, asignado, aprobado, rechazado.

---

### ⭐ Approvals Tree

```
ApprovalRequest (PARENT)
│
├─ ApprovalRule
├─ ApprovalLevel
├─ ApprovalAssignment
├─ ApprovalDecision
├─ ApprovalStep
├─ ApprovalEscalation
├─ ApprovalCondition
├─ ApprovalAttachment
└─ ApprovalHistoryEvent
```

---