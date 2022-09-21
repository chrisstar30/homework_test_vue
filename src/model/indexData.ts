// 暫存假資料
import { getTag } from '../utils/tools'
import { defaultAction } from './defaultAction'

// Pending, Processing, Resolved, Rejected
enum typeString {
  pd = "Pending",
  pc = "Processing",
  rs = "Resolved",
  rj = "Rejected",
}

export const indexData = [
  {
    _id: 0,
    tag: getTag(0),
    name: defaultAction[0].name,
    score: defaultAction[0].score,
    time: defaultAction[0].time,
    type: typeString['pd'],
    completed: false,
    updatedAt: new Date().getTime(),
    createdAt: new Date().getTime()
}
]
