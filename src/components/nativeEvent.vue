<template>
    <input type="text" >
    <!-- $listeners 属性里包含了作用在这个组件上的所有监听器 -->
</template>

<script>
export default {
    name: 'native-event',
    data() {
        return {

        }
    },
    created() {
        console.log(this.$listeners);
    }
}
</script>