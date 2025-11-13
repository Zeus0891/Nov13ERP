

# 🟩 **35B — ACCOUNTING TRANSACTIONS — Max 10 Tables**

> All financial events: sales, expenses, inventory, payroll, payments.

---

## **1. Transaction** *(PARENT)*

Universal financial event (invoice, payment, JE, AP, etc.)

**Children:** TransactionLine, TransactionHistoryEvent

---

## **2. TransactionLine** *(CHILD)*

Debit/credit.

---

## **3. TransactionSourceLink**

Links back to source entity (invoice, PO, payroll run).

---

## **4. TransactionType**

Revenue, AP, AR, Inventory Adj, Payroll, etc.

---

## **5. TransactionBatch**

Posted together.

---

## **6. TransactionApproval**

Internal approval (for high-risk entries).

---

## **7. TransactionAttachment**

Invoices, receipts.

---

## **8. TransactionReversal**

Reverse entries.

---

## **9. TransactionAllocation**

Split across departments, cost centers.

---

## **10. TransactionHistoryEvent** *(CHILD)*

Audit trail.

---

# ⭐ Accounting Transactions Tree

```
Transaction (PARENT)
│
├─ TransactionLine
├─ TransactionHistoryEvent
│
TransactionType
TransactionSourceLink
TransactionBatch
TransactionApproval
TransactionAttachment
TransactionReversal
TransactionAllocation
```

---
