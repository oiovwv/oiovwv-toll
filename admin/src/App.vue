<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
@import '//at.alicdn.com/t/font_708662_8vs8avkgak2.css';
body,html,#app{
  height: 100%;
}
body{
  margin: 0;
  font-family: 'Source Sans Pro','Helvetica Neue',Helvetica,Arial,sans-serif;
}
.el-button,
.el-button:focus,
.el-button:hover{
  color: #fff;
  background: #4CBAB4;
  border-color: #4CBAB4;
}
.copyright{
  display: flex;
  justify-content: space-between;
}
</style>
