
# 🟦 **MODULE 30 — SUBMITTALS**

> Control de aprobación de materiales, productos, diseños y documentación.
> Usado para control de calidad y cumplimiento de especificaciones.

### (10 tablas exactas)

---

## **1. Submittal** *(PARENT)*

Documento que requiere revisión/aprobación:

* materiales
* shop drawings
* samples
* product data

**Children:**

* SubmittalItem
* SubmittalReview
* SubmittalAttachment
* SubmittalHistoryEvent

---

## **2. SubmittalItem** *(CHILD)*

Componentes dentro del submittal (ej: 8 puertas → 8 ítems).

---

## **3. SubmittalReview** *(CHILD)*

Revisión del arquitecto/ingeniero: Approved / Revise / Rejected.

---

## **4. SubmittalAttachment** *(CHILD)*

Planos, fotos, SDS, product data sheets.

---

## **5. SubmittalStatus**

Estados estándar:

* Draft
* Submitted
* Under Review
* Approved
* Rejected

---

## **6. SubmittalSpecSection**

Sección del specification book (CSI MasterFormat: 08 14 00 Doors).

---

## **7. SubmittalReviewer**

Roles asignados a revisar.

---

## **8. SubmittalWorkflowStep**

Secuencia de aprobación (GC → Architect → Engineer).

---

## **9. SubmittalDistribution**

A quién se le envía.

---

## **10. SubmittalHistoryEvent** *(CHILD)*

Timeline completo, auditoría.

---

# ⭐ SUBMITTALS — Structure Tree

```
Submittal (PARENT)
│
├─ SubmittalItem
├─ SubmittalReview
├─ SubmittalAttachment
└─ SubmittalHistoryEvent
│
SubmittalStatus
SubmittalSpecSection
SubmittalReviewer
SubmittalWorkflowStep
SubmittalDistribution
```

---
