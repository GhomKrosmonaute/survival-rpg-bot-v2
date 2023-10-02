import * as app from "../app.js"

/**
 * Represent the resources needed to craft an equipment
 */
export interface EquipmentCrafting {
  id: number
  equipmentName: app.Equipment
}

export default new app.Table<EquipmentCrafting>({
  name: "equipment-crafting",
  description: "Represent the resources needed to craft an equipment",
  setup: (table) => {
    table.increments("id", { primaryKey: true })
    table
      .string("equipmentName")
      .references("name")
      .inTable("equipment")
      .onDelete("CASCADE")
  },
})
