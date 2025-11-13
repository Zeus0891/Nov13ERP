# 🟦 **MODULE 35 — FINANCIAL LEDGER / ACCOUNTING**

This is one of the biggest domains in ANY ERP.
To keep your rule (≤10 tables/module), we split accounting into **4 submodules**:

### 35A — General Ledger (GL)

### 35B — Accounting Transactions

### 35C — Banking

### 35D — Tax & Compliance (Accounting-side)

Each submodule = 10 tables max.

---

# 🟩 **35A — GENERAL LEDGER (GL) — Max 10 Tables**

> Core of financial accounting. Chart of accounts, journals, periods.

---

## **1. GLAccount** *(PARENT)*

Chart of accounts (assets, liabilities, revenue, COGS).

---

## **2. GLAccountCategory**

Groups: Assets, Liability, Equity, Income, Expense.

---

## **3. GLAccountSegment**

Optional segments (department, location, division).

---

## **4. GLFiscalYear**

Year boundaries.

---

## **5. GLFiscalPeriod**

Periods inside fiscal year (monthly, 4-4-5, custom).

---

## **6. GLJournal** *(PARENT)*

Manual journal entries.

**Children:** GLJournalLine

---

## **7. GLJournalLine** *(CHILD)*

Debit/credit lines.

---

## **8. GLPostingBatch**

Batch of transactions posted.

---

## **9. GLTrialBalanceSnapshot**

Snapshot used for reporting & audit.

---

## **10. GLHistoryEvent**

Changes to COA, periods, journals.

---

# ⭐ GL — Structure Tree

```
GLAccount (PARENT)
│
├─ GLAccountCategory
├─ GLAccountSegment
│
GLFiscalYear (PARENT)
│   └─ GLFiscalPeriod
│
GLJournal (PARENT)
│   └─ GLJournalLine
│
GLPostingBatch
GLTrialBalanceSnapshot
GLHistoryEvent
```

---
