<template>
    <el-row class="content_header">
        <el-col :span="24">
            <div>
                <h1>
                    {{content.a}}
                    <small>{{content.b}}</small>
                </h1>
                <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">{{content.c}}</el-breadcrumb-item>
                <el-breadcrumb-item>{{content.d}}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </el-col>
    </el-row>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    props:{
        content:{
            type:Object
        }
    }
}
</script>
<style>
h1{
  margin: 0;
  font-size: 24px;
  font-weight: 500;
}
small{
  font-size: 15px;
  font-weight: 300;
  color: #777;
  padding-left: 5px;
}
.content_header{
  margin-bottom: 10px;
}
.content_header>.el-col>div{
  display: flex;
  justify-content: space-between;
}
.el-breadcrumb{
  font-size: 12px;
  line-height: 2.5;
}
.el-breadcrumb__inner a, .el-breadcrumb__inner.is-link,
.el-breadcrumb__inner a:hover, .el-breadcrumb__inner.is-link:hover{
  color: #444;
}
.el-breadcrumb__inner.is-link{
  font-weight: normal !important;
}
</style>
