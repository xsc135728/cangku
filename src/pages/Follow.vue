<template>
	<div class="Follow">
		<home4/>
		<Cell 
		v-for="(item,index) of follow"
		:key="item._id"
		:data="item"
		:index="index"
		api-name="follow"
		/>
		
	</div>
</template>

<script>
	import home4 from '../components/home4.vue'
	import Cell from '../components/Cell.vue'
	// import axios from '../plugins/axios.js'
	export default {
		name:'Follow',
		props:{},
		data(){
			return{
				follow:[]
			}
		},
		components:{
			home4,Cell
		},
		mounted(){
			axios({
				url:'/api/goods/follow',
				params:{_page:1,_limit:8},
				 // headers:{
			  //       token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFhIiwiX2lkIjoiNWU2YjYyYTA4MzgzZWYyYTVjMDI3Y2VkIiwiaWF0IjoxNTg1MDUyNjQyLCJleHAiOjE1ODUyMjU0NDJ9.tsDA9SDsNl3rJzqV0BbxTsXUJoWN3qo2dUaNFvCOZNo'
				 // }
			}).then(
				res=>this.follow =res.data.data
				// res=>console.log(res.data)
			)
		},
		updated(){},
		methods:{}
		
		
	}
</script>

<style scoped>
	.Follow{
		margin-top: 0.3rem;
		margin-left: 0.4rem;
		margin-right: 0.4rem;
	}
</style>
