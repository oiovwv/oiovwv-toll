<template>
    <div>
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
                <el-select v-model="RDCSelectValue" placeholder="请选择">
                <el-option
                    v-for="item in RDCSelectOptions"
                    :key="item.value"
                    :label="item.value"
                    :value="item.value">
                </el-option>
                </el-select>
            </div>
            <div>
                <el-button @click="query(date,selectValue)">查看</el-button>
            </div>
            </el-collapse-item>
        </el-collapse>
        <main-content>
            <div class="edit_data">
                <div>
                    <div v-for="(value,key) in tHeader" :key="key" class="td">
                        {{value.label}}
                    </div>
                </div>
                <div v-for="(item,index) in editData" :key="index">
                    <div>
                        <div class="title">{{item.GROUP_NAME}}</div>
                        <div v-for="(subItem,i) in item.list" :key="i" class="tr">
                            <div class="td">{{subItem.ITEM_SORT}}</div>
                            <div class="td" :title="subItem.ITEM_NAME">{{subItem.ITEM_NAME}}</div>
                            <div class="td" :title="subItem.ITEM_DESC">{{subItem.ITEM_DESC}}</div>
                            <div class="td">
                                <el-input v-model="subItem.ITEM_NUM" clearable></el-input>
                            </div>
                            <div class="td">
                                <el-input v-model="subItem.ITEM_COUNT" clearable @blur="blur(subItem.ITEM_COUNT)"></el-input>
                            </div>
                            <div class="td">
                                {{(subItem.ITEM_NUM/subItem.ITEM_COUNT*100).toFixed(2)}}
                            </div>
                            <div class="td">{{subItem.ITEM_UNIT}}</div>
                            <div class="td">
                                <el-button size="mini" @click="handleClick(subItem.IDX,subItem.ITEM_NUM,subItem.ITEM_COUNT)">保存</el-button>
                                <el-button size="mini" class="unlock" @click="unLock(subItem.IDX)">解锁</el-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main-content>
    </div>    
</template>
<script src="../../assets/js/Control/dataEdit.js"></script>
<style src="../../assets/css/Control/dataStat.css"></style>
