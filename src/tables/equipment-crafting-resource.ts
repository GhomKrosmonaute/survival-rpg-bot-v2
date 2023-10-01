import * as app from "../app.js"

export interface EquipmentCraftingResource {
  equipmentCraftingId: number
  resourceName: app.ResourceName
  amount: number
}

export default new app.Table<EquipmentCraftingResource>({
  name: "equipment-crafting-resource",
  description: "The equipment-crafting-resource table",
  setup: (table) => {
    table
      .integer("equipmentCraftingId")
      .references("id")
      .inTable("equipment-crafting")
      .onDelete("CASCADE")
    table
      .string("resourceName")
      .references("name")
      .inTable("resource")
      .onDelete("CASCADE")
    table.integer("amount").notNullable()
  },
})
