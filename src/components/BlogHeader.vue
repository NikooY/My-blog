<template>
	<nav>
		<ul>
			<li>
				<router-link to="/" exact>博客</router-link>
				<router-link to="/add" exact>增加博客</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default{
		name:"blog-header"
	}
</script>

<style scoped>
nav{
	margin: 0 auto;
	background: crimson;
	padding: 50px 0;
	margin-bottom: 10px;
}
ul{
	list-style-type: none;
	text-align: center;
	margin: 0;
}
li{
	display: inline-block;
	margin: 0 20px;
}
a{
	color:#fff;
	text-decoration: none;
	padding: 15px;
	border-radius: 5px;
	font-size: 20px;
	font-family: SimHei;
}

.router-link-active{
	background: rgba(255,255,255,0.8);
	color: #444;
}
</style>