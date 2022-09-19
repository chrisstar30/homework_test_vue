// 暫存假資料

import getTag from './utils/tools'

const defaultAction = [
  {
    name: 'Action 1',
    score: 100,
    time: 50000
  },
  {
    name: 'Action 2',
    score: 300,
    time: 40000
  },
  {
    name: 'Action 3',
    score: 100,
    time: 30000
  },
  {
    name: 'Action 4',
    score: 50,
    time: 20000
  },
  {
    name: 'Action 5',
    score: 200,
    time: 10000
  },
  {
    name: 'Action 6',
    score: 50,
    time: 20000
  },
  {
    name: 'Action 7',
    score: 50,
    time: 30000
  },
  {
    name: 'Action 8',
    score: 400,
    time: 40000
  }
]

export const indexData = [
  {
    tag: getTag(),
    name: defaultAction[0].name,
    score: defaultAction[0].score,
    time: defaultAction[0].time,
    type: 'Pending',
    completed: null
  },
  {
    tag: getTag(),
    name: defaultAction[0].name,
    score: defaultAction[0].score,
    time: defaultAction[0].time,
    type: 'Pending',
    completed: null
  },
  {
    tag: getTag(),
    name: defaultAction[0].name,
    score: defaultAction[0].score,
    time: defaultAction[0].time,
    type: 'Pending',
    completed: null
  },
  {
    tag: getTag(),
    name: defaultAction[0].name,
    score: defaultAction[0].score,
    time: defaultAction[0].time,
    type: 'Pending',
    completed: null
  },
  {
    tag: getTag(),
    name: defaultAction[0].name,
    score: defaultAction[0].score,
    time: defaultAction[0].time,
    type: 'Pending',
    completed: null
  },
]