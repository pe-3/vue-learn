<template>
  <div id="app" >
    <!-- <bid-bind 
      :data.sync="data"
    /> -->
    <!-- .sync 修饰符的作用是，将目标prop传递进去的同时 设置更改数据的监听-->
    <!-- 更改数据要生效的前提是组件内部暴露update:prop 方法，并且 $event 为目标数据 -->
    <!-- <slot-com> -->
      <!-- 出现多个插槽，为每个slot分配单独的template -->
      <!-- <template v-slot="{data}"> -->
        <!-- 外部传入的中间内容 {{ data }} -->
      <!-- </template> -->
      <!-- 默认插槽可以不用:default，具名插槽才需要，在v-slot后等号获取插槽作用域的数据 -->
      <!-- <template v-slot:end="{data2}">{{ data2 }}</template> -->
      <!-- v-slot 只能在 template 上使用 -->
    <!-- </slot-com> -->
    <!-- 作用域插槽的内部工作原理是将你的插槽内容包裹在一个拥有单个参数的函数里 -->
    <!-- function (slotProps) {
      
    } -->
    <!-- 也就是说 v-slot 的值实际上可以是任何能够作为函数定义中的参数的 JS 表达式 -->
    <!-- 因此可以解构它 -->
    <!-- v-slot 的缩写 为 # -->
    <!-- v-bind 的缩写 为 : -->
    <!-- v-on 的缩写 为 @ -->
    <!-- 但这个缩写只在有参数的时候有效 -->
    <!-- 没参数的时候只能老老实实写回去 -->
    <!-- #加明确的插槽名作为缩写 -->
    <!-- slot-scope 的值可以接收任何有效的出现在js函数参数位置上的js表达式 -->
    <!-- <aysnc-com/> -->
    <!-- <dy-com ref="dycom"/> -->
    <!-- <inject-com/> -->

    <!-- 当出现组件间的循环依赖时，采用异步引入其中一个组件，就可以解决问题 -->
    <side-com />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      data: '',
      val: '1231',
    }
  },
  methods: {
    handler(event) {
      console.log('用户输入了');
      console.log(event);
    },
    changeData(event) {
      this.data = event.target.value;
    },
    foucs() {
    },
    appFunc() {
      console.log('这是app组件身上的方法');
    }
  },
  mounted() {
    console.log(this.$refs)
    // $refs存储了一些对 vue 元素，或者 dom元素的直接引用，引用生效要在组件被挂载之后
  },
  provide: function() {
    return {
      appFunc: this.appFunc
    }
  }
}
</script>
<style lang="stylus">

</style>
