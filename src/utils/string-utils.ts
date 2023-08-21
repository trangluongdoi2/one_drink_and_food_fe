export const camelToSnakeCase = (str: string) => {
  return str.replace(/[A-Z]/g, (letter: string) => `-${letter.toLowerCase()}`)
}

export const snakeCaseToUnderscore = (str: string) => {
  return camelToSnakeCase(str).replace('-', '_')
}
