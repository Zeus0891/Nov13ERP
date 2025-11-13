# 🟦 **MODULE 29 — RFIs (Request for Information)**

 Módulo para gestionar RFIs entre campo ↔ oficina ↔ arquitectura ↔ ingeniería.
 Integrado con Projects, Submittals, Change Orders, y Document Management.

### (10 tablas exactas)

---

## **1. RFI** *(PARENT)*

La solicitud principal: pregunta, fecha, responsable, disciplina, prioridad.

**Children:**

* RFIQuestion
* RFIResponse
* RFIAttachment
* RFIHistoryEvent
* RFIComment

---

## **2. RFIQuestion** *(CHILD)*

Texto de la pregunta, contexto, documentos referenciados.

---

## **3. RFIResponse** *(CHILD)*

Respuesta formal del arquitecto, ingeniero o GC.

Puede generar:

* Change Order
* Submittal update
* Schedule impact

---

## **4. RFIAttachment** *(CHILD)*

Fotos, planos, PDFs, sketches.

---

## **5. RFIComment** *(CHILD)*

Conversación interna.

---

## **6. RFIStatus**

Estados configurables: Open, Pending, Answered, Closed.

---

## **7. RFICategory**

Disciplinas: Structural, MEP, Architectural, Electrical.

---

## **8. RFIImpact**

Impacto declarado: cost, scope, schedule.

---

## **9. RFIRecipient**

Personas que deben ver/recibir la RFI.

---

## **10. RFIHistoryEvent** *(CHILD)*

Timeline completo: enviada, revisada, contestada, cerrada.

---

# ⭐ RFIs — Structure Tree

```
RFI (PARENT)
│
├─ RFIQuestion
├─ RFIResponse
├─ RFIAttachment
├─ RFIComment
└─ RFIHistoryEvent
│
RFIStatus
RFICategory
RFIImpact
RFIRecipient
```

---
