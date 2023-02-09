<template>
    <div>
        <button @click="show = !show">toggle</button>
        <template v-if="show">
            <aysnc-comp/>
        </template> 
    </div>
</template>

<script>
import Vue from 'vue'

Vue.component('aysnc-comp', function(resolve) {
    import('../com/aysncIndex.vue').then(res => resolve(res));
    // import 函数返回值是一个 promise 对象，可以通过 then 方法获取引入的组件
});

// 有加载状态的异步组件

const AsyncComponent = () => ({
    component: import('../com/aysncIndex.vue'),
    loading: { name: 'load-com', render() {return <span>加载中</span>}},
    error: { name: 'err-com', render() {return <span>出错了，请重新加载</span>}},
    delay: 4000,
    timeout: 500
})

export default {
    name: 'aysnc-com',
    data() {
        return {
            show: false
        }
    },
    components: {
        // aysncExample: () => import('../com/aysncIndex.vue')
        aysncComp: AsyncComponent
    }
}
</script>

<!-- 组件间的循环引用 -->
<!-- 对dom元素的引用 -->
<!-- 副作用的操作 -->
<!-- 模版定义替代品、真的乱糟糟的 -->
<!-- 控制更新，一个是强制更新，一个是一次性静态组件  -->