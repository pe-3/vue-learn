<template>
    <div class="aod">
        <span v-if="show">如果</span>
        <div v-else>除非</div>
        <span v-show="show">显示</span>
        <button @click="show = !show">切换</button>
        <!-- v-show 的实现很简单就是通过设置元素的display样式来显示元素 -->
        <!-- v-if则是通过注释节点进行展位，当值发生变化时用相应的节点替换注释节点 -->
        <!-- v-show有较高的初始渲染开销 -->
        <!-- v-if有较高的切换开销 -->
        <!-- 频繁切换使用v-show -->
        <!-- 在同一个元素上使用v-if和v-for时，v-for有更高的优先级 -->
    </div>
</template>

<script>
export default { 
    name: 'OptionRender',
    data() {
        return {
            show: false
        }
    },
    methods: {

    }
}
</script>