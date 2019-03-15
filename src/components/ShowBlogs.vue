<template>
  <!-- 自定义指令在传值是如果是字符串，记得加引号，如：'normal' -->
  <div id="show-blog" v-theme:background="'normal'">  
    <h1>博客总览</h1>
    <input id="search" type="text" v-model="search" placeholder="搜索">
    <!-- 只展示匹配上的结果，没有的话就全部展示 -->
    <div v-for="blog in filteredBlogs" class="single-blog">
      <!-- 路由到点击的blog -->
      <router-link v-bind:to="'/blog/' + blog.id">
        <!-- 过滤器,将文本变大写 -->
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      </router-link> 
      <article>
        <!-- 过滤器,裁剪文本的长度 -->
        {{blog.content | snippet}}
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'show-blogs',
  data () {
    return {
      blogs:[],
      search:""
    }
  },
  created:function(){
    //调用本地json，必须将json文件存在static中
    //this.$http.get("./../static/posts.json")
    this.$http.get("https://vuedemo-547d0.firebaseio.com/posts.json")
      .then(function(data){
        //console.log(data.json());
        return data.json();
        //只调取10条
        //this.blogs = data.body.slice(0,10);
      })
      .then(function(data){
        var blogsArray =[];
        for(let key in data){
          //console.log(key);
          //console.log(data[key]);
          data[key].id = key;
          blogsArray.push(data[key]);
          //console.log(blogsArray);
          this.blogs= blogsArray;
          console.log(this.blogs);
        }
      })
  },
  computed:{
    //filteredBlogs会返回匹配上的数组
    filteredBlogs:function(){
        return this.blogs.filter((blog)=>{
          //匹配标题，用输入的search内容去匹配title的内容，并返回一个boolean值
          return blog.title.match(this.search)
        })
    }
  },
  //这里是局部的自定义过滤器，只能在当前组件使用
  filters:{
    "to-uppercase":function(value){
        return value.toUpperCase();
    }
  },
  //这里是局部的自定义指令，只能在当前组件使用
  directives:{
    'rainbow':{
      bind(el,binding,vnode){
        el.style.color= "#"+Math.random().toString(16).slice(2,8);
      }
    }
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: bold;
  font-family: SimHei;
}

#show-blog{
  max-width: 800px;
  margin:0 auto;
}

.single-blog{
  padding: 5px 20px 30px 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}

#search{
  width: 100%;
  padding:8px;
  font-size: 18px;
  box-sizing: border-box;
  border: 1px solid #eee;
  border-radius: 3px;
}

#show-blog a{
  text-decoration: none;
  color:#444;
}
</style>


