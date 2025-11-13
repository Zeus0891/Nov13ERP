
## 📌 **1. Invoice** *(PADRE PRINCIPAL)*

**Qué hace:**
Documento de cobro formal enviado al cliente.

**PADRE de:**

* InvoiceLineItem
* InvoiceTax
* InvoiceDiscount
* InvoiceFee
* InvoiceRetainage
* InvoiceProgress
* InvoiceMilestone
* InvoicePaymentApplication
* InvoiceAttachment
* InvoiceComment
* InvoiceApproval
* InvoiceRevision
* InvoiceAdjustment
* InvoiceCredit
* InvoiceDebit
* InvoiceHistory
* InvoicePublicLink
* InvoiceReminder

---

## 📌 **2. InvoiceLineItem** *(HIJO)*

**Qué hace:**
Renglones de cobro: mano de obra, materiales, equipos, subcontratos.

---

## 📌 **3. InvoiceTax** *(HIJO)*

**Qué hace:**
Impuestos calculados para la factura.

---

## 📌 **4. InvoiceDiscount** *(HIJO)*

**Qué hace:**
Descuentos por pronto pago, cortesía, volumen.

---

## 📌 **5. InvoiceFee** *(HIJO)*

**Qué hace:**
Cargos adicionales aplicados a la factura.

---

## 📌 **6. InvoiceRetainage** *(HIJO)*

**Qué hace:**
Retainage retenido (5%, 10%, etc.) para construcción o servicios.

---

## 📌 **7. InvoiceProgress** *(HIJO)*

**Qué hace:**
Soporte para facturación basada en porcentaje de avance (% complete billing).

---

## 📌 **8. InvoiceMilestone** *(HIJO)*

**Qué hace:**
Facturación basada en hitos definidos en el proyecto.

---

## 📌 **9. InvoicePaymentApplication** *(HIJO)*

**Qué hace:**
Pagos aplicados a esta factura.
(Necesario para aging, AR, cash flow)

---

## 📌 **10. InvoiceAttachment**

**Qué hace:**
Archivos: tiempos, fotos, recibos, horas de mano de obra, firmas.

---

## 📌 **11. InvoiceComment**

**Qué hace:**
Notas internas o chats con cliente.

---

## 📌 **12. InvoiceApproval**

**Qué hace:**
Flujo interno de aprobación.

---

## 📌 **13. InvoiceRevision**

**Qué hace:**
Registro de versiones cuando una factura se corrige.

---

## 📌 **14. InvoiceAdjustment**

**Qué hace:**
Ajustes positivos o negativos.

---

## 📌 **15. InvoiceCredit**

**Qué hace:**
Créditos emitidos al cliente (refund, rework, error).

---

## 📌 **16. InvoiceDebit**

**Qué hace:**
Débitos cuando se re-factura algo faltante.

---

## 📌 **17. InvoiceHistory**

**Qué hace:**
Eventos: enviado, abierto, vencido, pagado parcial, completado, cancelado.

---

## 📌 **18. InvoicePublicLink**

**Qué hace:**
URL para que el cliente la vea/pague en línea.

---

## 📌 **19. InvoiceReminder**

**Qué hace:**
Recordatorios automáticos de cobro (dunning).

---

# ⭐ **Resumen visual del árbol de Invoicing**

```
Invoice (PADRE)
│
├─ InvoiceLineItem
├─ InvoiceTax
├─ InvoiceDiscount
├─ InvoiceFee
├─ InvoiceRetainage
├─ InvoiceProgress
├─ InvoiceMilestone
├─ InvoicePaymentApplication
├─ InvoiceAttachment
├─ InvoiceComment
├─ InvoiceApproval
├─ InvoiceRevision
├─ InvoiceAdjustment
├─ InvoiceCredit
├─ InvoiceDebit
├─ InvoiceHistory
├─ InvoicePublicLink
└─ InvoiceReminder

---