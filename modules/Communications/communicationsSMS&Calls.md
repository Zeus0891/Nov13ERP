# 🟩 **42C — COMMUNICATIONS (SMS & CALLS) — Max 10 tables**

> SMS, voice calls, logs — like Twilio integrated directly.

---

## **1. SMSMessage** *(PARENT)*

Inbound/outbound SMS.

---

## **2. SMSAttachment** *(CHILD)*

Images from users.

---

## **3. SMSHistoryEvent** *(CHILD)*

Timeline.

---

## **4. PhoneCall** *(PARENT)*

A call session.

**Children:** PhoneCallRecording, PhoneCallHistoryEvent

---

## **5. PhoneCallRecording** *(CHILD)*

Audio file.

---

## **6. PhoneCallHistoryEvent** *(CHILD)*

Call logs (start, end, duration).

---

## **7. PhoneIVRMenu**

IVR automated menus.

---

## **8. PhoneQueue**

Call queues.

---

## **9. PhoneNumberPool**

Managed phone numbers owned by ERP tenant.

---

## **10. CommunicationProvider**

Twilio, Plivo, Vonage configs.

---

# ⭐ SMS + Calls — Structure Tree

```
SMSMessage (PARENT)
│   ├─ SMSAttachment
│   └─ SMSHistoryEvent
│
PhoneCall (PARENT)
│   ├─ PhoneCallRecording
│   └─ PhoneCallHistoryEvent
│
PhoneIVRMenu
PhoneQueue
PhoneNumberPool
CommunicationProvider
```

---
