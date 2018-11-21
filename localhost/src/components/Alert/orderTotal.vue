<template>
    <div>
        <content-header :content="title"></content-header>
        <box></box>
        <div class="total_box shadow_box">
            <div class="box_header">
                <h3>Orders count dashboard - 2018</h3>
            </div>
            <div class="box_body">
                <div id="myChart" :style="{width: '900px', height: '400px',margin:'0 auto'}"></div>
            </div>
        </div>
        <div class="total_box shadow_box">
            <div>
                <div class="tab_button" v-for="(item,index) in tabs" :key="index" 
                    :class="activeNum==index?'active':''">
                    <div  @click="toggleTab(index)">
                        {{item.label}}
                    </div>
                </div>
            </div>
            <div class="tab_content">
                <div v-for="(subItem,i) in tabs" :key="i" v-show="activeNum==i">
                    <div class="select_box">
                        <span>{{subItem.selectLabel}}</span>
                        <el-select v-model="subItem.value" filterable  placeholder="请选择">
                            <el-option
                            v-for="selectItem in subItem.selectOptions"
                            :key="selectItem.value"
                            :label="selectItem.label"
                            :value="selectItem.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="box_body">
                        <div id="myChart" :style="{width: '900px', height: '400px'}"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>
<script src="../../assets/js/Alert/orderTotal.js"></script>
<style src="../../assets/css/Alert/orderTotal.css"></style>
