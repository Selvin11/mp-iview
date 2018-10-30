export function trimZero (val) {
  val = String(val)
  val = val ? parseFloat(val.replace(/^0+/g, '')) : ''
  val = val || 0
  val = val + ''
  return val
}

export function addZero (val) {
  val = String(val)
  return val.length < 2 ? '0' + val : val
}

export function isLeapYear (year) {
  return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0
}

export function getMaxDay (year, month) {
  year = parseFloat(year)
  month = parseFloat(month)
  if (month === 2) {
    return isLeapYear(year) ? 29 : 28
  }
  return [4, 6, 9, 11].indexOf(month) >= 0 ? 30 : 31
}
