<template>
  <div id="app">
    <Tool/>
    <div class="legal">
            <p>This compatibility checker was inspired by Shimano's E-Tube <a href="http://e-tubeproject.shimano.com/guide/#guide_list" target="_blank">Compatibility PDF</a>. All copyrights are property of their respective owners.</p>
    </div>
  </div>
</template>

<script>
import Tool from './components/Tool.vue'

export default {
  name: 'app',
  components: {
    Tool
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

body {
  margin: 0;
}

.legal {
  text-align: center;
  background: #009ad9;
  color: white;
  width: 100%;
  padding: 0 1em;
  box-sizing: border-box;
  margin-top: 1em;
}
</style>
