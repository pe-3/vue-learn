<template>
    <div>
        <input 
            type="checkbox"
            :checked="checked"
            @change="$emit('change', $event.target.checked)"
        />
    </div>    
</template>

<script>
export default {
    name: 'base-checkbox',
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        checked: {
            type: Boolean
        }
    },
    data() {
        return {
            
        }
    }
}
</script>

<style>

</style>