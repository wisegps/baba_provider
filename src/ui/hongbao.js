//首先，在页面中插入样式
var _ui_style=document.createElement("style");
_ui_style.innerHTML='.hongbao{width:312px;height:402px;background:#d84e43;color:#fddcac;border-radius:4px;overflow:hidden;animation:hongbao_bounce-in .65s;-webkit-animation:hongbao_bounce-in .65s;z-index:-1}.hongbao_back_yuan{background:#e05449;border-radius:50%;box-shadow:0 0 10px rgba(0,0,0,.1);width:750px;height:750px;position:relative;left:-70%;top:-119%}.hongbao_content{width:100%;height:100%;position:absolute;top:0;text-align:center}.hongbao_hong .logo,.hongbao_details .logo{width:44px;height:44px;border-radius:50%;margin-top:20px;background:#fff}.hongbao .w_icon.icon_add{color:rgba(0,0,0,.4);text-shadow:0 0 7px rgba(0,0,0,.1);transform:rotate(45deg);-webkit-transform:rotate(45deg);width:1em;position:relative;top:16px;left:8px;font-size:36px}.hongbao_hong p{color:#fddcac;font-size:11px;margin-bottom:26px;margin-top:3px}.hongbao_kai{display:block;margin:auto;background:#dcbc83;width:100px;height:100px;border-radius:50%;line-height:100px;font-size:45px;color:#3c3734;margin-top:-18%;position:relative;font-weight:bold;font-family:宋体;transition:transform 1.5s;-webkit-transition:-webkit-transform 1.5s}.hongbao_kai:after{content:"";position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;width:90px;height:90px;border:1px solid #ceb07c;border-radius:50%}.hongbao_bao{position:absolute;bottom:0;width:100%;height:128px}.hongbao_active{transform:rotate3d(0,1,0,360deg);-webkit-transform:rotate3d(0,1,0,360deg)}@keyframes hongbao_bounce-in{0%,50%,75%,100%{transition-timing-function:cubic-bezier(0.215,0.61,0.355,1)}0%{opacity:0;transform:scale3d(0.3,0.3,0.3)}50%{transform:scale3d(1.1,1.1,1.1)}75%{transform:scale3d(0.9,0.9,0.9)}100%{opacity:1;transform:scale3d(1,1,1)}}@-webkit-keyframes hongbao_bounce-in{0%,50%,75%,100%{-webkit-transition-timing-function:cubic-bezier(0.215,0.61,0.355,1)}0%{opacity:0;-webkit-transform:scale3d(0.3,0.3,0.3)}50%{-webkit-transform:scale3d(1.1,1.1,1.1)}75%{-webkit-transform:scale3d(0.9,0.9,0.9)}100%{opacity:1;-webkit-transform:scale3d(1,1,1)}}.hongbao_details{background:#faf6f1;width:100vw;height:100vh}.hongbao_describe{padding-top:34vw;background:#fffaf5;text-align:center}.hongbao_describe .back_yuan{background:#d84e43;width:200vw;height:200vw;border-radius:50%;position:absolute;top:-166vw;left:-50%}.hongbao_details .logo{margin-top:-30px;width:60px;height:60px}#a{background:#d4d4d4;color:#f4f4f4;margin:1em auto;border-radius:3px;padding:5px;font-size:12px;line-height:1em;display:inline-block}';
document.lastChild.appendChild(_ui_style);

function _ui_hongbao(opt){
	var obj;
	if(_ui_hongbao.obj){
		obj=_ui_hongbao.obj;
	}else{
		obj=new WiStormUI("div");//创建一个div组件
		obj.merge(this);
	}
	obj.setData(opt);
	_ui_hongbao.obj=obj;
	W("body").appendChild(obj);
	return obj;//最后记得要返回组件
}
_ui_hongbao.prototype.setData=function(opt){
	var that=this;	
	if(!opt.value){
		opt.value=opt.name.match(/\d*/)[0];
		opt.name=opt.name.match(/\D+/)[0];
	}
	var html='<div class="hongbao center"><div class="hongbao_back_yuan"></div><div class="hongbao_content"><div class="hongbao_hong"><span class="w_icon icon_add"></span><img class="logo" src="<%logo%>"/><p><%user_name%><br>给你发了一个红包</p><span style="font-size: 24px;"><%text%></span></div><div class="hongbao_bao"><span class="hongbao_kai">開</span></div></div></div><div class="hongbao_details" style="display: none;"><div class="mui-bar mui-bar-nav" style="box-shadow: none;background: #D84E43;"><span class="mui-icon mui-icon-left-nav mui-pull-left" style="color: #FDDCAC;"></span><h1 class="mui-title" style="padding-left: 1em;text-align: left;color: #FDDCAC;line-height: 1.4;"><span style="position: absolute;left: .2em;top: 20%;width: 1em;height: 60%;border-left: 1px solid;"></span>红包详情<br><small style="font-size: 0.8em;">WiCARE红包</small></h1></div><div class="hongbao_describe"><div class="back_yuan"></div><div style="position: relative;"><img class="logo" src="<%logo%>"/><h4 style="font-weight: 100;"><%user_name%>的红包</h4><p style="font-size: 14px;" class="text"><%text%></p><p style="font-size: 60px;margin-top: .8em;color: #000000;"><%value%><small style="font-size: 14px;"><%name%></small></p><a style="font-size: 12px;color: #6B85BA;"><%msg%></a></div><div style="margin-top: 1.6em;padding: .9em;border-top: 1px solid #eee;">留言</div></div><div style="padding: 1.6em;text-align: center;"><a style="font-size: 15px;color: #6B85BA;" href="'+WiStorm.root+'src/baba/wallet.html?needUser=true&temporary=1">查看我的钱包</a></div></div>';
	this.className="cover_paper alert_box";//设置div的class属性
	this.innerHTML=html.replace(/(\<|&lt;)\%.*?\%(&gt;|\>)/g,function(word){
		word=word.replace(/(\<|&lt;|&gt;|\>|%)/g,'');
		return opt[word]||'';
	});
	this.querySelector(".hongbao_kai").addEvent("click",function(){
		var kai=this;
		kai.classList.add("hongbao_active");
		that._open=setTimeout(function(){that.open();},1000);
		
		var data={
			code: that.data.code,
			open_id: that.data.open_id,
			cust_id: that.data.cust_id
		}
		//根据code到后台领取红包
		Wapi.lottery.receive(function(res){
			that.open();
		},data);
	});
	this.querySelector('.mui-icon-left-nav').addEvent('click',function(){
		that.close();
	});
	this.querySelector('.icon_add').addEvent('click',function(){
		var evt = document.createEvent("HTMLEvents");
		evt.initEvent("cancel", false, false);
		this.dispatchEvent(evt);
		that.close(true);
	});
	this.addEvent('animationend',function(){
		if(this.classList.contains('fadeOut'))
			this.classList.add('hide')
	});
	
	this.data=opt;
	this._type=opt.type;
}
_ui_hongbao.prototype.open=function(){
	if(this._open){//需要执行两次open才能打开红包（1次是服务器返回成功，一次是定时器执行）
		this._open=false;
		return;
	}
	this.classList.remove('hide');
	this.classList.remove('fadeOut');
	this.querySelector(".hongbao_details").style.display="block";
	var evt = document.createEvent("HTMLEvents");
	evt.initEvent("open", false, false);
	this.dispatchEvent(evt);
}
_ui_hongbao.prototype.close=function(notEvent){
	var that=this;
	this.classList.add('fadeOut');
	if(!notEvent){
		var evt = document.createEvent("HTMLEvents");
		evt.initEvent("close", false, false);
		this.dispatchEvent(evt);
	}
};

_ui_hongbao.draw=function(data){
	Wapi.lottery.draw(function(res){
		if(!res.code){
			W.alert(res.msg);
			return;
		}
		res.logo='http://h5.bibibaba.cn/baba/wx/img/logo.jpg';
		res.user_name='WiCARE';
		res.text='恭喜发财，大吉大利！';
		res.open_id=data.open_id;
		res.cust_id=data.cust_id;
		new _ui_hongbao(res);
	},data);
}
