<template>
    <div>
        123123
        <recur-com v-if="val > 0" :val="val - 1"/>
        <span v-else>哦哦哦</span>
    </div>
</template>

<script>
export default {
    name: 'recur-com',
    data() {
        return {
        }
    },
    props: {
        val: Number
    }
}
</script>