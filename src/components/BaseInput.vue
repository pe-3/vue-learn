<template>
    <label>
        {{ label }}
        <input 
            v-bind="$attrs"
            :value="value"
            @input="$emit('input', $event.target.value)"
        />
    </label>
</template>

<script>
export default {
    name: 'base-input',
    props: {
        value: {
            type: String
        },
        label: {
            type: String
        }
    },
    inheritAttrs: false
}
</script>