export const camelToSnakeCase = (str: string) => {
  return str.replace(/[A-Z]/g, (letter: string) => `-${letter.toLowerCase()}`)
}

export const snakeCaseToUnderscore = (str: string) => {
  return camelToSnakeCase(str).replace('-', '_')
}

export const blobToBase64 = (blob: any) => {
  return new Promise((resolve, _) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.readAsDataURL(blob)
  })
}
