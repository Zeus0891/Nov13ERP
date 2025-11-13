
# 🟦 **MODULE — BILLING & ACCOUNTS RECEIVABLE (Max 10 tables)**

 Billing/AR integra: invoices, retainage, progress billing, deposits, payments recibidos, aging, reminders.
 Lo dejo compacto pero totalmente enterprise.

### **1. BillingSchedule** *(PARENT)*

El plan de cobro: T&M, milestone, progress %, deposit schedule, retainage.

### **2. BillingMilestone**

Hitos de cobro: “50% Rough-in”, “Concrete Complete”, “Final Walkthrough”.

### **3. BillingProgress**

Cobro por porcentaje completado (similar a AIA G702/G703).

### **4. BillingRetainage**

Retenciones aplicadas a facturas y liberación futura.

### **5. BillingDeposit**

Depósitos iniciales o down payments.

### **6. BillingAdjustment**

Créditos, débitos, rebillings aplicables a AR.

### **7. ReceivableLedger**

Ledger AR: cada cargo, crédito, pago aplicado y balance restante.

### **8. ReceivablePaymentApplication**

Cómo se aplican los pagos a facturas específicas.

### **9. ReceivableAgingSnapshot**

Aging buckets: 0–30, 31–60, 61–90, >90 días.

### **10. BillingHistoryEvent**

Audit trail: invoiced, overdue, reminder sent, partial paid, write-off.

---

### ⭐ Billing / AR Tree

```
BillingSchedule (PARENT)
│
├─ BillingMilestone
├─ BillingProgress
├─ BillingRetainage
├─ BillingDeposit
│
ReceivableLedger (PARENT)
│
├─ ReceivablePaymentApplication
├─ BillingAdjustment
├─ ReceivableAgingSnapshot
└─ BillingHistoryEvent
```

---