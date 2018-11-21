<template>
  <div class="visual_box">
    <div class="header">
      <el-row>
        <el-col :span="3">
          <img src="../../../assets/images/logo.png" alt="">
        </el-col>
        <el-col :span="9" :offset="1">
          <div class="site_time">
            {{site}} {{date}}{{nowTime}}
          </div>
        </el-col>
        <el-col :span="9" :offset="3">
          <div class="explain">
            <div>说明/Legend</div>
            <div>
              <div>
                <span class="warn"></span>
                <span>预警订单/Warning Orders</span>
              </div>
              <div>
                <span class="normal"></span>
                <span>正常订单/Normal Orders</span>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="main">
      <table>
        <thead>
          <tr>
            <th>客户</th>
            <th colspan="2">发货单/DROP</th>
            <th colspan="2">收货单/RECEIVING</th>
            <th colspan="2">拣货/PICKING</th>
            <th colspan="2">上架/PUTAWAY</th>
            <th>补货/REPLENISHMENT</th>
          </tr>
        </thead>
        <tbody v-for="(item,index) in visualTableData.slice((currentPage - 1) * pageSize,currentPage * pageSize)" :key="index">
          <tr>
            <td rowspan="2" class="client">{{item.client}}</td>
            <td class="same" :class="item.iPossibleDelayed!=0?'is_warning':''" 
              @click="toDisplayView(item.client,rdc,'1')">
              {{item.iPossibleDelayed}}
            </td>
            <td class="same">{{item.iOnTrack}}</td>
            <td class="same" :class="item.rPossibleDelayed!=0?'is_warning':''" 
              @click="toDisplayView(item.client,rdc,'2')">
              {{item.rPossibleDelayed}}
            </td>
            <td class="same">{{item.rOnTrack}}</td>
            <td class="same" :class="item.pkPossibleDelayed!=0?'is_warning':''" 
              @click="toDisplayView(item.client,rdc,'3')">
              {{item.pkPossibleDelayed}}
            </td>
            <td class="same">{{item.pkOnTrack}}</td>
            <td class="same" :class="item.pwPossibleDelayed!=0?'is_warning':''" 
              @click="toDisplayView(item.client,rdc,'4')">
              {{item.pwPossibleDelayed}}
            </td>
            <td class="same">{{item.pwOnTrack}}</td>
            <td :class="item.rpPossibleDelayed!=0?'is_warning':''" 
              @click="toDisplayView(item.client,rdc,'5')">
              {{item.rpPossibleDelayed}}
            </td>
          </tr>
          <tr>
            <td colspan="2">{{item.iTotal}}</td>
            <td colspan="2">{{item.rTotal}}</td>
            <td colspan="2">{{item.pkTotal}}</td>
            <td colspan="2">{{item.pwTotal}}</td>
            <td>{{item.rpTotal}}</td>
          </tr>
        </tbody>
        <tbody v-show="visualTableData.length!=0">
          <tr>
            <td colspan="10" class="pagination">
              <el-pagination
                background
                layout="pager"
                :page-size="pageSize"
                :current-page="currentPage"
                @current-change="currentChange"
                :total="visualTableData.length">
              </el-pagination>
            </td>
          </tr>
        </tbody>
        <tbody v-show="visualTableData.length!=0">
          <tr>
            <td rowspan="2">合计</td>
            <td class="same" :class="totalA!=0?'is_warning':''">{{totalA}}</td>
            <td class="same">{{totalB}}</td>
            <td class="same" :class="totalC!=0?'is_warning':''">{{totalC}}</td>
            <td class="same">{{totalD}}</td>
            <td class="same">{{totalE}}</td>
            <td class="same">{{totalF}}</td>
            <td class="same">{{totalG}}</td>
            <td class="same">{{totalH}}</td>
            <td :class="totalI!=0?'is_warning':''">{{totalI}}</td>
          </tr>
          <tr>
            <td colspan="2">{{totalJ}}</td>
            <td colspan="2">{{totalK}}</td>
            <td colspan="2">{{totalL}}</td>
            <td colspan="2">{{totalM}}</td>
            <td>{{totalN}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="foot">
      <strong>Copyright © {{year}} 拓领环球物流（中国）有限公司</strong>
    </div>
    <div class="weather">
      <div @click="trafficWeather">交通天气</div>
      <div @click="lookWeather">查看天气</div>
    </div>
    <weather-dialog :isShowWeatherDialog="dialogWeather" @closeWeatherDialog="closeWeatherDialog"></weather-dialog>
  </div>   
</template>
<script src="../../../assets/js/Display/display.js"></script>
<style src="../../../assets/css/Display/display.css"></style>
