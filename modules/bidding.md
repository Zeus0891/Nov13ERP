
# ✅ **MODULE — BIDDING**

 Supports invitations, submissions, alternates, scopes, addenda, RFQs, vendor scoring, comparisons.

## 📌 **1. Bid** *(PARENT)*

**Purpose:**
Represents a bid packet, RFQ, tender, or proposal request you send to vendors/subcontractors.

**Child tables:**

* BidInvitation
* BidSubmission
* BidLineItem
* BidScope
* BidAddendum
* BidQuestion / BidAnswer
* BidAlternate
* BidComparison
* BidAttachment
* BidEvaluation
* BidScore
* BidHistoryEvent

---

## 📌 **2. BidInvitation** *(CHILD)*

**Purpose:**
Tracks each subcontractor/vendor invited to submit a bid.

**Child tables:**

* BidInvitationStatusHistory
* BidInvitationMessage

---

## 📌 **3. BidSubmission** *(CHILD of BidInvitation)*

**Purpose:**
Stores the submitted bid from the invited subcontractor/vendor.

**Child tables:**

* BidLineItem
* BidAlternate
* BidAttachment

---

## 📌 **4. BidLineItem** *(CHILD)*

**Purpose:**
Breakdown of cost items submitted by vendor.

---

## 📌 **5. BidScope** *(CHILD)*

**Purpose:**
Describes what is included, exclusions, and scope details.

---

## 📌 **6. BidAddendum** *(CHILD)*

**Purpose:**
Official clarifications or changes issued during bidding.

---

## 📌 **7. BidAlternate** *(CHILD)*

**Purpose:**
Optional pricing alternatives.

---

## 📌 **8. BidQuestion**

**Purpose:** Questions from vendors.

## 📌 **9. BidAnswer**

**Purpose:** Responses to questions.

---

## 📌 **10. BidComparison**

**Purpose:**
Structured data for comparing multiple vendor submissions side-by-side.

---

## 📌 **11. BidEvaluation**

**Purpose:**
Reviewer evaluation: technical, financial, schedule compliance.

---

## 📌 **12. BidScore**

**Purpose:**
Numeric scoring (cost, quality, experience, risk).

---

## 📌 **13. BidAttachment**

**Purpose:**
Documents submitted or attached.

---

## 📌 **14. BidHistoryEvent**

**Purpose:**
Full activity history: invitations, updates, submissions, decisions.

---

# ⭐ Bidding Module Structure (Tree)

```
Bid (PARENT)
│
├─ BidInvitation
│   ├─ BidInvitationStatusHistory
│   ├─ BidInvitationMessage
│   └─ BidSubmission
│        ├─ BidLineItem
│        ├─ BidAlternate
│        └─ BidAttachment
│
├─ BidScope
├─ BidAddendum
├─ BidQuestion
│    └─ BidAnswer
├─ BidComparison
├─ BidEvaluation
├─ BidScore
├─ BidLineItem
├─ BidAlternate
├─ BidAttachment
└─ BidHistoryEvent
```

---
