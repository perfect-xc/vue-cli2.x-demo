<template>
  <div id="app">
    <div class="container">
      <nav-header></nav-header>
    </div>
    <div class="container">
       <router-view></router-view>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name='orderingGuide'></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name='history'></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name='delievery'></router-view>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  name: 'App',
  data(){
    return {
      msg: 'hello',
    }
  },
  components:{
    navHeader:Header
  },
  created(){
    this.$axios.post('/apis/test/testToken.php',{username:'zs',password:"123456"})
    .then(res=>{
        console.log(res)
    })
  }
}
</script>

<style>

</style>
