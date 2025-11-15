# 🟦 **MODULE 20B — AI DOCUMENT INTELLIGENCE (Max 10 tables)**

> Reading, OCR, extraction, document indexing.

---

## **1. AIDocumentIndex** *(PARENT)*

Índice de documentos: searchable, chunked, vectorized.

**Children:** AIDocumentChunk

---

## **2. AIDocumentChunk** *(CHILD)*

Chunks de texto con embeddings.

---

## **3. AIOCRResult**

Resultados OCR de PDFs, imágenes, receipts.

---

## **4. AIExtractionResult**

Resultados de extracción estructurada (line items, totals, entities).

---

## **5. AIClassificationResult**

Clasificación automática del documento: invoice, PO, contract, etc.

---

## **6. AIInsightFeedback**

Correcciones enviadas por usuarios (reinforcement learning).

---

## **7. AIDocumentAttachment**

Archivos originales procesados.

---

## **8. AIDocumentHistoryEvent**

Timeline de procesos AI sobre un documento.

---

## **9. AIAnnotation**

Marcaciones sobre textos: labels, bounding boxes.

---

## **10. AIEntity**

Entidades extraídas (vendor, amounts, dates, items).

---

# ⭐ **AI DOCUMENT INTELLIGENCE — Structure Tree**

```
AIDocumentIndex (PARENT)
│   └─ AIDocumentChunk
│
AIOCRResult
AIExtractionResult
AIClassificationResult
AIEntity
AIAnnotation
AIDocumentAttachment
AIInsightFeedback
AIDocumentHistoryEvent
```

---
