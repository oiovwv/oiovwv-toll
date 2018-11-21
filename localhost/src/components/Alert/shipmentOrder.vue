<template>
  <div>
    <content-header :content="title"></content-header>
    <div class="order_menu shadow_box">
      <div class="menu_button">
        <div v-for="(item,index) in tabs" :key="index" @click="toggle(index)" 
        :class="activeIndex==index?'active':''">
          <div>{{item.label}}</div>
          <div>{{item.num}}</div>
        </div>
      </div>
      <div class="menu_content">
        <div class="little_table">
          <table>
            <tbody>
              <tr v-for="(item,index) in leftTableData" :key="index" 
                :class="leftRowCheckedIndex==index?'row_checked':''">
                <td v-for="(value,key) in item" :key="key" v-show="value!=''">{{value}}</td>
                <td>
                  <span class="iconfont icon-cubes" title="分 RDC 显示" 
                    @click="showRDCTable('RDC',index)">
                  </span>
                </td>
                <td>
                  <span class="iconfont icon-users" title="分客户显示" 
                    @click="showClientTable('Client',index)">
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="little_table" v-show="showMiddleTable">
          <table>
            <tbody>
              <tr v-for="(item,index) in middleTableData" :key="index" 
                :class="middleRowCheckedIndex==index?'row_checked':''">
                <td v-for="(value,key) in item" :key="key" v-show="value!=null">
                  <span :class="key=='Value'?'badge':''">{{value}}</span>
                </td>
                <td>
                  <el-progress :percentage="Number(item.Value)" color="#26928F" :show-text="false"></el-progress>
                </td>
                <td>
                  <span class="iconfont icon-users" title="按客户分组" 
                    @click="showClientGroup(index)"></span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="little_table" v-show="showRightTable">
          <table>
            <tbody>
              <tr v-for="(subItem,i) in rightTableData" :key="i">
                <td v-for="(val,k) in subItem" :key="k" v-show="val!=null" >
                  <span :class="k=='Value'?'badge':''">{{val}}</span>
                </td>
                <td>
                  <el-progress :percentage="Number(subItem.Value)" color="#26928F" :show-text="false"></el-progress>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="order_main shadow_box">
      <div class="order_title">30日订单处理情况展示</div>
      <div class="table">
        <tree-table ref="recTree" :tHead='tableHead' :list="orderData"
          @handlerExpand="handlerExpand" @iomrView="iomrView">
        </tree-table>
      </div>
    </div>
  </div>   
</template>
<script src="../../assets/js/Alert/shipmentOrder.js"></script>
<style src="../../assets/css/Alert/shipmentOrder.css"></style>
