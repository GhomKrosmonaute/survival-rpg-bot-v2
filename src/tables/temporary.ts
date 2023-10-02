import * as app from "../app.js"

export interface Temporary {
  id: app.Temporary
  name: string
  worldId: number
  logo: app.Logo
  description: string
}

export default new app.Table<Temporary>({
  name: "temporary",
  description: "The temporary table",
  setup: (table) => {
    table.increments("id", { primaryKey: true })
    table.string("name").notNullable()
    table
      .string("worldName")
      .references("name")
      .inTable("worlds")
      .onDelete("CASCADE")
    table.string("logo").notNullable()
    table.string("description").notNullable()
  },
})

export const temporaries: Omit<Temporary, "id">[] = [
  {
    worldId: 0,
    name: "puissance",
    logo: app.Logo.Strength,
    description: "Augmente votre puissance d'attaque de 10%.",
  },
  {
    worldId: 0,
    name: "résistance",
    logo: app.Logo.Resistance,
    description: "Augmente votre résistance aux attaques adverses de 10%.",
  },
  {
    worldId: 0,
    name: "chance",
    logo: app.Logo.Luck,
    description:
      "Augmente vos chances de coup critique et vos esquives de 10%.",
  },
  {
    worldId: 0,
    name: "ivresse",
    logo: app.Logo.Beer,
    description:
      "Augmente votre chance de coup critique de 10% et diminue votre puissance et votre résistance de 5%.",
  },
]
