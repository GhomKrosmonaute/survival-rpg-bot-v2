import * as app from "../app.js"

export interface TemporaryStat {
  temporaryName: app.TemporaryName
  statName: app.StatName
  percentage: number
}

export default new app.Table<TemporaryStat>({
  name: "temporary-stat",
  description: "The temporary-stat table",
  setup: (table) => {
    table
      .string("temporaryName")
      .references("name")
      .inTable("temporary")
      .onDelete("CASCADE")
    table
      .string("statName")
      .references("name")
      .inTable("stat")
      .onDelete("CASCADE")
    table.integer("percentage").notNullable()
  },
})

export const temporaryStats: TemporaryStat[] = [
  {
    temporaryName: app.TemporaryName.Strength,
    statName: app.StatName.Strength,
    percentage: 10,
  },
  {
    temporaryName: app.TemporaryName.Resistance,
    statName: app.StatName.Resistance,
    percentage: 10,
  },
  {
    temporaryName: app.TemporaryName.Luck,
    statName: app.StatName.Luck,
    percentage: 10,
  },
  {
    temporaryName: app.TemporaryName.Drunkenness,
    statName: app.StatName.Luck,
    percentage: 10,
  },
  {
    temporaryName: app.TemporaryName.Drunkenness,
    statName: app.StatName.Strength,
    percentage: -5,
  },
  {
    temporaryName: app.TemporaryName.Drunkenness,
    statName: app.StatName.Resistance,
    percentage: -5,
  },
]
