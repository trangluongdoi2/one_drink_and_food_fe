export function clone(value: any) {
  try {
    return JSON.parse(JSON.stringify(value))
  } catch (error) {
    return value
  }
}

export function cloneMap(map: Map<any, any>): Map<any, any> {
  return JSON.parse(JSON.stringify(Array.from(map)))
}
