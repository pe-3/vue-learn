import Vue from 'vue'
import App from './App.vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

Vue.config.productionTip = false

// 注册组件

const el_button_style = {
  background: 'red',
  fontSize: '12px',
  color: 'cyan'
};

Vue.component('el-button', {
  render() {
    return (
      <button
        style={el_button_style}
        onClick={() => this.$emit('click')}
      >
        按钮
      </button>
    )
  }
});




const requireComponent = require.context(
  './components',
  false,
  /.vue$/
);

requireComponent.keys().forEach(fileName=> {
  const ComName =  
    fileName
    .split('/')
    .pop()
    .split('.')
    .shift();
  const comConfig = requireComponent(fileName);
  Vue.component(
    upperFirst(camelCase(ComName)),
    comConfig.default || comConfig
  );
})

new Vue({
  render: h => h(App),
  data() {
    return {
      foo: 'bar'
    }
  },
  methods: {
    print(str) {
      console.log(str);
    }
  }
}).$mount('#app');
