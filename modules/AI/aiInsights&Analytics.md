
# 🟦 **MODULE 20C — AI INSIGHTS & ANALYTICS (Max 10 tables)**

 Predictions, recommendations, anomalies, trends, forecasting.

---

## **1. AIInsight** *(PARENT)*

Insight generado por AI:

* overpriced line items
* slow project
* safety risks
* margin erosion
* vendor anomaly detection

**Children:** AIInsightHistory, AIInsightFeedback

---

## **2. AIInsightHistory** *(CHILD)*

Cambios, actualizaciones, estados del insight.

---

## **3. AIInsightFeedback** *(CHILD)*

Feedback del usuario: approve/reject/adjust.

---

## **4. AIPrediction**

Predicciones:

* cost forecast
* schedule risk
* revenue forecast
* expense model
* cash flow

---

## **5. AIRecommendation**

Recomendaciones accionables:

* assign more crew
* reorder materials
* revise schedule

---

## **6. AIAnomaly**

Detección de anomalías:

* invoices too high
* inventory loss patterns
* subcontractor inefficiency

---

## **7. AITrend**

Tendencias detectadas automáticamente.

---

## **8. AIForecast**

Proyecciones temporales.

---

## **9. AIWhatIfRun**

Simulaciones “what-if”:

* crew size changes
* material price fluctuations
* weather delays

---

## **10. AIInsightAttachment**

Documentos o gráficos generados por AI.

---

# ⭐ **AI INSIGHTS — Structure Tree**

```
AIInsight (PARENT)
│   ├─ AIInsightHistory
│   └─ AIInsightFeedback
│
AIPrediction
AIRecommendation
AIAnomaly
AITrend
AIForecast
AIWhatIfRun
AIInsightAttachment
```

---
