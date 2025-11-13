

# 🟩 **MODULE 16B — EXPENSES (CORPORATE CARD + RECONCILIATION)**

 Only created because enterprise companies require card feeds & matching.
 (Optional module — 9 tables)

---

## **1. CorpCard** *(PARENT)*

Represents a corporate credit card assigned to an employee.

**Children:** CorpCardTransaction, CorpCardLimit, CorpCardHistoryEvent

---

## **2. CorpCardTransaction** *(CHILD)*

Raw feed transaction from bank feed/API.

---

## **3. CorpCardReconciliation**

Match between ExpenseLine and CorpCardTransaction.

---

## **4. CorpCardLimit**

Spending limits, daily/weekly caps.

---

## **5. CorpCardDispute**

Disputed transactions.

---

## **6. CorpCardVendor**

Known vendors categorized for faster reconciliation.

---

## **7. CorpCardReceipt**

Receipts captured directly from the card app.

---

## **8. CorpCardAttachment**

Statements, PDFs, exports.

---

## **9. CorpCardHistoryEvent**

History: assignment, limits changed, card frozen.

---

# ⭐ **EXPENSES CORPORATE CARD — Structure Tree**

```
CorpCard (PARENT)
│
├─ CorpCardTransaction
│    └─ CorpCardReconciliation
│
├─ CorpCardLimit
├─ CorpCardDispute
├─ CorpCardVendor
├─ CorpCardReceipt
├─ CorpCardAttachment
└─ CorpCardHistoryEvent
```

---

# 🔵 **EXPENSES TOTAL:**

* Expenses Core: **10 tables**
* Corporate Card: **9 tables**
  Total: **19 enterprise tables**, clean & scalable.

---

# 🟦 **NOW INVENTORY (VERY LARGE MODULE)**

Inventory is HUGE in ERP (like Oracle, NetSuite, SAP…), so we break it into **3 submodules**:

1. Inventory Core
2. Inventory Transactions
3. Inventory Control (Zero Loss Prevention)

Each ≤ 10 tables.

---
