import * as app from "../app.js"

export interface EquipmentSlot {
  name: app.EquipmentSlotName
  worldName: app.WorldName
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
    worldName: app.WorldName.Euphoria,
    name: app.EquipmentSlotName.Head,
    size: 1,
  },
  {
    worldName: app.WorldName.Euphoria,
    name: app.EquipmentSlotName.Neck,
    size: 1,
  },
  {
    worldName: app.WorldName.Euphoria,
    name: app.EquipmentSlotName.Chest,
    size: 1,
  },
  {
    worldName: app.WorldName.Euphoria,
    name: app.EquipmentSlotName.Belt,
    size: 1,
  },
  {
    worldName: app.WorldName.Euphoria,
    name: app.EquipmentSlotName.Legs,
    size: 1,
  },
  {
    worldName: app.WorldName.Euphoria,
    name: app.EquipmentSlotName.Feet,
    size: 1,
  },
  {
    worldName: app.WorldName.Euphoria,
    name: app.EquipmentSlotName.Hand,
    size: 2,
  },
  {
    worldName: app.WorldName.Euphoria,
    name: app.EquipmentSlotName.Finger,
    size: 8,
  },
]
