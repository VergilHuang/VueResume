<script>
import animateScrollTo from 'animated-scroll-to';

export default {
	name: 'Navigation',
	data: function(){
		return {
			desktopSize: document.body.clientWidth,
			menu_opened: false
		}
	},
	beforeMount(){
		window.onresize = this._detectSize;
	},
	methods: {
		beActive(){
			if(this.menu_opened){
				this.toggleMenu();  
			}
			// if on mobile device, include the smooth scroll-to function
			if(this.desktopSize <= 680){
				animateScrollTo(document.getElementById('navigationBar'),{
				speed: 1200
				});
			}
		},
		toggleMenu(){
			let menu = document.getElementById('menu-panel');

		if(this.menu_opened){
			menu.style.height = '0';
			menu.style.top = '10px';
		}else{
			menu.style.height = '244px';
			menu.style.top = '30px';
		}
			this.menu_opened = !this.menu_opened;
		},
		_detectSize(){
			this.desktopSize = document.body.clientWidth;
			if(this.desktopSize <= 680){
				this.menu_opened = false;
			}
		}
	}
}
</script>

<template>
	<div>
		<nav id="navigationBar" class="nav box-border shadower">
			<div id="nav">	
				<router-link exact tag="a" class="home-btn" to="/"><i class="fas fa-home"></i></router-link>
				<div v-if="desktopSize > 680" class="nav-1">
					<router-link exact tag="a" class="router-link" @click.native="beActive" to="/resume">Resume</router-link>
					<router-link exact tag="a" class="router-link" @click.native="beActive" to="/portfolio">Portfolio</router-link>
					<router-link exact tag="a" class="router-link" @click.native="beActive" to="/contact">Contact</router-link>		
				</div>
				<div class="nav-right">
					<!-- toggleMenu bottom -->
					<a v-if="desktopSize <= 680" class="menu-btn" href="#" @click.prevent="toggleMenu">
						<div class="menu-btn-ract"><i class="fas fa-bars"></i></div>
					</a>
					<!-- hire me bottom -->
					<a class="hire-btn" href="mailto:zaq9716643@gmail.com" title="Hire me">
						<div class="hire-ract">
							Hire Me
							<div class="fly-icon">
								<i class="fas fa-paper-plane"></i>
							</div>
						</div>
					</a>
				</div>
			</div>
		</nav>
		<div class="menu">
			<div v-if="desktopSize <= 680" id="menu-panel" class="menu-lists shadower">
				<router-link exact class="menu-item" @click.native="beActive" to="/">About</router-link>
				<router-link exact class="menu-item" @click.native="beActive" to="/resume">Resume</router-link>
				<router-link exact class="menu-item" @click.native="beActive" to="/portfolio">Portfolio</router-link>
				<router-link exact class="menu-item" @click.native="beActive" to="/contact">Contact</router-link>
			</div>
		</div>
	</div>
</template>