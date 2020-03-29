<template>
	<div class="Home">
		<swiper
		:data="list"
		
		apiName="banner"
		/>
		<lala/>
		<home3/>
		<home4/>
		<div class="home-m-l-r">
			<!-- <Cell :data="{_id:22585285525,title:'xsc',des:'阿斯顿马丁'}"/> -->
			<!-- <Cell :index="0" :data="{_id:22585285525,title:'xsc',des:'阿斯顿马丁'}"/> -->
			<Cell 
			v-for="(item,index) of home"
			:key="item._id"
			:data="item"
			:index="index"
			api-name="home"
			/>
		</div>
	</div>
</template>

<script>
	import swiper from '../components/swiper.vue'
	import lala from '../components/lala.vue'
	import Cell from '../components/Cell.vue'
	import home3 from '../components/home3.vue'
	import home4 from '../components/home4.vue'
	// import axios from 'axios';
	export default {
		name:'Home',
		props:{},
		data(){
			return{
				list:[],
				home:[]
			}
		},
		components:{
			swiper,Cell,lala,home3,home4
		},
		mounted(){
			axios({
				url:'/api/goods/banner',
				params:{_page:1,_limit:3},
				 // headers:{
			  //       token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFhIiwiX2lkIjoiNWU2YjYyYTA4MzgzZWYyYTVjMDI3Y2VkIiwiaWF0IjoxNTg1MDUyNjQyLCJleHAiOjE1ODUyMjU0NDJ9.tsDA9SDsNl3rJzqV0BbxTsXUJoWN3qo2dUaNFvCOZNo'
				 // }
			}).then(
				res=>this.list =res.data.data
				// res=>console.log(res.data)
			)
			
			axios({
				url:'/api/goods/home',
				params:{_page:1,_limit:10},
				 // headers:{
			  //       token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFhIiwiX2lkIjoiNWU2YjYyYTA4MzgzZWYyYTVjMDI3Y2VkIiwiaWF0IjoxNTg0ODgzNjkyLCJleHAiOjE1ODUwNTY0OTJ9.PuSoMRsSLexPFNJknKr3_Yu8hA0hB3EByGEnvDACWZU'
				 // }
			}).then(
				res=>this.home =res.data.data
				// res=>console.log(res.data)
			)
			
			
		},
		updated(){},
		methods:{}
		
		
	}
</script>

<style scoped>
	.Home{
		
	}
	.home-m-l-r{
		margin: 0 0.4rem;
	}
</style>
