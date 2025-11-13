
# ✅ **MODULE — LEAD MANAGEMENT (CRM Leads)**

 Captures leads, scoring, interactions, routing, nurturing, attachments.

## 📌 **1. Lead** *(PARENT)*

**Purpose:**
Represents a raw lead entering your pipeline: web form, phone call, referral, campaign.

**Child tables:**

* LeadContact
* LeadStatusHistory
* LeadInteraction
* LeadNote
* LeadAttachment
* LeadScore
* LeadScoreHistory
* LeadAssignment
* LeadFollowUp
* LeadQualification
* LeadActivity
* LeadRoutingLog
* LeadConversion

---

## 📌 **2. LeadContact** *(CHILD)*

**Purpose:**
Contact details associated with the lead.

---

## 📌 **3. LeadStatusHistory**

Tracks changes in status (“New → Contacted → Qualified → Disqualified”).

---

## 📌 **4. LeadInteraction**

**Purpose:**
Emails, calls, chats, meetings tied to the lead.

---

## 📌 **5. LeadNote**

**Purpose:**
Internal notes.

---

## 📌 **6. LeadAttachment**

**Purpose:**
Documents uploaded.

---

## 📌 **7. LeadScore** *(CHILD)*

**Purpose:**
Current lead score (0–100), based on behavior and profile.

---

## 📌 **8. LeadScoreHistory**

**Purpose:**
Tracks evolution of lead score.

---

## 📌 **9. LeadAssignment**

**Purpose:**
Assigns lead to a sales rep or team.

---

## 📌 **10. LeadFollowUp**

**Purpose:**
Scheduled callbacks, emails, tasks.

---

## 📌 **11. LeadQualification**

**Purpose:**
Checklist or framework (e.g., BANT) indicating qualification.

---

## 📌 **12. LeadActivity**

**Purpose:**
General activity log.

---

## 📌 **13. LeadRoutingLog**

**Purpose:**
Records automated routing rules and why a lead was assigned.

---

## 📌 **14. LeadConversion**

**Purpose:**
Represents conversion of lead → opportunity → quote → estimate.

---

# ⭐ Lead Module Structure (Tree)

```
Lead (PARENT)
│
├─ LeadContact
├─ LeadStatusHistory
├─ LeadInteraction
├─ LeadNote
├─ LeadAttachment
├─ LeadScore
│   └─ LeadScoreHistory
├─ LeadAssignment
├─ LeadFollowUp
├─ LeadQualification
├─ LeadActivity
├─ LeadRoutingLog
└─ LeadConversion
```

---