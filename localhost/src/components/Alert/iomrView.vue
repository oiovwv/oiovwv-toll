<template>
    <div>
        <content-header :content="title"></content-header>
        <div class="iomr shadow_box">
            <div class="iomr_header">
                {{date}}全部订单查看
            </div>
            <div class="iomr_body">
                <el-table
                    :data="imorViewData"
                    stripe
                    border>
                    <el-table-column v-for="(item,i) in iomrViewHead" :key="i"
                        :prop="item.prop"
                        :label="item.label"
                        :width="item.width">
                    </el-table-column>
                </el-table>
            </div>
            <div class="iomr_footer">
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="imorViewData.length">
                </el-pagination>
            </div>
        </div>
    </div>    
</template>
<script src="../../assets/js/Alert/iomrView.js"></script>
<style src="../../assets/css/Alert/shipmentOrder.css"></style>

