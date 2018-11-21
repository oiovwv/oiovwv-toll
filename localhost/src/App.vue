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
@import '//at.alicdn.com/t/font_708662_piaqlcfjhld.css';
body,html,#app{
  height: 100%;
}
body{
  margin: 0;
  overflow-y:hidden;
  font-family: 'Source Sans Pro','Helvetica Neue',Helvetica,Arial,sans-serif;
}

.shadow_box{
  margin-bottom: 20px;
  width: 100%;
  border-top: 3px solid transparent;
  border-radius: 3px;
  background: #ffffff;
  box-shadow: 0 1px 1px rgba(0,0,0,0.1);
}

.el-table td, .el-table th{
  padding: 8px 0;
}
.el-pager li.active{
  color:#4CBAB4;
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
