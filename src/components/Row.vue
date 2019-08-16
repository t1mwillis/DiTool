<template>
    <li class='item'>
        <p>✅ {{item.name}} - {{item.modelNo}}&nbsp;&nbsp;<button @click="removeRow" label="Remove Component">Remove</button></p>
        <p><span class="small"><em>{{item.seriesName}}</em></span></p>
    </li>
</template>

<script>

export default {
    name: 'Row',
    props: {
        item: Object,
        index: Number
    },
    methods: {
        removeRow() {
            this.$emit('remove', this.index);
        }
    }
}
</script>

<style>
p {
    margin-top: 0;
    margin-bottom: .5em;
}
 span.small {
     font-size: .8em;
 }

</style>

:tra