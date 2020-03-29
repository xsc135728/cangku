<template>
			
			<ul class="footer-nav">
				<router-link
				  class="home"
				  exact-active-class="home_active"
				  to="/home"
				  tag="li"
				>
				  <a href="javascript:;"></a>
				</router-link>
				
				<router-link
				  class="write"
				  exact-active-class="write_active"
				  to="/shopcart"
				  tag="li"
				>
				  <a href="javascript:;"></a>
				</router-link>
				
				<router-link
				  class="my"
				  exact-active-class="my_active"
				  to="/哈哈哈"
				  tag="li"
				>
				  <a href="javascript:;"></a>
				  
				</router-link>
				
				<router-link
				  class="haha"
				  exact-active-class="haha_active"
				  to="/user"
				  tag="li"
				>
				  <a href="javascript:;"></a>
				  
				</router-link>
		</ul>
</template>

<script>
	export default {
		name:'Footer',
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
	/* .footer{
		height: 1.04rem;
		background-color: #ddd;
	} */
	.footer-nav{
		display: flex;
		height: 1.04rem;
		justify-content: space-between;
		width:100%;height:0.8rem; background:#fff;
		 position:fixed; left:0; bottom:0; border-top:1px solid #9e9a95;
		 margin: auto;
	}
	.footer-nav li{
		width: 1.2rem;
		text-align: center;
	}
	.footer-nav  li a{ display:block; width:0.5rem;height:100%;}
	
	
	.home{background: url(../assets/img/05search_03.png)no-repeat 0 0;margin-left: 0.6rem;margin-top: 0.2rem;}
	 .write{background: url(../assets/img/03index_0.png)no-repeat 0 0;background-size:75%;}
	 .my{background: url(../assets/img/05search_09.png)no-repeat 0 0;margin-top: 0.2rem;}
	 .haha{background: url(../assets/img/05search_07.png)no-repeat 0 0;margin-top: 0.2rem;}
	 
	 .home_active{background: url(../assets/img/05search_05.png)no-repeat 0 0;margin-left: 0.6rem;margin-top: 0.2rem;}
	  .write_active{background: url(../assets/img/05search_05.png)no-repeat 0 0;background-size:75%;}
	  .my_active{background: url(../assets/img/cg_text.png)no-repeat 0 0;margin-top: 0.2rem;}
	  .haha_active{background: url(../assets/img/05search_05.png)no-repeat 0 0;margin-top: 0.2rem;}
</style>
