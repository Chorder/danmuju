<template>
    <div class="container">
      <h1>频道列表</h1>
      <p>弹幕局目前的官方频道。如果你希望你创建的频道出现在这里，请在Github提交PR。<br/><br/>

        <code>
[
  {
    name: '弹幕局官方频道', 
    url: 'https://danmuju.pages.dev/api'
  },
]

        </code>

      </p>
      <ul>
        <li v-for="(channel, index) in channels" :key="index">{{ channel }}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  const channels = []; // 可替换为动态数据
  </script>
  