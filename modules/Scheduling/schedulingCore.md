
# 🟦 **MODULE 24 — SCHEDULING (GLOBAL SCHEDULING ENGINE)**

Este módulo es más grande que 10 tablas → se divide en **dos submódulos**:

* **Scheduling Core**
* **Scheduling Optimization & Constraints** (AI-powered)

Este motor debe ser **más potente que Procore, Primavera P6, ServiceTitan, Buildertrend.**

---

# 🟩 **24A — SCHEDULING CORE (Max 10 tables)**

Core que maneja calendarios, shifts, availability, overtime.

---

## **1. Schedule** *(PARENT)*

Global calendar: project, employee, equipment scheduling container.

**Children:**

* ScheduleItem
* ScheduleAssignment
* ScheduleException
* ScheduleHistoryEvent

---

## **2. ScheduleItem** *(CHILD)*

Un evento agendado:

* Task
* Work Order
* Appointment
* Project milestone

---

## **3. ScheduleAssignment** *(CHILD)*

Asignación de personas o equipos a un ScheduleItem.

---

## **4. ScheduleAvailability**

Disponibilidad de empleados, crews o equipos.

---

## **5. ScheduleTimeOff**

Vacaciones, ausencias, sick leave.

---

## **6. ScheduleException** *(CHILD)*

Excepciones por feriados, cierre de jobsite, weather risk.

---

## **7. ScheduleShift**

Turnos de trabajo: morning, full-day, night shift.

---

## **8. ScheduleResource**

Recursos asignables:

* person
* crew
* equipment
* subcontractor

---

## **9. ScheduleNote**

Notas para cada evento.

---

## **10. ScheduleHistoryEvent** *(CHILD)*

Timeline completo de scheduling.

---

# ⭐ SCHEDULING CORE — Structure Tree

```
Schedule (PARENT)
│
├─ ScheduleItem
├─ ScheduleAssignment
├─ ScheduleException
├─ ScheduleHistoryEvent
│
ScheduleAvailability
ScheduleTimeOff
ScheduleShift
ScheduleResource
ScheduleNote
```

---