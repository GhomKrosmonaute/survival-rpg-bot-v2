import * as app from "../app.js"

export class Attributes {
  constructor(
    public readonly attributes: [stat: app.Stat, quantity: number][]
  ) {}
}
