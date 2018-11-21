<template>
    <div class="stat">
      <content-header :content="title"></content-header>
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="查询面板" name="1">
          <div>
            <span>请选择时间</span>
            <el-date-picker
              v-model="date"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </div>
          <div>
            <span>RDC</span>
            <el-select v-model="selectValue" placeholder="请选择">
              <el-option
                v-for="item in selectOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div>
            <el-button>查看</el-button>
          </div>
        </el-collapse-item>
      </el-collapse>
      <main-content>
        <div class="edit_data stat">
          <div>
            <div>
              <div v-for="(value,key) in tHeader" :key="key" class="td">{{value}}</div>
            </div>
          </div>
          <div>
            <div v-for="(item,index) in statData" :key="index">
              <div class="title">
                {{item.GROUP_NAME}}
              </div>
              <div v-for="(subItem,i) in item.list" :key="i" class="tr" :class="subItem.ITEM_UNIT=='G'? 'sub_title':''">
                <div class="td" :class="subItem.ITEM_UNIT=='G'? 'title':''">{{subItem.ITEM_SORT}}</div>
                <div :title="subItem.ITEM_NAME" :class="subItem.ITEM_UNIT=='G'? 'title':''" class="td">
                  {{subItem.ITEM_NAME}}
                </div>
                <div :title="subItem.ITEM_DESC" v-if="subItem.ITEM_UNIT!='G'" class="td">{{subItem.ITEM_DESC}}</div>
                <div v-if="subItem.ITEM_UNIT!='G'" class="td">{{subItem.ITEM_NUM}}</div>
                <div v-if="subItem.ITEM_UNIT!='G'" class="td">{{subItem.ITEM_COUNT}}</div>
                <div v-if="subItem.ITEM_UNIT!='G'" class="td">{{(subItem.ITEM_NUM/subItem.ITEM_COUNT*100).toFixed(2)}}</div>
                <div v-if="subItem.ITEM_UNIT!='G'" class="td">{{subItem.ITEM_UNIT}}</div>
              </div>
            </div>
          </div>
        </div>
      </main-content>
    </div>
</template>
<script src="../../assets/js/Control/dataStat.js"></script>
<style src="../../assets/css/Control/dataStat.css"></style>
