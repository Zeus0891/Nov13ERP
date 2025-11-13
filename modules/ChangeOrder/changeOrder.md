
# 🟦 **MODULE 8 — CHANGE ORDERS (Max 10 tables)**

 Enterprise-level change order system like Procore, Buildertrend, CMiC, Autodesk Build.

### **1. ChangeOrder** *(PARENT)*

Representa el cambio formal en el alcance, costo o tiempo de un proyecto.
Incluye: origin, reason, status, pricing mode (fixed, T&M), links a Estimate/Project.

### **2. ChangeOrderLineItem**

Desglose de costos del cambio: labor, materials, equipment, subcontract.

### **3. ChangeOrderReason**

Razón del CO (Owner Request, Field Condition, Design Change, RFI Result).

### **4. ChangeOrderImpact**

Impactos en costo: +/– materiales, labor, overhead, general conditions.

### **5. ChangeOrderScheduleImpact**

Impacto en tiempo: días añadidos, milestones afectados.

### **6. ChangeOrderScope**

Descripción detallada del cambio, inclusiones y exclusiones.

### **7. ChangeOrderAttachment**

Planos, fotos, documentos, sketches, RFIs relacionados.

### **8. ChangeOrderApproval**

Flujo de aprobación del CO (cliente + interno).

### **9. ChangeOrderRevision**

Versiones del CO antes de aprobarlo (V1, V2, V3).

### **10. ChangeOrderHistoryEvent**

Timeline completo: submitted, reviewed, rejected, approved, billed.

---

### ⭐ Change Order Tree

```
ChangeOrder (PARENT)
│
├─ ChangeOrderLineItem
├─ ChangeOrderReason
├─ ChangeOrderImpact
├─ ChangeOrderScheduleImpact
├─ ChangeOrderScope
├─ ChangeOrderAttachment
├─ ChangeOrderApproval
├─ ChangeOrderRevision
└─ ChangeOrderHistoryEvent
```

---