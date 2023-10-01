import * as app from "../app.js"

export interface Stat {
  name: app.StatName
  worldName: app.WorldName
  logo: app.Logo
  description: string
}

export default new app.Table<Stat>({
  name: "stat",
  description: "The stat table",
  setup: (table) => {
    table.string("name").notNullable().primary().unique()
    table
      .string("worldName")
      .references("name")
      .inTable("world")
      .onDelete("CASCADE")
    table.string("logo").notNullable()
    table.string("description").notNullable()
  },
})

export const stats: Stat[] = [
  {
    worldName: app.WorldName.Euphoria,
    name: app.StatName.Strength,
    logo: app.Logo.Strength,
    description:
      "La puissance multiplie la force. Avec 100% de puissance, on double la force au moment d'attaquer. La valeur de cette compétence ne peut pas être négative.",
  },
  {
    worldName: app.WorldName.Euphoria,
    name: app.StatName.Resistance,
    logo: app.Logo.Resistance,
    description:
      "La résistance diminue les dégâts de chaque attaque subie en combat. 100% de résistance divise les dégâts subits pas trois. La valeur de cette compétence ne peut pas être négative et les dégâts subits ne peuvent pas être réduit de plus de 66%.",
  },
  {
    worldName: app.WorldName.Euphoria,
    name: app.StatName.Luck,
    logo: app.Logo.Luck,
    description:
      "La chance vous sert en combat à esquiver, contre attaquer et faire des coups critiques. 100% de chance monte à 33% la possibilité de de faire chaque actions citées précédemment. Vous ne pourrez monter ces possibilité que jusqu'à 66%. La valeur de cette compétence ne peut pas être négative.",
  },
]
