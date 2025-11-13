# 🟦 **MODULE 31 — PAYROLL / HR**

**Payroll + HR es MUY grande**, así que lo divido en **3 módulos**, todos ≤10 tablas:

1. **HR Core**
2. **Time & Attendance**
3. **Payroll Engine**

---

# 🟩 **31A — HR CORE (Max 10 tables)**

> Employee records, departments, titles, compliance, docs.

---

## **1. Employee** *(PARENT)*

Información general del empleado.

**Children:**

* EmployeeAddress
* EmployeeContact
* EmployeeDocument
* EmployeeHistoryEvent

---

## **2. EmployeeAddress** *(CHILD)*

Direcciones del empleado.

---

## **3. EmployeeContact** *(CHILD)*

Teléfonos, emails, emergency contacts.

---

## **4. EmployeePosition**

Cargo actual del empleado.

---

## **5. EmployeeDepartment**

Asignación de departamento.

---

## **6. EmployeeCompensation**

Salario, hourly rate, bonus structure.

---

## **7. EmployeeStatus**

Active / Terminated / On Leave / Suspended.

---

## **8. EmployeeSkill**

Certificaciones y habilidades.

---

## **9. EmployeeDocument** *(CHILD)*

Contracts, W-4, I-9, agreements.

---

## **10. EmployeeHistoryEvent** *(CHILD)*

Cambios de rol, salario, departamento.

---

# ⭐ HR CORE — Structure Tree

```
Employee (PARENT)
│
├─ EmployeeAddress
├─ EmployeeContact
├─ EmployeeDocument
└─ EmployeeHistoryEvent
│
EmployeePosition
EmployeeDepartment
EmployeeCompensation
EmployeeStatus
EmployeeSkill
```

---
