# 🟦 **MODULE 26 — QUALITY (Max 10 tables)**

 Ensures workmanship, inspections, non-conformance management, corrective actions.
 Fully integrates with Projects, Safety, and Scheduling.

---

## **1. QualityInspection** *(PARENT)*

Formal inspection event:

* pre-pour
* framing
* punchlist
* final walkthrough

**Children:**

* QualityInspectionItem
* QualityInspectionAttachment
* QualityInspectionHistory

---

## **2. QualityInspectionItem** *(CHILD)*

Checklist items with pass/fail/photos/notes.

---

## **3. QualityNonConformance** *(PARENT)*

When something fails inspection:

* poor workmanship
* incorrect installation
* missing components
* code violations

**Children:**

* QualityNonConformanceAction
* QualityNonConformanceAttachment
* QualityNonConformanceHistory

---

## **4. QualityNonConformanceAction** *(CHILD)*

Corrective actions required, with assignees and deadlines.

---

## **5. QualityPunchListItem**

Punchlist tasks generated near closeout.

---

## **6. QualityMaterialTest**

Material tests: concrete strength, compaction, duct leakage.

---

## **7. QualityMaterialTestResult**

Results of lab or field tests.

---

## **8. QualityStandard**

Reference documents:

* installation standards
* specification sections
* code references

---

## **9. QualityAttachment**

General documents, photos, drawings.

---

## **10. QualityInspectionHistory** *(CHILD)*

Audit of changes to inspections, results, decisions.

---

# ⭐ **QUALITY — Structure Tree**

```
QualityInspection (PARENT)
│   ├─ QualityInspectionItem
│   ├─ QualityInspectionAttachment
│   └─ QualityInspectionHistory
│
QualityNonConformance (PARENT)
│   ├─ QualityNonConformanceAction
│   ├─ QualityNonConformanceAttachment
│   └─ QualityNonConformanceHistory
│
QualityPunchListItem
QualityMaterialTest (PARENT)
│   └─ QualityMaterialTestResult
│
QualityStandard
```

---