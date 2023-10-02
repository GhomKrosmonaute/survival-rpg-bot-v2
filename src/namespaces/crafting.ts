import type * as app from "../app.js"

import player, { Player } from "../tables/player"

export class Crafting {
  constructor(
    public readonly needed: [
      needed: app.Resource | app.Item,
      quantity: number
    ][]
  ) {}

  canCraft(player: Player): boolean {
    // TODO: check player inventory and compare with possibilities
  }

  craft(player: Player): void {}
}
