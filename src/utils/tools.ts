import { IndexDataType } from '../model/indexDataType'

export const getTag = (index: number): string => {
  const fakeID: number = Math.floor(Math.random()*(999-100+1)+100)
  return `T-${index+1}${fakeID}`
}

export const padTo2Digits = (num: number): string => {
  return num.toString().padStart(2, '0')
}

export const secondsToHms = (milliseconds: number): string => {
  let seconds = Math.floor(milliseconds / 1000)
  let minutes = Math.floor(seconds / 60)
  // let hours = Math.floor(minutes / 60)

  seconds = seconds % 60
  minutes = minutes % 60
  // hours = hours % 24;

  return `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`
  // return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
  //   seconds,
  // )}`
}

export const countdown = (
  milliseconds: number, 
  textDom: string, 
  callback: () => void
) => {
  const dom = document.querySelector(textDom) as HTMLElement
  const handler = () => {
    if(milliseconds <= 0) {
      clearInterval(timer)
      callback()
    }
    dom.innerText = secondsToHms(milliseconds)
    milliseconds -= 1000
  }
  const timer = setInterval(handler, 1000)
}
