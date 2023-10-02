import * as app from "../app.js"

/**
 * Represent a server, a separate world
 */
export interface World {
  id: number
  name: app.World
  description: string
}

export default new app.Table<World>({
  name: "world",
  description: "Represent a server, a separate world",
  setup: (table) => {
    table.increments("id", { primaryKey: true })
    table.string("name").notNullable()
    table.string("description").notNullable()
  },
})

export const worlds: Omit<World, "id">[] = [
  {
    name: app.World.Euphoria,
    description:
      "Un royaume plein de magie et de fantaisie " + app.Logo.Magical,
  },
]
