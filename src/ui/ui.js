/**
 * 公共组件
 */


//首先，在页面中插入样式(如果多的话，另存一个文件，换插入link元素的方式引入样式)
var _ui_style=document.createElement("style");
_ui_style.innerHTML="";
document.lastChild.appendChild(_ui_style);


function ui_checkInBtn(id){
	var obj=WiStormUI("button");
	obj.className="mui-btn mui-btn-primary";
	obj.type="button";
	obj.innerText="确认到店";
	obj.setAttribute("data-id",id);
	obj.addEvent("click",ui_checkInBtn.showBox);
	
	return obj;
}
ui_checkInBtn._finish=function(){
	ui_checkInBtn.finish.call(this);
}

//点击美容、维修、保养、救援到店按钮触发
ui_checkInBtn.finish=function(){
	var box=W.parents(this,5);
	var textarea=box.querySelector("textarea");
	var type=this.getAttribute("data-type");
	var text=textarea.value;
	W.alert("车辆id为："+box.car_id+";\n到店类型为："+type+";\n备注："+text);
	box.hide();
	textarea.value="";
	box.car_id=null;
}

//确认到店按钮的点击事件触发
ui_checkInBtn.showBox=function(){
	var obj=ui_checkInBtn.box;
	if(obj){
		obj.car_id=this.getAttribute("data-id");
		obj.show();
	}else{
		obj=new WiStormUI("div");
		obj.className="cover_paper alert_box fadeIn";
		obj.innerHTML='<div class="tabel_center"><div class="alert_view content fromTop" style="padding: 1em;position: relative;"><span class="mui-icon mui-icon-close"></span><div>选择维修类型</div><div class="checkin_box"><textarea placeholder="备注（可不填）"></textarea><div style="text-align: left;margin-bottom: 5px;"><button type="button" class="mui-btn W_primary" data-type="_保养">到店保养</button><button type="button" class="mui-btn W_primary" style="float: right;" data-type="_维修">到店维修</button></div><div style="text-align: left;"><button type="button" class="mui-btn W_primary" data-type="_美容">到店美容</button><button type="button" class="mui-btn W_primary" style="float: right;" data-type="_救援">到店救援</button></div></div></div></div>';
		obj.show=WiStormUI.show;
		obj.hide=WiStormUI.hide;
		
		obj.querySelector(".mui-icon-close").addEvent("click",function(){//关闭按钮
			obj.hide();
		});
		
		obj.querySelector("[data-type='_美容']").addEvent("click",ui_checkInBtn._finish);
		obj.querySelector("[data-type='_维修']").addEvent("click",ui_checkInBtn._finish);
		obj.querySelector("[data-type='_保养']").addEvent("click",ui_checkInBtn._finish);
		obj.querySelector("[data-type='_救援']").addEvent("click",ui_checkInBtn._finish);
		
		obj.car_id=this.getAttribute("data-id");
		obj._show=true;
		document.body.appendChild(obj);
		ui_checkInBtn.box=obj;
	}
}


function ui_areaBox(){
	W.focus(event.target);
	
	var box=ui_areaBox.box;
	if(box){
		box.show();
	}else{
		var obj=WiStormUI("div");
		obj.className="child_view fromSmall";
		obj.style.paddingTop="44px";
		obj.style.position="fixed";
		obj.innerHTML='<div class="mui-bar mui-bar-nav onshadow"><a class="mui-icon mui-icon-left-nav mui-pull-left"></a><h1 class="mui-title">请选择车辆地区</h1></div><table rules="all" frame="box" class="ui_child_table"><tbody><tr><td>京</td><td>津</td><td>沪</td><td>渝</td></tr><tr><td>冀</td><td>豫</td><td>云</td><td>辽</td></tr><tr><td>黑</td><td>湘</td><td>皖</td><td>鲁</td></tr><tr><td>新</td><td>苏</td><td>浙</td><td>赣</td></tr><tr><td>鄂</td><td>桂</td><td>甘</td><td>晋</td></tr><tr><td>蒙</td><td>陕</td><td>吉</td><td>闽</td></tr><tr><td>贵</td><td>粤</td><td>青</td><td>藏</td></tr><tr><td>川</td><td>宁</td><td>琼</td></tr></tbody></table>';
		
		obj.show=function(){
			this.classList.add("fromSmall");
			this.classList.remove("hide");
		};
		obj.hide=function(){
			this.classList.remove("fromSmall");
			this.classList.add("hide");
		};
		obj.querySelector(".mui-icon-left-nav").addEvent("click",function(){
			W.parents(this,2).hide();
		});
		
		var tds=obj.querySelectorAll("td");
		for(var i=tds.length-1;i>=0;i--){
			tds[i].addEvent("click",ui_areaBox._finish);
		}
		
		document.body.appendChild(obj);
		ui_areaBox.box=obj;
	}
}
ui_areaBox._finish=function(){
	ui_areaBox.finish.call(this);
}
ui_areaBox.finish=function(){
	var val=this.innerText;
	var tar=W.getFocus();
	tar.value=val;
	tar.innerText=val;
	var p=W.parents(this,".child_view");
	p.hide();
}

/**
 * 召唤出选择车型的界面
 */
function ui_carSeries(){
	W.focus(event.target);
	if(!ui_carSeries.box){
		ui_carSeries.preLoad();
	}
	ui_carSeries.box.show();
}
ui_carSeries.preLoad=function(){
	var box = WiStormUI("div");
	box.className = "child_view fromSmall hide";
	box.innerHTML = '<iframe src="' + WiStorm.root + "src/ui/car_series.html" + '"></iframe>';
	box.style.position = "fixed";
	
	box.show = function() {
		this.classList.add("fromSmall");
		this.classList.remove("hide");
	};
	box.hide = function() {
		this.classList.remove("fromSmall");
		this.classList.add("hide");
	};
	
	ui_carSeries.box = box;
	document.body.appendChild(box);
}
ui_carSeries.finish=function(res){
	//选择完车型，返回车的json
	ui_carSeries.box.hide();
	var tar=W.getFocus();
	var carName=res.series+" "+res.type;
	tar.innerText=carName;
	tar.value=res;
}
