<template>
<div>
    <h1>Di2 Components</h1>
    <Autocomplete
        :source="this.data.categories['shifter']"
        results-display="name"
        placeholder="Search for a Di2 Part"
    ></Autocomplete>

    <button @click='handleClick'>Add a component</button>
    <ul v-if='data.items' >
        <Row v-for="(item, index) in data.items" 
            :item="item"
            :index="index"
            :key="index"
            @remove="remove"
        />
    </ul>

    <Error 
        :items='data.items'
    />
    </div>
</template>

<script>
import Autocomplete from 'vuejs-auto-complete'
import Row from './Row.vue'
import Error from './Error.vue'
import Categories from '../../components.json'

export default {
  name: 'Tool',
  data() {
      return {
          data: {
              items: [
              ],
              categories: Categories
          }
      }
  },
  components : {
      Row,
      Error,
      Autocomplete
  },
  methods: {
      handleClick() {
        this.data.items.push({
            type: 'Choose a Component',
            model: 'Choose a Model'
        });
      },
      remove(itemIndex) {
        this.data.items.splice(itemIndex, 1);
      }
  }
}
</script>

<style>
</style>