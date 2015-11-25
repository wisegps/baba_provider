/**
 * 基本控件封装,如不需要可不引用
 */

/**
 * @constructor
 * @description 按钮
 * @param {String} text
 * @param {Function} click
 * @param {String} className可选
 */
function Wbutton(text,click,className){
	var dom=new WiStormUI("button");
	dom.type="button";
	dom.innerText=text;
	dom.className="mui-btn";
	if(className)
		dom.className+=" "+className;
	dom.style.marginTop="1em";
	dom.addEvent("click",click);
	return dom;
}

/**
 * @constructor
 * @description 输入框，默认套在一个div里面，占据一行
 * @param {String} label，label中显示的文字，如“账号”
 * @param {tip} tip 输入框中的提示语，如“请输入账号”
 * @param {type} type可选，输入框的类型，默认text，如“password”
 */
function Winput_box(label,tip,type){
	var dom=new WiStormUI("div");
	dom.className="mui-input-row";
	var type=type||"text";
	dom.innerHTML="<label>"+label+"</label><input type="+type+" placeholder="+tip+">";
	return dom;
}

/**
 * @constructor
 * @description 登录框最简封装，包含账号，密码输入框，和一个登录按钮
 * @param {Function} loginFun，登录按钮的click
 */
function WloginForm(loginFun){
	var dom=new WiStormUI("form");
	dom.className="mui-input-group";
	dom.appendChild(new Winput_box(___.account,___.account_tip));//添加账号输入框
	dom.appendChild(new Winput_box(___.psw,___.psw_tip,"password"));//添加密码输入框
	dom.appendChild(new Wbutton(___.login,loginFun,"mui-btn-block mui-btn-primary mui-btn-outlined"));
	dom.style.padding="1em";
	return dom;
}

/**
 * @constructor
 * @description 搜索框
 */
function SearchBar(){
	var obj=new WiStormUI("div");
	obj.className="mui-input-row mui-search";
	obj.innerHTML='<input type="search" class="mui-input-clear" placeholder="">';
	return obj;
}







/**
 * @constructor
 * @description loading进度条
 */
function WLoading(num){
	var obj=new WiStormUI("div");
	obj.merge(this);
	
	obj.className="loading_bar";
	obj.innerHTML='<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="15.9"/><text x="12" y="23" font-size="8">0%</text></svg>';
	if(num)
		obj.setPercent(num);
	return obj;
}
WLoading.prototype.setPercent=function(num){
	this.querySelector("circle").style.strokeDashoffset=100-num;
	var t=this.querySelector("text");t.textContent=num+"%";
	this.value=num;
}
WLoading.prototype.getPercent=function(){
	return this.value;
}

/**
 * @constructor
 * @description 下拉刷新和上拉加载列表
 */
function rList() {
	var obj = WiStormUI("div");
	var list = WiStormUI("div");
	obj.className = "refresh_list_view";
	list.className = "refresh_list";
	obj.appendChild(list);
	obj.list = list;
	obj.appendChild = function() {
		this.list.appendChild.apply(this.list, arguments);
	}
	obj.removeChild = function() {
		this.list.removeChild.apply(this.list, arguments);
	}
	obj.topFunction = W.noop;
	obj.bottomFunction = W.noop;
	list.addEvent("touchstart", rList.touchS);
	list.addEvent("touchmove", rList.touchM);
	list.addEvent("touchend", rList.touchE);
	document.body.classList.add("mui-ios");
	return obj;
}
rList.touchS = function() {
	this._eTop_ = event.touches[0].screenY;
	this.classList.remove("reback");
	if (!this.scrollTop) { //判断是否在列表顶部或者底部
		this._canMove = "top";
	} else if ((this.scrollHeight - this.offsetHeight - this.scrollTop) < 5) {
		this._canMove = "bottom";
	} else
		this._canMove = false;
}
rList.touchM = function() {
	if (this._canMove) {
		var top = event.changedTouches[0].screenY - this._eTop_;
		var _top = Math.abs(top);
		if (_top > 140) return;

		if (this._canMove == "top" && top > 0) {
			top = -top * top / 280 + top;
			_top = top;
		} else if (this._canMove == "bottom" && top < 0) {
			top = _top * _top / 280 - _top;
			_top = 0;
		} else
			return;

		var transform = "translate3d(0," + top + "px,0)";
		var Ltransform = "translate3d(0," + _top + "px,0)";
		this.style.webkitTransform = transform;
		this.style.transform = transform;
		event.preventDefault();
	}
}
rList.touchE = function() {
	var s = Math.abs(event.changedTouches[0].screenY - this._eTop_);
	if (s > 140) {
		if (this._canMove == "top")
			this.parentElement.topFunction();
		else if(this._canMove == "bottom")
			this.parentElement.bottomFunction();
	}
	this._canMove = false;
	this.classList.add("reback");
	this.style.webkitTransform = "translate3d(0,0,0)";
}