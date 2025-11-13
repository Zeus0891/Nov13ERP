# 🟦 **MODULE — EXPENSES CORE (Max 10 tables)**

 Employee expenses, reimbursements, receipts, approvals.
 This covers 90% of enterprise ERP expense functions.

---

## **1. ExpenseReport** *(PARENT)*

Container of one or more expenses submitted by a user.
Includes: employee, department, project, status, total amount.

**Children:**

* ExpenseLine
* ExpenseApproval
* ExpenseAttachment
* ExpenseHistoryEvent

---

## **2. ExpenseLine** *(CHILD)*

Each individual expense item: mileage, meals, lodging, materials, per-diem.

Fields: amount, currency, category, vendor, project, receipt-required.

---

## **3. ExpenseCategory**

Categories like: Meals, Fuel, Office Supplies, Travel, Lodging.

---

## **4. ExpenseReceipt**

Receipt images or PDFs linked to ExpenseLine.

---

## **5. ExpenseApproval**

Approval workflow (manager, finance, accounting).

---

## **6. ExpensePolicy**

Expense rules: daily limits, mileage rates, allowed categories.

---

## **7. ExpensePolicyViolation** *(CHILD)*

Detected violations: amount exceeds limit, missing receipt, out-of-policy vendor.

---

## **8. ExpensePayment**

Repayment to employee (or corporate card reconciliation).

---

## **9. ExpenseAttachment**

Extra files attached to a report (emails, docs).

---

## **10. ExpenseHistoryEvent**

Full timeline: submitted, reviewed, approved, rejected, reimbursed.

---

# ⭐ **EXPENSES CORE — Structure Tree**

```
ExpenseReport (PARENT)
│
├─ ExpenseLine
│   └─ ExpenseReceipt
├─ ExpenseApproval
├─ ExpenseAttachment
└─ ExpenseHistoryEvent
│
ExpenseCategory
ExpensePolicy (PARENT)
│   └─ ExpensePolicyViolation
│
ExpensePayment
```

---