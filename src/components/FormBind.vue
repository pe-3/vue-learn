<template>
    <div>
        <input type="text" v-model="text">
        <!-- v-model 负责监听用户输入事件并更新数据 -->
        {{ text }}
        <input
            type="checkbox"
            v-model="toggle"
            true-value="yes"
            false-value="no"
        >
        <!-- v-model也有一些修饰符 lazy、number、trim -->
        {{ toggle }}
    </div>
</template>

<script>
export default {
    name: 'FormBind',
    data() {
        return {
            text: '', 
            toggle: true
        }
    }
}
</script>

<style>

</style>