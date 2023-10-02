import type * as app from "../app.js"

export class I18n {
  constructor(public readonly texts: Record<string, string> & { en: string }) {}

  resolve(resolvableGuild: { guild: app.Guild } | app.Guild) {
    const guild =
      "guild" in resolvableGuild ? resolvableGuild.guild : resolvableGuild

    const lang = guild.preferredLocale

    return this.texts[lang] ?? this.texts.en
  }

  toString(lang = "en") {
    return this.texts[lang]
  }
}
