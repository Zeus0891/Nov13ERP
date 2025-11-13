
# 🟧 **MODULE — CRM RELATIONSHIPS (Max 10 tables)**

 Relationship mapping, hierarchies, roles, partners.

---

## **1. CRMAccountRelationship** *(PARENT)*

Relaciones entre cuentas:
GC → Subcontractor, Owner → Property, Parent → Subsidiary.

---

## **2. CRMContactRole**

Rol del contacto: Decision Maker, Billing Contact, Site Supervisor.

---

## **3. CRMAccountHierarchy**

Estructura jerárquica multi-nivel: Parent → Child accounts.

---

## **4. CRMHousehold** *(PARENT)*

Para clientes residenciales: hogar, familia, propiedad.

**Child:** CRMHouseholdMember

---

## **5. CRMHouseholdMember** *(CHILD)*

Miembros del household (spouse, partner, co-owner).

---

## **6. CRMDecisionMaker**

Contacto responsable de decisiones clave.

---

## **7. CRMInfluencer**

Influencers secundarios (architect, engineer, consultant).

---

## **8. CRMPartner**

Socios comerciales: proveedores, consultores, recomender networks.

---

## **9. CRMRelationshipAttachment**

Archivos: org charts, relationship maps.

---

## **10. CRMRelationshipHistoryEvent**

Auditoría y timeline de cambios relacionales.

---

## ⭐ **CRM Relationships — Structure Tree**

```
CRMAccountRelationship (PARENT)
CRMContactRole
CRMAccountHierarchy
│
CRMHousehold (PARENT)
│   └─ CRMHouseholdMember
│
CRMDecisionMaker
CRMInfluencer
CRMPartner
CRMRelationshipAttachment
CRMRelationshipHistoryEvent
```

---