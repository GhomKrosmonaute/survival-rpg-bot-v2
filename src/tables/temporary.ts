import * as app from "../app.js"

export interface Temporary {
  name: app.TemporaryName
  worldName: app.WorldName
  logo: app.Logo
  description: string
}

export default new app.Table<Temporary>({
  name: "temporary",
  description: "The temporary table",
  setup: (table) => {
    table.string("name").notNullable().primary().unique()
    table
      .string("worldName")
      .references("name")
      .inTable("worlds")
      .onDelete("CASCADE")
    table.string("logo").notNullable()
    table.string("description").notNullable()
  },
})

export const temporaries: Temporary[] = [
  {
    worldName: app.WorldName.Euphoria,
    name: app.TemporaryName.Strength,
    logo: app.Logo.Strength,
    description: "Augmente votre puissance d'attaque de 10%.",
  },
  {
    worldName: app.WorldName.Euphoria,
    name: app.TemporaryName.Resistance,
    logo: app.Logo.Resistance,
    description: "Augmente votre résistance aux attaques adverses de 10%.",
  },
  {
    worldName: app.WorldName.Euphoria,
    name: app.TemporaryName.Luck,
    logo: app.Logo.Luck,
    description:
      "Augmente vos chances de coup critique et vos esquives de 10%.",
  },
  {
    worldName: app.WorldName.Euphoria,
    name: app.TemporaryName.Drunkenness,
    logo: app.Logo.Beer,
    description:
      "Augmente votre chance de coup critique de 10% et diminue votre puissance et votre résistance de 5%.",
  },
]
