<template>
    <div>
        <h1>Di2 Components</h1>
        <div class="autocomplete-wrap">
        <Autocomplete
            ref="autocomplete"
            :source="this.data.categories"
            placeholder="Search for a Di2 Part like 'Rear Derailleur' or 'Ultegra' or 'RD-6870-SS' "
            :results-display="formattedDisplay"
            @selected="addItem"

        ></Autocomplete>
        </div>
        <div v-if='data.items.length > 0' class="components">
        
        <h2>Current Components</h2>
        <ul>
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
    </div>
</template>

<script>
import Autocomplete from 'vuejs-auto-complete'
import Row from './Row.vue'
import Error from './Error.vue'
import Categories from '../../components2.json'
import ShimanoCategories from '../../shimano_components.json'

export default {
  name: 'Tool',
  data() {
      return {
          data: {
              items: [
              ],
              categories: ShimanoCategories
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
      },
      formattedDisplay(result) {
        return `${result.modelNo} - ${result.seriesName} - ${result.categoryName} `
    },
    addItem(item) {
        this.data.items.push(item["selectedObject"]);
        // access the autocopmlete component methods from the parent
        this.$refs.autocomplete.clear();
    }

  }
}
</script>

<style>
.autocomplete-wrap, .components {
    width: 50%;
    margin: auto;
}

h2, h3, h4, h5, h6 {
    text-align: left;
}

ul {
    list-style-type: none;
    padding-left: 0;
    text-align: left;
}

ul li {
    margin-left: 0;
}
</style>