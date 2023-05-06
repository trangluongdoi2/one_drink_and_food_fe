import i18next from 'i18next'

const useTranslationMiddleware = () => {
  const trans = (chars: string) => {
    try {
      return i18next.t(chars)
    } catch (error) {
      return chars
    }
  }

  const convertLanguage = (langTo: string, langFrom: string) => {
    console.log('convertLanguage')
  }

  return { trans, convertLanguage }
}

export default useTranslationMiddleware
