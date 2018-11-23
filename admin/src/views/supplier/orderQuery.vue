<template>
    <div v-loading="isShowLoading" class="main_content">
        <div v-if="isShowNoPermission">
            <panel-and-result>
                <div slot="condition" class="query_condition">
                    <el-form :model="orderQueryForm" label-width="70px">
                        <el-row>
                            <el-col :md="{span:11}" :sm="{span:24}">
                                <el-form-item label="订单号码">
                                    <el-input v-model="orderQueryForm.orderNum"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :md="{span:11,offset:2}" :sm="{span:24}">
                                <el-form-item label="OMS号">
                                    <el-input v-model="orderQueryForm.OMSNum"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row class="no_margin_bottom">
                            <el-col :md="{span:11}">
                                <el-form-item label="下单日期">
                                    <el-date-picker
                                        v-model="orderQueryForm.daterange"
                                        type="daterange"
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :md="{span:11,offset:2}">
                                <el-form-item class="button_box">
                                    <el-row>
                                        <el-col :sm="{span:11}" :xs="{span:24}">
                                            <el-button>查询</el-button>
                                        </el-col>
                                        <el-col :sm="{span:11,offset:2}" :xs="{span:24}">
                                            <el-button>导出CSV</el-button>
                                        </el-col>
                                    </el-row>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </div>
                <div slot="result" class="query_result">
                    <el-row>
                        <el-col :xs="{span:24}">
                            <el-table
                                :data="orderQueryTableData" 
                                border 
                                fit 
                                highlight-current-row>
                                <el-table-column type="expand">
                                    <template slot-scope="props">
                                        <el-form label-position="left" inline class="print-table-expand">
                                            <el-form-item label="RDC 代码">
                                                <span>{{ props.row.RDCCode }}</span>
                                            </el-form-item>
                                            <el-form-item label="供应商代码">
                                                <span>{{ props.row.ClientCode }}</span>
                                            </el-form-item>
                                            <el-form-item label="起点城市">
                                                <span>{{ props.row.FromCity }}</span>
                                            </el-form-item>
                                            <el-form-item label="装运编号">
                                                <span>{{ props.row.ShipmentNo }}</span>
                                            </el-form-item>
                                            <el-form-item label="司机">
                                                <span>{{ props.row.driverName }}</span>
                                            </el-form-item>
                                            <el-form-item label="发货数量">
                                                <span>{{ props.row.IssueQTY }}</span>
                                            </el-form-item>
                                            <el-form-item label="到达">
                                                <span>{{ props.row.arrive }}</span>
                                            </el-form-item>
                                            <el-form-item label="轨迹">
                                                <span>{{ props.row.path }}</span>
                                            </el-form-item>
                                            <el-form-item label="OMS号">
                                                <span>{{ props.row.OmsNo }}</span>
                                            </el-form-item>
                                            <el-form-item label="收货人名称">
                                                <span :title="props.row.ToName">{{ props.row.ToName }}</span>
                                            </el-form-item>
                                            <el-form-item label="终点城市">
                                                <span>{{ props.row.ToCity }}</span>
                                            </el-form-item>
                                            <el-form-item label="重量">
                                                <span>{{ props.row.IssueWeight }}</span>
                                            </el-form-item>
                                            <el-form-item label="交付">
                                                <span>{{ props.row.delivery }}</span>
                                            </el-form-item>
                                            <el-form-item label="客户订单号">
                                                <span>{{ props.row.OrderNo }}</span>
                                            </el-form-item>
                                            <el-form-item label="收货地址">
                                                <span :title="props.row.ToAddr">{{ props.row.ToAddr }}</span>
                                            </el-form-item>
                                            <el-form-item label="下单时间">
                                                <span>{{ props.row.OrderTime }}</span>
                                            </el-form-item>
                                            <el-form-item label="发货时间">
                                                <span>{{ props.row.IssueTime }}</span>
                                            </el-form-item>
                                            <el-form-item label="体积">
                                                <span>{{ props.row.IssueVolume }}</span>
                                            </el-form-item>
                                            <el-form-item label="EPOD">
                                                <span>{{ props.row.AppEPOD }}</span>
                                            </el-form-item>
                                        </el-form>
                                    </template>
                                </el-table-column>
                                <el-table-column label="RDC代码" min-width="140">
                                    <template slot-scope="scope">
                                        <span>{{scope.row.RDCCode}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column label="订单号" min-width="120">
                                    <template slot-scope="scope">
                                        <span>{{scope.row.OrderNo}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column label="OMS号" min-width="180">
                                    <template slot-scope="scope">
                                        <router-link :to="'/supplier/orderDetail/'+scope.row.OmsNo">
                                            <span class="oms_num">{{scope.row.OmsNo}}</span>
                                        </router-link>
                                    </template>
                                </el-table-column>
                                <el-table-column label="起点城市" width="90">
                                    <template slot-scope="scope">
                                        <span>{{scope.row.FromCity}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column label="终点城市" width="90">
                                    <template slot-scope="scope">
                                        <span>{{scope.row.ToCity}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column label="到达" width="80">
                                    <template slot-scope="scope">
                                        <span>{{scope.row.AppArrived}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column label="交付" width="80">
                                    <template slot-scope="scope">
                                        <span>{{scope.row.AppDelivery}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column label="EPOD" width="80">
                                    <template slot-scope="scope">
                                        <span>{{scope.row.AppEPOD}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column label="轨迹" width="80">
                                    <template slot-scope="scope">
                                        <span>{{scope.row.AppTrace}}</span>
                                    </template>
                                </el-table-column>
                                <!-- <el-table-column prop="op" label="操作" width="108" fixed="right">
                                    <template slot-scope="scope">
                                    <el-button type="success" size="mini" round @click="seeDetail(scope.row.omsNum)">查看详情</el-button>
                                    </template>
                                </el-table-column> -->
                            </el-table>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :xs="{span:24}" :sm="{span:20,offset:2}">
                            <pagination :total="paginationConfig.total" :layout="paginationConfig.layout"></pagination>
                        </el-col>
                    </el-row>
                </div>
            </panel-and-result>
        </div>
        <error-page v-else></error-page>
    </div>
</template>
<script>
import {getToken} from '@/utils/auth'
import {getPagePermission} from '@/api/getPagePermission'
import {getList} from '@/api/list'
import ErrorPage from '@/components/Error'
import PanelAndResult from '@/components/PanelAndResult'
import Pagination from '@/components/Pagination'
export default {
    data(){
        return {
            isShowLoading:true,
            isShowNoPermission:null,
            orderQueryForm:{
                orderNum:'',
                OMSNum:'',
                daterange:''
            },
            paginationConfig:{
                total:10,
                layout:'prev, pager, next'
            },
            orderQueryTableData:[]
        }
    },
    components:{
        ErrorPage,PanelAndResult,Pagination
    },
    beforeCreate(){
        getPagePermission(getToken()).then(res=>{
            const hasPermission=res.data.result.permission
            if(res.status===200){
                this.isShowLoading=false
                if(!hasPermission){
                    this.isShowNoPermission=false
                }else{
                    this.isShowNoPermission=true
                }
            }
        })
    },
    mounted(){
        getList(this.orderQueryForm).then(res=>{
            console.log(res)
            this.orderQueryTableData=res.data.result
        })
    },
    methods:{

    }
}
</script>
<style lang="scss" scoped>
.query_condition{
    .el-form-item{
        margin-bottom: 15px;
    }
    .button_box{
        .el-button{
            width: 100%;
        } 
    }
    .el-col-xs-24.el-col-sm-11:first-child{
        .el-button{
            margin-bottom: 5px;
        }
    }
    .el-range-editor{
        width: 100%;
        /deep/ .el-range-separator{
            padding: 0;
            width: 8%;
        }
        /deep/ .el-range-input,.el-range-separator{
            font-size: 10px;
        }
    }
}
.query_result{
    .oms_num{
        color:#007f7b;
        cursor: pointer;
    }
    .print-table-expand{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .el-form-item {
            margin-right: 0;
            width: 33%;
            border: 1px solid #f4f4f4;
            margin-bottom: 4px;
            padding: 0 8px;
            display: flex;
            /deep/ .el-form-item__label{
                flex: 1.5;
            }
            /deep/ .el-form-item__content {
                flex: 3;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
    /deep/ .el-table__expanded-cell[class*=cell]{
        padding: 10px 50px;
    }
}
</style>
