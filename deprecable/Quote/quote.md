
# ✅ **MODULE  — QUOTE**

 Sales quote → precursor to estimate/project. Supports revisions, templates, pricing, approvals, e-signatures.

## 📌 **1. Quote** *(PARENT)*

**Purpose:**
Sales offer to customer with scope, pricing, terms, and optional e-signature.

**Child tables:**

* QuoteRevision
* QuoteSection
* QuoteLineItem
* QuoteTax
* QuoteDiscount
* QuoteTerm
* QuoteAttachment
* QuoteComment
* QuoteApproval
* QuoteTemplate
* QuoteSignature
* QuoteAcceptance
* QuoteRejection
* QuotePublicLink
* QuoteHistoryEvent

---

## 📌 **2. QuoteRevision** *(CHILD)*

**Purpose:**
Versioned saved changes; only one active revision at a time.

**Child tables:**

* QuoteSection
* QuoteLineItem
* QuoteTax
* QuoteDiscount

---

## 📌 **3. QuoteSection** *(CHILD)*

**Purpose:**
Structured sections (labor, electrical, equipment, etc.).

---

## 📌 **4. QuoteLineItem** *(CHILD)*

**Purpose:**
Line items with pricing, quantity, markup, description.

---

## 📌 **5. QuoteTax**

Tax amounts applied to the quote.

---

## 📌 **6. QuoteDiscount**

Discounts at quote level or section level.

---

## 📌 **7. QuoteTerm**

Customer-facing terms & conditions.

---

## 📌 **8. QuoteAttachment**

Files attached (photos, documents, drawings).

---

## 📌 **9. QuoteComment**

Internal or customer-visible discussions.

---

## 📌 **10. QuoteApproval**

Internal approval workflow before sending.

---

## 📌 **11. QuoteTemplate**

Templates used to generate new quotes.

---

## 📌 **12. QuoteSignature**

Digital signatures.

---

## 📌 **13. QuoteAcceptance**

When customer accepts quote (captures timestamp, signer, IP).

---

## 📌 **14. QuoteRejection**

If customer rejects quote (captures reason).

---

## 📌 **15. QuotePublicLink**

Public customer view link.

---

## 📌 **16. QuoteHistoryEvent**

Audit: created, updated, sent, viewed, accepted, expired.

---

# ⭐ Quote Module Structure (Tree)

```
Quote (PARENT)
│
├─ QuoteRevision
│   ├─ QuoteSection
│   ├─ QuoteLineItem
│   ├─ QuoteTax
│   └─ QuoteDiscount
│
├─ QuoteTerm
├─ QuoteAttachment
├─ QuoteComment
├─ QuoteApproval
├─ QuoteTemplate
├─ QuoteSignature
├─ QuoteAcceptance
├─ QuoteRejection
├─ QuotePublicLink
└─ QuoteHistoryEvent
```

---