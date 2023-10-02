import * as app from "../app.js"

export interface Title {
  id: number
  name: string
  worldId: number
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
    name: "Aventurier débutant",
    worldId: 0,
  },
  {
    name: "Maître chien démoniaque 👿",
    worldId: 0,
  },
  {
    name: "Ornithologue sacré 🦅",
    worldId: 0,
  },
  {
    name: "Purificateur de purificateur 🔥",
    worldId: 0,
  },
  {
    name: "Chasseur de dragons 🐲",
    worldId: 0,
  },
  {
    name: "Renégat 🔱",
    worldId: 0,
  },
]
