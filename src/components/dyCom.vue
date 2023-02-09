<template>
    <div>
        <button 
            v-for="tab in tabs"
            :key="tab"
            @click="curTab = tab"
            ref="btn"
        >
            {{ tab }}
        </button>
        <input type="text" ref="ipt">
        <Keep-alive>
            <component :is="curComponent" :class="curTab" />
        </Keep-alive>
        <!-- is 属性用在 vue的component组件上，值可以为组件的name，也可以为 vue 元素的配置对象-->
        <!-- property 和 attr 的最大的区别是， prop是直接在dom对象上的，而 attr 则是直接出现在 html 元素上的。
            也就是说位置不同。也许他两是一一对应的，也许不是，也许 prop 是 attr 加工后的内容 -->
    </div>    
</template>

<script>
import Vue from 'vue'

Vue.component("tab-home", {
  render() {
    return <input />
  }
});

Vue.component("tab-posts", {
  render() {
    return <div>Posts component</div>
  }
});

Vue.component("tab-archive", {
  render() {
    return <div>Archive component</div>
  }
});


export default {
    name: 'dy-com',
    data() {
        return {
            tabs: [
                'home',
                'posts',
                'archive'
            ],
            curTab: 'home'
        }
    },
    computed: {
        curComponent() {
            return `tab-${this.curTab}`;
        }
    },
    created() {
      this.$root.print('这是一句胡话');
      console.log(this.$parent.val);
      // $root 指向 new Vue 根元素实例
      // $parent 指向 当前组件的父级组件
      console.log(this.$refs.btn);
    },
    mounted() {
      // ref 只有在组件挂载之后有效
      console.log(this.$refs.btn)
    },
    methods: {
      focus() {
        this.$refs.ipt.focus();
      }
    }
}
</script>

<!-- properties 和 attributes 的区别 -->
<!-- 
    After the changes made in jQuery 1.6.1, I have been trying to define the difference between properties and attributes in HTML.

    Looking at the list on the jQuery 1.6.1 release notes (near the bottom), it seems one can classify HTML properties and attributes as follows:

    Properties: All which either has a boolean value or that is UA calculated such as selectedIndex.

    Attributes: 'Attributes' that can be added to a HTML element which is neither boolean nor containing a UA generated value.
 -->