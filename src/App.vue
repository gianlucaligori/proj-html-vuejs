<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
import { store } from './store'

export default {
  data() {
    return {
      store,
    }
  },

  components: {
    AppHeader,
    AppMain,
    AppFooter,
  }
}

</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>



<style lang="scss">
// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

@use "./assets/styles/general";
@use "./assets/styles/_partials/reset" as *;
</style>
