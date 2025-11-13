# 🟦 **MODULE 41 — NOTIFICATIONS (Max 10 tables)**

> Internal and external alerts across the entire ERP.
> Equivalent to: Slack alerts, Twilio SMS, system notifications, push, email.

---

## **1. Notification** *(PARENT)*

A single notification event:

* weather alert
* invoice due
* task assigned
* schedule conflict
* RFI response

**Children:** NotificationDelivery, NotificationHistoryEvent

---

## **2. NotificationPreference**

User settings:

* receive SMS?
* receive push?
* schedule digest?

---

## **3. NotificationChannel**

Type:

* email
* push
* SMS
* in-app

---

## **4. NotificationTemplate**

Reusable templates (variables allowed).

---

## **5. NotificationDelivery** *(CHILD)*

Delivery attempts and statuses.

---

## **6. NotificationDigest**

Daily/weekly summaries.

---

## **7. NotificationRule**

Triggers and conditions:

* on invoice overdue
* on weather risk high
* on task assigned

---

## **8. NotificationQueueItem**

Pending notifications to send (queue).

---

## **9. NotificationAttachment**

Images, PDF shared in notification.

---

## **10. NotificationHistoryEvent** *(CHILD)*

Timeline.

---

# ⭐ **Notifications — Structure Tree**

```
Notification (PARENT)
│   ├─ NotificationDelivery
│   └─ NotificationHistoryEvent
│
NotificationPreference
NotificationChannel
NotificationTemplate
NotificationDigest
NotificationRule
NotificationQueueItem
NotificationAttachment
```

---
