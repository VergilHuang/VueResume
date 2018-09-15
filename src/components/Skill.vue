<template>
	<div>
      <h6 class="subject">{{skill.title}}</h6>
      <div :data-percentage="skill.percentage" class="percentage">
        <div class="skill-percen" :style=" 'width:' + skill.percentage + ';' "></div>
      </div>
    </div>
</template>

<script>

export default {
	name: 'Skill',
	props: ['skill']
}

</script>