**ROOM PLANNER desde cero**, optimizado para 2025, con estas características clave:

* Ultra optimizado
* Integrado con LiDAR / ARKit / ScanCam / photogrammetry
* Preparado para IA generativa
* Preparado para convertir escaneos → planos → mediciones → estimados → proyectos
* Estilo RoomPlan (Apple), Matterport, MagicPlan, Canvas pero **superior**
* Y cumpliendo tu estándar: **máximo 10 tablas por módulo**, si es más, lo divido en submódulos

### 🚀 *Esto será el sistema ROOM PLANNER más moderno jamás diseñado para un ERP.*

---

# 🟦 **NUEVO ROOM PLANNER — OPTIMIZED 2025**

Room Planner **no es dibujo manual**.
Es un **pipeline inteligente**, donde un scan genera:

1. **Blueprint 2D**
2. **Model 3D semántico**
3. **Takeoffs automáticos**
4. **Room Items** (fixtures detectados)
5. **Measurements automáticas**
6. **Estimados y Project Tasks autogenerados**

Para modelar este pipeline correctamente, el módulo requiere **dos sub-módulos**:

* **21A — Room Scanner (for LIDAR / AR / photogrammetry)**
* **21B — Room Model (geometry, surfaces, items, takeoffs)**

Esto mantiene el límite de 10 tablas por módulo sin perder ninguna potencia.

---

# 🟦 **MODULE 21A — ROOM SCANNER (Max 10 tablas)**

> Este módulo captura, procesa y organiza la data del escaneo.
> Donde ocurre: *scan → reconstruction → recognition → blueprint*.

---

## **1. RoomScanSession** *(PARENT)*

Una sesión de escaneo (similar a Matterport/Capture App).

Incluye:

* Device info
* Accuracy profile
* Timestamp
* Project/Location link
* Status: captured → processing → done

**Child:** RoomScanFrame, RoomScanProcessing, RoomScanOutput, RoomScanHistoryEvent

---

## **2. RoomScanFrame** *(CHILD)*

Cada frame del LiDAR o cámara.

Incluye:

* Depth map
* RGB image
* Pose data
* Confidence

---

## **3. RoomScanPointCloud**

Point cloud reconstruido, normalizado y filtrado.

---

## **4. RoomScanMesh**

Mesh 3D generado del point cloud.
Usado para IA / extracción.

---

## **5. RoomScanSemanticLabel**

Clasificación semántica del espacio:

* Wall
* Floor
* Ceiling
* Door
* Window
* Sink
* Toilet
* Outlet
* Cabinet

---

## **6. RoomScanProcessing** *(CHILD)*

Proceso de IA:

* segmentation
* feature detection
* plane detection
* OCR / label extraction

---

## **7. RoomScanBlueprint**

Blueprint 2D generado automáticamente (DXF, SVG, PDF).
Incluye layers para walls, windows, furniture.

---

## **8. RoomScanFloorPlan**

Floorplan 2D posterior:

* dimensiones
* geometría
* polilíneas
* área total

---

## **9. RoomScanOutput** *(CHILD)*

Archivos generados:

* .OBJ
* .USDZ
* .GLB
* .SVG
* .DXF
* .PLY

---

## **10. RoomScanHistoryEvent** *(CHILD)*

Auditoría completa:

* scan started
* point cloud reconstructed
* model generated
* blueprint exported

---

### ⭐ **ROOM SCANNER — Structure Tree**

```
RoomScanSession (PARENT)
│
├─ RoomScanFrame
├─ RoomScanProcessing
├─ RoomScanOutput
├─ RoomScanHistoryEvent
│
RoomScanPointCloud
RoomScanMesh
RoomScanSemanticLabel
RoomScanBlueprint
RoomScanFloorPlan
```

---
