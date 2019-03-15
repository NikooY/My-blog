<template>
  <div id="add-blog">
    <h1>添加博客</h1>
    <form v-if="!submitted">
      <label>博客标题</label>
      <input type="text" v-model="blog.title" required>
      <label>博客内容</label>
      <textarea v-model="blog.content"></textarea>

      <div id="checkboxes">
        <label>Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.catagories">
        <label>Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.catagories">
        <label>React.js</label>
        <input type="checkbox" value="React.js" v-model="blog.catagories">
        <label>Angular.js</label>
        <input type="checkbox" value="Angular.js" v-model="blog.catagories">
      </div>
      <label>作者</label>
      <select v-model="blog.author">
        <option v-for="author in authors">{{author}}</option>
      </select> 
      <button @click.prevent="post">添加博客</button>
    </form>

    <div id="alert" v-if="submitted">
      <h3>您的博客发布成功!</h3>
    </div>

    <!--
    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题:{{blog.title}}</p>
      <p>博客内容:{{blog.content}}</p>
      <ul>
        <li v-for="catagory in blog.catagories">{{catagory}}</li>
      </ul>
      <p>作者:{{blog.author}}</p>
    </div>
    -->
    
  </div>
</template>

<script>
export default {
  name: 'add-blog',
  data () {
    return {
      blog:{
        title:"",
        content:"",
        catagories:[],
        author:""
      },
      authors:["锐锐","欢欢","珍珍"],
      submitted:false
    }
  },
  methods:{
    post:function(){
      this.$http.post("https://vuedemo-547d0.firebaseio.com/posts.json", this.blog)
        .then(function(data){
          console.log(data);
          this.submitted = true;
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#add-blog *{
  box-sizing: border-box;  
}

#add-blog{
  margin:20px auto;
  max-width: 600px;
  padding: 20px;
}

label{
  display: block;
  padding: 20px 0;
  font-size: 18px;
  font-family: SimHei;
}

input[type="text"],textarea, select{
  display: block;
  width:100%;
  padding:8px;
  font: 16px SimHei;
  border: 1.3px solid #b8b8b8;
  border-bottom: 1.3px solid #ccc;
}


textarea{
  height: 200px;
  resize: none;
}

#checkboxes label{
  display: inline-block;
  margin-top: 10px;
}

#checkboxes input{
  display: inline-block;
  margin-right: 15px;
}

button{
  display:block;
  margin:20px 0;
  background: crimson;
  color:#fff;
  border: 0;
  padding:14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}

#preview{
  padding:10px 20px;
  border: 1px dotted #ccc;
  margin:30px 0; 
}

h3{
  margin-top: 10px;
}

#alert{
  font-size: 30px;
  margin-top: 50px;
  color: crimson;
}


</style>


