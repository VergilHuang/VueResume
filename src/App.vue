<template>
  <div id="app">
    <PersonInfo/>
    <div class="content">
      <Navigation/>
      <div id='nav' class="dynamic-content box-border shadower">
        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from './views/Navigation.vue';
import PersonInfo from './views/PersonInfo.vue';



export default {
  name: 'App',
  computed:{
  },
  components:{
    Navigation,
    PersonInfo
  },
}

</script>

<style lang="scss">
  @import './scss/style.scss';
  @import './scss/init.scss';
</style>
