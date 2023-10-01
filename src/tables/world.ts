import * as app from "../app.js"

/**
 * Represent a server, a separate world
 */
export interface World {
  name: app.WorldName
}

export default new app.Table<World>({
  name: "world",
  description: "Represent a server, a separate world",
  setup: (table) => {
    table.string("name").notNullable().primary().unique()
  },
})

export const worlds: World[] = [{ name: app.WorldName.Euphoria }]
