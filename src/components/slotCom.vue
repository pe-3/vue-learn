<template>
    <!-- slot 是内容分发的 api -->
    <div>
        标题：
        <slot data="123123">
            默认内容
        </slot>
        结尾
        <slot name="end" data2="gdasd"></slot>
    </div>    
</template>

<script>
export default {
    name: 'slot-com',
    data() {
        return {

        }
    },

}
</script>

<style lang="stylus" scoped>
div
    border 1px solid cyan
    padding 10px
    margin-top 10px
    color red
</style>