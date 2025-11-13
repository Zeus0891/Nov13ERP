
# ✅ **PROJECTS — DIVIDED INTO SUBMODULES**

Projects is a **very large domain**, so to stay within your rule (max 10 tables) we split it into:

### **Module 7A — Project Core (10 tables)**

### **Module 7B — Project Tasks & Scheduling (10 tables)**

### **Module 7C — Project Risk, Issues & Logs (10 tables)**

This mirrors what real ERPs do: Procore, Autodesk Build, CMiC, Oracle Primavera.

---

# 🟦 **MODULE 7A — PROJECT CORE (Max 10 tables)**

Core project definition, phases, budget, stakeholders.

### **1. Project** *(PARENT)*

Master project: name, location, status, owner, financials.

### **2. ProjectPhase**

High-level phases: Pre-construction, Rough-in, Finishing, Closeout.

### **3. ProjectMilestone**

Key deliverable checkpoints (start, framing complete, inspections).

### **4. ProjectTeamMember**

Project manager, superintendent, estimator, engineer, foreman.

### **5. ProjectLocation**

Areas inside the project (building, floor, zone, unit).

### **6. ProjectBudget**

Master budget container.

### **7. ProjectBudgetLineItem**

Labor, materials, equipment, subcontract, etc.

### **8. ProjectDocument**

General docs tied to the project.

### **9. ProjectAttachment**

Files, photos, drawings, sheets.

### **10. ProjectHistoryEvent**

Audit history for project-level actions.

---

### ⭐ Project Core Tree

```
Project (PARENT)
│
├─ ProjectPhase
├─ ProjectMilestone
├─ ProjectTeamMember
├─ ProjectLocation
├─ ProjectBudget
│   └─ ProjectBudgetLineItem
│
├─ ProjectDocument
├─ ProjectAttachment
└─ ProjectHistoryEvent
```

---