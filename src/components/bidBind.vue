<template>
    <div>
        {{ data }}
        <input type="text" @input="$emit('update:data', $event.target.value)">
    </div>
</template>

<script>
export default {
    name: 'bid-bind',
    props: {
        data: String,
    }
}
</script>