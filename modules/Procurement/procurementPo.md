# 🟦 **MODULE — PROCUREMENT (POs) — Max 10 tables**

 Covers requisitions → purchase orders → receipts → returns → cost impact tracking.

### **1. PurchaseOrder (PARENT)**

The official purchase order sent to a vendor.
Links to Project, Vendor, and optionally EstimateLineItem or ProjectTask.

### **2. PurchaseOrderLineItem**

Line items: materials, equipment, subcontracts, services.

### **3. PurchaseRequisition**

Internal request for materials/services before creating a PO.

### **4. PurchaseRequisitionItem**

Items requested on the requisition.

### **5. PurchaseOrderApproval**

Approval workflow: manager, PM, accounting, etc.

### **6. PurchaseOrderReceipt**

Goods received (GRN). Tracks quantities received & date.

### **7. PurchaseOrderReceiptItem**

Line-item details of goods received.

### **8. PurchaseOrderReturn**

Return shipments to vendor.

### **9. PurchaseOrderAttachment**

Invoices, packing slips, photos, vendor docs.

### **10. PurchaseOrderHistoryEvent**

Timeline of events: created, approved, sent, received, invoiced.

---

### ⭐ Procurement Module Tree

```
PurchaseOrder (PARENT)
│
├─ PurchaseOrderLineItem
├─ PurchaseOrderApproval
├─ PurchaseOrderAttachment
├─ PurchaseOrderHistoryEvent
│
├─ PurchaseRequisition (PARENT)
│   └─ PurchaseRequisitionItem
│
├─ PurchaseOrderReceipt (PARENT)
│   └─ PurchaseOrderReceiptItem
│
└─ PurchaseOrderReturn
```

---