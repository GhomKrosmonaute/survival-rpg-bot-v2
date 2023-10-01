import * as app from "../app.js"

export interface PlayerItem {
  playerId: number
  itemName: app.ItemName
  amount: number
}

export default new app.Table<PlayerItem>({
  name: "player-item",
  description: "The player-item table",
  setup: (table) => {
    table
      .integer("playerId")
      .references("id")
      .inTable("player")
      .onDelete("CASCADE")
    table
      .string("itemName")
      .references("name")
      .inTable("item")
      .onDelete("CASCADE")
    table.integer("amount").notNullable()
  },
})
