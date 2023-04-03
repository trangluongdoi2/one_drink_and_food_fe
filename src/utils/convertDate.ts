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

export const parseDateFirebase = (time: string) => {
  const dateObj = new Date(Date.parse(time))
  const nanoseconds = dateObj.getTime() * 1000000
  const seconds = Math.floor(dateObj.getTime() / 1000)
  return {
    seconds: seconds,
    nanoseconds: nanoseconds
  }
}
