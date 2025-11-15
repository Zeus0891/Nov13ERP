# 🟦 **MODULE 37 — DOCUMENTS**

Documents are enormous → split into **Documents Core** and **Documents Versioning**.

---

# 🟩 **37A — DOCUMENTS CORE (Max 10 tables)**

> File storage, permissions, actions.

---

## **1. Document** *(PARENT)*

Main file entity.

---

## **2. DocumentFolder**

Folder structure.

---

## **3. DocumentVersion** *(CHILD)*

Versioning (v1, v2…).

---

## **4. DocumentRevision** *(CHILD)*

Submitted revisions (R1, R2…).

---

## **5. DocumentComment** *(CHILD)*

Discussions.

---

## **6. DocumentTag**

Labels.

---

## **7. DocumentShareLink**

External share links.

---

## **8. DocumentPermission**

ACL per user/team.

---

## **9. DocumentAttachment**

Extra files.

---

## **10. DocumentHistoryEvent**

Audit.

---

# ⭐ Documents Core Tree

```
Document (PARENT)
│
├─ DocumentVersion
├─ DocumentRevision
├─ DocumentComment
├─ DocumentAttachment
└─ DocumentHistoryEvent
│
DocumentFolder
DocumentTag
DocumentPermission
DocumentShareLink
```

---
