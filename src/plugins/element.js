/* eslint-disable */
import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// 使用的时候需要全局挂载
Vue.prototype.$message = Message
