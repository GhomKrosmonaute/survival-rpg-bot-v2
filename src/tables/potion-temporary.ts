import * as app from "../app.js"

export interface PotionTemporary {
  potionName: app.Potion
  temporaryId: number
  duration: number
}

export default new app.Table<PotionTemporary>({
  name: "potion-temporary",
  description: "The potion-temporary table",
  setup: (table) => {
    table
      .string("potionName")
      .references("name")
      .inTable("potion")
      .notNullable()
    table
      .string("temporaryName")
      .references("name")
      .inTable("temporary")
      .notNullable()
    table.integer("duration").notNullable()
  },
})

export const potionTemporaries: PotionTemporary[] = []
