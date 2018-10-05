<template>
	<div class="s-box">
		<h4 class="category">{{catename}}</h4>
		<Skill 
		v-for="skill in skills"
		:key="skill.id"
		:skill="skill"
		/>
	</div>
</template>

<script>
import Skill from './Skill.vue';

export default {
	name: 'SkillBox',
	props: ['skills', 'catename'],
	components: {
		Skill
	}
}


</script>