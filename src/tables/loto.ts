import * as app from "../app.js"

export interface Loto {
  worldName: app.WorldName
  winnerCount: number
  repayCount: number
  jackpot: number
  probability: number
  resetAt: number
  /**
   * Number of times the loto has been tried since the last reset
   */
  tryCount: number
}

export default new app.Table<Loto>({
  name: "loto",
  description: "The loto table",
  setup: (table) => {
    table
      .string("worldName")
      .references("name")
      .inTable("world")
      .onDelete("CASCADE")
    table.integer("winnerCount").unsigned().defaultTo(0)
    table.integer("loserCount").unsigned().defaultTo(0)
    table.integer("repayCount").unsigned().defaultTo(0)
    table.integer("jackpot").unsigned().defaultTo(10000)
    table.float("probability").unsigned().defaultTo(0.01)
    table.bigInteger("resetAt").unsigned().defaultTo(0)
    table.integer("tryCount").unsigned().defaultTo(0)
  },
})
