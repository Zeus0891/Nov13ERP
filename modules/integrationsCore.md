# 🟦 **MODULE 32 — INTEGRATIONS**

Integrations es MUY grande (API connectors, webhooks, mapping, sync logs).
Para mantener 10 tablas por módulo, lo divido en **2 submódulos**:

* **Integrations Core**
* **Integrations Sync Engine & Webhooks**

---

# 🟩 **32A — INTEGRATIONS CORE (Max 10 tables)**

> Conecta tu ERP con sistemas externos (QuickBooks, Stripe, Outlook, Google, Dropbox, Procore, HubSpot, etc.)

---

## **1. IntegrationConnection** *(PARENT)*

Conexión activa con un servicio externo.
Incluye: provider, credentials, scopes, status.

**Children:**

* IntegrationMapping
* IntegrationConnectionHistory

---

## **2. IntegrationProvider**

Catálogo de proveedores (Stripe, QuickBooks, Google Sheets, etc.)

---

## **3. IntegrationOAuthToken**

Tokens OAuth / refresh tokens para conexiones.

---

## **4. IntegrationApiKey**

API keys almacenadas de forma segura.

---

## **5. IntegrationMapping** *(CHILD)*

Mapeo de datos entre entidades:

* ERP.Customer ↔ QuickBooks.Customer
* ERP.Invoice ↔ Stripe.PaymentIntent

---

## **6. IntegrationFieldTransform**

Transformaciones:

* uppercase
* concat
* numeric conversion
* conditional logic
* date format mapping

---

## **7. IntegrationEvent**

Eventos generados por ERP → usado por sync engine.

---

## **8. IntegrationError**

Errores de integración: auth, mapping, payload, API failure.

---

## **9. IntegrationAttachment**

Archivos o logs anexados (payloads, snapshots).

---

## **10. IntegrationConnectionHistory** *(CHILD)*

Auditoría: connected, reconnected, token refreshed.

---

# ⭐ **INTEGRATIONS CORE — Structure Tree**

```
IntegrationConnection (PARENT)
│   ├─ IntegrationMapping
│   └─ IntegrationConnectionHistory
│
IntegrationProvider
IntegrationOAuthToken
IntegrationApiKey
IntegrationFieldTransform
IntegrationEvent
IntegrationError
IntegrationAttachment
```

---
