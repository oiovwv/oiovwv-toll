<template>
    <div>
        <content-header :content="title"></content-header>
        <content-panel  :subtitle="subtitle" @openModal="openModal">
            <div class="condition">
                <div>
                    <span>运作RDC</span>
                    <el-select v-model="value5" multiple placeholder="运作RDC">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div>
                    <span>客户代码</span>
                    <el-select v-model="value5" multiple placeholder="客户代码">
                        <el-option
                        v-for="item in options"
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
                <table-component :tableData="tableData" :tableHeader="tHead" 
                :currPage="currentPage" :pageSize="pageSize"></table-component>
            </div>
        </div>
        <div class="pagination">
            <el-pagination
            background
            :page-size="pageSize"
            layout="prev, pager, next, jumper"
            @current-change="handleCurrentChange"
            :total="tableData.length">
            </el-pagination>
        </div>
        <panel-modal :isShowModal="isShowModal" @closeModal="closeModal"></panel-modal>
    </div>    
</template>
<script src="../../assets/js/App/appUseQuery.js"></script>
<style src="../../assets/css/App/appUseQuery.css"></style>
