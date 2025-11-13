
# 🟦 **MODULE — CRM CORE (Max 10 tables)**

 Nucleus of the CRM — accounts, contacts, interactions, notes, tags, activities, history.

---

## **1. CRMAccount** *(PARENT)*

Entidad principal del CRM. Representa una empresa, cliente, propietario, HOA, GC o entidad comercial.

**Child tables:**

* CRMContact
* CRMAddress
* CRMInteraction
* CRMNote
* CRMAccountTag
* CRMActivity
* CRMHistoryEvent

---

## **2. CRMContact** *(CHILD)*

Personas asociadas al account.
Ej: Owner, Site Supervisor, Billing Contact.

---

## **3. CRMAddress** *(CHILD)*

Múltiples direcciones: billing, jobsite, shipping, corporate.

---

## **4. CRMInteraction** *(CHILD)*

Interacciones registradas: llamadas, reuniones, emails, visitas.

**Child:** CRMInteractionAttachment

---

## **5. CRMInteractionAttachment** *(CHILD)*

Fotos, documentos, notas, grabaciones asociadas a interacciones.

---

## **6. CRMNote** *(CHILD)*

Notas internas, comentarios, memoria de conversaciones con el cliente.

---

## **7. CRMTag** *(PARENT TABLE)*

Tags globales: “VIP”, “Commercial”, “Repeat Customer”.

---

## **8. CRMAccountTag** *(CHILD)*

Tabla pivote many-to-many entre CRMAccount ↔ CRMTag.

---

## **9. CRMActivity** *(CHILD)*

Tareas/todos: follow-up, reminder, meeting, send proposal, etc.

---

## **10. CRMHistoryEvent** *(CHILD)*

Registro de timeline completo: creado, actualizado, interacción, nota, cambio.

---

## ⭐ **CRM CORE — Structure Tree**

```
CRMAccount (PARENT)
│
├─ CRMContact
├─ CRMAddress
├─ CRMInteraction
│   └─ CRMInteractionAttachment
│
├─ CRMNote
├─ CRMAccountTag
├─ CRMActivity
└─ CRMHistoryEvent
```

---