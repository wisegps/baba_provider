//首先，在页面中插入样式
var _ui_coupon_style=document.createElement("style");
_ui_coupon_style.innerHTML='.coupon_box{text-align: left;margin-left:2%;margin-top:1em;width:96%;}.coupon{width: 100%;height: 7.5em;background-color: white;padding: 0.5em 1em 0;border-bottom: solid 1px #efefef;margin-bottom: 1em;}.coupon_valid_time{font-size: 0.8em; color: #666666;}.coupon_exp{font-size:0.8em;margin-top: 6em; color: #666666;}.coupon_sum{float:right; font-size: 2em; margin-top: 0.2em; color: orange;}';
document.lastChild.appendChild(_ui_coupon_style);

function _ui_coupon(box,callback,showUsed){
	if(showUsed==undefined)showUsed=null;
	console.log(showUsed);
	box.innerHTML="";
	box.classList.add("coupon_box");
	getCoupon(box,callback,showUsed);
}
//获取优惠券表
function getCoupon(box,callback,showUsed){
	Wapi.voucher.list(function(res){
		if (res.status_code) {
			W.errorCode(res);
			return;
		} else{
			addCoupon(box,res.data,callback,showUsed);
		}
	},{//param
		open_id: open_id,//正式用
//		open_id: _user.login_id,//测试用
		access_token: _user.access_token
	});
}
//添加每一张券到box
function addCoupon(parent,data,callback,showUsed){
	for(var i=0;i<data.length;i++){
		if(showUsed==null||data[i].is_used==showUsed){
			console.log(data[i].is_used);
			parent.appendChild(new Coupon(data[i],callback));
		}
	}
}

//奖券组件
function Coupon(data,callback) {
	var coupon = new WiStormUI("div"); //创建一个div组件
	coupon.merge(this);
	coupon.innerHTML = '<div style="float: left;"><div name="coupon_remark" style="font-size: 1.2em;">折扣券</div><div name="coupon_valid_time" class="coupon_valid_time">有效期至2016-6-6</div></div><div class="coupon_sum"><div name="coupon_sum">8.8折</div><div name="is_used" style="font-size:0.5em; color: #333333; float: right; margin-top:1em;">未使用</div></div><div name="coupon_exp" class="coupon_exp">购买WiCARE Air可以抵扣，不可叠加使用。</div>';
	coupon.className = "coupon";
	coupon.setData(data,callback);
	return coupon;
}
//给组件添加对象方法
Coupon.prototype.getData = function() {
	return this.data;
}
Coupon.prototype.setData = function(data,callback) {
	initText(this,"coupon_remark",data.remark);
	
	var valid_time=data.valid_time.split("T")[0];
	initText(this,"coupon_valid_time","有效期至"+valid_time);
	
	var sum=data.sum;
	if(data.type==0){
		sum+="元";
		initText(this,"coupon_exp","购买WiCARE Air可以抵扣"+sum+"，不可叠加使用");
	}else if(data.type==1){
		sum+="折";
		initText(this,"coupon_exp","购买WiCARE Air可以享受"+sum+"，不可叠加使用");
	}else if(data.type==2){
		sum+="台";
		initText(this,"coupon_exp","购买WiCARE Air可以抵扣"+sum+"。");
	}
	initText(this,"coupon_sum",sum);
	if(data.is_used==true){
		changeColor(this,"coupon_sum","gray");
		initText(this,"is_used","已使用");
	}
	
	this.addEvent('click',callback);
	this.data = data;
}


//工具类 改变元素中某个子元素的innerText,用name选择子元素
function initText(parent, name, value) {
	if(value==undefined||value==null) value="";
	var ele = parent.querySelector("[name=" + name + "]");
	if (ele != null) {
		ele.innerText = value;
	}
}

//工具类 改变元素中某个子元素的颜色，用name选择子元素
function changeColor(parent,name,color){
	var ele = parent.querySelector("[name=" + name + "]");
	if (ele != null) {
		ele.style.color = color;
	}
}