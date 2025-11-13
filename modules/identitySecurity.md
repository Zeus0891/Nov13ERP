
# 🟦 **MODULE 14B — IDENTITY SECURITY (MFA / SSO / PROVIDERS) (Max 10 tables)**

> Multi-factor, auth providers, SSO, recovery, security logs.

---

## **1. IdentityAuthProvider** *(PARENT)*

Soporte para SSO / OAuth: Google, Microsoft, Apple, Okta, Azure AD.

---

## **2. IdentityAuthFactor**

Factores MFA registrados:

* TOTP
* Email OTP
* SMS OTP
* WebAuthn
* Recovery Codes

---

## **3. IdentityAuthFactorChallenge** *(CHILD)*

Intento de verificación del factor: timestamps, success/failure.

---

## **4. IdentityPasswordReset**

Tokens de reset y expiración.

---

## **5. IdentityLockout**

Lockouts por intentos fallidos de login.

---

## **6. IdentitySecurityEvent** *(CHILD)*

Eventos críticos:

* new login
* suspicious activity
* MFA enrollment
* password changed
* failed attempts

---

## **7. IdentitySSOSession**

Sesión federada con proveedor externo.

---

## **8. IdentityRecoveryCode**

Códigos de recuperación para MFA.

---

## **9. IdentityDevice**

Dispositivos reconocidos por el usuario (browser fingerprint, device ID).

---

## **10. IdentityDeviceHistory**

Historial por dispositivo.

---

# ⭐ **IDENTITY SECURITY — Structure Tree**

```
IdentityAuthProvider (PARENT)
│
├─ IdentitySSOSession
│
IdentityAuthFactor (PARENT)
│   └─ IdentityAuthFactorChallenge
│
IdentityPasswordReset
IdentityLockout
IdentityRecoveryCode
IdentityDevice (PARENT)
│   └─ IdentityDeviceHistory
IdentitySecurityEvent
```

---