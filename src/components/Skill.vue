<template>
  <div>
    <h6 class="subject">{{skill.title}}</h6>
    <div :data-percentage="percentage" class="percentage">
      <div class="skill-percen" :style=" 'width:' + percentage + ';' "></div>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Skill",
  data: function() {
    return {
      skillData: { percentage: 0 },
      percentage: "0%"
    };
  },
  mounted: function() {
    var self = this;

    anime({
      targets: self.skillData,
      percentage: self.skill.percentage,
      round: 1,
      // easing: "linear",
      duration: 1500,
      easing: "cubicBezier(0.515, 0.005, 0.52, 1.005)",
      update: function() {
        self.percentage = self.skillData.percentage + "%";
      }
    });
  },
  props: ["skill"]
};
</script>