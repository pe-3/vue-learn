<template>
    <div>
        <ul>
            <li 
                v-for="{message}, index of items" 
                :key="index"
            >
                <!-- 在 v-for 块中，在元素包裹里是可以使用 v-for 指令读取的任何值的 -->
                <!-- 在 v-for 所在元素上，所有的 attr 都可以使用 v-for 指令读取的值 -->
                {{index}} {{message}}
            </li>
        </ul>
        <button @click="addEl(window.prompt('请输入元素内容'))">添加元素</button>
    </div>
</template>

<script>
export default {
    name: 'listRender',
    data() {
        return {
            items: [
                { message: 'Foo' },
                { message: 'Bar' }
            ],
            // 数组上的方法被包裹过 push、pop、shift、unshfit、splice、sort、reverse
            // 基本上这些能够改变原数组的方法都被包裹过
            // 非变更方法有 filter、concat、slice
            // 在使用非变更方法时，可以使用新返回的数据直接替换旧数组
            window
            // 用相同元素的数组去替换原来的的数组时非常高效的操作
        }
    },
    methods: {
        addEl(msg) {
            this.items.push({message: msg});
        }
    }
}
</script>

<style>

</style>