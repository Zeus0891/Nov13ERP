
# 🟦 **MODULE 25 — WORK ORDERS / FIELD SERVICE (Max 10 tables)**

Este módulo debe ser equivalente o superior a ServiceTitan y Jobber.

Soporta:

* Dispatching
* Work order lifecycle
* Field tech mobile app
* Parts + time + photos
* Customer signature
* Billing integration

---

## **1. WorkOrder** *(PARENT)*

Orden de trabajo:

* maintenance
* repair
* installation
* service call

**Children:**

* WorkOrderTask
* WorkOrderAssignment
* WorkOrderAttachment
* WorkOrderMaterial
* WorkOrderLabor
* WorkOrderHistoryEvent

---

## **2. WorkOrderTask** *(CHILD)*

Subtasks dentro de la orden: diagnosis, install, test, cleanup.

---

## **3. WorkOrderAssignment** *(CHILD)*

Técnico o crew asignado, con fecha/hora.

---

## **4. WorkOrderMaterial** *(CHILD)*

Materiales usados → integration Inventory.

---

## **5. WorkOrderLabor** *(CHILD)*

Horas: regular, OT, double time.

---

## **6. WorkOrderNote**

Notas internas o del tech.

---

## **7. WorkOrderAttachment** *(CHILD)*

Fotos, videos, PDFs (diagnosis, completion proof).

---

## **8. WorkOrderSignature**

Firma del cliente al completar el trabajo.

---

## **9. WorkOrderInvoiceLink**

Referencia a Invoice generado si aplica billing.

---

## **10. WorkOrderHistoryEvent** *(CHILD)*

Historial: created, dispatched, started, paused, completed.

---

# ⭐ WORK ORDER / FIELD SERVICE — Structure Tree

```
WorkOrder (PARENT)
│
├─ WorkOrderTask
├─ WorkOrderAssignment
├─ WorkOrderMaterial
├─ WorkOrderLabor
├─ WorkOrderAttachment
├─ WorkOrderSignature
├─ WorkOrderInvoiceLink
└─ WorkOrderHistoryEvent
│
WorkOrderNote
```

---
