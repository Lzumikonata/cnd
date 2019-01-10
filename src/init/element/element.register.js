import Vue from 'vue'
import {
  Checkbox,
  Message,
  Select,
  Button,
  Option,
  Input,
  Form,
  FormItem,
  Dialog,
  Row,
  Col,
} from 'element-ui'

const eleArray = [
  Checkbox,
  Select,
  Button,
  Option,
  Input,
  Form,
  FormItem,
  Dialog,
  Row,
  Col
]
for(let i of eleArray) {
  Vue.use(i)
}
Vue.prototype.$message = Message;

export default Vue