<template>
  <div>
    <div class="card ">
      <div class="card-header bg-primary text-center">
        contact
      </div>
    <div class="card-body">
      <div class='mt-20'>
        <router-link to='/about/contact/phoneNumber' >电话</router-link>
        <router-link :to="{name:'phonePerson'}">联系人</router-link>
      </div>
     
      <router-view></router-view>
      
    </div>
</div>
  </div>
</template>