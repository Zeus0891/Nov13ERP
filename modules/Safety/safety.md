# 🟦 **MODULE  — SAFETY (with Weather Risk Integration)**

Este módulo es altamente estratégico:
Integración completa con WeatherImpact, Daily Logs, Project Tasks, Equipment y Compliance.

---

## **1. SafetyIncident** *(PARENT)*

Incidente reportado: caída, golpe, near-miss, equipment failure.

**Children:**

* SafetyIncidentPerson
* SafetyIncidentAttachment
* SafetyIncidentCorrectiveAction
* SafetyIncidentInvestigation
* SafetyIncidentHistoryEvent

---

## **2. SafetyIncidentPerson** *(CHILD)*

Personas involucradas: employees, subcontractor workers.

---

## **3. SafetyIncidentInvestigation** *(CHILD)*

Investigación formal post-incidente.

---

## **4. SafetyIncidentCorrectiveAction** *(CHILD)*

Acciones requeridas para evitar repetición.

---

## **5. SafetyInspection** *(PARENT)*

Inspección de seguridad programada o reactiva.

**Child:** SafetyInspectionItem

---

## **6. SafetyInspectionItem** *(CHILD)*

Checklist item con pass/fail/notes.

---

## **7. SafetyHazard**

Hazard detectado o potencial: exposed wiring, wet floor, fall risk.

---

## **8. SafetyTrainingRecord**

Certificaciones y cursos: OSHA 10/30, fall protection, equipment safety.

---

## **9. SafetyWeatherRisk**

🔗 **Conexión directa con WeatherImpact:**
Crea risk entries como:

* High wind → crane shutdown
* Heat index high → mandatory breaks
* Rain → slip/fall hazard

---

## **10. SafetyIncidentHistoryEvent** *(CHILD)*

Auditoría, cambios, seguimientos.

---

# ⭐ SAFETY — Structure Tree

```
SafetyIncident (PARENT)
│
├─ SafetyIncidentPerson
├─ SafetyIncidentInvestigation
├─ SafetyIncidentCorrectiveAction
├─ SafetyIncidentAttachment
└─ SafetyIncidentHistoryEvent
│
SafetyInspection (PARENT)
│   └─ SafetyInspectionItem
│
SafetyHazard
SafetyTrainingRecord
SafetyWeatherRisk
```

---