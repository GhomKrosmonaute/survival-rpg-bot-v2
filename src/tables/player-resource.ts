import * as app from "../app.js"

export interface PlayerResource {
  playerId: number
  resourceName: app.ResourceName
  amount: number
}

export default new app.Table<PlayerResource>({
  name: "player-resource",
  description: "The player-resource table",
  setup: (table) => {
    table
      .integer("playerId")
      .references("id")
      .inTable("player")
      .onDelete("CASCADE")
    table
      .string("resourceName")
      .references("name")
      .inTable("resource")
      .onDelete("CASCADE")
    table.integer("amount").notNullable()
  },
})
