import '../lib/style.css' // weui css
import iActionsheet from './actionsheet'
import iAlert from './alert'
import iBadge from './badge'
import iButton from './button'
import iCard from './card'
import iCell from './cell'
import iRow from './row'
import iCol from './col'
import iCellGroup from './cell-group'
import iCheckbox from './checkbox'
import iDrawer from './drawer'
import iInput from './input'
import iInputNumber from './input-number'
import Picker from './picker'
import Dialog from './dialog'
import Toast from './toast'
import Footer from './footer'
import iGrid from './grid'
import iGridGroup from './grid-group'
import Message from './message'
import Navbar from './navbar'
import NavbarPanel from './navbar-panel'
import iProgress from './progress'
import iRadio from './radio'
import Search from './search'
import iSlider from './slider'
import iSwitch from './switch'
import iSpin from './spin'
import iSteps from './steps'
import iTabbar from './tabbar'
import iTabItem from './tabbar-item'
import iTabs from './tabs'
import iTab from './tab'
import iTag from './tag'

const components = [
  iActionsheet,
  iAlert,
  iBadge,
  iButton,
  iCard,
  iCell,
  iRow,
  iCol,
  iCellGroup,
  iCheckbox,
  iDrawer,
  iInput,
  iInputNumber,
  Picker,
  Footer,
  iGrid,
  iGridGroup,
  Message,
  Navbar,
  NavbarPanel,
  iProgress,
  iRadio,
  Search,
  iSlider,
  iSpin,
  iSteps,
  iTabbar,
  iTabItem,
  iTabs,
  iTab,
  iTag,
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
  iRow,
  iCol,
  iCellGroup,
  iCheckbox,
  iDrawer,
  iInput,
  iInputNumber,
  Picker,
  Footer,
  iGrid,
  iGridGroup,
  Message,
  Navbar,
  NavbarPanel,
  iProgress,
  iRadio,
  Search,
  iSlider,
  iSpin,
  iSteps,
  iTabbar,
  iTabItem,
  iTabs,
  iTab,
  iTag,
  iSwitch
}

export default {
  install,
  version
}
