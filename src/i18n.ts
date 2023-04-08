import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationVI from '@/locales/vi.json'

const resources = {
  vi: {
    translation: translationVI
  }
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'vi',
  debug: true,
  interpolation: {
    escapeValue: false
  }
})

export default i18n
