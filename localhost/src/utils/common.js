export default {
    initMap(){
        var map = new BMap.Map("allmap");          // 创建地图实例  
        var point = new BMap.Point(116.404, 39.915);  // 创建点坐标  
        map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别  
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    },
    array(list,newArray){
    	list.forEach(function(v, i){
	        var n;
	        for (var i = 0; i < newArray.length; i++) {
	            var t = newArray[i];
	            if (t.GROUP_NAME==v.GROUP_NAME) {
	                n = t;
	                break;
	            }
	        }
	        if (!n) {
	            n = {GROUP_NAME:v.GROUP_NAME,list:[]};
	            newArray.push(n);
	        }
	        delete v.GROUP_NAME;
	        delete v.ITEM_DATE;
	        delete v.ITEM_RDC;
	        n.list.push(v);
      	})
      	return newArray
    },
    seeTrafficWeather(){
    	window.open('http://products.weather.com.cn/product/Index/index/procode/YB_JSL_024.shtml')
    }
}