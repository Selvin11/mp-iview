export function setData (vm, data) {
  Object.keys(data).forEach(key => {
    vm[key] = data[key]
  })
}
