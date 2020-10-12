<template>
  <div class="bg-cover">
    <Amoeba class="bg-cover-amoeba" />
    <div id="app">
      <PersonInfo />
      <div class="content">
        <Navigation />
        <div id="nav" class="dynamic-content box-border shadower">
          <transition name="fade" mode="out-in">
            <router-view />
          </transition>
        </div>
      </div>
      <Indicator />
    </div>
  </div>
</template>

<script>
import Navigation from "./views/Navigation.vue";
import PersonInfo from "./views/PersonInfo.vue";
import Indicator from "./components/Indicator.vue";
import Amoeba from "./components/Amoeba.vue";

export default {
  name: "App",
  components: {
    Navigation,
    PersonInfo,
    Indicator,
    Amoeba,
  },
};
</script>

<style lang="scss">
@import "./scss/style.scss";
@import "./scss/init.scss";
</style>
