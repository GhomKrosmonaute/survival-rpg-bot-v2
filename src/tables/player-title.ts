import * as app from "../app.js"

export interface PlayerTitle {
  playerId: number
  titleId: number
}

export default new app.Table<PlayerTitle>({
  name: "player-title",
  description: "The player-title table",
  setup: (table) => {
    table.integer("playerId").references("id").inTable("player").notNullable()
    table.integer("titleId").references("id").inTable("title").notNullable()
  },
})
