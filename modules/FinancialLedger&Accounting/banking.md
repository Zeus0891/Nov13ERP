
# 🟩 **35C — BANKING — Max 10 Tables**

> Manages bank accounts, feeds, reconciliations.

---

## **1. BankAccount** *(PARENT)*

Company bank accounts.

---

## **2. BankTransaction** *(CHILD)*

Import of bank feed transactions.

---

## **3. BankReconciliation** *(PARENT)*

Monthly reconciliation session.

**Child:** BankReconciliationItem

---

## **4. BankReconciliationItem** *(CHILD)*

Matches ERP transactions with bank lines.

---

## **5. BankFeedConnection**

Connection to Plaid/Stripe/ACH gateway.

---

## **6. BankStatement**

Monthly statements stored.

---

## **7. BankRule**

Auto-categorization rules.

---

## **8. BankTransfer**

Inter-account transfers.

---

## **9. BankDeposit**

Deposit slips.

---

## **10. BankHistoryEvent**

Audit log.

---

# ⭐ Banking Tree

```
BankAccount (PARENT)
│   ├─ BankTransaction
│   ├─ BankReconciliation
│       └─ BankReconciliationItem
│
BankFeedConnection
BankStatement
BankRule
BankTransfer
BankDeposit
BankHistoryEvent
```

---
