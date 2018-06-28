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
import iInput from './input'
import iInputNumber from './input-number'
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
import iProgress from './progress'
import iRadio from './radio'
import Search from './search'
import Slider from './slider'
import iSwitch from './switch'
import iSpin from './spin'
import iSteps from './steps'

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
  iInput,
  iInputNumber,
  Picker,
  Field,
  Footer,
  iGrid,
  iGridGroup,
  Loadmore,
  Message,
  Navbar,
  NavbarPanel,
  iProgress,
  iRadio,
  Search,
  Slider,
  iSpin,
  iSteps,
  iSwitch
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
  iInput,
  iInputNumber,
  Picker,
  Field,
  Footer,
  iGrid,
  iGridGroup,
  Loadmore,
  Message,
  Navbar,
  NavbarPanel,
  iProgress,
  iRadio,
  Search,
  Slider,
  iSpin,
  iSteps,
  iSwitch
}

export default {
  install,
  version
}
