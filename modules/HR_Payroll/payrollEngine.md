# 🟩 **31C — PAYROLL ENGINE (Max 10 tables)**

> Calculates pay, taxes, deductions, benefits.
> Equivalent to ADP, Gusto, Rippling — but integrated to ERP.

---

## **1. PayrollRun** *(PARENT)*

Payroll cycle execution.

**Children:**

* PayrollEarning
* PayrollDeduction
* PayrollTax
* PayrollHistoryEvent

---

## **2. PayrollEarning** *(CHILD)*

Regular, overtime, bonus, commissions.

---

## **3. PayrollDeduction** *(CHILD)*

Benefits, garnishments, retirement contributions.

---

## **4. PayrollTax** *(CHILD)*

Federal, state, local taxes (breakdown per employee per payrun).

---

## **5. PayrollCalendar**

Pay periods (weekly, bi-weekly, monthly).

---

## **6. PayrollBenefit**

Health, dental, vision, 401k, HSA.

---

## **7. PayrollGarnishment**

Child support, wage garnishments.

---

## **8. PayrollCheck**

Physical/paystub check.

---

## **9. PayrollDirectDeposit**

Bank deposit instructions.

---

## **10. PayrollHistoryEvent** *(CHILD)*

Auditoría completa de la corrida payroll.

---

# ⭐ PAYROLL ENGINE — Structure Tree

```
PayrollRun (PARENT)
│
├─ PayrollEarning
├─ PayrollDeduction
├─ PayrollTax
└─ PayrollHistoryEvent
│
PayrollCalendar
PayrollBenefit
PayrollGarnishment
PayrollCheck
PayrollDirectDeposit
```

---

# 🚀 FINAL RESULT

You've now added:

### ✔ RFIs — 10 tablas

### ✔ Submittals — 10 tablas

### ✔ HR Core — 10 tablas

### ✔ Time & Attendance — 10 tablas

### ✔ Payroll Engine — 10 tablas

Total HR/Payroll ecosystem: **30+ enterprise-grade tables**, fully connected to Projects, Scheduling, Billing, Compliance, and Safety.

---
