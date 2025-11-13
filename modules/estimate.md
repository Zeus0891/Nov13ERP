
# ✅ **MÓDULO 1 — ESTIMATING (ESTIMATE)**

 Un sistema enterprise debe soportar revisiones, ítems, costos, secciones, taxes, fees, descuentos, aprobaciones, documentos, comparaciones de bids, y más.

A continuación está el conjunto **mínimo pero completo** para un sistema enterprise:

---

## 📌 **1. Estimate** *(PADRE PRINCIPAL)*

**Qué hace:**
Entidad principal del módulo; representa una oportunidad de costo formal que puede convertirse en un proyecto o contrato.

**Campos principales:** cliente, nombre, status, total, margen, versión activa, fechas, owner.

**PADRE de:**

* EstimateRevision
* EstimateSection
* EstimateLineItem
* EstimateTax
* EstimateDiscount
* EstimateFee
* EstimateTerm
* EstimateAssumption
* EstimateExclusion
* EstimateAttachment
* EstimateComment
* EstimateApproval
* EstimateComparison
* EstimateHistoryEvent
* EstimatePublicLink
* EstimateTemplate (por referencia)

---

## 📌 **2. EstimateRevision** *(HIJO DIRECTO)*

**Qué hace:**
Representa una revisión inmutable de la estimación. Cada cambio importante crea una nueva revisión.

**PADRE de:**

* EstimateLineItem
* EstimateSection
* EstimateTax
* EstimateDiscount
* EstimateFee

**HIJO de:** Estimate

---

## 📌 **3. EstimateSection** *(HIJO)*

**Qué hace:**
Divide la estimación por capítulos: “Plomería”, “Eléctrico”, “Excavación”, etc.

**HIJO de:** EstimateRevision
**PADRE de:** EstimateLineItem

---

## 📌 **4. EstimateLineItem** *(HIJO)*

**Qué hace:**
Cada componente costoso de la estimación (mano de obra, materiales, equipos, subcontratos).
Soporta cantidad, costo, markup, margen, tipo de ítem, UOM, etc.

**HIJO de:** EstimateSection o EstimateRevision (dependiendo diseño)

---

## 📌 **5. EstimateTax** *(HIJO)*

**Qué hace:**
Impuestos aplicables: IVA, sales tax, local taxes, environmental fees.

**HIJO de:** EstimateRevision

---

## 📌 **6. EstimateDiscount** *(HIJO)*

**Qué hace:**
Descuentos aplicados a nivel estimate o sección.

**HIJO de:** EstimateRevision

---

## 📌 **7. EstimateFee** *(HIJO)*

**Qué hace:**
Cargos adicionales: overhead, contingency fee, general conditions, management fee.

**HIJO de:** EstimateRevision

---

## 📌 **8. EstimateTerm** *(HIJO)*

**Qué hace:**
Términos legales incluidos en el estimate.

---

## 📌 **9. EstimateAssumption** *(HIJO)*

**Qué hace:**
Suposiciones declaradas: “No incluye demolición”, “Requiere acceso”.

---

## 📌 **10. EstimateExclusion** *(HIJO)*

**Qué hace:**
Cosas explícitamente no incluidas.

---

## 📌 **11. EstimateAlternate** *(HIJO)*

**Qué hace:**
Alternativas opcionales de costo (“Opción A”, “Opción B”).

---

## 📌 **12. EstimateAttachment** *(HIJO)*

**Qué hace:**
Documentos, planos, PDFs, BOQs, fotos, spreadsheets.

---

## 📌 **13. EstimateComment** *(HIJO)*

**Qué hace:**
Conversación interna sobre la estimación.

---

## 📌 **14. EstimateApproval** *(HIJO)*

**Qué hace:**
Workflow de aprobación interna: niveles, aprobadores, status.

---

## 📌 **15. EstimateComparison** *(HIJO)*

**Qué hace:**
Comparación entre varios bids o varias revisiones.

---

## 📌 **16. EstimateHistoryEvent** *(HIJO)*

**Qué hace:**
Registro auditado: cambios de estado, cambios de valores, aprobaciones, actividades.

---

## 📌 **17. EstimatePublicLink** *(HIJO)*

**Qué hace:**
Enlace público para que cliente revise/acepte estimate.

---

## 📌 **18. EstimateTemplate & EstimateTemplateSection & EstimateTemplateLineItem** *(TABLAS BASE PARA PLANTILLAS)*

**Qué hacen:**
Permiten crear estimates con estructura predefinida.

---

# ⭐ **Resumen visual del árbol de Estimating**

```
Estimate (PADRE)
│
├─ EstimateRevision (padre de secciones, ítems, taxes, fees)
│   ├─ EstimateSection
│   │   └─ EstimateLineItem
│   ├─ EstimateTax
│   ├─ EstimateDiscount
│   ├─ EstimateFee
│   └─ EstimateAlternate
│
├─ EstimateTerm
├─ EstimateAssumption
├─ EstimateExclusion
├─ EstimateAttachment
├─ EstimateComment
├─ EstimateApproval
├─ EstimateComparison
├─ EstimateHistoryEvent
└─ EstimatePublicLink
```

Esto es enterprise, sin explotar el número de tablas.

---

# ✅ **MÓDULO 2 — INVOICING (INVOICE)**

 Debe soportar: progreso, hitos, T&M, depósitos, retainage, pagos parciales, revisiones, adjustments, taxes, fees, billing schedules, public links, dunning, cred/debits.

---