<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <cabecera></cabecera>
    <lista></lista>
  </div>
</template>

<script>
import Cabecera from './components/Cabecera.vue'
import Lista from './components/Lista.vue'

export default {
  name: 'app',
  components: {
    Cabecera,
    Lista
  }
}
</script>