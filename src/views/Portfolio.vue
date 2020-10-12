<template>
  <div class="portfolio">
    <section>
      <h1>Online Website</h1>
      <div class="portfolio-w">
        <PortfolioWindow>
          <a class="portfolio-link" href="https://taotalk.tycg.gov.tw/" target="__blank" title="桃園市市政信箱網站">
            <div class="w-pic">
              <img src="../assets/rsz_tycg.png" alt="桃園市市政信箱網站" />
              <div class="hover-item"><i class="fas fa-link"></i></div>
            </div>
            <div class="w-intro">
              <p class="w-title">桃園市市政信箱</p>
              <p class="w-subtext">桃園市市民建議市政的入口網站，包含大量動態項目與內容，與管理系統緊密連動。</p>
            </div>
          </a>
        </PortfolioWindow>
        <PortfolioWindow>
          <a class="portfolio-link" href="https://crpd.sfaa.gov.tw/" target="__blank" title="身心障礙者權利公約網站">
            <div class="w-pic">
              <img src="../assets/rsz_cypd.png" alt="身心障礙者權利公約網站" />
              <div class="hover-item"><i class="fas fa-link"></i></div>
            </div>
            <div class="w-intro">
              <p class="w-title">身心障礙者權利公約</p>
              <p class="w-subtext">身心障礙者在了解相關權益的入口網站，符合國家2A級無障礙標章。</p>
            </div>
          </a>
        </PortfolioWindow>
      </div>
      <h1>Fun Work</h1>
      <div class="portfolio-w">
        <h3>Indicator with pure 3D CSS animations.</h3>
        <PortfolioWindow :width="'100%'">
          <iframe
            height="379"
            style="width: 100%;"
            scrolling="no"
            title="3d_animation_wave"
            src="https://codepen.io/zaq9716643/embed/aXqGev?height=379&theme-id=light&default-tab=css,result"
            frameborder="no"
            loading="lazy"
            allowtransparency="true"
            allowfullscreen="true"
          >
            See the Pen <a href="https://codepen.io/zaq9716643/pen/aXqGev">3d_animation_wave</a> by Vergil (<a
              href="https://codepen.io/zaq9716643"
              >@zaq9716643</a
            >) on <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </PortfolioWindow>
        <h3>Large data displaid batch and optimized</h3>
        <PortfolioWindow :width="'100%'">
          <iframe
            height="379"
            style="width: 100%;"
            scrolling="no"
            title="Large data display(batch &amp; optimized)"
            src="https://codepen.io/zaq9716643/embed/preview/dyPoNQd?height=265&theme-id=light&default-tab=js,result"
            frameborder="no"
            loading="lazy"
            allowtransparency="true"
            allowfullscreen="true"
          >
            See the Pen
            <a href="https://codepen.io/zaq9716643/pen/dyPoNQd">Large data display(batch &amp; optimized)</a> by Vergil
            (<a href="https://codepen.io/zaq9716643">@zaq9716643</a>) on <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </PortfolioWindow>
      </div>
    </section>
  </div>
</template>

<script>
import PortfolioWindow from "../components/PortfolioWindow";

export default {
  name: "Portfolio",
  components: {
    PortfolioWindow,
  },
};
</script>

<style lang="scss">
@import "../scss/_portfolio.scss";
</style>