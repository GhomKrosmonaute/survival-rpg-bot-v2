import * as app from "../app.js"

export interface Equipment {
  name: app.EquipmentName
  worldName: app.WorldName
  slotName: app.EquipmentSlotName
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
    worldName: app.WorldName.Euphoria,
    name: app.EquipmentName.LowQualityHelmet,
    logo: app.Logo.Helmet,
    slotName: app.EquipmentSlotName.Head,
    cost: 15,
    durability: 20,
    size: 1,
  },
  {
    worldName: app.WorldName.Euphoria,
    name: app.EquipmentName.LowQualityNecklace,
    logo: app.Logo.Necklace,
    slotName: app.EquipmentSlotName.Neck,
    cost: 10,
    durability: 20,
    size: 1,
  },
  {
    worldName: app.WorldName.Euphoria,
    name: app.EquipmentName.LowQualityChest,
    logo: app.Logo.Chest,
    slotName: app.EquipmentSlotName.Chest,
    cost: 20,
    durability: 20,
    size: 1,
  },
  {
    worldName: app.WorldName.Euphoria,
    name: app.EquipmentName.LowQualityRing,
    logo: app.Logo.Ring,
    slotName: app.EquipmentSlotName.Finger,
    cost: 15,
    durability: 20,
    size: 1,
  },
  {
    worldName: app.WorldName.Euphoria,
    name: app.EquipmentName.LowQualityBelt,
    logo: app.Logo.String,
    slotName: app.EquipmentSlotName.Belt,
    cost: 5,
    durability: 20,
    size: 1,
  },
  {
    worldName: app.WorldName.Euphoria,
    name: app.EquipmentName.LowQualityLegs,
    logo: app.Logo.Leggings,
    slotName: app.EquipmentSlotName.Legs,
    cost: 15,
    durability: 20,
    size: 0.5,
  },
  {
    worldName: app.WorldName.Euphoria,
    name: app.EquipmentName.LowQualityFeet,
    logo: app.Logo.Boots,
    slotName: app.EquipmentSlotName.Feet,
    cost: 10,
    durability: 20,
    size: 0.4,
  },
  {
    worldName: app.WorldName.Euphoria,
    name: app.EquipmentName.LowQualityFeet2,
    logo: app.Logo.Boots,
    slotName: app.EquipmentSlotName.Feet,
    cost: 20,
    durability: 20,
    size: 0.6,
  },
  {
    worldName: app.WorldName.Euphoria,
    name: app.EquipmentName.LowQualityHand,
    logo: app.Logo.Shield,
    slotName: app.EquipmentSlotName.Hand,
    cost: 20,
    durability: 20,
    size: 0.6,
  },
]
