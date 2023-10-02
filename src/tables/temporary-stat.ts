import * as app from "../app.js"

export interface TemporaryStat {
  temporaryId: app.Temporary
  statId: app.Stat
  percentage: number
}

export default new app.Table<TemporaryStat>({
  name: "temporary-stat",
  description: "The temporary-stat table",
  setup: (table) => {
    table
      .integer("temporaryId")
      .references("id")
      .inTable("temporary")
      .onDelete("CASCADE")
    table.integer("statId").references("id").inTable("stat").onDelete("CASCADE")
    table.integer("percentage").notNullable()
  },
})

export const temporaryStats: TemporaryStat[] = [
  {
    temporaryId: app.Temporary.Strength,
    statId: app.Stat.Strength,
    percentage: 10,
  },
  {
    temporaryId: app.Temporary.Resistance,
    statId: app.Stat.Resistance,
    percentage: 10,
  },
  {
    temporaryId: app.Temporary.Luck,
    statId: app.Stat.Luck,
    percentage: 10,
  },
  {
    temporaryId: app.Temporary.Drunkenness,
    statId: app.Stat.Luck,
    percentage: 10,
  },
  {
    temporaryId: app.Temporary.Drunkenness,
    statId: app.Stat.Strength,
    percentage: -5,
  },
  {
    temporaryId: app.Temporary.Drunkenness,
    statId: app.Stat.Resistance,
    percentage: -5,
  },
]
