<template>
  <div id="app">
  	<blog-header></blog-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
import BlogHeader from './components/BlogHeader'

export default {
  name: 'App',
  components: {
     AddBlog,
     ShowBlogs,
     BlogHeader
  }
}
</script>

<style>
#app {
  
}
</style>
