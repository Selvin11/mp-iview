
function Toast (vm, options) {
  const ctx = vm.$refs.toast
  ctx.handleShow(options)
}

Toast.hide = function (vm) {
  const ctx = vm.$refs.toast
  ctx.handleHide()
}

function Message (vm, options) {
  const ctx = vm.$refs.message
  ctx.handleHide()
  ctx.handleShow(options)
}

module.exports = {
  $Toast: Toast,
  $Message: Message
}
