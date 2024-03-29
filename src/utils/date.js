export const readableWeekDay = day => {
  const weekDays = {
    0: '周日',
    1: '周一',
    2: '周二',
    3: '周三',
    4: '周四',
    5: '周五',
    6: '周六'
  }
  return weekDays[day]
}
