# 🟦 **MODULE 39 — MAINTENANCE PLANS / RECURRING SERVICE CONTRACTS**

> Like ServiceTitan Memberships, HVAC plans, subscription service contracts.

---

## **1. ServiceContract** *(PARENT)*

Customer contract for recurring service.

**Children:**

* ServiceContractSchedule
* ServiceContractTask
* ServiceContractHistoryEvent

---

## **2. ServiceContractPlan**

Templates (monthly, biannual, seasonal).

---

## **3. ServiceContractSchedule** *(CHILD)*

Next service dates, recurrence rules.

---

## **4. ServiceContractTask** *(CHILD)*

Tasks to perform each visit (inspection, cleaning, replacement).

---

## **5. ServiceContractPricing**

Pricing tiers, discounts.

---

## **6. ServiceContractPaymentMethod**

Card on file or ACH.

---

## **7. ServiceContractRenewal**

Auto-renew info.

---

## **8. ServiceContractCancelation**

Cancelations & reasons.

---

## **9. ServiceContractNotification**

Reminder emails/SMS.

---

## **10. ServiceContractHistoryEvent** *(CHILD)*

Timeline.

---

# ⭐ Maintenance Plans Tree

```
ServiceContract (PARENT)
│
├─ ServiceContractSchedule
├─ ServiceContractTask
└─ ServiceContractHistoryEvent
│
ServiceContractPlan
ServiceContractPricing
ServiceContractPaymentMethod
ServiceContractRenewal
ServiceContractCancelation
ServiceContractNotification
```

---
