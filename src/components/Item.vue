<template>
    <select
        v-if='models'
        v-model='chosenModel'
        @change='handleUpdate'
    >
        <option 
            v-for="model in this.models"
            :key="model.name"
        >
        {{model.modelNo}}
        </option>
    </select>
</template>

<script>
import Categories from '../../components.json'

export default {
    Name : 'Item',
    props: {
        models: Array,
        type: String
    },
    data(){
      return {
        chosenModel: this.model
      }
    },
    methods : {
        handleUpdate() {
            this.$emit('handle-update', this.chosenModel)
        }
    },
}

</script>

<style>
</style>