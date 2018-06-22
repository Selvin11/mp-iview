import '../lib/style.css' // weui css
import iActionsheet from './actionsheet'
import iAlert from './alert'
import iBadge from './badge'
import iButton from './button'
import iCard from './card'
import iCell from './cell'
import iCellGroup from './cell-group'
import iCheckbox from './checkbox'
import iDrawer from './drawer'
import Picker from './picker'
import Dialog from './dialog'
import Toast from './toast'
import Field from './field'
import Footer from './footer'
import iGrid from './grid'
import iGridGroup from './grid-group'
import Loadmore from './loadmore'
import Message from './message'
import Navbar from './navbar'
import NavbarPanel from './navbar-panel'
import Progress from './progress'
import Radio from './radio'
import Search from './search'
import Slider from './slider'
import Switch from './switch'

const components = [
  iActionsheet,
  iAlert,
  iBadge,
  iButton,
  iCard,
  iCell,
  iCellGroup,
  iCheckbox,
  iDrawer,
  Picker,
  Field,
  Footer,
  iGrid,
  iGridGroup,
  Loadmore,
  Message,
  Navbar,
  NavbarPanel,
  Progress,
  Radio,
  Search,
  Slider,
  Switch
]

function install (Vue) {
  // mpvue暂不支持全局 component
  components.map((component) => {
    Vue.component(component.name, component)
  })

  Vue.$dialog = Vue.prototype.$dialog = Dialog
  Vue.$toast = Vue.prototype.$toast = Toast
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const version = '1.0.0'

export {
  install,
  version,
  iActionsheet,
  iAlert,
  iBadge,
  iButton,
  iCard,
  iCell,
  iCellGroup,
  iCheckbox,
  iDrawer,
  Picker,
  Field,
  Footer,
  iGrid,
  iGridGroup,
  Loadmore,
  Message,
  Navbar,
  NavbarPanel,
  Progress,
  Radio,
  Search,
  Slider,
  Switch
}

export default {
  install,
  version
}
