
# 🟦 **MODULE 17A — INVENTORY CORE (Max 10 tables)**

 Master data: items, locations, stock levels, units, categories.

---

## **1. InventoryItem** *(PARENT)*

Master item/material: SKU, description, part number, weight, UOM.

---

## **2. InventoryCategory**

Categories: Lumber, Electrical, Tools, Plumbing, HVAC, Consumables.

---

## **3. InventoryLocation** *(PARENT)*

Warehouse, truck, jobsite trailer, container, room.

**Children:** InventoryBin, InventoryStock

---

## **4. InventoryBin** *(CHILD)*

Sub-locations inside warehouse shelves, racks, zones.

---

## **5. InventoryUnitOfMeasure**

Units: EA, FT, YD, LB, GAL, BOX, PALLET.

---

## **6. InventoryStock** *(CHILD)*

Current stock level of an item at a location/bin.
Quantity on hand, committed, reserved, available.

---

## **7. InventorySupplier**

Preferred suppliers for each item.

---

## **8. InventoryItemVendor** *(CHILD)*

Preferred vendor list + vendor part numbers + pricing.

---

## **9. InventoryAttachment**

Images, spec sheets, SDS, manuals.

---

## **10. InventoryHistoryEvent**

Changes: item added, updated, location moved.

---

# ⭐ **INVENTORY CORE — Structure Tree**

```
InventoryItem (PARENT)
│
├─ InventoryItemVendor
├─ InventoryAttachment
├─ InventoryHistoryEvent
│
InventoryLocation (PARENT)
│   └─ InventoryBin
│
InventoryStock
InventoryCategory
InventoryUnitOfMeasure
InventorySupplier
```

---