
# 🟩 **40A — ANALYTICS CORE (Max 10 tables)**

> Stores metrics, datasets, cubes, widgets, filters used by dashboards, AI analytics & reporting.

---

## **1. AnalyticsDataset** *(PARENT)*

Dataset fuente para dashboards.
Ejemplos:

* Job Costing dataset
* Inventory dataset
* Schedule dataset
* Safety dataset

**Children:**

* AnalyticsDatasetField
* AnalyticsCube

---

## **2. AnalyticsDatasetField** *(CHILD)*

Schema del dataset:

* field name
* type (number, date, category)
* semantic type

---

## **3. AnalyticsCube** *(CHILD)*

Cubos OLAP preprocesados para performance (daily snapshot or real-time).

---

## **4. AnalyticsMetric**

KPIs calculados:

* Revenue
* Cost variance
* Safety incidents per 100 hours
* Utilization %

---

## **5. AnalyticsDimension**

Dimensions: time, project, cost code, department.

---

## **6. AnalyticsFilter**

Saved filters: “last 30 days”, “region = west”.

---

## **7. AnalyticsQuery**

Cacheado de consultas que alimentan dashboards.

---

## **8. AnalyticsInsight**

Insights generados (manual or AI).

---

## **9. AnalyticsInsightHistoryEvent**

Timeline of insights.

---

## **10. AnalyticsAttachment**

CSV/Excel exports, PDF snapshots.

---

# ⭐ **Analytics Core — Structure Tree**

```
AnalyticsDataset (PARENT)
│   ├─ AnalyticsDatasetField
│   └─ AnalyticsCube
│
AnalyticsMetric
AnalyticsDimension
AnalyticsFilter
AnalyticsQuery
AnalyticsInsight
AnalyticsInsightHistoryEvent
AnalyticsAttachment
```

---
