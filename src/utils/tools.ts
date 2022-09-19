export const getTag = (index: number): string => {
  const now: string = new Date().getTime().toString()
  const nowLength: number = now.length
  return `T-${index}${now[nowLength]}${now[nowLength - 1]}${now[nowLength - 2]}`
}