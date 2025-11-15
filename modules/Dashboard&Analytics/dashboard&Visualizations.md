# 🟩 **40B — DASHBOARDS & VISUALIZATIONS (Max 10 tables)**

> Visual dashboards, user widgets, layout manager, folders.

---

## **1. Dashboard** *(PARENT)*

Root dashboard: Sales, Project Manager view, Financial overview.

**Children:**

* DashboardWidget
* DashboardHistoryEvent

---

## **2. DashboardWidget** *(CHILD)*

Widget type: chart, table, KPI, map, donut.

---

## **3. DashboardWidgetConfig**

Config: filters, fields, chart type.

---

## **4. DashboardUserView**

User-personalized dashboard layouts.

---

## **5. DashboardSchedule**

Scheduled dashboard emails (daily/weekly).

---

## **6. DashboardBookmark**

Saved views.

---

## **7. DashboardSharing**

Sharing with teams/customers.

---

## **8. DashboardTemplate**

Prebuilt dashboards (estimating, financials, HR).

---

## **9. DashboardFolder**

Organizational structure for dashboards.

---

## **10. DashboardHistoryEvent** *(CHILD)*

Audit.

---

# ⭐ **Dashboard Module — Structure Tree**

```
Dashboard (PARENT)
│   ├─ DashboardWidget
│   ├─ DashboardHistoryEvent
│
DashboardWidgetConfig
DashboardUserView
DashboardSchedule
DashboardBookmark
DashboardSharing
DashboardTemplate
DashboardFolder
```

---
