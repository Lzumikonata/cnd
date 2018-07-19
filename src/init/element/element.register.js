import Vue from 'vue'
import {
  Checkbox,
  Message,
  Select,
  Button, Option,
  Input,
  Form,
  FormItem,
} from 'element-ui'

Vue.use(Checkbox)
Vue.use(Select)
Vue.use(Button)
Vue.use(Option)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.prototype.$message = Message;

export default Vue