

# 🟦 **MODULE — IDENTITY CORE (Max 10 tables)**

 Users, tenants, memberships, sessions, api keys — the foundation of identity.

---

## **1. IdentityUser** *(PARENT)*

El usuario global del sistema (email, password hash, auth provider).
Puede pertenecer a uno o más tenants.

**Child:** IdentityUserProfile, IdentitySession, IdentityUserTenant, IdentityUserSetting, IdentityUserHistoryEvent

---

## **2. IdentityUserProfile** *(CHILD)*

Datos personales: nombre, avatar, teléfono, timezone.

---

## **3. IdentityTenant** *(PARENT)*

Cliente/compañía/organización propietaria de data.

**Child:** IdentityUserTenant

---

## **4. IdentityUserTenant** *(CHILD)*

Relación many-to-many entre User ↔ Tenant.
También almacena:

* rol por defecto
* fecha de invitación
* fecha de activación
* status en el tenant

---

## **5. IdentitySession** *(CHILD)*

Sesiones activas del usuario.
Incluye: device info, ip, issuedAt, expiresAt.

---

## **6. IdentityApiKey** *(PARENT)*

API keys emitidas para integraciones (server-to-server).

**Child:** IdentityApiKeyPermission

---

## **7. IdentityApiKeyPermission** *(CHILD)*

Permisos asignados al API Key.

---

## **8. IdentityUserSetting**

Preferencias del usuario: idioma, notificaciones, dark mode.

---

## **9. IdentityUserInvitation**

Invitaciones enviadas a nuevos usuarios.

---

## **10. IdentityUserHistoryEvent** *(CHILD)*

Último cambio de password, new device registered, etc.

---

# ⭐ **IDENTITY CORE — Structure Tree**

```
IdentityUser (PARENT)
│
├─ IdentityUserProfile
├─ IdentitySession
├─ IdentityUserSetting
├─ IdentityUserTenant
└─ IdentityUserHistoryEvent
│
IdentityTenant (PARENT)
│   └─ IdentityUserTenant
│
IdentityApiKey (PARENT)
│   └─ IdentityApiKeyPermission
│
IdentityUserInvitation
```

---