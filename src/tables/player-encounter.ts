import * as app from "../app.js"

export interface PlayerEncounter {
  playerId: number
  enemyName: app.EnemyName
  amount: number
}

export default new app.Table<PlayerEncounter>({
  name: "player-encounter",
  description: "The player-encounter table",
  setup: (table) => {
    table
      .integer("playerId")
      .references("id")
      .inTable("player")
      .onDelete("CASCADE")
    table
      .string("enemyName")
      .references("name")
      .inTable("enemy")
      .onDelete("CASCADE")
    table.integer("amount").notNullable()
  },
})
