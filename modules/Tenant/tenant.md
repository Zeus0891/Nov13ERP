# 🟦 **MODULE 19 — TENANT (Max 10 tables)**

 Controla toda la capa multi-tenant: onboarding, configuración, dominios, billing tier, branding, usage, logs.

Este módulo es **el corazón del multitenancy** en tu plataforma.

---

## **1. Tenant** *(PARENT)*

Entidad principal que representa a una empresa/organización en el ERP.
Incluye: nombre, plan, status, dominios, fecha de creación, owner.

**Children:**

* TenantSettings
* TenantSubscription
* TenantBranding
* TenantUsageRecord
* TenantDomain
* TenantHistoryEvent

---

## **2. TenantSettings** *(CHILD)*

Configuraciones generales:

* timezone
* locale
* fiscal year settings
* tax defaults
* currency
* numbering conventions

---

## **3. TenantSubscription** *(CHILD)*

Plan contratado: Starter, Pro, Enterprise.
Incluye: límites, módulos habilitados, pricing, renewal.

---

## **4. TenantUsageRecord**

Métricas de uso para billing y analytics:

* API calls
* storage used
* invoice count
* active projects
* AI action usage

---

## **5. TenantDomain**

Dominios verificados:

* company.com
* *.subdomain.erp.com

Útil para SSO y branding por dominio.

---

## **6. TenantBranding**

Logo, colores, emails de marca, plantillas personalizadas.

---

## **7. TenantModule**

Lista de módulos habilitados/deshabilitados por tenant.
Ejemplo: activar RFIs pero no Payroll.

---

## **8. TenantFeatureFlag**

Flags experimentales y toggles para AB testing por tenant.

---

## **9. TenantComplianceSetting**

GDPR, CCPA, retención de datos, backups, políticas legales.

---

## **10. TenantHistoryEvent** *(CHILD)*

Auditoría:

* cambios de plan
* activación/desactivación de módulo
* branding actualizado
* borrado de datos
* transferencias de ownership

---

# ⭐ **TENANT — Structure Tree**

```
Tenant (PARENT)
│
├─ TenantSettings
├─ TenantSubscription
├─ TenantBranding
├─ TenantUsageRecord
├─ TenantDomain
├─ TenantModule
├─ TenantFeatureFlag
├─ TenantComplianceSetting
└─ TenantHistoryEvent
```

---
