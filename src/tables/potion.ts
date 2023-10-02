import * as app from "../app.js"

export interface Potion {
  name: app.Potion
  worldId: number
  cost: number
}

export default new app.Table<Potion>({
  name: "potion",
  description: "The potion table",
  setup: (table) => {
    table.string("name").unique().notNullable()
    table.string("worldName").references("name").inTable("world").notNullable()
    table.integer("cost").notNullable()
  },
})

export const potions: Potion[] = []
