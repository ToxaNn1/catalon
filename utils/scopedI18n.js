import {useI18n} from "vue-i18n";

export const LOCAL_STORAGE_LOCALE_KEY = 'catalon_locale'

export const useScopedI18n = (scope) => {
  const { t } = useI18n()
  const { locale } = useI18n({ useScope: 'global' })

  const getScopedKey = (key) => (scope ? `${scope}.${key}` : key)

  const ts = (key) => t(getScopedKey(key))?.toString()

  const setInitialLocale = () => {
    const retrievedLocale =
      localStorage.getItem(LOCAL_STORAGE_LOCALE_KEY) ||
      navigator.language.split('-')[0]

    locale.value = ['en', 'ua'].includes(retrievedLocale) ? retrievedLocale : 'en'
  }

  return { setInitialLocale, ts }
}
