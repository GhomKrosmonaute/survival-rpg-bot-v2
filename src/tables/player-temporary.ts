import * as app from "../app.js"

export interface PlayerTemporary {
  playerId: number
  temporaryName: app.TemporaryName
  endAt: number
}

export default new app.Table<PlayerTemporary>({
  name: "player-temporary",
  description: "The player-temporary table",
  setup: (table) => {
    table
      .integer("playerId")
      .references("id")
      .inTable("player")
      .onDelete("CASCADE")
    table
      .string("temporaryName")
      .references("name")
      .inTable("temporary")
      .onDelete("CASCADE")
    table.bigInteger("endAt").notNullable()
  },
})
