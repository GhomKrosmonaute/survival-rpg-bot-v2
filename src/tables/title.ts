import * as app from "../app.js"

export interface Title {
  id: number
  name: string
  worldName: app.WorldName
}

export default new app.Table<Title>({
  name: "title",
  description: "The title table",
  setup: (table) => {
    table.increments("id", { primaryKey: true })
    table.string("name").notNullable()
    table.string("worldName").references("name").inTable("world").notNullable()
  },
})

export const titles: Omit<Title, "id">[] = [
  {
    name: "Purificateur de purificateur 🔥",
    worldName: app.WorldName.Euphoria,
  },
]
