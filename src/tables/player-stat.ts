import * as app from "../app.js"

export interface PlayerStat {
  playerId: number
  statName: app.StatName
  value: number
}

export default new app.Table<PlayerStat>({
  name: "player-stat",
  description: "Represent a player's stat",
  setup: (table) => {
    table
      .integer("playerId")
      .references("id")
      .inTable("player")
      .onDelete("CASCADE")
    table
      .string("statName")
      .references("name")
      .inTable("stat")
      .onDelete("CASCADE")
    table.integer("value").notNullable()
  },
})
