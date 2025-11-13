
# 🟩 **MODULE — CRM MARKETING (Max 10 tables)**

 Campaigns, audiences, referrals, lead sources.

---

## **1. CRMCampaign** *(PARENT)*

Campaña de marketing: Email series, SMS, ads, flyers.

**Child:** CRMCampaignMember, CRMCampaignMessage, CRMCampaignResult

---

## **2. CRMCampaignMember** *(CHILD)*

Accounts o contacts incluidos en la campaña.

---

## **3. CRMCampaignMessage** *(CHILD)*

Mensajes enviados: email blast, SMS blast, postcard.

---

## **4. CRMCampaignResult** *(CHILD)*

Resultados: opens, clicks, conversions, appointments.

---

## **5. CRMLeadSource**

Origen de leads: Website, Referral, Google Ads, Cold Call.

---

## **6. CRMReferral**

Programa de referidos entre clientes.

---

## **7. CRMAudienceSegment** *(PARENT)*

Segmentos: Residential, High LTV, Dormant Clients.

**Child:** CRMAudienceCriteria

---

## **8. CRMAudienceCriteria** *(CHILD)*

Reglas que definen segmentos (ej: LTV > $20k AND last job < 1 year).

---

## **9. CRMMktAttachment**

Archivos usados en campañas.

---

## **10. CRMMktHistoryEvent**

Historial de actividad de marketing: segmentos actualizados, envíos de email, etc.

---

## ⭐ **CRM Marketing — Structure Tree**

```
CRMCampaign (PARENT)
│
├─ CRMCampaignMember
├─ CRMCampaignMessage
└─ CRMCampaignResult
│
CRMAudienceSegment (PARENT)
│   └─ CRMAudienceCriteria
│
CRMLeadSource
CRMReferral
CRMMktAttachment
CRMMktHistoryEvent
```

---