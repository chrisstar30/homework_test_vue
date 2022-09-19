// 暫存假資料

import { getTag } from '../utils/tools'

const defaultAction = [
  {
    name: 'Action 1',
    score: 100,
    time: 300
  },
  {
    name: 'Action 2',
    score: 300,
    time: 500
  },
  {
    name: 'Action 3',
    score: 100,
    time: 700
  },
  {
    name: 'Action 4',
    score: 50,
    time: 300
  },
  {
    name: 'Action 5',
    score: 200,
    time: 200
  },
  {
    name: 'Action 6',
    score: 50,
    time: 250
  },
  {
    name: 'Action 7',
    score: 50,
    time: 400
  },
  {
    name: 'Action 8',
    score: 400,
    time: 100
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
    tag: getTag(0),
    name: defaultAction[0].name,
    score: defaultAction[0].score,
    time: defaultAction[0].time,
    type: typeString['rs'],
    completed: new Date().getTime()
  },
  {
    tag: getTag(1),
    name: defaultAction[1].name,
    score: defaultAction[1].score,
    time: defaultAction[1].time,
    type: typeString['rj'],
    completed: null
  },
  {
    tag: getTag(1),
    name: defaultAction[1].name,
    score: defaultAction[1].score,
    time: defaultAction[1].time,
    type: typeString['rj'],
    completed: null
  },
  {
    tag: getTag(1),
    name: defaultAction[1].name,
    score: defaultAction[1].score,
    time: defaultAction[1].time,
    type: typeString['pd'],
    completed: null
  },
  {
    tag: getTag(0),
    name: defaultAction[0].name,
    score: defaultAction[0].score,
    time: defaultAction[0].time,
    type: typeString['rs'],
    completed: new Date().getTime()
  },
  {
    tag: getTag(1),
    name: defaultAction[1].name,
    score: defaultAction[1].score,
    time: defaultAction[1].time,
    type: typeString['pd'],
    completed: null
  },
  {
    tag: getTag(2),
    name: defaultAction[2].name,
    score: defaultAction[2].score,
    time: defaultAction[2].time,
    type: typeString['pc'],
    completed: null
  },
  {
    tag: getTag(3),
    name: defaultAction[3].name,
    score: defaultAction[3].score,
    time: defaultAction[3].time,
    type: typeString['pd'],
    completed: null
  },
  {
    tag: getTag(1),
    name: defaultAction[1].name,
    score: defaultAction[1].score,
    time: defaultAction[1].time,
    type: typeString['rj'],
    completed: null
  },
  {
    tag: getTag(1),
    name: defaultAction[1].name,
    score: defaultAction[1].score,
    time: defaultAction[1].time,
    type: typeString['pd'],
    completed: null
  },
  {
    tag: getTag(4),
    name: defaultAction[4].name,
    score: defaultAction[4].score,
    time: defaultAction[4].time,
    type: typeString['rs'],
    completed: new Date().getTime()
  },
  {
    tag: getTag(5),
    name: defaultAction[5].name,
    score: defaultAction[5].score,
    time: defaultAction[5].time,
    type: typeString['pd'],
    completed: null
  },
  {
    tag: getTag(0),
    name: defaultAction[0].name,
    score: defaultAction[0].score,
    time: defaultAction[0].time,
    type: typeString['rj'],
    completed: null
  },
  {
    tag: getTag(6),
    name: defaultAction[6].name,
    score: defaultAction[6].score,
    time: defaultAction[6].time,
    type: typeString['rs'],
    completed: new Date().getTime()
  },
  {
    tag: getTag(7),
    name: defaultAction[7].name,
    score: defaultAction[7].score,
    time: defaultAction[7].time,
    type: typeString['rj'],
    completed: null
  },
  {
    tag: getTag(0),
    name: defaultAction[0].name,
    score: defaultAction[0].score,
    time: defaultAction[0].time,
    type: typeString['rj'],
    completed: null
  },
  {
    tag: getTag(7),
    name: defaultAction[7].name,
    score: defaultAction[7].score,
    time: defaultAction[7].time,
    type: typeString['rs'],
    completed: new Date().getTime()
  },
  {
    tag: getTag(0),
    name: defaultAction[0].name,
    score: defaultAction[0].score,
    time: defaultAction[0].time,
    type: typeString['rs'],
    completed: new Date().getTime()
  },
  {
    tag: getTag(0),
    name: defaultAction[0].name,
    score: defaultAction[0].score,
    time: defaultAction[0].time,
    type: typeString['rj'],
    completed: null
  }
]
