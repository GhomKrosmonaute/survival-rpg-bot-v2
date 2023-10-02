import * as app from "../app.js"

export const resources: Resource[] = []

export class Resource {
  constructor(
    public readonly options: {
      name: app.I18n
      logo: app.Logo
      description: app.I18n
    }
  ) {
    resources.push(this)
  }
}

export const leatherResource = new Resource()
export const woodResource = new Resource()
export const rockResource = new Resource()
export const ironResource = new Resource()
export const goldResource = new Resource()
export const diamondResource = new Resource()
export const merliniumResource = new Resource()
