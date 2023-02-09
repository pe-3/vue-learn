<template>
    <div>

    </div>
</template>

<script>
export default {
    name: 'inject-com',
    data() {
        return {

        }
    },
    inject: ['appFunc'],
    created() {
        this.appFunc();
    }
}
    
</script>
