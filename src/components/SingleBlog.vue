<template>
	<div id="single-blog">
		<h1>{{blog.title}}</h1>
		<article>
			{{blog.content}}
		</article>
		<p>作者: {{blog.author}}</p>
		<p>分类:</p>
		<ul>
			<li v-for="catagory in blog.catagories">
				{{catagory}}
			</li>
		</ul>
		<button @click="deleteSingleBlog()">删除</button>
		<router-link :to="'/edit/'+ id">编辑</router-link>
	</div>
</template>

<script>
	export default{
		name:"single-blog",
		data(){
			return{
				//获取路由id
				id:this.$route.params.id,
				blog:{}
			}
		},
		created(){
			this.$http.get("https://vuedemo-547d0.firebaseio.com/posts/"+this.id+".json")
				.then(function(data){
					//console.log(data);
					//this.blog = data.body; 这样是可以的
					return data.json();
				})
				.then(function(data){
					this.blog = data;
				})
		},
		methods:{
			deleteSingleBlog:function(){
				this.$http.delete("https://vuedemo-547d0.firebaseio.com/posts/"+this.id+".json")
					.then(response=>{
						this.$router.push({path:'/'})
					})
			}
		}
	}
</script>

<style scoped>
#single-blog{
	max-width: 960px;
	margin: 0 auto;
	padding: 20px;
	background: #eee;
	border: 1px dotted #aaa;
}

</style>