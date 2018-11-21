<template>
  <div>
    <content-header :content="title"></content-header>
    <content-panel :subtitle="subtitle" @openModal="openModal">
      <chevron :name="name" :operateTime="txt"></chevron>
    </content-panel>

    <main-content>
      <table-component :tableData="tData" :tableHeader="tHeader" 
      :currPage="currentPage" :pageSize="pageSize">
      </table-component>
    </main-content>
    
    <pagination :totalNum="tData.length" :pageSize="pageSize" :currentPage="currentPage"
    v-on:currentchange="currentchange" v-on:sizechange="sizechange">
    </pagination>

    <panel-modal :isShowModal="isShowModal" @closeModal="closeModal">
      <h2>饭后水果等进口高科技手段更加快速的很快就规划设计的客户高科技</h2>
      <h1>饭后水果等进口高科技手段更加快速的很快就规划设计的客户高科技</h1>
    </panel-modal>
  </div>    
</template>
<script src="../../assets/js/Chevron/financeData.js"></script>
<style src="../../assets/css/Chevron/financeData.css"></style>
