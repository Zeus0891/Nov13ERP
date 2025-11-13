# 🟩 **MODULE — AI CORE (Max 10 tables)**

 Model executions, prompts, playbooks, actions, embeddings.

---

## **1. AIModel** *(PARENT)*

Modelos usados: GPT, Claude, Llama, vision models, internal models.

**Children:** AIModelVersion

---

## **2. AIModelVersion** *(CHILD)*

Versiones del modelo: v1, v1.1, tuned models.

---

## **3. AIPromptTemplate**

Templates base de prompts para funciones comunes:

* summarization
* extraction
* classification

---

## **4. AIAction** *(PARENT)*

Acciones AI programables:

* auto-generate estimate
* detect anomalies
* generate project tasks
* extract line items from invoice

**Child:** AIActionRun

---

## **5. AIActionRun** *(CHILD)*

Ejecuciones de la acción AI, con input, output, status.

---

## **6. AIPlaybook** *(PARENT)*

Secuencia de acciones AI (workflows):

* “Process new estimate document”
* “Auto-build project tasks”

**Child:** AIPlaybookStep

---

## **7. AIPlaybookStep** *(CHILD)*

Pasos del playbook.

---

## **8. AIEmbedding**

Embeddings del contenido (vector search).

---

## **9. AIJob**

Jobs asíncronos AI: background processing.

---

## **10. AIJobArtifact**

Archivos, JSON outputs o data generada por un job.

---

# ⭐ **AI CORE — Structure Tree**

```
AIModel (PARENT)
│   └─ AIModelVersion
│
AIPromptTemplate
│
AIAction (PARENT)
│   └─ AIActionRun
│
AIPlaybook (PARENT)
│   └─ AIPlaybookStep
│
AIEmbedding
AIJob (PARENT)
│   └─ AIJobArtifact
```

---