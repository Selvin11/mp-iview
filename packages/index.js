import iActionsheet from './actionsheet'
import iAddress from './address'
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
import iKeyboard from './keyboard'
import iPicker from './picker'
import Dialog from './dialog'
import Toast from './toast'
import iGrid from './grid'
import iGridGroup from './grid-group'
import Message from './message'
import iProgress from './progress'
import iRadio from './radio'
import iSlider from './slider'
import iSwitch from './switch'
import iSpin from './spin'
import iSteps from './steps'
import iTabbar from './tabbar'
import iTabItem from './tabbar-item'
import iTabs from './tabs'
import iTab from './tab'
import iTag from './tag'
import iUploader from './uploader-base'

const components = [
  iActionsheet,
  iAddress,
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
  iKeyboard,
  iPicker,
  iGrid,
  iGridGroup,
  iProgress,
  iRadio,
  iSlider,
  iSpin,
  iSteps,
  iTabbar,
  iTabItem,
  iTabs,
  iTab,
  iTag,
  iUploader,
  iSwitch
]

function install (Vue) {
  // mpvue暂不支持全局 component
  components.map((component) => {
    Vue.component(component.name, component)
  })

  Vue.$dialog = Vue.prototype.$dialog = Dialog
  Vue.$message = Vue.prototype.$message = Message
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
  iAddress,
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
  iKeyboard,
  iPicker,
  iGrid,
  iGridGroup,
  iProgress,
  iRadio,
  iSlider,
  iSpin,
  iSteps,
  iTabbar,
  iTabItem,
  iTabs,
  iTab,
  iTag,
  iUploader,
  iSwitch
}

export default {
  install,
  version
}
