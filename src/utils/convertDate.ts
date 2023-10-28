import dayjs from 'dayjs'

type TimeFireBase = {
  seconds: number
  nanoseconds: number
}

const DATE_FORMAT = 'DD/MM/YYYY'

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

export const prettyDate = (date?: string, format: string | undefined = DATE_FORMAT) =>
  date ? dayjs(date).format(format) : '-'

/*
 **** Convert DD/MM/YYYY into YYYY/MM/DD
 */
export const convertFormat = (date?: string) => date?.split('/').reverse().join('/')
