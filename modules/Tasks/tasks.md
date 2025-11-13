# 🟦 **MODULE 34 — TASKS (Global Task Engine)**

> This is superior to Asana, Monday, ClickUp **inside your ERP**.
> Used for:
> * personal task management
> * internal tasks
> * approvals
> * workflows
> * reminders
> * to-do lists

This is NOT ProjectTask (which is construction-specific).
This module is **global/task management**.

### (10 tablas exactas)

---

## **1. Task** *(PARENT)*

Tarea global:

* title
* description
* assignedTo
* dueDate
* priority
* linkedEntity (Invoice, WorkOrder, Estimate, Project, etc.)

**Children:**

* TaskAssignment
* TaskComment
* TaskAttachment
* TaskChecklistItem
* TaskHistoryEvent

---

## **2. TaskAssignment** *(CHILD)*

Personas asignadas.

---

## **3. TaskChecklistItem** *(CHILD)*

Checklist interno (“subtasks”).

---

## **4. TaskComment** *(CHILD)*

Conversación y notas.

---

## **5. TaskAttachment** *(CHILD)*

Documentos ligados a la tarea.

---

## **6. TaskReminder**

Recordatorios automáticos:

* before due date
* overdue
* daily summary

---

## **7. TaskDependency**

Dependencias entre tareas globales.

---

## **8. TaskLabel**

Etiquetas configurables.

---

## **9. TaskLabelAssignment**

Asignación many-to-many entre tareas y etiquetas.

---

## **10. TaskHistoryEvent** *(CHILD)*

Auditoría completa.

---

# ⭐ **TASKS — Structure Tree**

```
Task (PARENT)
│
├─ TaskAssignment
├─ TaskChecklistItem
├─ TaskComment
├─ TaskAttachment
└─ TaskHistoryEvent
│
TaskReminder
TaskDependency
TaskLabel
TaskLabelAssignment
```

---
