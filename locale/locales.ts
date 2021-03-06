interface Locale {
  text: string
  translated: number
}

const locales: { [key: string]: Locale } = {
  en: {
    text: "πΊπΈ English",
    translated: 100,
  },
  "pt-BR": {
    text: "π§π· Portuguese (Brazilian)",
    translated: 100,
  },
  de: {
    text: "π©πͺ German",
    translated: 96,
  },
  fr: {
    text: "π«π· French",
    translated: 96,
  },
}

export default locales
