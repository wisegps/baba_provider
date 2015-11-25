/**
 * 百度地图封装类
 */


include("http://api.map.baidu.com/api?v=2.0&ak=OGF3ZKlW2MBgMq45a5fT0sif&callback=mapInit");

function WMap(){
	var map = new BMap.Map("container");//地图实例化
    var zoomControl = new BMap.NavigationControl({type:BMAP_NAVIGATION_CONTROL_ZOOM,anchor:BMAP_ANCHOR_BOTTOM_RIGHT,offset: new BMap.Size(5, 20)});
    map.addControl(zoomControl);//添加缩放控件
    map.addEventListener("tilesloaded", function(){
    	W(".anchorBL").style.display="block";
    });//隐藏地图底部文字
    return map
}
WMap.prototype.loadCar=function(data){ //绘制车辆
    if(!data||data.length===0)
        return;
    
    this.carMk=new Array();
    var point=new Array();
    for(var i=0;i<carData.length;i++){
        //创建一个车辆marker
        this.addCarMarker();
    }
    //如果是初次加载车辆，则设置地图层级
    map.setViewport(map.getViewport(point));
    askId=setTimeout(askAllPos,tiemOut);

    this._dataOndraw=true;//标记当前数据已经被更新到地图上
    this._carData=data;
}

WMap.prototype.addCarMarker()(data){
    if(!data){return;}
    var carInfo=getCarInfo(data);
    var newCarMk=addMarker(carInfo.point,carInfo.rota,carInfo.state);
    newCarMk.index=carMk.length;
    this.addOverlay(newCarMk);
    carMk.push(newCarMk);
    addEventHandler(newCarMk);

    return carInfo.point;
}

WMap.prototype.setCarMk=function(carMk,data){
    var carIcon = carMk.getIcon();
    carIcon.setSize(new BMap.Size(28, 28));
    var iconUrl;
    var carI=getCarInfo(data);
    switch (carI.state) {
        case "alert":
            iconUrl = "image/car_alert.png";
            break;
        case "on":
            iconUrl = "image/car_on.png";
            break;
        case "off":
            iconUrl = "image/car_off.png";
            break;
        case "out":
            iconUrl = "image/car_out.png";
    }

    carIcon.setImageUrl(iconUrl);
    carMk.setIcon(carIcon);
    carMk.setPosition(carI.point);
    carMk.setRotation(carI.rota);
    return carI.point;
}



function carMarker(point,opt){
	if(!opt.icon)
		opt.icon=new BMap.Icon(iconUrl,new BMap.Size(28, 28));
    var marker = new BMap.Marker(point, {icon: myIcon, rotation: rota});
    return marker;
}
