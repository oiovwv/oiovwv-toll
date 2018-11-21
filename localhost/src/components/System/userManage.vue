<template>
  <div>
    <content-header :content="title"></content-header>
    <div class="user_list_box">
      <div class="list_title">
        <span>用户信息管理</span>
        <el-button plain size="mini" @click="addUser('添加')">添加用户</el-button>
      </div>
      <div class="list_content">
        <table class="list_table">
          <thead>
            <tr>
              <th v-for="(value,key) in tHead" :key="key">{{value}}</th>
            </tr>
            <tr>
              <td>
                <el-input placeholder="姓名" v-model="uname" clearable></el-input>
              </td>
              <td>
                <el-input placeholder="账号" v-model="tel" clearable></el-input>
              </td>
              <td>
                <el-input placeholder="角色" v-model="user" clearable></el-input>
              </td>
              <td>
                <el-input placeholder="状态" v-model="status" clearable></el-input>
              </td>
              <td>
                <el-input  :disabled="true"></el-input>
              </td>
              <td>
                <el-input :disabled="true"></el-input>
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
            <div><el-button  round size="mini" @click="addPermission(index)">新增权限</el-button></div>
            <div>
              <el-button  round size="mini" @click="edit(index,'')">编辑</el-button>
              <el-button  round size="mini" @click="disable(index)">禁用</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <pagination :totalNum="userTotalNum" :pageSize="pageSize" 
    :currentPage="currentPage" v-on:currentchange="currentchange" 
    v-on:sizechange="sizechange"></pagination>

    <dialog-component :modal="editModal" :isShowUserInfo="showEdit" @closeEdit="closeEdit">
      <div class="form_box" slot="main">
        <el-form ref="userForm" :model="userForm" :rules="rules" label-width="100px" status-icon>
            <el-form-item label="账号" prop="phone">
              <el-input v-model.number="userForm.phone" placeholder="请输入手机号" clearable></el-input>
            </el-form-item>
            <el-form-item label="姓名" prop="name">
              <el-input v-model="userForm.name" clearable></el-input>
            </el-form-item>
            <el-form-item label="角色" prop="role">
              <el-select v-model="userForm.role">
                <el-option label="司机" value="siji"></el-option>
                <el-option label="员工" value="yuangong"></el-option>
                <el-option label="客户" value="kehu"></el-option>
                <el-option label="承运商" value="tms"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="EKP" prop="ekp">
              <el-input v-model="userForm.ekp" clearable></el-input>
            </el-form-item>
            <el-form-item label="公司名称" prop="companyName">
              <el-input v-model="userForm.companyName" clearable></el-input>
            </el-form-item>
            <el-form-item label="TMS承运商ID" prop="tmsId">
              <el-input v-model="userForm.tmsId" clearable></el-input>
            </el-form-item>
            <el-form-item label="承运商名称" prop="tmsName">
              <el-input v-model="userForm.tmsName" clearable></el-input>
            </el-form-item>
            <el-form-item label="车牌号" prop="licenseNum">
              <el-input v-model="userForm.licenseNum" clearable></el-input>
            </el-form-item>
          </el-form>
      </div>
      <div slot="button">
        <el-button size="mini" @click="submitForm">保存</el-button>
      </div>
    </dialog-component>

    <dialog-component :modal='detailModal' :isShowUserInfo='showDetail' @closeDetail="closeDetail">
      <div class="detail_box" v-for="(item,i) in detailList" :key="i" slot="main">
        <div>{{item.subtitle}}：</div>
        <div>{{item.val}}</div>          
      </div>
    </dialog-component>

    <dialog-component :modal="permissionModal" :isShowUserInfo='showPermission' @closePermission="closePermission">
      <div class="permission" slot="main">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" 
        @change="handleCheckAllChange">全选</el-checkbox>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
          <el-checkbox v-for="(city,i) in cities" :label="city" :key="i"
          v-show="i>=(smallSizePage*(smallCurrentPage-1))&&(i<smallSizePage*smallCurrentPage)?true:false"
          >{{city}}</el-checkbox>
        </el-checkbox-group>
      
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="smallCurrentPage"
          :page-size="smallSizePage"
          small
          layout="prev, pager, next"
          :total="permissionTotal">
        </el-pagination>
      </div>
      <div slot="button">
        <el-button size="mini" @click="submitForm">保存</el-button>
      </div>
    </dialog-component>
  </div>    
</template>
<script src="../../assets/js/System/userManage.js"></script>
<style src="../../assets/css/System/userManage.css" scoped></style>
