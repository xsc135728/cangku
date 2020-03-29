<template>
	<header class="header">
		<div class="header-q">
			<!-- <span class="iconfont icon-zoom">搜索药品,症状,品牌</span> -->
			<input type="text" class="iconfont icon-zoom" value="热爱生命        崇尚自由">
		</div>
		
		<div class="nav">
	  <ul>
		  <router-link
		  to="/home"
		  exact-active-class="active"
		  tag="li"
		  >
		  <a href="javascript:;" >首页</a>
		  </router-link>
		  
		  <router-link
		  to="/follow"
		  exact-active-class="active"
		  tag="li"
		  >
		  <a href="javascript:;" >关注</a>
		  </router-link>
		  
		  <router-link
		  to="/column"
		  exact-active-class="active"
		  tag="li"
		  >
		  <a href="javascript:;" >栏目</a>
		  </router-link>
	  </ul>
	</div>
	</header>
	<!--头部-->
	
</template>

<script>
	export default {
		name:'Header',
		props:{},
		data(){
			return{
				
			}
		},
		components:{},
		mounted(){},
		updated(){},
		methods:{}
		
		
	}
</script>

<style>
	.header{
		height: 0.94rem;
		background-color: #e94544;
		display: flex;
		justify-content:center;
		align-items: center;
		margin-top: 0.6rem;
	}
	.header-q{
		height: 0.6rem;
		width: 100%;
		border-radius: 30px;
		border: 1px solid #ddd;
		background-color: #FFFFFF;
		margin-left: 0.3rem;
		margin-right: 0.3rem;
	}
	.header-q input{
		font-size: .3rem;
		color: #DDDDDD;
		text-align: center;
		line-height:0.6rem;
	}
	
	.nav{width:100%; position:fixed; top:0;left:0; z-index:2; background:#fff;}
	.nav ul{width:4.38rem;height:0.6rem; margin:0 auto;}
	.nav ul li{width:1.46rem;height:0.6rem; float:left;}
	.nav ul li a{ display:block;width:1.46rem;height:0.6rem; line-height:0.6rem; text-align:center; font-size:0.3rem; color:#9e9a95;}
	.nav ul li.active a{height:0.5rem; border-bottom:0.1rem solid #5477b2; color:#5477b2;}
</style>
