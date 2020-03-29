<template>
	<div class="Column">
		<!-- <home4/> -->
		<Cell 
		v-for="(item,index) of column"
		:key="item._id"
		:data="item"
		:index="index"
		api-name="column"
		/>
	
	</div>
</template>

<script>
	// import home4 from '../components/home4.vue'
	import Cell from '../components/Cell.vue'
	// import axios from 'axios';
	export default {
		name:'Column',
		props:{},
		data(){
			return{
				column:[]
			}
		},
		components:{
			Cell
		},
		mounted(){
			this.$axios({
				url:'/api/goods/column',
				params:{_page:1,_limit:8},
				 // headers:{
			  //       token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFhIiwiX2lkIjoiNWU2YjYyYTA4MzgzZWYyYTVjMDI3Y2VkIiwiaWF0IjoxNTg1MDUyNjQyLCJleHAiOjE1ODUyMjU0NDJ9.tsDA9SDsNl3rJzqV0BbxTsXUJoWN3qo2dUaNFvCOZNo'
				 // }
			}).then(
				res=>this.column =res.data.data
				// res=>console.log(res.data)
			)
			
		},
		updated(){},
		methods:{}
		
		
	}
</script>

<style scoped>
	.Column{
		margin-top: 0.3rem;
		margin-left: 0.4rem;
		margin-right: 0.4rem;
	}
</style>
