// 暫存假資料
import { getTag } from '../utils/tools'

// time 單位是毫秒
const defaultAction = [
  {
    name: 'Action 1',
    score: 100,
    time: 9000
  },
  {
    name: 'Action 2',
    score: 300,
    time: 60000
  },
  {
    name: 'Action 3',
    score: 100,
    time: 300000
  },
  {
    name: 'Action 4',
    score: 50,
    time: 60000
  },
  {
    name: 'Action 5',
    score: 200,
    time: 60000
  },
  {
    name: 'Action 6',
    score: 50,
    time: 120000
  },
  {
    name: 'Action 7',
    score: 50,
    time: 60000
  },
  {
    name: 'Action 8',
    score: 400,
    time: 60000
  }
]

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
    type: typeString['pc'],
    completed: true,
    updatedAt: new Date().getTime(),
    createdAt: new Date().getTime()
}
]
