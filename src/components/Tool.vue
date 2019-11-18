<template>
    <div>
        <h1>Di2 Compatibility Checker</h1>
        <div class="autocomplete-wrap">
        <Autocomplete
            ref="autocomplete"
            :source="this.components"
            placeholder="Search for a component..."
            :results-display="formattedDisplay"
            @selected="addItem"

        ></Autocomplete>
        </div>
        <div v-if='items.length > 0' class="components">
        
        <h2>
            Selected Components
            <button
                @click="removeAll"
            >
                Reset 🔁
            </button>
        </h2>

        <ul>
            <Row v-for="(item, index) in items" 
                :item="item"
                :index="index"
                :key="index"
                @remove="remove"
            />
        </ul>
        
        <Error 
            :items='items'
        />

        <Feature 
            :items='items'
        />
        
        </div>
    </div>
</template>

<script>
import Autocomplete from 'vuejs-auto-complete'
import Row from './Row.vue'
import Error from './Error.vue'
import Feature from './Feature.vue'
import components from '../../shimano_components.json'

export default {
  name: 'Tool',
  data() {
    return {
        items: [],
        components
    }
  },
  components : {
      Row,
      Error,
      Autocomplete,
      Feature
  },
  methods: {
    handleClick() {
    this.items.push({
        type: 'Choose a Component',
        model: 'Choose a Model'
    });
    },
    remove(itemIndex) {
    this.items.splice(itemIndex, 1);
    },
    removeAll() {
        this.items = [];
    },
    formattedDisplay(result) {
    return `${result.seriesName} - ${result.modelNo}<br> <em>${result.categoryName}</em>`
    },
    addItem(item) {
        this.items.push(item["selectedObject"]);
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

@media screen and (max-width: 968px) {
    .autocomplete-wrap, .components {
        width: 75%;
    }
}

@media screen and (max-width: 600px) {
    .autocomplete-wrap, .components {
        width: 90%;
    }
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