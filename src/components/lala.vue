<template>
	<div class="warp">
		<ul>
			<li>
				<a href=""><img src="../assets/img/ds_03.png"/>
				<p class="aa">热门活动</p>
				</a>	
			</li>
			<li>
				<a href="">
					<img src="../assets/img/ds_05.png"/>
				<p class="aa">快速找药</p>
				</a>
			</li>
			<li>
				<a href="">
					<img src="../assets/img/ds_07.png"/>
				<p class="aa">药师指导</p>
				</a>
			</li>
			<li>
				<a href="">
					<img src="../assets/img/ds_09.png"/>
				<p class="aa">会员福利</p>
				</a>
			</li>
			<li>
				<a href="">
					<img src="../assets/img/ds_11.png"/>
				<p class="aa">海外药房</p>
				</a>
			</li>
		</ul>
	</div>
	
	
	
</template>

<script scoped>
	export default {
		name:'lala',
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
	.warp>ul{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	/* .wrap img{
		width: 100%;
	}
	.wrap p{
		height: 0.24rem;
		line-height: 0.24rem;
		padding-left: 1rem;
	} */
	.aa{
		margin-left: 0.2rem;
	}
	
	
</style>
