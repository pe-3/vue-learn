<template>
    <div>
        <ul>
            <li 
                v-for="item in datas"
                :key="item"
            >{{ item }}</li>
        </ul>
        <button @click="handle">@</button>
        {{ objs.foo }}
    </div>
</template>

<script>
export default {
    name: 'side-com',
    data() {
        return {
            datas: [
                1,
                2,
                3
            ],
            objs: {
                foo: 'bar'
            }
        }
    },
    methods: {
        handle() {
            this.datas[0] += 1;            
            this.$forceUpdate();
        }
    }
}
// $forceUpdate 用来强制 更新
// v-once 创建低开销静态组件，只在初次创建的时候计算一次
// 之后都是静态不会在刷新的了，也许依赖的数据是改变的，但是虚拟dom和真实dom都是不再变化了的

</script>