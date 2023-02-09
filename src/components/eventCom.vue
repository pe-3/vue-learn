<template>
    <div>

    </div>
</template>

<script>
export default {
    name: 'event-com',
    created() {
        // 通过程序化的事件监听机制，可以将同一套逻辑集中在同一个 hook 里
        this.$once('hook:beforeDestroy', function() {

        });
    }
}
</script>

<style>

</style>