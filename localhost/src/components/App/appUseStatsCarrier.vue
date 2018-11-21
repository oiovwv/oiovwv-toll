<template>
    <div>
        <content-header :content="title"></content-header>
        <content-panel  :subtitle="subtitle" @openModal="openModal">
            <div class="condition">
                <div>
                    <span>承运商</span>
                    <el-select v-model="carrier" multiple placeholder="承运商">
                        <el-option
                        v-for="item in carrierList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div>
                    <span>客户代码</span>
                    <el-select v-model="clientCode" multiple placeholder="客户代码">
                        <el-option
                        v-for="item in clientCodeList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div class="condition">
                <div>
                    <span>发货日期</span>
                    <el-date-picker
                      v-model="time"
                      type="daterange"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期">
                      </el-date-picker>
                </div>
                <div>
                    <span>运作RDC</span>
                    <el-select v-model="rdcCode" multiple placeholder="运作RDC">
                        <el-option
                        v-for="item in rdcCodeList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div class="condition">
                 <div>
                    <span>市内/市外</span>
                    <el-select v-model="city" multiple placeholder="">
                        <el-option
                        v-for="item in cityList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="button_box">
                    <div>
                        <el-button >查询</el-button>
                        <el-button>导出CSV</el-button>
                    </div>
                </div>
            </div>
        </content-panel>
        <div class="content_box shadow_box">
            <div>查询结果</div>
            <div>
                <app-use-table :AppTableData="carrierResultList" ref='loadData'></app-use-table>
            </div>
        </div>
       
        <panel-modal :isShowModal="isShowModal" @closeModal="closeModal"></panel-modal>
    </div>    
</template>
<script src="../../assets/js/App/appUseStatsCarrier.js"></script>
<style src="../../assets/css/App/appUseQuery.css"></style>
