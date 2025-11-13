
# 🟩 **32B — INTEGRATIONS SYNC ENGINE & WEBHOOKS (Max 10 tables)**

> El motor que sincroniza data, crea webhooks, gestiona colas y automatiza intercambio.

---

## **1. IntegrationSyncJob** *(PARENT)*

Job de sincronización en ejecución.

**Children:**

* IntegrationSyncLog
* IntegrationQueueItem

---

## **2. IntegrationSyncLog** *(CHILD)*

Resultado de cada sincronización.

---

## **3. IntegrationWebhook** *(PARENT)*

Webhook emitido por tu ERP hacia terceros.

**Child:** IntegrationWebhookDelivery

---

## **4. IntegrationWebhookDelivery** *(CHILD)*

Intentos, reintentos, respuestas HTTP.

---

## **5. IntegrationInboundWebhook**

Webhooks recibidos desde terceros.

---

## **6. IntegrationQueueItem** *(CHILD)*

Elementos pendientes por sincronizar (FIFO queue).

---

## **7. IntegrationRateLimit**

Rate limit tracking por provider.

---

## **8. IntegrationRetryPolicy**

Políticas de retry: exponential backoff, max attempts.

---

## **9. IntegrationSchemaVersion**

Permite versionar mapeos y endpoints.

---

## **10. IntegrationHistoryEvent**

Auditoría general del motor.

---

# ⭐ **SYNC ENGINE — Structure Tree**

```
IntegrationSyncJob (PARENT)
│   ├─ IntegrationSyncLog
│   └─ IntegrationQueueItem
│
IntegrationWebhook (PARENT)
│   └─ IntegrationWebhookDelivery
│
IntegrationInboundWebhook
IntegrationRateLimit
IntegrationRetryPolicy
IntegrationSchemaVersion
IntegrationHistoryEvent
```

---
