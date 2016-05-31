//使用此组件需要引入ui.css，string_factory.js
window.addEventListener("load", function(){
	//插入样式
	var _star_style=document.createElement("style");
	_star_style.innerHTML='.star{color: #ccc;font-size:30px;}';
	document.lastChild.appendChild(_star_style);
	
	//插入弹出的评价
	var grade=new WiStormUI("div");
	grade.innerHTML='<div id="toTop" class="alert_view content hide"><div class="tabel_center"><div id="fade" class="cover_paper alert_box fadeOut" style="padding: 1em;position: relative;"><span class="mui-icon mui-icon-close"></span><div>选择评价星级</div><div class="checkin_box"><div style="text-align: center;margin-bottom: 5px;"><span class="mui-icon mui-icon-star-filled star"></span><span class="mui-icon mui-icon-star-filled star"></span><span class="mui-icon mui-icon-star-filled star"></span><span class="mui-icon mui-icon-star-filled star"></span><span class="mui-icon mui-icon-star-filled star"></span></div><textarea id="leave_val" placeholder="评价内容（可不填）"></textarea>	<div style="text-align: center;margin-bottom: 5px;"><button type="button" class="mui-btn W_primary">确定</button></div></div></div></div></div>';
	W("body").appendChild(grade);
	W('.W_primary').addEvent('click',updateCar);//添加点击保存  更新业务数据
	W(".mui-icon-close").addEvent('click',closeFade);//关掉遮罩
	
	var spans = W(".mui-icon-star-filled",true);
	for(var i=0;i<spans.length;i++){
		spans[i].index=i+1;
		spans[i].addEvent('click',creatColor);//添加点击改变颜色
	}
});

function RepairCard(data){
	var obj = new WiStormUI("div"); //创建一个div组件
	obj.merge(this); //将原型.prototype中的方法赋予当前obj
	obj.className = "ui_car_d"; //设置div的class属性，该样式在ui.css中
	obj.data=data;
	obj.setData(data); //设置obj的内容,setData()在下面.prototype中定义
	return obj; //最后记得要返回组件
}
//给组件添加对象方法
RepairCard.prototype.getData = function() {
	return this.data;
}
RepairCard.prototype.setData = function(data) {
	this.innerHTML = '<table><tr><th colspan="2"><img src="http://img.wisegps.cn/logo/m_8_100.png" onerror="javascript:this.src=\'WiStorm.root+img/icon_car_moren.png\'"><span name="value" class="business_content">粤B614D1</span></th></tr><tr><td><span class="name">店名:</span><span class="value" name="seller_name">指定店铺</span></td><td><span class="name">车牌:</span><span class="value" name="obj_name">粤B2333</span></td></tr><tr><td><span class="name">状态:</span><span class="value" name="business_status">已完工</span></td><td><span class="name">车型:</span><span class="value" name="car_type">宝马X3 2012款</span></td></tr><tr><td><span class="name">行驶里程:</span><span class="value" name="mileage">56000公里</span></td>	<td><span class="name">维修类型:</span><span class="value" name="business_type">保养</span></td></tr><tr><td><span class="name">到店时间:</span><span class="value" name="arrive_time">11-03 16:30</span></td><td><span class="name">离店时间:</span><span class="value" name="leave_time">11-03 16:30</span></td></tr><tr><td><span class="name">开始时间:</span><span class="value" name="job_start_time">11-03 16:30</span></td><td><span class="name">完工时间:</span><span class="value" name="job_end_time">11-03 16:30</span></td></tr><tr><td name="comment"><span class="name">评价:</span><span class="value"></span></td></tr></table>';
	initEvaluate_level(this,data.evaluate_level);
	var name;
	if(!data.business_content)
		name=$BizType(data.business_type);
	else
		name=$BizType(data.business_type)+"["+data.business_content+']'
	this.getElementsByTagName('img')[0].src="http://img.wisegps.cn/logo/m_"+data.car_brand_id+"_100.png";
		
	initText(this, "seller_name",$V(data.seller_name));
	initText(this, "obj_name",$V(data.obj_name));
	initText(this, "value",name);
	var status=["未知","已到店","已完工","已离店","作业中"];
	initText(this, "business_status", status[data.status]);
	var ctype = $V(data.car_series) + " " + $V(data.car_type);//$V,$T,$BizType，在string_factory.js中定义
	initText(this, "car_type", ctype);
	initText(this, "mileage", data.mileage);
	initText(this, "business_type", $BizType(data.business_type));
	initText(this, "arrive_time", $T(data.arrive_time));
	initText(this, "leave_time", $T(data.leave_time));
	initText(this, "job_start_time", $T(data.job_start_time));
	initText(this, "job_end_time", $T(data.job_end_time));

	this.data = data; //直接把数据缓存进入组件（按需求，如果数据是需要重复用的就这样缓存）
}


/**
 * 
 * 设置评价等级
 * @param {Object} level
 */
function initEvaluate_level(taget,level) {
	var nodes=taget.querySelector("[name='comment']>.value").parentNode;
	if (level == undefined) {
		nodes.parentNode.removeChild(nodes);
		if(taget.data.status==3){
			var footer= document.createElement('footer');
			footer.innerHTML='<button class="mui-btn mui-btn-primary" type="button" style="margin-right: .5em; ">点击评价 </button>';
			footer.className='fot';
			taget.appendChild(footer);
			footer.firstChild.addEvent('click',setLevel);//添加点击评价			
		}
	}else{
		var star = "";
		for (var i = 1; i <= level; i++) {
			star += "<span class='mui-icon mui-icon-star-filled'></span>";
		}
		taget.querySelector("[name='comment']>.value").innerHTML = star;
		var td =document.createElement('td');
		td.style.whiteSpace="pre-wrap";
		var evaluate_content=taget.data.evaluate_content||"";
		if(evaluate_content.length>7){
			td.innerHTML=evaluate_content.slice(0,7)+"...<span style='float:right;color: #50b7de;font-size: 20px;' class='mui-icon mui-icon-eye'></span>";
			td.addEvent('click',showLevel);//点击眼睛显示评价内容
		}else
			td.innerHTML=evaluate_content;	
			nodes.parentNode.appendChild(td);				
	}

}

/**
 *点击眼睛显示评价内容 
 */
function showLevel(){
	var json={
	"title":'评价',
	"content":W.parents(this,4).data.evaluate_content,
	"ok":___.ok,
	"callback":function(){}
	}
	W.alert(json);
}
/**
 *点击评价 
 */
function setLevel(){
	W('#toTop').className='cover_paper alert_box fadeIn';
	W('#fade').className='alert_view content fromTop';
	level_data=W.parents(this,2);//获取点击元素的data属性 拿到之前保存的json数据
}
/**
 *点击星星 改变颜色 
 */
function creatColor(){
	z_index= this.index;
	var spans = W(".star",true);
	for(var j=0;j<spans.length;j++){
		spans[j].style.color='#ccc';
	}
	for(var i=0;i<z_index;i++){
		spans[i].style.color='#FF8F00';
	}
}
/**
 *点击保存更新业务数据
 */
function updateCar(){
	var level=z_index;
	var level_val=W('#leave_val').value;
	if(level_val!=undefined)
		level_val=level_val;
	else
		level_val='';
	var dates = new Date();
	dates=dates.WtoString();
	if(!level){
		W.toast('请选择评定星级');
	}else{
 		var data={
			_business_id:level_data.data.business_id,
			access_token:_user.access_token,
			evaluate_level:level,
			evaluate_content:level_val,
			evaluate_time:dates
 		}
 		Wapi.business.update(function(res){
			if (res.status_code) {
				W.errorCode(res);
				return;
			}
				closeFade();
				level_data.data.evaluate_level=level;
				level_data.data.evaluate_content=level_val;
				level_data.setData(level_data.data);
 		},data);
 	}
}


function closeFade(){
	var spans = W(".star",true);
	for(var j=0;j<spans.length;j++){
		spans[j].style.color='#ccc';
	}			
	W('#toTop').className='cover_paper alert_box fadeOut';
	W('#fade').className='alert_view content toTop';
	W('#leave_val').value='';
}

//工具类 根据name选择元素并修改内容
function initText(ctx, name, value) {
	var ele = ctx.querySelector("[name=" + name + "]");
	if (ele != null) {
		ele.innerText = $V(value);
	}
}
