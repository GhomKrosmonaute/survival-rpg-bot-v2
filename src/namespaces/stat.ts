import * as app from "../app.js"

export const stats: Stat[] = []

export class Stat {
  constructor(
    public readonly options: {
      name: app.I18n
      description: app.I18n
      logo: app.Logo
    }
  ) {
    stats.push(this)
  }
}

export const strengthStat = new Stat({
  name: new app.I18n({
    en: "Strength",
    fr: "Puissance",
  }),
  description: new app.I18n({
    en: "Strength multiplies power. With 100% strength, you double your power when attacking. This stat can't be negative.",
    fr: "La puissance multiplie la force. Avec 100% de puissance, on double la force au moment d'attaquer. La valeur de cette compétence ne peut pas être négative.",
  }),
  logo: app.Logo.Strength,
})

export const resistanceStat = new Stat({
  name: new app.I18n({
    en: "Resistance",
    fr: "Résistance",
  }),
  description: new app.I18n({
    en: "Resistance reduces the damage of each attack taken in combat. 100% resistance divides the damage taken by three. This stat can't be negative and the damage taken can't be reduced by more than 66%.",
    fr: "La résistance diminue les dégâts de chaque attaque subie en combat. 100% de résistance divise les dégâts subits pas trois. La valeur de cette compétence ne peut pas être négative et les dégâts subits ne peuvent pas être réduit de plus de 66%.",
  }),
  logo: app.Logo.Resistance,
})

export const luckStat = new Stat({
  name: new app.I18n({
    en: "Luck",
    fr: "Chance",
  }),
  description: new app.I18n({
    en: "Luck helps you to dodge, counter attack and make critical hits. 100% luck raises the possibility of doing each of these actions to 33%. You can only raise these possibilities up to 66%. This stat can't be negative.",
    fr: "La chance vous sert en combat à esquiver, contre attaquer et faire des coups critiques. 100% de chance monte à 33% la possibilité de de faire chaque actions citées précédemment. Vous ne pourrez monter ces possibilité que jusqu'à 66%. La valeur de cette compétence ne peut pas être négative.",
  }),
  logo: app.Logo.Luck,
})
