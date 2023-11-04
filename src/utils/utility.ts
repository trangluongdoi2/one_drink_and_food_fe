export function clone(value: any) {
  try {
    return JSON.parse(JSON.stringify(value))
  } catch (error) {
    return value
  }
}

export async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
