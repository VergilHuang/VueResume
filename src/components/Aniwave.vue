<template>
	<div id="container">
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
</template>

<script>
	export default {
		name: 'Aniwave'
	}
</script>

<style lang="scss">
	// Based on                                         
//      http://japborst.net/posts/sass-sines-and-cosines //
///////////////////////////////////////////////////////////

$pi: 3.14159265359;
$_precision: 10;

@function pow($base, $exp) {
  $value: $base;
  @if $exp > 1 {
    @for $i from 2 through $exp {
      $value: $value * $base;
    }
  }
  @if $exp < 1{
    @for $i from 0 through -$exp {
      $value: $value / $base;
    }
  }
  @return $value;
}

@function fact($num) {
  $fact: 1;
  @if $num > 0{
    @for $i from 1 through $num {
      $fact: $fact * $i;
    }
  }
  @return $fact;
}

@function _to_unitless_rad($angle) {
  @if unit($angle) == "deg" {
    $angle: $angle / 180deg * $pi;
  }
  @if unit($angle) == "rad" {
    $angle: $angle / 1rad;
  }
  @return $angle;
}

@function sin($angle){
  $a: _to_unitless_rad($angle);
  $sin: $a;
  @for $n from 1 through $_precision {
    $sin: $sin + (pow(-1, $n) / fact(2 * $n + 1) ) * pow($a, (2 * $n + 1));
  }
  @return $sin;
}

@function cos($angle){
  $a: _to_unitless_rad($angle);
  $cos: 1;
  @for $n from 1 through $_precision {
    $cos: $cos + ( pow(-1,$n) / fact(2*$n) ) * pow($a,2*$n);
  }
  @return $cos;
}

@function tan($angle){
  @return sin($angle) / cos($angle);
}
#container{
	background-image: url("../assets/logo-01.png");
	background-repeat: no-repeat;
	background-position: center; 
	background-size: 60px 70px;
	display: inline-block;
	position: relative;
	margin: auto 20%;
	width: 250px;
	height: 250px;
	transform-style:preserve-3d;
	perspective: 100px;
	perspective-origin: 50% 50%;
	transform: rotateX(65deg) rotateY(-12deg);

	div{
		width: 18px;
		height: 11px;
		position: absolute;
		background: transparent;
		transform-origin: 50% 50%;
		animation: wave-anime calc(1.73s * 1.8) ease-in-out infinite forwards;
			&:before{
				position: absolte;
				display: block;
				height: 100%;
				weight: 100%;
				border-radius: 25%;
			}
	}
}

$radius: 110;
$centre_x: 110;
$centre_y: 110;
@for $i from 1 through 36 {
  #container div:nth-child(#{$i}){
    top: calc(#{$radius}px * #{sin($pi/180*(10*$i))} + #{$centre_y}px);
    left: calc(#{$radius}px * #{cos($pi/180*(10*$i))} + #{$centre_x}px);
    animation-delay: 0.05s*$i;
    &:before{
      content: ' ';
      background: rgb(calc(#{$i}*3),#{$i*5},#{$i*7});
      transform: rotate(#{10*$i}deg);
    }
  }
}
@keyframes wave-anime {
  0% { transform: translateZ(0px); }
  15% { transform: translateZ(22px); }
  27% { transform: translateZ(-11px); }
  40% { transform: translateZ(0px); }
  100% { transform: translateZ(0px); }
}
</style>