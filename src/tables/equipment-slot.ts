import * as app from "../app.js"

export interface EquipmentSlot {
  name: app.EquipmentSlot
  worldId: number
  size: number
}

export default new app.Table<EquipmentSlot>({
  name: "equipment-slot",
  description: "The equipment-slot table",
  setup: (table) => {
    table.string("name").notNullable().primary().unique()
    table
      .string("worldName")
      .references("name")
      .inTable("world")
      .onDelete("CASCADE")
    table.integer("size").notNullable()
  },
})

export const equipmentSlots: EquipmentSlot[] = [
  {
    worldId: 0,
    name: app.EquipmentSlot.Head,
    size: 1,
  },
  {
    worldId: 0,
    name: app.EquipmentSlot.Neck,
    size: 1,
  },
  {
    worldId: 0,
    name: app.EquipmentSlot.Chest,
    size: 1,
  },
  {
    worldId: 0,
    name: app.EquipmentSlot.Belt,
    size: 1,
  },
  {
    worldId: 0,
    name: app.EquipmentSlot.Legs,
    size: 1,
  },
  {
    worldId: 0,
    name: app.EquipmentSlot.Feet,
    size: 1,
  },
  {
    worldId: 0,
    name: app.EquipmentSlot.Hand,
    size: 2,
  },
  {
    worldId: 0,
    name: app.EquipmentSlot.Finger,
    size: 8,
  },
]
