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
    <Indicator/>
  </div>
</template>

<script>
import Navigation from './views/Navigation.vue';
import PersonInfo from './views/PersonInfo.vue';
import Indicator from './components/Indicator.vue';

export default {
  name: 'App',
  computed:{
  },
  components:{
    Navigation,
    PersonInfo,
    Indicator
  },
}

</script>

<style lang="scss">
  @import './scss/style.scss';
  @import './scss/init.scss';
</style>
