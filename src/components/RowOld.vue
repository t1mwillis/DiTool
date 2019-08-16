<template>
    <li>
        <select
            v-model='item.type'
        >
            <option disabled selected value="Choose a Component">Choose a Component</option>
            <option
                v-for="(category, key) in categories"
                :key="key"
            >
                {{ key }}
            </option>
        </select>
        <Item
            :models='categories[item.type]'
            :type='item.type'
            @handle-update='handleUpdate'
        />
        <p>{{item}}</p><button @click="removeRow">Remove me</button>
    </li>
</template>

<script>
import Item from './Item.vue'
import Categories from '../../components.json'

export default {
    name: 'Row',
    props: {
        item: Object,
        index: Number
    },
    data() {
        return {
            categories: Categories,
        }
    },
    components: {
        Item,
    },
    methods: {
        removeRow() {
            this.$emit('remove', this.index);
        },
        handleUpdate(newModel) {
            console.log(newModel);
            this.item.model = newModel;
            console.log(`prop is now ${this.item.model}`)
        }
    }
}
</script>

<style>
p {
    display: inline-block
}
</style>