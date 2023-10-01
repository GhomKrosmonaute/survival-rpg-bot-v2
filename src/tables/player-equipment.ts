import * as app from "../app.js"

export interface PlayerEquipment {
  playerId: number
  equipmentName: app.EquipmentName
}

export default new app.Table<PlayerEquipment>({
  name: "player-equipment",
  description: "The equipment of player",
  setup: (table) => {
    table
      .integer("playerId")
      .references("id")
      .inTable("player")
      .onDelete("CASCADE")
    table
      .string("equipmentName")
      .references("name")
      .inTable("equipment")
      .onDelete("CASCADE")
  },
})
