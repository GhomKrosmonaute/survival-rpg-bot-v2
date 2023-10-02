import * as app from "../app.js"

export interface PotionEffect {
  potionName: app.Potion
  effectName: app.EffectName
  value: number
}

export default new app.Table<PotionEffect>({
  name: "potion-effect",
  description: "The potion-effect table",
  setup: (table) => {
    table
      .string("potionName")
      .references("name")
      .inTable("potion")
      .notNullable()
    table.string("effectName").notNullable()
    table.integer("value").notNullable()
  },
})

export const potionEffects: PotionEffect[] = []
