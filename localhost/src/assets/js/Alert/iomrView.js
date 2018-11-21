import contentHeader from '../../../components/common/contentHeader'

export default {
    data(){
        return {
            title:{a:'订单列表查询',b:'订单多条件组合查询',
            c:'可视化预警/Pre-Alert',d:"订单列表查询"},
            date:'',
            iomrViewHead:[
                {prop:'client',label:'客户',width:'80'},
                {prop:'orderNum',label:'订单号',width:'120'},
                {prop:'OMSNum',label:'OMS号',width:'140'},
                {prop:'RDC',label:'RDC',width:'150'},
                {prop:'shipper',label:'发货人',width:'80'},
                {prop:'consignee',label:'收货人',width:'100'},
                {prop:'shippingAddr',label:'收货地址',width:'135'},
                {prop:'city',label:'城市',width:'80'},
                {prop:'linkman',label:'联系人',width:'80'},
                {prop:'contactNum',label:'联系电话',width:'115'},
                {prop:'createTime',label:'创建时间',width:'100'}
            ],
            imorViewData:[
                {client:'COL',orderNum:'BH201810-562',OMSNum:'GBMK003710100',RDC:'STA GUANGZHOU1',
                shipper:'拓领环球物流（中国）有限公司广州RDC',consignee:'广州蓝月亮',
                shippingAddr:'广州黄埔区云埔开发区埔南路36号',city:'广州',linkman:'',contactNum:'020-82981232',
                createTime:'2018/10/28 8:10:11'},
                {client:'COL',orderNum:'BH201810-562',OMSNum:'GBMK003710100',RDC:'STA GUANGZHOU1',
                shipper:'拓领环球物流（中国）有限公司广州RDC',consignee:'广州蓝月亮',
                shippingAddr:'广州黄埔区云埔开发区埔南路36号',city:'广州',linkman:'',contactNum:'020-82981232',
                createTime:'2018/10/28 8:10:11'}
            ]
        }
    },
    mounted(){
        this.date=this.$route.params.date
    },
    methods: {
        
    },
    components:{
        contentHeader
    }
}