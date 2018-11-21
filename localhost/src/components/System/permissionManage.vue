<template>
  <div>
    <content-header :content="title"></content-header>
    <div class="user_list_box">
      <div class="list_title">
        <span>权限组管理</span>
        <el-button plain size="mini" @click="addPer">添加权限组</el-button>
      </div>
      <div class="per_list_content">
        <table class="list_table">
          <thead>
            <tr>
              <th v-for="(value,key) in tHead" :key="key">{{value}}</th>
            </tr>
            <tr>
              <td>
                <el-input v-model="perName" clearable></el-input>
              </td>
              <td>
                <el-input v-model="perClass" clearable></el-input>
              </td>
              <td>
                <el-input v-model="perDescribe" clearable></el-input>
              </td>
              <td>
                <el-input :disabled="true"></el-input>
              </td>
            </tr>
          </thead>
        </table>
        <div class="tbody_box">
          <div  v-for="(item,index) in tBody" :key="index" @dblclick="lookDetail(index)" 
          v-show="index>=(pageSize*(currentPage-1))&&(index<pageSize*currentPage)?true:false">
            <div v-for="(val,key) in item" :key="key">{{val}}</div>
            <div>
              <el-button  round size="mini" @click="edit(index)">编辑</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <pagination :totalNum="perTotalNum" :pageSize="pageSize" 
    :currentPage="currentPage" v-on:currentchange="currentchange" 
    v-on:sizechange="sizechange"></pagination>

    <dialog-component :modal="editModal" :isShowUserInfo="showEdit" @closeEdit="closeEdit">
      <div slot="main">
        <el-tabs v-model="activeTabName" type="card">
          <el-tab-pane label="基本信息" name="first">
            <el-form ref="form" :model="perForm" label-width="100px" :rules="rules">
              <el-form-item label="权限组名称" prop="name">
                <el-input v-model="perForm.name" clearable></el-input>
              </el-form-item>
              <el-form-item label="权限组描述" prop="describe">
                <el-input v-model="perForm.describe" clearable></el-input>
              </el-form-item>
              <el-form-item label="权限组类别" prop="role">
                <el-select v-model="perForm.role">
                  <el-option label="司机" value="siji"></el-option>
                  <el-option label="员工" value="yuangong"></el-option>
                  <el-option label="客户" value="kehu"></el-option>
                  <el-option label="承运商" value="tms"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="页面权限" name="second">
            <page-checkbox ref="checkedPermission"></page-checkbox>
          </el-tab-pane>
          <el-tab-pane label="RDC权限" name="third">
            <rdc-checkbox></rdc-checkbox>
          </el-tab-pane>
          <el-tab-pane label="供应商代码权限" name="fourth">
            <client-checkbox></client-checkbox>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div slot="button">
        <el-button size="mini" @click="submitForm('form')">保存</el-button>
      </div>
    </dialog-component>
    

    <dialog-component :modal='detailModal' :isShowUserInfo='showDetail' @closeDetail="closeDetail">
      <div class="flex_box" slot="main">
        <div class="per_detail" v-for="(item,i) in perDeatilList" :key="i">
          <div>{{item.perTitle}}</div>
          <div>{{item.perDet}}</div>
        </div>
      </div>
    </dialog-component>
  </div>    
</template>
<script src="../../assets/js/System/permissionManage.js"></script>
<style src="../../assets/css/System/permissionManage.css"></style>
