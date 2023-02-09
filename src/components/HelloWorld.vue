<template>
  <div class="hello">
    这是我的第一个组件 {{ val }}
    <input type="text" v-model="text">
    <button @click="add">添加</button>
  </div> 
  <!-- 模版语法 -->
  <!-- 1. 它是声明式的 -->
  <!-- 2. 不同于编程式的jsx，在模版语法里式没有办法写逻辑，
    只能声明式的写一些指令比如 v-for、v-if、v-show、v-bind、v-model等。
    而jsx则支持所有的js语法，并且能够调用所有的内置函数
   -->
  <!-- 3. jsx中的插值使用的是上下文中的变量，vue中则使用的是vue实例data对象上的属性 -->
  <!-- 4. template指令模式是更加便捷的书写渲染方式，但是也存在一些局限性，在一些逻辑复杂的场景，指令模式可能不如jsx方便。 -->
  <!-- 5. jsx编码逻辑性比较强，能比较容易的理解代码。模版语法的逻辑则比较分散，不好阅读 -->
  <!-- 6. vue中使用jsx的地方是暴露vm中的render方法 -->
</template>

<script>

export default {
  name: 'HelloWorld',
  data() {
    return {
      val: 'init',
      text: 'text'
    }
  },
  /**
   * 生命周期钩子大全，并且在这个期间vue做了些什么
   */
  beforeCreate() {
    console.log('开始执行new Vue');
    console.log('初始化好了事件和生命周期');
    console.log('before-create');
  },
  created() {
    console.log('初始化注入依赖和响应式');
    console.log('created');
  },
  beforeMount() {
    console.log('编译好模版交给渲染函数');
    console.log('before-mount');
  },
  mounted() {
    console.log('将el替换为创建好的vue模型对象');
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('数据发生了变化');
    console.log('before-update');
  },
  updated() {
    console.log('虚拟dom重新渲染之后真实dom修订');
    console.log('updated');
  },
  beforeDestroy() {
    console.log('before-destory');
  },
  destroyed() {
    console.log('销毁所有监听函数，子组件以及事件监听');
    console.log('destoryed');
  },
  methods: {
    add() {
      this.val += this.text;
    }
  },
  // 计算属性
  computed: {
    combine() {
      // 计算属性在首次计算的时候会收集相关的依赖
      // 相比于监听属性一个方法只能监听一个属性，如果要通过两个依赖计算出一个新值
      // 那么监听属性就要写两个方法分别监听对应的属性
      // 在这个需求上，计算属性的开发效率是比较高的
      return this.val + this.text;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
