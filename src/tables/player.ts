import * as app from "../app.js"

export interface Player {
  id: number
  worldName: app.WorldName
  goldCoins: number
  lotoWinCount: number
  lotoLoseCount: number
  lotoRepayCount: number
}

export default new app.Table<Player>({
  name: "player",
  description: "The player table",
  setup: (table) => {
    table.increments("id", { primaryKey: true })
    table
      .string("worldName")
      .references("name")
      .inTable("worlds")
      .onDelete("CASCADE")
    table.integer("goldCoins").notNullable()
  },
})
