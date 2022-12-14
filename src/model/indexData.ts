// 暫存假資料
import { getTag } from '../utils/tools'
import { defaultAction } from './defaultAction'

// 模擬第一筆資料創建時間
let nowTime = Number(localStorage.getItem('first-time'))
if (localStorage.getItem('first-time') === null) {
  nowTime = new Date().getTime()
  localStorage.setItem('first-time', nowTime.toString())
}

// Pending, Processing, Resolved, Rejected
enum typeString {
  pd = "Pending",
  pc = "Processing",
  rs = "Resolved",
  rj = "Rejected",
}

const fakeData = [
  {
    _id: 0,
    tag: getTag(0),
    name: defaultAction[0].name,
    score: defaultAction[0].score,
    time: defaultAction[0].time,
    type: typeString['rs'],
    completed: true,
    updatedAt: nowTime,
    createdAt: nowTime
  },
  {
    _id: 1,
    tag: getTag(1),
    name: defaultAction[1].name,
    score: defaultAction[1].score,
    time: defaultAction[1].time,
    type: typeString['rj'],
    completed: false,
    updatedAt: nowTime,
    createdAt: nowTime
  },
  {
    _id: 2,
    tag: getTag(2),
    name: defaultAction[0].name,
    score: defaultAction[0].score,
    time: defaultAction[0].time,
    type: typeString['pd'],
    completed: false,
    updatedAt: nowTime,
    createdAt: nowTime
  },
  {
    _id: 3,
    tag: getTag(3),
    name: defaultAction[2].name,
    score: defaultAction[2].score,
    time: defaultAction[2].time,
    type: typeString['rs'],
    completed: true,
    updatedAt: nowTime,
    createdAt: nowTime
  },
  {
    _id: 4,
    tag: getTag(4),
    name: defaultAction[3].name,
    score: defaultAction[3].score,
    time: defaultAction[3].time,
    type: typeString['pd'],
    completed: false,
    updatedAt: nowTime,
    createdAt: nowTime
  },
  {
    _id: 5,
    tag: getTag(5),
    name: defaultAction[0].name,
    score: defaultAction[0].score,
    time: defaultAction[0].time,
    type: typeString['rj'],
    completed: false,
    updatedAt: nowTime,
    createdAt: nowTime
  },
  {
    _id: 6,
    tag: getTag(6),
    name: defaultAction[5].name,
    score: defaultAction[5].score,
    time: defaultAction[5].time,
    type: typeString['rj'],
    completed: false,
    updatedAt: nowTime,
    createdAt: nowTime
  },
  {
    _id: 7,
    tag: getTag(7),
    name: defaultAction[0].name,
    score: defaultAction[0].score,
    time: defaultAction[0].time,
    type: typeString['rs'],
    completed: true,
    updatedAt: nowTime,
    createdAt: nowTime
  },
  {
    _id: 8,
    tag: getTag(8),
    name: defaultAction[6].name,
    score: defaultAction[6].score,
    time: defaultAction[6].time,
    type: typeString['rj'],
    completed: false,
    updatedAt: nowTime,
    createdAt: nowTime
  },
  {
    _id: 9,
    tag: getTag(9),
    name: defaultAction[0].name,
    score: defaultAction[0].score,
    time: defaultAction[0].time,
    type: typeString['pd'],
    completed: false,
    updatedAt: nowTime,
    createdAt: nowTime
  },
  {
    _id: 10,
    tag: getTag(10),
    name: defaultAction[7].name,
    score: defaultAction[7].score,
    time: defaultAction[7].time,
    type: typeString['rs'],
    completed: true,
    updatedAt: nowTime,
    createdAt: nowTime
  },
  {
    _id: 11,
    tag: getTag(11),
    name: defaultAction[2].name,
    score: defaultAction[2].score,
    time: defaultAction[2].time,
    type: typeString['pd'],
    completed: false,
    updatedAt: nowTime,
    createdAt: nowTime
  },
  {
    _id: 12,
    tag: getTag(12),
    name: defaultAction[0].name,
    score: defaultAction[0].score,
    time: defaultAction[0].time,
    type: typeString['rs'],
    completed: true,
    updatedAt: nowTime,
    createdAt: nowTime
  },
  {
    _id: 13,
    tag: getTag(13),
    name: defaultAction[0].name,
    score: defaultAction[0].score,
    time: defaultAction[0].time,
    type: typeString['pd'],
    completed: false,
    updatedAt: nowTime,
    createdAt: nowTime
  },
  {
    _id: 14,
    tag: getTag(14),
    name: defaultAction[0].name,
    score: defaultAction[0].score,
    time: defaultAction[0].time,
    type: typeString['rj'],
    completed: false,
    updatedAt: nowTime,
    createdAt: nowTime
  }
]


let newData
if(localStorage.getItem('IndexState') !== null) 
  newData = JSON.parse(localStorage.getItem('IndexState') as string)
else 
  newData = fakeData
export const indexData = newData
