<template>
    <li class='item'>
        <p>{{item.seriesName}} - {{item.modelNo}}<br>
            <span class="small">
                <em>{{item.categoryName}}</em>
            </span>
        </p>
        <button 
            class="remove" 
            @click="removeRow" 
            label="Remove Component"
        >  
            ❌
        </button>
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
.item {
    padding: 0.5em;
    border: 2px solid rgb(0, 154, 217);
    background-color:rgba(0, 154, 217, 0.2);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
}
p {
    margin-top: 0;
    margin-bottom: .5em;
}
span.small {
    font-size: .8em;
}
button.remove {
    font-size: 2em;
}
</style>