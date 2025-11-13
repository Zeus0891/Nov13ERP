
# 🟫 **MODULE — CRM COMMUNICATION (Max 10 tables)**

 Communication channels: email, SMS, calls, threads, notifications.

---

## **1. CRMEmail (PARENT)**

Emails enviados o recibidos, logs para auditoría.

**Child:** CRMEmailAttachment

---

## **2. CRMEmailAttachment** *(CHILD)*

Archivos incluidos en correos.

---

## **3. CRMSMS**

Mensajes SMS enviados/retenidos.

---

## **4. CRMPhoneCall**

Registro de llamadas: duración, notas, contactos.

---

## **5. CRMPhoneCallRecording**

Grabaciones de llamadas (si la empresa lo soporta).

---

## **6. CRMMessageThread (PARENT)**

Hilos de conversaciones.

**Child:** CRMMessageParticipant

---

## **7. CRMMessageParticipant**

Personas en un hilo (Account, Contact, User).

---

## **8. CRMChannel**

Canales de comunicación: email, sms, phone, in-app.

---

## **9. CRMNotificationSetting**

Preferencias de notificación de cliente.

---

## **10. CRMNotificationEvent**

Notificaciones enviadas, logs, aperturas.

---

## ⭐ **CRM Communication — Structure Tree**

```
CRMEmail (PARENT)
│   └─ CRMEmailAttachment
CRMSMS
CRMPhoneCall
│   └─ CRMPhoneCallRecording
│
CRMMessageThread (PARENT)
│   └─ CRMMessageParticipant
│
CRMChannel
CRMNotificationSetting
CRMNotificationEvent
```

---