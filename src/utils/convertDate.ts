type TimeFireBase = {
  seconds: number
  nanoseconds: number
}
export const convertDateFireBase = (time: TimeFireBase) => {
  if (!time) return
  return JSON.stringify(new Date(time.seconds * 1000 + time.nanoseconds / 1000000))
}

export const getDateFirebase = (time: TimeFireBase) => {
  const date = new Date(time.seconds * 1000)
  if (!time) return
  return JSON.stringify(date.toLocaleDateString('en-US').substring(0, 10))
}
