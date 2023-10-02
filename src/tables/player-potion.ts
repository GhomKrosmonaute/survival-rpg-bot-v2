import * as app from "../app.js"

export interface PlayerPotion {
  playerId: number
  potionName: app.Potion
  amount: number
}

export default new app.Table<PlayerPotion>({
  name: "player-potion",
  description: "The player-potion table",
  setup: (table) => {
    table
      .integer("playerId")
      .references("id")
      .inTable("player")
      .onDelete("CASCADE")
    table
      .string("potionName")
      .references("name")
      .inTable("potion")
      .onDelete("CASCADE")
    table.integer("amount").notNullable()
  },
})
