import * as app from "../app.js"

export interface EquipmentStat {
  equipmentName: app.EquipmentName
  statName: app.StatName
  amount: number
}

export default new app.Table<EquipmentStat>({
  name: "equipment-stat",
  description: "The stat of equipment",
  setup: (table) => {
    table
      .string("equipmentName")
      .references("name")
      .inTable("equipment")
      .onDelete("CASCADE")
    table
      .string("statName")
      .references("name")
      .inTable("stat")
      .onDelete("CASCADE")
    table.integer("amount").notNullable()
  },
})

export const equipmentStats: EquipmentStat[] = []
