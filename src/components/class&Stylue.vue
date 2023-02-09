<template>
    <!-- class -->
    <div 
        class="app"
        :class="classObj"
    >
        <button @click="addClass" :style="style">添加类名</button>
    </div>
</template>

<script>
export default {
    name:'ClassAndStyle',
    data() {
        return {
            classObj: {
                active: true,
                plainText: false
            },
            style: [{
                backgroundColor: 'cyan',
                fontSize:'12px'
            },  {
                color:'red',
                transform: 'translate(10px, 10px)'
            }]
        }
    },
    created() {
        console.log(this);
    },
    methods: {
        addClass() {
            this.classObj.plainText = true;
        }
    }
}
</script>

<style lang="stylus" scoped>

size(w, h = w)
  width w
  height h

.app
    size 100px
    background red


</style>