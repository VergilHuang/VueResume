<template>
  <div class="contact">
    <section>
      <h1>Contact Informations</h1>
      <div class="contact-w">
        <ul class="c-info-box">
          <!-- <li class="c-line">
            <span class="c-title">Address:</span>
            <span class="c-text">新北市五股區</span>
          </li>-->
          <li class="c-line">
            <span class="c-title">Job:</span>
            <span class="c-text">前端工程師</span>
          </li>
          <li class="c-line">
            <span class="c-title">Phone:</span>
            <span class="c-text">+886 978-260-192</span>
          </li>
          <li class="c-line">
            <span class="c-title">E-mail:</span>
            <span class="c-text">zaq9716643@gmail.com</span>
          </li>
          <li class="c-line">
            <span class="c-title">Github:</span>
            <span class="c-text">https://github.com/VergilHuang</span>
          </li>
        </ul>
      </div>
    </section>
    <!-- <section>
      <h3>Workshop Position</h3>
      <div class="c-map shadower">
        <GoogleMap />
      </div>
    </section>-->
  </div>
</template>

<script>
// import GoogleMap from "../components/GoogleMap.vue";

export default {
  name: "Contact",
  components: {
    // GoogleMap,
  },
};
</script>

<style lang="scss">
@import "../scss/_contact.scss";
</style>
