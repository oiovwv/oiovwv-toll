import contentHeader from '../../../components/common/contentHeader'
import box from '../../../components/common/box'
export default {
    data(){
        return {
            title:{a:'订单统计(发货订单数)',b:'发货订单量统计，包括：订单数、订单数量、重量、体积',
            c:'可视化预警/Pre-Alert',d:"订单统计(发货订单数)"},
            value:'北京',
            tabs:[
                {label:'By RDC',selectLabel:'RDC Code',value:'',selectOptions:[
                    {value: '选项1',label: '黄金糕'},
                    {value: '选项2',label: '双皮奶'},
                    {value: '选项3',label: '蚵仔煎'},
                    {value: '选项4',label: '龙须面'},
                    {value: '选项5',label: '北京烤鸭'}
                ]},
                {label:'By Client',selectLabel:'Client Code',value:'',selectOptions:[
                    {value: '选项1',label: '黄金糕'},
                    {value: '选项2',label: '双皮奶'},
                ]}
            ],
            activeNum:0
        }
    },
    mounted(){
        this.drawLine()
    },
    methods: {
        drawLine(){
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.showLoading();
            setTimeout(()=>{
                myChart.hideLoading();
            },3000);
            myChart.setOption({

                tooltip: {},
                color:['#0EFFFF','#FF6347'],
                grid:{
                    show:true
                },
                legend: {
                    data:['2017','2018']
                },
                toolbox:{
                    show:true,
                    feature: {
                        dataView: {readOnly: false},
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    data: ['01','02','03','04','05','06','07','08','09','10','11','12']
                },
                yAxis: {},
                series: [
                    {
                        name: '2017',
                        type: 'line',
                        data: [0,0,0,0,0,0,0,0,0,0,0,0]
                    },
                    {
                        name: '2018',
                        type: 'bar',
                        data: []
                    }
                ]
            });
        },
        toggleTab(index){
            this.activeNum=index
        }
    },
    components:{
        contentHeader,box
    }
}