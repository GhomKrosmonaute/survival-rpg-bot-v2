import * as app from "../app.js"

export enum EquipmentType {
  Clothes,
  Shield,
  Weapon,
}

export enum EquipmentOrientation {
  Physical,
  Magical,
}

export enum PhysicalEquipmentType {
  Fast,
  Heavy,
  Long,
  Range,
}

export enum MagicalEquipmentType {
  Explosive,
  Psychic,
  Elemental,
}

export enum ElementalEquipmentType {
  Fire,
  Water,
  Plant,
}

export const equipments: Equipment[] = []

interface EquipmentOptions {
  name: app.I18n
  logo: app.Logo
  slot: app.EquipmentSlot
  cost: number
  durability: number
  size: number
  attributes: app.Attributes
  crafting: app.Crafting[]

  type: EquipmentType

  orientation?: EquipmentOrientation
  physicalType?: PhysicalEquipmentType
  magicalType?: MagicalEquipmentType
  elementalType?: ElementalEquipmentType
}

export class Equipment {
  constructor(public readonly options: EquipmentOptions) {
    equipments.push(this)
  }
}

export const leatherHelmet = new Equipment({
  name: new app.I18n({
    en: "Leather helmet",
    fr: "Couvre-chef en cuir",
  }),
  cost: 15,
  durability: 20,
  size: 1,
  logo: app.Logo.Helmet,
  slot: app.headSlot,
  type: EquipmentType.Clothes,
  crafting: [new app.Crafting([[app.leatherResource, 30]])],
  attributes: new app.Attributes([[app.resistanceStat, 2]]),
})

export const flowerNecklace = new Equipment({
  name: new app.I18n({
    en: "Flower necklace",
    fr: "Collier de fleurs",
  }),
  cost: 10,
  durability: 20,
  size: 1,
  logo: app.Logo.Necklace,
  slot: app.neckSlot,
  type: EquipmentType.Clothes,
  crafting: [
    new app.Crafting([
      [app.flowerItem, 5],
      [app.leatherResource, 5],
    ]),
  ],
  attributes: new app.Attributes([[app.luckStat, 1]]),
})

export const leatherChest = new Equipment({
  name: new app.I18n({
    en: "Leather chest",
    fr: "Plastron en cuir",
  }),
  cost: 20,
  durability: 20,
  size: 1,
  logo: app.Logo.Chest,
  slot: app.chestSlot,
  type: EquipmentType.Clothes,
  crafting: [new app.Crafting([[app.leatherResource, 40]])],
  attributes: new app.Attributes([[app.resistanceStat, 3]]),
})

export const woodRing = new Equipment({
  name: new app.I18n({
    en: "Wood ring",
    fr: "Anneau en bois",
  }),
  cost: 15,
  durability: 20,
  size: 1,
  logo: app.Logo.Ring,
  slot: app.fingersSlot,
  type: EquipmentType.Clothes,
  crafting: [new app.Crafting([[app.woodResource, 20]])],
  attributes: new app.Attributes([[app.luckStat, 1]]),
})

export const pieceOfString = new Equipment({
  name: new app.I18n({
    en: "Piece of string",
    fr: "Morceau de ficelle",
  }),
  cost: 5,
  durability: 20,
  size: 1,
  logo: app.Logo.String,
  slot: app.beltSlot,
  type: EquipmentType.Clothes,
  crafting: [new app.Crafting([[app.leatherResource, 10]])],
  attributes: new app.Attributes([[app.luckStat, 1]]),
})

export const breeches = new Equipment({
  name: new app.I18n({
    en: "Breeches",
    fr: "Braies",
  }),
  cost: 15,
  durability: 20,
  size: 0.5,
  logo: app.Logo.Leggings,
  slot: app.legsSlot,
  type: EquipmentType.Clothes,
  crafting: [new app.Crafting([[app.leatherResource, 30]])],
  attributes: new app.Attributes([[app.resistanceStat, 2]]),
})

export const socks = new Equipment({
  name: new app.I18n({
    en: "Socks",
    fr: "Chaussettes",
  }),
  cost: 10,
  durability: 20,
  size: 0.3,
  logo: app.Logo.Boots,
  slot: app.feetSlot,
  type: EquipmentType.Clothes,
  crafting: [new app.Crafting([[app.leatherResource, 20]])],
  attributes: new app.Attributes([[app.resistanceStat, 1]]),
})

export const sandals = new Equipment({
  name: new app.I18n({
    en: "Sandals",
    fr: "Sandales",
  }),
  cost: 20,
  durability: 20,
  size: 0.7,
  logo: app.Logo.Boots,
  slot: app.feetSlot,
  type: EquipmentType.Clothes,
  crafting: [new app.Crafting([[app.leatherResource, 40]])],
  attributes: new app.Attributes([[app.resistanceStat, 3]]),
})

export const woodShield = new Equipment({
  name: new app.I18n({
    en: "Wood shield",
    fr: "Bouclier en bois",
  }),
  cost: 20,
  durability: 20,
  size: 0.7,
  logo: app.Logo.Shield,
  slot: app.handsSlot,
  type: EquipmentType.Shield,
  crafting: [new app.Crafting([[app.woodResource, 30]])],
  attributes: new app.Attributes([
    [app.resistanceStat, 1.5],
    [app.luckStat, 1.5],
  ]),
})

export const lightHelmet = new Equipment({
  name: new app.I18n({
    en: "Light helmet",
    fr: "Casque léger",
  }),
  cost: 30,
  slot: app.headSlot,
  durability: 30,
  size: 1,
  logo: app.Logo.Helmet,
  type: EquipmentType.Clothes,
  crafting: [new app.Crafting([[app.ironResource, 30]])],
  attributes: new app.Attributes([[app.resistanceStat, 4]]),
})

export const shellNecklace = new Equipment({
  name: new app.I18n({
    en: "Shell necklace",
    fr: "Collier de coquillages",
  }),
  cost: 20,
  durability: 30,
  size: 1,
  logo: app.Logo.Necklace,
  slot: app.neckSlot,
  type: EquipmentType.Clothes,
  crafting: [
    new app.Crafting([
      [app.shellItem, 10],
      [app.leatherResource, 10],
    ]),
  ],
  attributes: new app.Attributes([[app.luckStat, 3]]),
})

export const lightChest = new Equipment({
  name: new app.I18n({
    en: "Light chest",
    fr: "Plastron léger",
  }),
  cost: 40,
  durability: 30,
  size: 1,
  logo: app.Logo.Chest,
  slot: app.chestSlot,
  type: EquipmentType.Clothes,
  crafting: [new app.Crafting([[app.ironResource, 40]])],
  attributes: new app.Attributes([[app.resistanceStat, 5]]),
})

export const ironRing = new Equipment({
  name: new app.I18n({
    en: "Iron ring",
    fr: "Anneau en fer",
  }),
  cost: 20,
  durability: 30,
  size: 1,
  logo: app.Logo.Ring,
  slot: app.fingersSlot,
  type: EquipmentType.Clothes,
  crafting: [new app.Crafting([[app.ironResource, 20]])],
  attributes: new app.Attributes([[app.luckStat, 3]]),
})

export const rope = new Equipment({
  name: new app.I18n({
    en: "Rope",
    fr: "Corde",
  }),
  cost: 10,
  durability: 30,
  size: 1,
  logo: app.Logo.String,
  slot: app.beltSlot,
  type: EquipmentType.Clothes,
  crafting: [new app.Crafting([[app.leatherResource, 20]])],
  attributes: new app.Attributes([[app.luckStat, 2]]),
})

export const breechedBreeches = new Equipment({
  name: new app.I18n({
    en: "Breeched breeches",
    fr: "Braies culotées",
  }),
  cost: 30,
  durability: 30,
  size: 0.5,
  logo: app.Logo.Leggings,
  slot: app.legsSlot,
  type: EquipmentType.Clothes,
  crafting: [new app.Crafting([[app.leatherResource, 60]])],
  attributes: new app.Attributes([
    [app.resistanceStat, 3],
    [app.luckStat, 1],
  ]),
})

export const greenSocks = new Equipment({
  name: new app.I18n({
    en: "Green socks",
    fr: "Chaussettes vertes",
  }),
  cost: 10,
  durability: 30,
  size: 0.3,
  logo: app.Logo.Boots,
  slot: app.feetSlot,
  type: EquipmentType.Clothes,
  crafting: [new app.Crafting([[app.leatherResource, 20]])],
  attributes: new app.Attributes([[app.luckStat, 1]]),
})

export const boots = new Equipment({
  name: new app.I18n({
    en: "Boots",
    fr: "Bottes",
  }),
  cost: 40,
  durability: 30,
  size: 0.7,
  logo: app.Logo.Boots,
  slot: app.feetSlot,
  type: EquipmentType.Clothes,
  crafting: [new app.Crafting([[app.leatherResource, 70]])],
  attributes: new app.Attributes([[app.resistanceStat, 5]]),
})

export const roundedShield = new Equipment({
  name: new app.I18n({
    en: "Rounded shield",
    fr: "Bouclier rond",
  }),
  cost: 40,
  durability: 30,
  size: 0.7,
  logo: app.Logo.Shield,
  slot: app.handsSlot,
  type: EquipmentType.Shield,
  crafting: [
    new app.Crafting([
      [app.ironResource, 20],
      [app.woodResource, 30],
    ]),
  ],
  attributes: new app.Attributes([
    [app.resistanceStat, 3],
    [app.luckStat, 2],
  ]),
})

// WEAPONS

export const woodenSword = new Equipment({
  name: new app.I18n({
    en: "Wooden sword",
    fr: "Épée en bois",
  }),
  cost: 30,
  durability: 20,
  size: 0.7,
  logo: app.Logo.Sword,
  slot: app.handsSlot,
  type: EquipmentType.Weapon,
  orientation: EquipmentOrientation.Physical,
  physicalType: PhysicalEquipmentType.Fast,
  crafting: [new app.Crafting([[app.woodResource, 50]])],
  attributes: new app.Attributes([
    [app.strengthStat, 3],
    [app.luckStat, 1],
  ]),
})

export const woodenClub = new Equipment({
  name: new app.I18n({
    en: "Wooden club",
    fr: "Massue en bois",
  }),
  cost: 30,
  durability: 20,
  size: 0.7,
  logo: app.Logo.Sledgehammer,
  slot: app.handsSlot,
  type: EquipmentType.Weapon,
  orientation: EquipmentOrientation.Physical,
  physicalType: PhysicalEquipmentType.Heavy,
  crafting: [new app.Crafting([[app.woodResource, 50]])],
  attributes: new app.Attributes([[app.strengthStat, 4]]),
})

export const woodenCane = new Equipment({
  name: new app.I18n({
    en: "Wooden cane",
    fr: "Canne en bois",
  }),
  cost: 30,
  durability: 20,
  size: 0.7,
  logo: app.Logo.Lance,
  slot: app.handsSlot,
  type: EquipmentType.Weapon,
  orientation: EquipmentOrientation.Physical,
  physicalType: PhysicalEquipmentType.Long,
  crafting: [new app.Crafting([[app.woodResource, 50]])],
  attributes: new app.Attributes([
    [app.strengthStat, 2],
    [app.resistanceStat, 2],
  ]),
})

export const woodenBow = new Equipment({
  name: new app.I18n({
    en: "Wooden bow",
    fr: "Arc en bois",
  }),
  cost: 50,
  durability: 20,
  size: 1.4,
  logo: app.Logo.Crossbow,
  slot: app.handsSlot,
  type: EquipmentType.Weapon,
  orientation: EquipmentOrientation.Physical,
  physicalType: PhysicalEquipmentType.Range,
  crafting: [
    new app.Crafting([
      [app.woodResource, 50],
      [app.leatherResource, 20],
    ]),
  ],
  attributes: new app.Attributes([
    [app.strengthStat, 4],
    [app.luckStat, 4],
  ]),
})

export const ironDagger = new Equipment({
  name: new app.I18n({
    en: "Iron dagger",
    fr: "Dague en fer",
  }),
  cost: 60,
  durability: 30,
  size: 0.7,
  logo: app.Logo.Sword,
  slot: app.handsSlot,
  type: EquipmentType.Weapon,
  orientation: EquipmentOrientation.Physical,
  physicalType: PhysicalEquipmentType.Fast,
  crafting: [
    new app.Crafting([
      [app.ironResource, 40],
      [app.woodResource, 30],
    ]),
  ],
  attributes: new app.Attributes([
    [app.strengthStat, 3],
    [app.luckStat, 4],
  ]),
})

export const ironHammer = new Equipment({
  name: new app.I18n({
    en: "Iron hammer",
    fr: "Marteau en fer",
  }),
  cost: 60,
  durability: 30,
  size: 0.7,
  logo: app.Logo.Sledgehammer,
  slot: app.handsSlot,
  type: EquipmentType.Weapon,
  orientation: EquipmentOrientation.Physical,
  physicalType: PhysicalEquipmentType.Heavy,
  crafting: [new app.Crafting([[app.ironResource, 60]])],
  attributes: new app.Attributes([[app.strengthStat, 7]]),
})

export const ironSpear = new Equipment({
  name: new app.I18n({
    en: "Iron spear",
    fr: "Lance en fer",
  }),
  cost: 60,
  durability: 30,
  size: 0.7,
  logo: app.Logo.Lance,
  slot: app.handsSlot,
  type: EquipmentType.Weapon,
  orientation: EquipmentOrientation.Physical,
  physicalType: PhysicalEquipmentType.Long,
  crafting: [
    new app.Crafting([
      [app.ironResource, 20],
      [app.woodResource, 50],
    ]),
  ],
  attributes: new app.Attributes([
    [app.strengthStat, 4],
    [app.resistanceStat, 3],
  ]),
})

export const compoundBow = new Equipment({
  name: new app.I18n({
    en: "Compound bow",
    fr: "Arc à poulies",
  }),
  cost: 90,
  durability: 30,
  size: 1.4,
  logo: app.Logo.Crossbow,
  slot: app.handsSlot,
  type: EquipmentType.Weapon,
  orientation: EquipmentOrientation.Physical,
  physicalType: PhysicalEquipmentType.Range,
  crafting: [
    new app.Crafting([
      [app.woodResource, 80],
      [app.leatherResource, 40],
    ]),
  ],
  attributes: new app.Attributes([
    [app.strengthStat, 7],
    [app.luckStat, 7],
  ]),
})

export const rapier = new Equipment({
  name: new app.I18n({
    en: "Rapier",
    fr: "Rapière",
  }),
  cost: 100,
  durability: 50,
  size: 0.7,
  logo: app.Logo.Sword,
  slot: app.handsSlot,
  type: EquipmentType.Weapon,
  orientation: EquipmentOrientation.Physical,
  physicalType: PhysicalEquipmentType.Fast,
  crafting: [new app.Crafting([[app.ironResource, 100]])],
  attributes: new app.Attributes([
    [app.strengthStat, 4],
    [app.luckStat, 7],
  ]),
})

export const heavyAxe = new Equipment({
  name: new app.I18n({
    en: "Heavy axe",
    fr: "Hache lourde",
  }),
  cost: 100,
  durability: 50,
  size: 0.7,
  logo: app.Logo.Sledgehammer,
  slot: app.handsSlot,
  type: EquipmentType.Weapon,
  orientation: EquipmentOrientation.Physical,
  physicalType: PhysicalEquipmentType.Heavy,
  crafting: [
    new app.Crafting([
      [app.ironResource, 80],
      [app.woodResource, 30],
    ]),
  ],
  attributes: new app.Attributes([[app.strengthStat, 11]]),
})

export const halberd = new Equipment({
  name: new app.I18n({
    en: "Halberd",
    fr: "Hallebarde",
  }),
  cost: 100,
  durability: 50,
  size: 0.7,
  logo: app.Logo.Lance,
  slot: app.handsSlot,
  type: EquipmentType.Weapon,
  orientation: EquipmentOrientation.Physical,
  physicalType: PhysicalEquipmentType.Long,
  crafting: [
    new app.Crafting([
      [app.ironResource, 30],
      [app.woodResource, 80],
    ]),
  ],
  attributes: new app.Attributes([
    [app.strengthStat, 4],
    [app.resistanceStat, 4],
    [app.luckStat, 3],
  ]),
})

export const crossbow = new Equipment({
  name: new app.I18n({
    en: "Crossbow",
    fr: "Arbalète",
  }),
  cost: 180,
  durability: 50,
  size: 1.4,
  logo: app.Logo.Crossbow,
  slot: app.handsSlot,
  type: EquipmentType.Weapon,
  orientation: EquipmentOrientation.Physical,
  physicalType: PhysicalEquipmentType.Range,
  crafting: [
    new app.Crafting([
      [app.ironResource, 50],
      [app.woodResource, 140],
      [app.leatherResource, 20],
    ]),
  ],
  attributes: new app.Attributes([
    [app.strengthStat, 11],
    [app.luckStat, 11],
  ]),
})

// baguettes magiques

export const paxafWand = new Equipment({
  name: new app.I18n({
    en: "Paxaf wand",
    fr: "Baguette Paxaf",
  }),
  cost: 30,
  durability: 20,
  size: 0.7,
  logo: app.Logo.MagicWand,
  slot: app.handsSlot,
  type: EquipmentType.Weapon,
  orientation: EquipmentOrientation.Magical,
  magicalType: MagicalEquipmentType.Explosive,
  crafting: [new app.Crafting([[app.merliniumResource, 30]])],
  attributes: new app.Attributes([[app.strengthStat, 4]]),
})

export const hypnoticWand = new Equipment({
  name: new app.I18n({
    en: "Hypnotic wand",
    fr: "Baguette hypnotique",
  }),
  cost: 30,
  durability: 20,
  size: 0.7,
  logo: app.Logo.MagicWand,
  slot: app.handsSlot,
  type: EquipmentType.Weapon,
  orientation: EquipmentOrientation.Magical,
  magicalType: MagicalEquipmentType.Psychic,
  crafting: [new app.Crafting([[app.merliniumResource, 30]])],
  attributes: new app.Attributes([[app.luckStat, 4]]),
})

export const matchWand = new Equipment({
  name: new app.I18n({
    en: "Match wand",
    fr: "Allumette",
  }),
  cost: 30,
  durability: 20,
  size: 0.7,
  logo: app.Logo.MagicWand,
  slot: app.handsSlot,
  type: EquipmentType.Weapon,
  orientation: EquipmentOrientation.Magical,
  magicalType: MagicalEquipmentType.Elemental,
  elementalType: ElementalEquipmentType.Fire,
  crafting: [new app.Crafting([[app.merliniumResource, 30]])],
  attributes: new app.Attributes([[app.strengthStat, 4]]),
})

export const diviningRod = new Equipment({
  name: new app.I18n({
    en: "Divining rod",
    fr: "Baguette de sourcier",
  }),
  cost: 30,
  durability: 20,
  size: 0.7,
  logo: app.Logo.MagicWand,
  slot: app.handsSlot,
  type: EquipmentType.Weapon,
  orientation: EquipmentOrientation.Magical,
  magicalType: MagicalEquipmentType.Elemental,
  elementalType: ElementalEquipmentType.Water,
  crafting: [new app.Crafting([[app.merliniumResource, 30]])],
  attributes: new app.Attributes([[app.luckStat, 4]]),
})

export const magicTwig = new Equipment({
  name: new app.I18n({
    en: "Magic twig",
    fr: "Brindille magique",
  }),
  cost: 30,
  durability: 20,
  size: 0.7,
  logo: app.Logo.MagicWand,
  slot: app.handsSlot,
  type: EquipmentType.Weapon,
  orientation: EquipmentOrientation.Magical,
  magicalType: MagicalEquipmentType.Elemental,
  elementalType: ElementalEquipmentType.Plant,
  crafting: [new app.Crafting([[app.merliniumResource, 30]])],
  attributes: new app.Attributes([[app.resistanceStat, 4]]),
})

export const boxomWand = new Equipment({
  name: new app.I18n({
    en: "Boxom wand",
    fr: "Baguette Boxom",
  }),
  cost: 60,
  durability: 30,
  size: 0.7,
  logo: app.Logo.MagicWand,
  slot: app.handsSlot,
  type: EquipmentType.Weapon,
  orientation: EquipmentOrientation.Magical,
  magicalType: MagicalEquipmentType.Explosive,
  crafting: [new app.Crafting([[app.merliniumResource, 60]])],
  attributes: new app.Attributes([[app.strengthStat, 7]]),
})

export const psychoticWand = new Equipment({
  name: new app.I18n({
    en: "Psychotic wand",
    fr: "Baguette psychotique",
  }),
  cost: 60,
  durability: 30,
  size: 0.7,
  logo: app.Logo.MagicWand,
  slot: app.handsSlot,
  type: EquipmentType.Weapon,
  orientation: EquipmentOrientation.Magical,
  magicalType: MagicalEquipmentType.Psychic,
  crafting: [new app.Crafting([[app.merliniumResource, 60]])],
  attributes: new app.Attributes([[app.luckStat, 7]]),
})

export const fireWand = new Equipment({
  name: new app.I18n({
    en: "Fire wand",
    fr: "Baguette incendiaire",
  }),
  cost: 60,
  durability: 30,
  size: 0.7,
  logo: app.Logo.MagicWand,
  slot: app.handsSlot,
  type: EquipmentType.Weapon,
  orientation: EquipmentOrientation.Magical,
  magicalType: MagicalEquipmentType.Elemental,
  elementalType: ElementalEquipmentType.Fire,
  crafting: [new app.Crafting([[app.merliniumResource, 60]])],
  attributes: new app.Attributes([[app.strengthStat, 7]]),
})

export const waterWand = new Equipment({
  name: new app.I18n({
    en: "Water wand",
    fr: "Baguette des marées",
  }),
  cost: 60,
  durability: 30,
  size: 0.7,
  logo: app.Logo.MagicWand,
  slot: app.handsSlot,
  type: EquipmentType.Weapon,
  orientation: EquipmentOrientation.Magical,
  magicalType: MagicalEquipmentType.Elemental,
  elementalType: ElementalEquipmentType.Water,
  crafting: [new app.Crafting([[app.merliniumResource, 60]])],
  attributes: new app.Attributes([[app.luckStat, 7]]),
})

export const plantWand = new Equipment({
  name: new app.I18n({
    en: "Plant wand",
    fr: "Branche de mojo",
  }),
  cost: 60,
  durability: 30,
  size: 0.7,
  logo: app.Logo.MagicWand,
  slot: app.handsSlot,
  type: EquipmentType.Weapon,
  orientation: EquipmentOrientation.Magical,
  magicalType: MagicalEquipmentType.Elemental,
  elementalType: ElementalEquipmentType.Plant,
  crafting: [new app.Crafting([[app.merliniumResource, 60]])],
  attributes: new app.Attributes([[app.resistanceStat, 7]]),
})

export const braxoumWand = new Equipment({
  name: new app.I18n({
    en: "Braxoum wand",
    fr: "Baguette Braxoum",
  }),
  cost: 100,
  durability: 50,
  size: 0.7,
  logo: app.Logo.MagicWand,
  slot: app.handsSlot,
  type: EquipmentType.Weapon,
  orientation: EquipmentOrientation.Magical,
  magicalType: MagicalEquipmentType.Explosive,
  crafting: [new app.Crafting([[app.merliniumResource, 100]])],
  attributes: new app.Attributes([[app.strengthStat, 11]]),
})

export const psychokineticWand = new Equipment({
  name: new app.I18n({
    en: "Psychokinetic wand",
    fr: "Baguette psychokinétique",
  }),
  cost: 100,
  durability: 50,
  size: 0.7,
  logo: app.Logo.MagicWand,
  slot: app.handsSlot,
  type: EquipmentType.Weapon,
  orientation: EquipmentOrientation.Magical,
  magicalType: MagicalEquipmentType.Psychic,
  crafting: [new app.Crafting([[app.merliniumResource, 100]])],
  attributes: new app.Attributes([[app.luckStat, 11]]),
})

export const calciningWand = new Equipment({
  name: new app.I18n({
    en: "Calcining wand",
    fr: "Baguette calcinante",
  }),
  cost: 100,
  durability: 50,
  size: 0.7,
  logo: app.Logo.MagicWand,
  slot: app.handsSlot,
  type: EquipmentType.Weapon,
  orientation: EquipmentOrientation.Magical,
  magicalType: MagicalEquipmentType.Elemental,
  elementalType: ElementalEquipmentType.Fire,
  crafting: [new app.Crafting([[app.merliniumResource, 100]])],
  attributes: new app.Attributes([[app.strengthStat, 11]]),
})

export const stormWand = new Equipment({
  name: new app.I18n({
    en: "Storm wand",
    fr: "Baguette des tempête",
  }),
  cost: 100,
  durability: 50,
  size: 0.7,
  logo: app.Logo.MagicWand,
  slot: app.handsSlot,
  type: EquipmentType.Weapon,
  orientation: EquipmentOrientation.Magical,
  magicalType: MagicalEquipmentType.Elemental,
  elementalType: ElementalEquipmentType.Water,
  crafting: [new app.Crafting([[app.merliniumResource, 100]])],
  attributes: new app.Attributes([
    [app.luckStat, 4],
    [app.strengthStat, 7],
  ]),
})

export const phytokineticWand = new Equipment({
  name: new app.I18n({
    en: "Phytokinetic wand",
    fr: "Baguette phytokinétique",
  }),
  cost: 100,
  durability: 50,
  size: 0.7,
  logo: app.Logo.MagicWand,
  slot: app.handsSlot,
  type: EquipmentType.Weapon,
  orientation: EquipmentOrientation.Magical,
  magicalType: MagicalEquipmentType.Elemental,
  elementalType: ElementalEquipmentType.Plant,
  crafting: [new app.Crafting([[app.merliniumResource, 100]])],
  attributes: new app.Attributes([
    [app.resistanceStat, 6],
    [app.strengthStat, 5],
  ]),
})
