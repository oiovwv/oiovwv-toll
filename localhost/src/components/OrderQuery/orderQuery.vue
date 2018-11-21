<template>
  <div>
    <content-header :content="title"></content-header>
    <content-panel :subtitle="subtitle" @openModal="openModal">
      <query ref="queryArg"></query>
    </content-panel>

    <main-content>
      <div id='print'>
        <el-table
          :data="tableData.slice((currentPage - 1) * pageSize,currentPage * pageSize)" 
          style="width: 95%;margin:0 auto;" border>
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="print-table-expand">
                <el-form-item label="RDC 代码">
                  <span>{{ props.row.rdcNum }}</span>
                </el-form-item>
                <el-form-item label="供应商代码">
                  <span>{{ props.row.vendorCode }}</span>
                </el-form-item>
                <el-form-item label="起点城市">
                  <span>{{ props.row.startCity }}</span>
                </el-form-item>
                <el-form-item label="装运编号">
                  <span>{{ props.row.shippingNum }}</span>
                </el-form-item>
                <el-form-item label="司机">
                  <span>{{ props.row.driverName }}</span>
                </el-form-item>
                <el-form-item label="发货数量">
                  <span>{{ props.row.shippedNum }}</span>
                </el-form-item>
                <el-form-item label="到达">
                  <span>{{ props.row.arrive }}</span>
                </el-form-item>
                <el-form-item label="轨迹">
                  <span>{{ props.row.path }}</span>
                </el-form-item>
                <el-form-item label="OMS号">
                  <span>{{ props.row.omsNum }}</span>
                </el-form-item>
                <el-form-item label="收货人名称">
                  <span>{{ props.row.consigneeName }}</span>
                </el-form-item>
                <el-form-item label="终点城市">
                  <span>{{ props.row.endCity }}</span>
                </el-form-item>
                <el-form-item label="重量">
                  <span>{{ props.row.weight }}</span>
                </el-form-item>
                <el-form-item label="交付">
                  <span>{{ props.row.delivery }}</span>
                </el-form-item>
                <el-form-item label="客户订单号">
                  <span>{{ props.row.orderNum }}</span>
                </el-form-item>
                <el-form-item label="收货地址">
                  <span>{{ props.row.consigneeAddr }}</span>
                </el-form-item>
                <el-form-item label="下单时间">
                  <span>{{ props.row.orderTime }}</span>
                </el-form-item>
                <el-form-item label="发货时间">
                  <span>{{ props.row.shippedTime }}</span>
                </el-form-item>
                <el-form-item label="体积">
                  <span>{{ props.row.bulk }}</span>
                </el-form-item>
                <el-form-item label="EPOD">
                  <span>{{ props.row.epod }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column 
            :prop="item.prop"
            :label="item.label"
            :width="item.width" v-for="(item,index) in tHead" :key="index">
          </el-table-column>
          <el-table-column prop="op" label="操作" width="108" fixed="right">
            <template slot-scope="scope">
              <el-button type="success" size="mini" round @click="seeDetail(scope.row.omsNum)">查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </main-content>


    <pagination :totalNum="tableData.length" :pageSize="pageSize" :currentPage="currentPage"
    v-on:currentchange="currentchange" v-on:sizechange="sizechange"></pagination>


    <panel-modal :isShowModal="isShowModal" @closeModal="closeModal">
      <p>饭后水果等进口高科技手段更加快速的很快就规划设计的客户高科技</p>
      <h1>饭后水果等进口高科技手段更加快速的很快就规划设计的客户高科技</h1>
    </panel-modal>
  </div>    
</template>

<script src='../../assets/js/orderQuery/orderQuery.js'></script>
<style src='../../assets/css/orderQuery/orderQuery.css' scoped></style>
