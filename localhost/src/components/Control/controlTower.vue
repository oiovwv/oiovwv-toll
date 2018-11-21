<template>
    <div>
        <content-header :content="title"></content-header>
        <div class="ct_box shadow_box">
            <div class="ct_box_header">
                <div class="header_row">
                    <div>
                        <p class="label">选择RDC</p>
                        <el-select v-model="RDCValue" placeholder="请选择">
                            <el-option
                                v-for="item in RDCList"
                                :key="item.value"
                                :label="item.value"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div>
                        <p class="label">统计项目</p>
                        <div>
                            <el-select v-model="selectValue" placeholder="请选择">
                                <el-option
                                    v-for="item in selectOptions"
                                    :key="item.value"
                                    :label="item.value"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                            <el-button @click="addTableData(RDCValue,selectValue)">添加</el-button>
                        </div>
                    </div>
                </div>
                <div class="header_row">
                    <div>
                        <p class="label">选择年份</p>
                        <el-select v-model="selectValue" placeholder="请选择">
                            <el-option
                                v-for="item in selectOptions"
                                :key="item.value"
                                :label="item.value"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="selectValue" placeholder="请选择">
                            <el-option
                                v-for="item in selectOptions"
                                :key="item.value"
                                :label="item.value"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div>
                        <el-button>查看</el-button>
                    </div>
                </div>
            </div>
            <div class="ct_box_body">
                <el-table
                    :data="CTResult" 
                    border
                    :show-header="isShowHeader" v-if="CTResult.length>0">
                    <el-table-column v-for="(item,index) in header" :key="index"
                        :prop="item.prop"
                        :label="item.label"
                        :width="item.width">
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button size="mini" @click="lineChart(scope.$index)">
                                线型图
                            </el-button>
                            <el-button size="mini" @click="barChart(scope.$index)">
                                柱状图
                            </el-button>
                            <el-button size="mini" @click="handleDelete(scope.$index)">
                                删除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="chart_box">
                    <div id="CTChart" :style="{width: '1123px', height: '480px',margin:'0 auto'}"></div>
                </div>
            </div>
        </div>
    </div>    
</template>
<script src="../../assets/js/Control/controlTower.js"></script>
<style src="../../assets/css/Control/controlTower.css"></style>
