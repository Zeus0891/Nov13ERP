# 🟦 **MODULE 17B — INVENTORY TRANSACTIONS (Max 10 tables)**

> All inventory movement: adjustments, transfers, receipts, returns.

---

## **1. InventoryTransaction** *(PARENT)*

Generic transaction: IN, OUT, TRANSFER, ADJUSTMENT.

**Children:** InventoryTransactionLine

---

## **2. InventoryTransactionLine** *(CHILD)*

Item + qty + bin + reason.

---

## **3. InventoryAdjustment**

Manual adjustments: shrink, damaged, correction.

---

## **4. InventoryTransfer**

Transfer between locations: Warehouse → Truck → Jobsite.

---

## **5. InventoryTransferLine** *(CHILD)*

Items being transferred.

---

## **6. InventoryReturn**

Return items to stock or supplier.

---

## **7. InventoryReturnLine**

Items returned.

---

## **8. InventoryCount**

Cycle counts, annual counts, spot counts.

---

## **9. InventoryCountLine**

Item counts with variance.

---

## **10. InventoryTransactionHistory**

Audit of all movement.

---

# ⭐ **INVENTORY TRANSACTIONS — Structure Tree**

```
InventoryTransaction (PARENT)
│   └─ InventoryTransactionLine
│
InventoryAdjustment
InventoryTransfer (PARENT)
│   └─ InventoryTransferLine
│
InventoryReturn (PARENT)
│   └─ InventoryReturnLine
│
InventoryCount (PARENT)
│   └─ InventoryCountLine
│
InventoryTransactionHistory
```

---
