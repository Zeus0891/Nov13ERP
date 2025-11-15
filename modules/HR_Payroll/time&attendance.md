# 🟩 **31B — TIME & ATTENDANCE (Max 10 tables)**

> Timesheets, hours, overtime, breaks, GPS logs.

---

## **1. Timesheet** *(PARENT)*

Contenedor de entradas por semana/día.

**Children:**

* TimesheetEntry
* TimesheetHistoryEvent

---

## **2. TimesheetEntry** *(CHILD)*

Horas trabajadas, project, cost code.

---

## **3. TimesheetBreak**

Breaks obligatorios.

---

## **4. TimesheetOvertime**

Cálculo de horas extras.

---

## **5. TimesheetGeoLocation**

GPS snapshot para validación.

---

## **6. TimesheetSignature**

Firma del empleado/manager.

---

## **7. TimesheetApproval**

Manager approvals.

---

## **8. TimesheetAdjustment**

Correcciones manuales.

---

## **9. TimesheetExport**

Export para payroll/GL.

---

## **10. TimesheetHistoryEvent** *(CHILD)*

Auditoría completa.

---

# ⭐ TIME & ATTENDANCE — Structure Tree

```
Timesheet (PARENT)
│
├─ TimesheetEntry
├─ TimesheetHistoryEvent
│
TimesheetBreak
TimesheetOvertime
TimesheetGeoLocation
TimesheetSignature
TimesheetApproval
TimesheetAdjustment
TimesheetExport
```

---
