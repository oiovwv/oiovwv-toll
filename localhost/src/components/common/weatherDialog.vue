<template>
    <div>
        <el-dialog title="全国天气情况查看" :visible.sync="isShowWeatherDialog" 
        :before-close="closeDialog" ref="dailog" @open="open" :close-on-click-modal="false">
            <div>
                <div id="weather"></div>
            </div>
            <div v-show="weatherTableData.length!=0">
                <table border>
                <thead>
                    <tr>
                    <th>城市</th>
                    <th>天气</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in weatherTableData" :key="index">
                    <td>{{item.name}}</td>
                    <td>{{item.WeatherStatus}}</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import {getWeather,getWeatherByCity} from '../../utils/api/index.js'
import 'echarts/map/js/china.js'
export default {
    data(){
        return {
            weatherTableData:[],
            visible: false
        }
    },
    created(){
        this.visible=this.isShowWeatherDialog
    },
    props:{
        isShowWeatherDialog:{
            type:Boolean,
            default:false
        }
    },
    mounted(){
        if(this.isShowWeatherDialog){
            this.$refs.dialog.open()
        }            
    },
    methods:{
        closeDialog() {
            this.$emit('closeWeatherDialog')
            this.visible = false
        },
        open(){
            getWeather('province').then(res=>{
                if(res.data){
                    let options={
                        backgroundColor: '#fff',
                        title: {
                        x: 'center'
                        },
                        tooltip: {
                        trigger: 'item',
                        formatter: function (res) {
                            if (res.data != undefined) {
                            return res.data["name"] + ":" + res.data["WeatherStatus"];
                            }
                        }
                        },
                        visualMap: {
                        show: true,
                        x: 'left',
                        y: 'bottom',
                        min: 0,
                        max: 5,
                        text: ['High', 'Low'],
                        realtime: false,
                        calculable: true,
                        color: ['#5FF23E', '#3B66F1', '#F2FF1B', '#F49B09', '#E72229', '#FFFFFF']
                        },
                        series: [{
                        name: '天气情况',
                        type: 'map',
                        mapType: 'china',
                        roam: true,
                        label: {
                            normal: {
                            show: true
                            },
                            emphasis: {
                            show: true
                            }
                        },
                        data:res.data
                        }]
                    }
                    let weatherChart=this.$echarts.init(document.getElementById('weather'))
                    weatherChart.setOption(options)
                    weatherChart.on('click',(param)=>{
                        let weatherTable=[]
                        getWeatherByCity('city').then(res=>{
                        for(let i=0;i<res.data.length;i++){
                            if(res.data[i].name==param.name){
                            weatherTable.push({
                                name: res.data[i].City, 
                                value: parseInt(res.data[i].value), 
                                WeatherStatus: res.data[i].WeatherStatus 
                            })
                            }
                        }
                        this.weatherTableData=weatherTable
                        })
                    })
                }
            })  
        }
    }
}
</script>
<style scoped>

</style>
