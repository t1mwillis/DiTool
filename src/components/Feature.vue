<template>
  <div>
      <h3>Features</h3>
      <ul class="features"
        v-show="hasNewWirelessUnit || hasNewBattery"
      >
          <li class="feature"
              v-show="hasNewBattery"
          >
              Synchro shift will be supported by your system.
          </li>
          <li
              v-show="hasNewWirelessUnit && hasNewBattery"
          >
              Your system will communicate with the E-Tube Mobile App.
          </li>
      </ul>
      <p
        v-show="!(hasNewWirelessUnit && hasNewBattery)"
      >
        If your system supports newer features those show here!
      </p>
  </div>
</template>

<script>
import { find } from '../utils/index.js'

export default {
  name: 'Feature',
  props: {
      items: {
          type: Array,
          required: true,
      },
      default: []
  },
  computed : {
    hasNewWirelessUnit() {
        return find(this.items, "modelNo", "EW-WU101")
            || find(this.items, "modelNo", "EW-WU111")
    },
    hasNewBattery() {
        return find(this.items, "modelNo", "BT-DN110-A")
            || find(this.items, "modelNo", "BM-DN110")
    }
  }
}
</script>

<style scoped>

</style>