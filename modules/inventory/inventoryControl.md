
# 🟦 **MODULE  — INVENTORY CONTROL (ZERO LOSS) (Max 10 tables)**

 This module enforces risk prevention, shrink reduction, theft control.

---

## **1. InventoryLossEvent** *(PARENT)*

Lost, missing, stolen, damaged materials.

---

## **2. InventoryLossCause**

Reason codes: theft, misplacement, damage, spoilage.

---

## **3. InventoryLossInvestigation** *(CHILD)*

Investigation notes, responsible parties, corrective actions.

---

## **4. InventoryAudit**

Full audits of stock levels by warehouse or project.

---

## **5. InventoryAuditLine**

Item-by-item audit results.

---

## **6. InventoryReservation**

Reserve items for tasks, projects, or POs.

---

## **7. InventoryCommitment**

Committed stock tied to jobs or tasks.

---

## **8. InventoryReorderPoint**

Automatic reordering thresholds.

---

## **9. InventorySafetyStock**

Minimum buffer levels.

---

## **10. InventoryControlHistory**

Audit: alerts, threshold changes, investigations.

---

# ⭐ **INVENTORY CONTROL — Structure Tree**

```
InventoryLossEvent (PARENT)
│   └─ InventoryLossInvestigation
│
InventoryLossCause
InventoryAudit (PARENT)
│   └─ InventoryAuditLine
│
InventoryReservation
InventoryCommitment
InventoryReorderPoint
InventorySafetyStock
InventoryControlHistory
```

---
