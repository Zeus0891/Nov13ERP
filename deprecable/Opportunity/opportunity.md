

# ✅ **MODULE 6 — OPPORTUNITY (Max 10 tables)**

> Lightweight but enterprise-ready: pipeline, forecasting, team, line items, history.

### **1. Opportunity** *(PARENT)*

Represents a sales opportunity in the pipeline (deal/opportunity).

### **2. OpportunityStage**

Stage in pipeline (Qualification → Estimate → Negotiation → Closed Won/Lost).

### **3. OpportunityContact**

Contacts involved in the opportunity.

### **4. OpportunityLineItem**

Priceable items associated with the opportunity (precursor to Quote).

### **5. OpportunityTeamMember**

Sales reps or estimators involved.

### **6. OpportunityCompetitor**

Competitors listed for this opportunity.

### **7. OpportunityForecast**

Financial forecasting records (expected value over time).

### **8. OpportunityLossReason**

Why the opportunity was lost (if it is).

### **9. OpportunityAttachment**

Files related to the deal—proposals, specs, drawings.

### **10. OpportunityHistoryEvent**

Timeline of events, updates, pipeline movement.

---

### ⭐ Opportunity Tree

```
Opportunity (PARENT)
│
├─ OpportunityStage
├─ OpportunityContact
├─ OpportunityLineItem
├─ OpportunityTeamMember
├─ OpportunityCompetitor
├─ OpportunityForecast
├─ OpportunityLossReason
├─ OpportunityAttachment
└─ OpportunityHistoryEvent
```

---
