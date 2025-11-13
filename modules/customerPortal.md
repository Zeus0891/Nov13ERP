

# 🟦 **MODULE 33 — CUSTOMER PORTAL (Max 10 tables)**

> Portal para clientes: login, invoices, payments, documents, projects, messages.

Este módulo compite con:

* ServiceTitan Client Hub
* Buildertrend Homeowner Portal
* Jobber Client Hub
* Procore Client Portal

---

## **1. CustomerPortalUser** *(PARENT)*

Usuario del portal (no empleado).
Campos: email, password, phone, status.

**Children:** CustomerPortalSession, CustomerPortalHistoryEvent

---

## **2. CustomerPortalSession** *(CHILD)*

Sesiones activas, dispositivos, IP, expiración.

---

## **3. CustomerPortalAccess**

Define qué puede ver:

* invoices
* projects
* files
* messages
* estimates

---

## **4. CustomerPortalProjectView**

Acceso a proyectos específicos.

---

## **5. CustomerPortalEstimateView**

Acceso a estimados enviados al cliente.

---

## **6. CustomerPortalInvoiceView**

Acceso a facturas pagadas y pendientes.

---

## **7. CustomerPortalPaymentMethod**

Tarjetas guardadas, ACH, wallets.

---

## **8. CustomerPortalMessage**

Mensajes cliente ↔ empresa.

---

## **9. CustomerPortalDocument**

Documentos disponibles para descarga:
Contracts, Submittals, Plans, Photos.

---

## **10. CustomerPortalHistoryEvent** *(CHILD)*

Actividad: logged in, viewed invoice, paid balance.

---

# ⭐ **CUSTOMER PORTAL — Structure Tree**

```
CustomerPortalUser (PARENT)
│   ├─ CustomerPortalSession
│   └─ CustomerPortalHistoryEvent
│
CustomerPortalAccess
CustomerPortalProjectView
CustomerPortalEstimateView
CustomerPortalInvoiceView
CustomerPortalPaymentMethod
CustomerPortalMessage
CustomerPortalDocument
```

---
