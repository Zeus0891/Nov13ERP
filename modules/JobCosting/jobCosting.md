# 🟦 **MODULE 36 — JOB COSTING / COST CODES**

Job costing is critical, but fits in **10 tables**.

---

## **1. CostCode** *(PARENT)*

Standardized cost codes (CSI MasterFormat compatible).

---

## **2. CostCategory**

Labor, materials, equipment, subcontract, overhead.

---

## **3. CostType**

Budget vs committed vs actual.

---

## **4. CostCenter**

Company-wide cost buckets (department, division).

---

## **5. JobCostLedger** *(PARENT)*

All costs per project.

**Child:** JobCostLine

---

## **6. JobCostLine** *(CHILD)*

Unit: labor hours, materials, equipment, etc.

---

## **7. JobCostBudget** *(PARENT)*

Budget container.

**Child:** JobCostBudgetLine

---

## **8. JobCostBudgetLine** *(CHILD)*

Per cost code.

---

## **9. JobCostForecast**

Forecast cost to complete.

---

## **10. JobCostHistoryEvent**

Audit.

---

# ⭐ Job Costing Tree

```
CostCode (PARENT)
CostCategory
CostCenter
CostType
│
JobCostLedger (PARENT)
│   └─ JobCostLine
│
JobCostBudget (PARENT)
│   └─ JobCostBudgetLine
│
JobCostForecast
JobCostHistoryEvent
```

---
