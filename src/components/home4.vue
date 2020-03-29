<template>
	<div class="two">
			<ul>
				<!-- <li>
					<img src="../assets/img/ds_19.png"/>
					<p class="q">男科用药</p>
					<p class="w">硬对自如</p>
				</li>
				<li>
					<img src="../assets/img/ds_21.png"/>
					<p class="q">男科用药</p>
					<p class="w">硬对自如</p>
				</li>
				<li>
					<img src="../assets/img/ds_24.png"/>
					<p class="q">男科用药</p>
					<p class="w">硬对自如</p>
				</li>
				<li>
					<img src="../assets/img/ds_26.png"/>
					<p class="q">男科用药</p>
					<p class="w">硬对自如</p>
				</li> -->
				<li>
					<img src="../assets/img/ds_32.png"/>
					<p class="q">男科用药</p>
					<p class="w">硬对自如</p>
				</li>
				<li>
					<img src="../assets/img/ds_33.png"/>
					<p class="q">男科用药</p>
					<p class="w">硬对自如</p>
				</li>
				<li>
					<img src="../assets/img/ds_34.png"/>
					<p class="q">男科用药</p>
					<p class="w">硬对自如</p>
				</li>
				<li>
					<img src="../assets/img/ds_35.png"/>
					<p class="q">男科用药</p>
					<p class="w">硬对自如</p>
				</li>
				
			</ul>
		</div>
		
		
		
</template>

<script>
	export default {
		name:'home4',
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

<style scoped>
	.two>ul{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		justify-content: center;
		align-items: center;
	}
	.two li{
		width: 24%;
		text-align: center;
		margin-top: .1rem;
	}
	.two img{
		height: 0.82rem;
		margin-top: .2rem;
	}
	.two p{
		height: 0.28rem;
		color: #DDDDDD;
	}
</style>
