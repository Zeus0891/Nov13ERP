
# 🟦 **MODULE — PROJECT TASKS & SCHEDULING (Max 10 tables)**

Task assignment, scheduling, dependencies, Gantt, critical path.

### **1. ProjectTask** *(PARENT)*

A work item inside the project.

### **2. ProjectTaskAssignment**

Worker/team responsible for the task.

### **3. ProjectTaskDependency**

Predecessor/successor logic.

### **4. ProjectSchedule**

Overall project schedule container.

### **5. ProjectScheduleItem**

Each scheduled bar in the Gantt timeline.

### **6. ProjectCriticalPath**

Tasks flagged as critical path.

### **7. ProjectBaseline**

Saved schedule baseline.

### **8. ProjectChecklistItem**

Checklist items required to complete a task.

### **9. ProjectTaskComment**

Communication about the task.

### **10. ProjectTaskAttachment**

Photos, documents tied to a task.

---

### ⭐ Tasks & Scheduling Tree

```
ProjectTask (PARENT)
│
├─ ProjectTaskAssignment
├─ ProjectTaskDependency
├─ ProjectTaskComment
├─ ProjectTaskAttachment
│
ProjectSchedule (PARENT)
│
├─ ProjectScheduleItem
├─ ProjectCriticalPath
└─ ProjectBaseline
```

---