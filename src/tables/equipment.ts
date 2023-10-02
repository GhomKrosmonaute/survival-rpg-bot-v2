import * as app from "../app.js"

export interface Equipment {
  name: app.Equipment
  worldId: number
  slotName: app.EquipmentSlot
  size: number
  logo: app.Logo
  cost: number
  durability: number
}

export default new app.Table<Equipment>({
  name: "equipment",
  description: "The equipment table",
  setup: (table) => {
    table.string("name").notNullable().primary().unique()
    table
      .string("worldName")
      .references("name")
      .inTable("world")
      .onDelete("CASCADE")
    table
      .string("slotName")
      .references("name")
      .inTable("slot")
      .onDelete("CASCADE")
    table.integer("size").notNullable()
    table.string("logo").notNullable()
    table.integer("cost").notNullable()
    table.integer("durability").notNullable()
  },
})

export const equipments: Equipment[] = [
  {
    worldId: 0,
    name: app.Equipment.LowQualityHelmet,
    logo: app.Logo.Helmet,
    slotName: app.EquipmentSlot.Head,
    cost: 15,
    durability: 20,
    size: 1,
  },
  {
    worldId: 0,
    name: app.Equipment.LowQualityNecklace,
    logo: app.Logo.Necklace,
    slotName: app.EquipmentSlot.Neck,
    cost: 10,
    durability: 20,
    size: 1,
  },
  {
    worldId: 0,
    name: app.Equipment.LowQualityChest,
    logo: app.Logo.Chest,
    slotName: app.EquipmentSlot.Chest,
    cost: 20,
    durability: 20,
    size: 1,
  },
  {
    worldId: 0,
    name: app.Equipment.LowQualityRing,
    logo: app.Logo.Ring,
    slotName: app.EquipmentSlot.Finger,
    cost: 15,
    durability: 20,
    size: 1,
  },
  {
    worldId: 0,
    name: app.Equipment.LowQualityBelt,
    logo: app.Logo.String,
    slotName: app.EquipmentSlot.Belt,
    cost: 5,
    durability: 20,
    size: 1,
  },
  {
    worldId: 0,
    name: app.Equipment.LowQualityLegs,
    logo: app.Logo.Leggings,
    slotName: app.EquipmentSlot.Legs,
    cost: 15,
    durability: 20,
    size: 0.5,
  },
  {
    worldId: 0,
    name: app.Equipment.LowQualityFeet,
    logo: app.Logo.Boots,
    slotName: app.EquipmentSlot.Feet,
    cost: 10,
    durability: 20,
    size: 0.4,
  },
  {
    worldId: 0,
    name: app.Equipment.LowQualityFeet2,
    logo: app.Logo.Boots,
    slotName: app.EquipmentSlot.Feet,
    cost: 20,
    durability: 20,
    size: 0.6,
  },
  {
    worldId: 0,
    name: app.Equipment.LowQualityHand,
    logo: app.Logo.Shield,
    slotName: app.EquipmentSlot.Hand,
    cost: 20,
    durability: 20,
    size: 0.6,
  },
]
