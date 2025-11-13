
# 🟦 **MODULE 7C — PROJECT RISK, ISSUES & LOGS (Max 10 tables)**

Risk register, issues, decisions, progress logs.

### **1. ProjectRisk**

Risks affecting cost, schedule, safety, quality.

### **2. ProjectIssue**

Open issues blocking progress.

### **3. ProjectDecision**

Formal decisions made (RFI responses, manager approvals).

### **4. ProjectDailyLog**

Daily log entry for job site.

### **5. ProjectDailyLogLabor**

Labor recorded for the day.

### **6. ProjectDailyLogEquipment**

Equipment used that day.

### **7. ProjectDailyLogMaterial**

Materials delivered/used that day.

### **8. ProjectDailyLogPhoto**

Photos captured that day.

### **9. ProjectProgress**

Percent complete updates.

### **10. ProjectNote**

General notes related to the project (not tasks).

---

### ⭐ Risk & Logs Tree

```
ProjectRisk
ProjectIssue
ProjectDecision
ProjectDailyLog (PARENT)
│
├─ ProjectDailyLogLabor
├─ ProjectDailyLogEquipment
├─ ProjectDailyLogMaterial
└─ ProjectDailyLogPhoto
ProjectProgress
ProjectNote
```

---
