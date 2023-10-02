import type * as app from "../app.js"

export const equipmentSlots: EquipmentSlot[] = []

export class EquipmentSlot {
  constructor(
    public readonly options: {
      name: app.I18n
      size: number
    }
  ) {
    equipmentSlots.push(this)
  }
}

export const headSlot = new EquipmentSlot()
export const neckSlot = new EquipmentSlot()
export const chestSlot = new EquipmentSlot()
export const beltSlot = new EquipmentSlot()
export const legsSlot = new EquipmentSlot()
export const feetSlot = new EquipmentSlot()
export const handsSlot = new EquipmentSlot()
export const fingersSlot = new EquipmentSlot()
