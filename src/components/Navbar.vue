<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">      
        <img src="@/assets/logo.png" alt="Bootstrap" width="35" height="35">
        
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/home" active-class="active">首页</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/download" active-class="active">下载</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/channels" active-class="active">频道</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/docs" active-class="active">文档</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
/* 自定义 active 类的样式 */
.navbar-nav .nav-link.active {
  color: #007bff; /* 激活时的颜色 */
  font-weight: bold; /* 激活时字体加粗 */
}
</style>
