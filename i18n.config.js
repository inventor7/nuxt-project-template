import en from './locales/en.js'
import fr from './locales/fr.js'
import ar from './locales/ar.js'

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en,
        fr,
        ar
    }
  }))