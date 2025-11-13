# 🟦 **MODULE 28 — PAYMENTS / AR CASH APPLICATION (Max 10 tables)**

> Real financial engine for receiving payments, applying cash, handling deposits, refunds, chargebacks, reconciliation.

This module integrates deeply with **Invoice**, **Billing**, **Receivables**, and **Banking**.

---

## **1. Payment** *(PARENT)*

A payment made by a customer.
Tracks method, amount, date, status, source.

**Children:**

* PaymentApplication
* PaymentRefund
* PaymentAttachment
* PaymentHistoryEvent

---

## **2. PaymentMethod**

Details for CC, ACH, check, wire, cash.

---

## **3. PaymentGatewayTransaction**

Transaction details from Stripe, Authorize.net, Square, PayPal, etc.

---

## **4. PaymentApplication** *(CHILD)*

Line-level application of a payment to an invoice.
Supports partial payments.

---

## **5. PaymentUnapplied**

Tracks remaining unapplied balances (open credits).

---

## **6. PaymentRefund** *(CHILD)*

Refunds or chargebacks from gateway.

---

## **7. PaymentReconciliation**

Bank reconciliation for payments received.

---

## **8. PaymentDispute**

Handling credit card disputes or ACH returns.

---

## **9. PaymentAttachment** *(CHILD)*

Receipts, images of checks, screenshots.

---

## **10. PaymentHistoryEvent** *(CHILD)*

Audit: received, applied, reversed, refunded.

---

# ⭐ **PAYMENTS / AR — Structure Tree**

```
Payment (PARENT)
│
├─ PaymentApplication
├─ PaymentRefund
├─ PaymentAttachment
└─ PaymentHistoryEvent
│
PaymentMethod
PaymentGatewayTransaction
PaymentUnapplied
PaymentReconciliation
PaymentDispute
```

---
