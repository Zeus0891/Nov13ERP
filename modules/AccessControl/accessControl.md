
# 🟦 **MODULE — ACCESS CONTROL (RBAC/ABAC) (Max 10 tables)**

 Role-Based + Attribute-Based Access Control.
 Supports permissions, policies, resource levels, hierarchy, scopes.

---

## **1. AccessRole** *(PARENT)*

Role definitions: Admin, Project Manager, Accountant, Field Tech, Viewer.

**Child:** AccessRolePermission, AccessRoleAssignment

---

## **2. AccessPermission** *(PARENT)*

Action definitions:

* estimate.view
* estimate.edit
* invoice.create
* project.manage
* timesheet.approve

---

## **3. AccessRolePermission** *(CHILD)*

Relación Role ↔ Permiso.

---

## **4. AccessRoleAssignment** *(CHILD)*

Asignación de roles a:

* IdentityUserTenant
* IdentityUser
* Service accounts
* API keys

---

## **5. AccessPolicy**

Políticas ABAC: rules basadas en atributos.
Ejemplo:
“User can only view Projects where project.region IN user.regions”

---

## **6. AccessPolicyCondition** *(CHILD)*

Condiciones:

* attribute
* operator
* value

---

## **7. AccessScope**

Scoping granular:

* tenant
* project
* department
* cost center
* location

---

## **8. AccessScopeAssignment** *(CHILD)*

Asignaciones de scope a roles o usuarios individuales.

---

## **9. AccessAuditEvent**

Registro de verificaciones, accesos denegados, permisos aplicados.

---

## **10. AccessResource**

Lista de entidades del sistema para permisos dinámicos:
Estimate, Invoice, Project, Task, etc.
(Útil si agregas permisos automáticos por módulo.)

---

# ⭐ **ACCESS CONTROL — Structure Tree**

```
AccessRole (PARENT)
│   ├─ AccessRolePermission
│   └─ AccessRoleAssignment
│
AccessPermission (PARENT)
│   └─ AccessRolePermission
│
AccessPolicy (PARENT)
│   └─ AccessPolicyCondition
│
AccessScope (PARENT)
│   └─ AccessScopeAssignment
│
AccessAuditEvent
AccessResource
```

---
