<template>
  <div class="about">
    <section>
      <h1>About me</h1>
      <p class="about-text">嗨，我是Vergil。</p>
      <!-- <p class="about-text">"不管到哪裡，都要找到屬於自己的目標，並盡可能做到最好。"</p>
      <br />
      <p class="about-text">2015/3 ~ 2018/4， 采聲科技</p>
      <p class="about-text">以三人小組推廣與研發SBeacon產品，兩年內拿到並完成了近20,000,000的合作簽約。之後轉職前端工程師，獨立完成了3個中型專案。</p>
      <p class="about-te">2019/4 ~ 2020/5， 吉聯數位科技娛樂有限公司</p>
      <p class="about text">依照產品需求，打造了可高效處理上百支外觀結構各異的web app專案架構，實現所有資源檔獨立且統一管理，大大減少了佈署成本與專案管理成本。</p>-->

      <!-- <p
        class="about-text"
      >1997年，隨家庭離開台灣前往中國大陸深圳生活，親眼見證大陸的經濟崛起。後來回到台灣就讀中原大學。11年的大陸生活經驗，鑄就了我無與倫比的適應能力。</p> -->
      <p class="about-text">
        2008年，大學就讀工業與系統工程科系。在一次C語言的課程中喜歡上了編程這件事，後來修習了自動化倉儲系統編程與自走車設計並參加了校際比賽獲得第三名，也從此喜歡上了編程的道路。
      </p>
      <p class="about-text">
        2015年，在台北市一家科技公司擔任
        <b>iOS工程師</b>，跟著小組成員一起設計了兩款基於藍牙功能，用於自動同步Web
        database資料與硬體信標資料的企業版App，與一款基於藍牙信標的定點公車服務App。第二年開始負責產品部門管理工作，同時全面接手網站系統開發部門的
        <b>網頁前端開發工作</b>與部分的後端架構設計，進修過SSCP網路資訊安全課程，了解網路攻防基礎。開發過
        <a class="t-link" href="https://taotalk.tycg.gov.tw/" target="_blank">桃園市市政信箱網站</a>、
        <a class="t-link" href="https://crpd.sfaa.gov.tw/" target="_blank">CRPD身心障礙者權利公約網站</a
        >與部分相關的內部系統。
      </p>

      <p class="about-text">
        2019年，在吉聯數位擔任前端團隊主管，依照產品需求，打造了可高效處理上百支外觀結構各異的web
        app專案架構，實現所有資源檔獨立且統一管理，大大減少了佈署成本與專案管理成本。
      </p>
    </section>
    <section>
      <h1>My Service</h1>
      <div>
        <Services v-for="service in services_data" :key="service.id" :service="service" />
      </div>
    </section>
    <section>
      <h1>My Skills</h1>
      <div>
        <SkillBox
          v-for="skill_bd in skills_data"
          :key="skill_bd.id"
          :catename="skill_bd.cate_name"
          :skills="skill_bd.skills"
        />
      </div>
    </section>
  </div>
</template>

<script>
import Services from "../components/Services.vue";
import SkillBox from "../components/SkillBox.vue";

export default {
  name: "About",
  data: function () {
    return {
      services_data: [
        {
          id: 1,
          icon: "desktop",
          title: "Web Development",
          text:
            "Web開發經驗兩年，曾獨立完成兩個中型專案，進修過SSCP網路安全課程。擅長RWD技術，設計自適應網站。熟知網頁構成技術，擅長優化網頁，優化首頁生成速度與網頁的瀏覽效率。使用Work-flow優化工具，標準化上線流程。",
        },
        {
          id: 2,
          icon: "people-carry",
          title: "Cross-functional Cooperation",
          text:
            "跨領域合作能力，擁有行動端與網頁前端技術能力並且熟知後端與網路架構運行原理。曾兼任技術型PM，可勝任大部分跨部門的合作工作。",
        },
        {
          id: 3,
          icon: "universal-access",
          title: "Accessbility Design",
          text: "熟知無障礙網站設計流程，為無障礙人士設計好用的網站。設計的網站曾通過國家2A等級無障礙標章。",
        },
        {
          id: 4,
          icon: "eye",
          title: "Grouth Hacker",
          text:
            "喜歡研究分析產品的變更與流量變化的關係。依照使用者被動資料反饋，與團隊激盪假定優化或變更重點。經過週期性實驗，以低成本換取明顯的流量成長率。",
        },
      ],
      skills_data: [
        {
          id: 1,
          cate_name: "Front-end",
          skills: [
            { id: 1, title: "Javascript", percentage: 92 },
            { id: 2, title: "HTML5", percentage: 88 },
            { id: 3, title: "CSS (SCSS)", percentage: 93 },
          ],
        },
        {
          id: 2,
          cate_name: "Front-end Framework",
          skills: [
            { id: 1, title: "Bootstrap", percentage: 83 },
            { id: 2, title: "W3CSS", percentage: 85 },
            { id: 3, title: "React", percentage: 92 },
            { id: 4, title: "Angular", percentage: 73 },
            { id: 5, title: "Vue", percentage: 79 },
            { id: 6, title: "jQuery", percentage: 92 },
          ],
        },
        {
          id: 3,
          cate_name: "Mobile Phone",
          skills: [
            { id: 1, title: "Objective-C", percentage: 70 },
            { id: 2, title: "Swift", percentage: 30 },
            { id: 3, title: "Java", percentage: 62 },
          ],
        },
        {
          id: 4,
          cate_name: "Version Control",
          skills: [
            { id: 1, title: "Git", percentage: 92 },
            { id: 2, title: "SVN", percentage: 58 },
            { id: 3, title: "Harvest", percentage: 50 },
          ],
        },
        {
          id: 5,
          cate_name: "Back-end",
          skills: [
            { id: 1, title: "Java", percentage: 62 },
            { id: 2, title: "SQL", percentage: 58 },
            { id: 3, title: "Python", percentage: 48 },
            { id: 4, title: "Golang", percentage: 28 },
          ],
        },
        {
          id: 6,
          cate_name: "Systems",
          skills: [
            { id: 1, title: "Windows", percentage: 73 },
            { id: 2, title: "Mac (Linux)", percentage: 95 },
            { id: 3, title: "Ubuntu (Linux)", percentage: 78 },
          ],
        },
      ],
    };
  },
  components: {
    Services,
    SkillBox,
  },
};
</script>

<style lang="scss">
@import "../scss/_about.scss";
</style>



