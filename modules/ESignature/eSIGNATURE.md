
# 🟦 **MODULE 38 — eSIGNATURE (Max 10 Tables)**

> Equivalent to DocuSign, Dropbox Sign, PandaDoc.

---

## **1. ESignatureEnvelope** *(PARENT)*

Envelope containing request.

---

## **2. ESignatureDocument**

Documents included.

---

## **3. ESignatureRecipient**

Signers.

---

## **4. ESignatureRecipientAction**

Approve, sign, decline.

---

## **5. ESignatureField**

Signature fields, initials, date.

---

## **6. ESignatureAuditTrail**

Every action.

---

## **7. ESignatureWorkflowStep**

Signing order.

---

## **8. ESignatureAttachment**

Attachments.

---

## **9. ESignatureNotification**

Emails, reminders.

---

## **10. ESignatureHistoryEvent**

Timeline.

---

# ⭐ eSignature Tree

```
ESignatureEnvelope (PARENT)
│
├─ ESignatureDocument
├─ ESignatureRecipient
│    └─ ESignatureRecipientAction
│
├─ ESignatureField
├─ ESignatureAttachment
├─ ESignatureWorkflowStep
├─ ESignatureNotification
└─ ESignatureHistoryEvent
```

---
