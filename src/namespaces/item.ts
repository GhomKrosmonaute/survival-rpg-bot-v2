import * as app from "../app.js"

export class Item {
  constructor(
    public readonly options: {
      name: app.I18n
      description: app.I18n
      logo: app.Logo
    }
  ) {}
}

export const flowerItem = new Item({
  name: new app.I18n({
    en: "Flower",
    fr: "Fleur",
  }),
  description: new app.I18n({
    en: "A flower",
    fr: "Une fleur",
  }),
  logo: app.Logo.Flower,
})

export const shellItem = new Item({
  name: new app.I18n({
    en: "Shell",
    fr: "Coquillage",
  }),
  description: new app.I18n({
    en: "A shell",
    fr: "Un coquillage",
  }),
  logo: app.Logo.Shell,
})
