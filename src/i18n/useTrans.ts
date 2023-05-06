import i18next from 'i18next'

const trans = (chars: string) => {
  return i18next.t(chars)
}

export { trans }
