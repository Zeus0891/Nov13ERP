# 🟩 **42B — COMMUNICATIONS (EMAIL ENGINE) — Max 10 tables**

> Enterprise email backend inside your ERP.

---

## **1. EmailMessage** *(PARENT)*

Email stored in ERP.

**Children:** EmailAttachment, EmailHistoryEvent, EmailRecipient

---

## **2. EmailRecipient** *(CHILD)*

To / CC / BCC.

---

## **3. EmailAttachment** *(CHILD)*

File attachments.

---

## **4. EmailTemplate**

Reusable templates.

---

## **5. EmailCampaign**

Bulk email campaigns for CRM.

---

## **6. EmailAccount**

SMTP/IMAP account config.

---

## **7. EmailThreadLink**

Links email threads to projects, RFIs, invoices.

---

## **8. EmailSendLog**

Delivery logs.

---

## **9. EmailBounce**

Bounce tracking.

---

## **10. EmailHistoryEvent** *(CHILD)*

Timeline of actions.

---

# ⭐ Email Engine — Structure Tree

```
EmailMessage (PARENT)
│   ├─ EmailAttachment
│   ├─ EmailRecipient
│   └─ EmailHistoryEvent
│
EmailTemplate
EmailCampaign
EmailAccount
EmailThreadLink
EmailSendLog
EmailBounce
```

---
