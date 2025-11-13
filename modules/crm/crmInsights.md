
# 🟦 **MODULE — CRM INSIGHTS (Max 10 tables)**

 Analytics, scoring, customer lifetime value, churn.

---

## **1. CRMAccountScore (PARENT)**

Score general del cliente: engagement, revenue, risk.

**Child:** CRMAccountScoreHistory

---

## **2. CRMAccountScoreHistory** *(CHILD)*

Historial del score.

---

## **3. CRMEngagementMetric**

Medición de interacción: emails, llamadas, visitas.

---

## **4. CRMRiskScore**

Probabilidad de churn o problemas.

---

## **5. CRMLTVSnapshot**

Lifetime value snapshots (mensual, trimestral).

---

## **6. CRMRevenueTrend**

Tendencias de revenue por cliente.

---

## **7. CRMWinRateSnapshot**

Win-rate historical snapshots.

---

## **8. CRMChurnRisk**

Predicción de churn.

---

## **9. CRMInsight**

Insights generados por AI o reglas.

---

## **10. CRMInsightHistory**

Historial del insight.

---

## ⭐ **CRM Insights — Structure Tree**

```
CRMAccountScore (PARENT)
│   └─ CRMAccountScoreHistory
│
CRMEngagementMetric
CRMRiskScore
CRMLTVSnapshot
CRMRevenueTrend
CRMWinRateSnapshot
CRMChurnRisk
CRMInsight
CRMInsightHistory
```

---