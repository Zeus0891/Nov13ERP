
# 🟩 **24B — SCHEDULING OPTIMIZATION & CONSTRAINTS (Max 10 tablas)**

Optimización, automatización e inteligencia.

---

## **1. ScheduleConstraint** *(PARENT)*

Reglas:

* no overlapping crews
* equipment availability
* task dependencies
* business hours
* travel time

---

## **2. ScheduleConstraintRule** *(CHILD)*

Condiciones específicas:
metric, operator, threshold.

---

## **3. ScheduleOptimizationRun** *(PARENT)*

Automatic schedule optimizations (AI-driven).

---

## **4. ScheduleOptimizationResult** *(CHILD)*

Resultado del algoritmo:

* reassignments
* new timeslots
* conflict resolutions

---

## **5. ScheduleConflictingItem**

Events/tasks that are in conflict.

---

## **6. ScheduleTravelTime**

Tiempo de viaje crew → jobsite.

---

## **7. ScheduleWeatherAdjustment**

🔗 Integración con WeatherImpact
Ajustes automáticos en schedule debido al clima.

---

## **8. ScheduleForecast**

Predicción de cargas futuras del calendario.

---

## **9. ScheduleCapacity**

Capacidad por crew, team, equipment.

---

## **10. ScheduleAIRecommendation**

Recomendaciones generadas por IA.

---

# ⭐ SCHEDULING OPTIMIZATION — Structure Tree

```
ScheduleConstraint (PARENT)
│   └─ ScheduleConstraintRule
│
ScheduleOptimizationRun (PARENT)
│   └─ ScheduleOptimizationResult
│
ScheduleConflictingItem
ScheduleTravelTime
ScheduleWeatherAdjustment
ScheduleForecast
ScheduleCapacity
ScheduleAIRecommendation
```

---