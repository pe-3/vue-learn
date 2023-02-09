<template>
    <div @click="handle">
        点击
    </div>
</template>

<script>
export default {
    name: "EventHandler",
    data() {
        return {

        }
    },
    methods: {
        handle(ev) {
            // EventObject
            console.log(ev);
        }
    }
    // 修饰符 once、stop、prevent、capture、self、passive
    // 也可以是按键值修饰符
    // 也可以是常用按键名修饰符 enter、tab、delete、esc、space
    // 案件修饰可连用
    // 鼠标按键修饰符 left、right、middle
}
</script>

<style>

</style>