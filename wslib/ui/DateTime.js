/**
 * @constructor
 * @description 日期选择控件，返回一个input元素，开发者直接操作该元素即可
 */
function DateSelector(){
	var obj=new WiStormUI("input");
	obj.merge(this);
	new DateSelectorPicker();
	
	obj.addEvent("click",DateSelector.focus);
	obj.addEvent('focus',DateSelector.focus);
	obj.type="text";
	
	return obj;
}

//取消焦点，显示日期选择
DateSelector.focus=function(){
	this.blur();
	W.focus(this);
	var picker=DateSelector.picker;
	var table=picker.querySelector("table");
	var val=this.value,d;
	if(val){
		val=val.trim();
		var a=val.split(/[-\s]/);
		d=new Date();
		d.setFullYear(a[0]);
		d.setMonth(a[1]-1);
		d.setDate(a[2]);
	}else{
		d=picker.getDate();
	}

	table.innerHTML="";
	picker.setDate(d);
	table.appendChild(DateSelector.makeMonth(d));
	picker.show();
}

DateSelector.cancel=function(){
	DateSelector.picker.hide();
	W.blur();//取消任何焦点（伪）
	event.preventDefault();
}

DateSelector.ok=function(){
	var date=DateSelector.picker.getDate();
	var input=W.getFocus();
	if(input){
		input.value=date.WtoString().slice(0,10);
		var evt = document.createEvent("HTMLEvents");
		evt.initEvent("change", false, false);
		input.dispatchEvent(evt);
	}
		
	W.blur()
	DateSelector.picker.hide();
	event.preventDefault();
}

//传入日期，创建该月的日历
DateSelector.makeMonth=function(toDay){
	var table=document.createDocumentFragment();
	var now=new Date(toDay.getTime());

	var k=___.date_k;
	var tr=document.createElement("tr"),td;
	var tr1=document.createElement("tr"),th;
	
	toDay.setDate(1);
	for(var i=0;i<7;i++){
		//创建第一行
		td=document.createElement("td");
		if(i>=toDay.getDay()){
			makeDay();
		}
		tr.appendChild(td);

		th=document.createElement("th");
		th.innerText=k[i];
		tr1.appendChild(th);
	}
	table.appendChild(tr1);
	table.appendChild(tr);

	var temM=toDay.getMonth();
	for(var r=0;r<4;r++){
		//创建接下来所有行
		tr=document.createElement("tr");
		for(var i=0;i<7;i++){
			if(toDay.getMonth()!=temM)
				break;
			td=document.createElement("td");
			makeDay();
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
	return table;
	
	function makeDay(){
		td.innerHTML="<span>"+toDay.getDate()+"</span>";
		td.addEvent("click",DateSelector.selectDate);
		td.value=toDay.getTime();
			
		if(toDay.getMonth()==now.getMonth()&&toDay.getDate()==now.getDate()&&toDay.getFullYear()==now.getFullYear())
			td.className="active";
		toDay.setDate(toDay.getDate()+1);
	}
}

DateSelector.selectDate=function(){
	var table=W.parents(this,2);
	var active=table.querySelector(".active");
	if(active)
		active.className=active.className.replace(/\s*active/,"");
	if(this.className.search("active")<0)
		this.className+=" active";

	var toDay=new Date(this.value);
	var picker=W.parents(table,4);
	picker.setDate(toDay)
}

DateSelector.nextMonth=function(){
	DateSelector.preMonth("next");
}

DateSelector.preMonth=function(next){
	var picker=DateSelector.picker
	var table=picker.querySelector("table");
	var preM;
	table.innerHTML="";
	preM=picker.getDate();
	if(next=="next")
		preM.setMonth(preM.getMonth()+1);
	else
		preM.setMonth(preM.getMonth()-1);
	picker.setDate(preM);
	table.appendChild(DateSelector.makeMonth(preM));
}

DateSelector.showYear=function(){
	var picker=DateSelector.picker;
	var ul=picker.querySelector("ul");
	ul.style.display="block";
	picker.querySelector("table").style.opacity="0";
	ul.scrollTop=(ul.scrollHeight-200)/2;
}

DateSelector.chooseYear=function(){
	var picker=DateSelector.picker;
	var active=this.parentElement.querySelector(".active");
	active.className="";
	this.className="active";
	
	var d=picker.getDate();
	d.setFullYear(this.innerText);
	picker.setDate(d);
	setTimeout(DateSelector.hideYear,500);
}

DateSelector.hideYear=function(){
	var picker=DateSelector.picker;
	var ul=picker.querySelector("ul");
	ul.style.display="none";
	picker.querySelector("table").style.opacity="1";
}

function DateSelectorPicker(){
	//选择日期控件
	if(DateSelector.picker)
		return;
	var obj=new WiStormUI("div");
	obj.merge(this);

	obj.className="cover_paper date_picker hide fadeIn";
	obj.innerHTML='<div class="content center date_content fromTop"><div class="date_year"><span class="year unactive"></span><div class="date"><span id="week"></span><span>,</span> <span id="Date"></span></div></div><div class="date_day"><div class="date_month"><div class="date_month_left"><svg style="display:inline-block;height:24px;width:24px;-webkit-user-select:none;transition:all 450ms cubic-bezier(0.23,1,.32,1) 0ms;fill:rgba(0,0,0,.87)"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg></div><div class="date_month_right"><svg style="display:inline-block;height:24px;width:24px;-webkit-user-select:none;transition:all 450ms cubic-bezier(0.23,1,.32,1) 0ms;fill:rgba(0,0,0,.87)"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg></div><div class="date_month_main"></div></div><div class="date_date"><ul></ul><table></table></div></div><div class="date_button_div"><div class="date_button cancel">'+___.cancel+'</div><div class="date_button ok">'+___.ok+'</div></div></div>';

	var toDay=new Date();
	var table=obj.querySelector("table");
	table.appendChild(DateSelector.makeMonth(toDay));
	
	var year=toDay.getFullYear();
	var year0=year+99;
	var ul=obj.querySelector("ul"),li;
	for(var i=year-99;i<year0;i++){
		li=document.createElement("li");
		if(i==year)
			li.className="active";
		li.innerHTML="<span>"+i+"</span>";
		li.addEvent("click",DateSelector.chooseYear);
		ul.appendChild(li);
	}

	toDay=new Date();
	this.setDate.call(obj,toDay);
	
	DateSelector.picker=obj;
	document.body.appendChild(obj);
	
	obj.querySelector(".date_month_left").addEvent("click",DateSelector.preMonth);
	obj.querySelector(".date_month_right").addEvent("click",DateSelector.nextMonth);
	obj.querySelector(".date_button.cancel").addEvent("click",DateSelector.cancel);
	obj.querySelector(".date_button.ok").addEvent("click",DateSelector.ok);
	obj.querySelector(".date_month_main").addEvent("click",DateSelector.showYear);
}

DateSelectorPicker.prototype.setDate=function(toDay){
	var K=___.date_K;
	var m=___.date_m;
	var M=___.date_M;
	var y=toDay.getFullYear();
	var m1=toDay.getMonth();
	var d1=toDay.getDate();
	this.querySelector(".year").innerHTML=y;
	this.querySelector("#week").innerHTML=K[toDay.getDay()];
	this.querySelector("#Date").innerHTML=m[m1]+" "+d1;
	this.querySelector(".date_month_main").innerHTML=M[m1]+" "+y;

	this.value=toDay.getTime();
}

DateSelectorPicker.prototype.hide=WiStormUI.hide;

DateSelectorPicker.prototype.show=WiStormUI.show;

DateSelectorPicker.prototype.getDate=function(){
	return new Date(this.value);
}

/**
* 选择列表插件
* varstion 2.0.0
* by Houfeng
* Houfeng@DCloud.io
**/
!function(e,t,i,a){var n=30,r=90,s=40,c=10,l=e.rad2deg=function(e){return e/(Math.PI/180)},o=(e.deg2rad=function(e){return e*(Math.PI/180)},navigator.platform.toLowerCase()),d=navigator.userAgent.toLowerCase(),u=(d.indexOf("iphone")>-1||d.indexOf("ipad")>-1)&&(o.indexOf("iphone")>-1||o.indexOf("ipad")>-1),p=e.Picker=function(e,t){var i=this;i.holder=e,i.options=t||{},i.init(),i.initInertiaParams(),i.calcElementItemPostion(!0),i.bindEvent()};p.prototype.findElementItems=function(){var e=this;return e.elementItems=[].slice.call(e.holder.querySelectorAll("li")),e.elementItems},p.prototype.init=function(){var e=this;e.list=e.holder.querySelector("ul"),e.findElementItems(),e.height=e.holder.offsetHeight,e.r=e.height/2-c,e.d=2*e.r,e.itemHeight=e.elementItems.length>0?e.elementItems[0].offsetHeight:s,e.itemAngle=parseInt(e.calcAngle(.8*e.itemHeight)),e.hightlightRange=e.itemAngle/2,e.visibleRange=r,e.beginAngle=0,e.beginExceed=e.beginAngle-n,e.list.angle=e.beginAngle,u&&(e.list.style.webkitTransformOrigin="center center "+e.r+"px")},p.prototype.calcElementItemPostion=function(e){var t=this;e&&(t.items=[]),t.elementItems.forEach(function(i){var a=t.elementItems.indexOf(i);if(t.endAngle=t.itemAngle*a,i.angle=t.endAngle,i.style.webkitTransformOrigin="center center -"+t.r+"px",i.style.webkitTransform="translateZ("+t.r+"px) rotateX("+-t.endAngle+"deg)",e){var n={};n.text=i.innerHTML||"",n.value=i.getAttribute("data-value")||n.text,t.items.push(n)}}),t.endExceed=t.endAngle+n,t.calcElementItemVisibility(t.beginAngle)},p.prototype.calcAngle=function(e){var t=this,i=b=parseFloat(t.r);e=Math.abs(e);var a=180*parseInt(e/t.d);e%=t.d;var n=(i*i+b*b-e*e)/(2*i*b),r=a+l(Math.acos(n));return r},p.prototype.calcElementItemVisibility=function(e){var t=this;t.elementItems.forEach(function(i){var a=Math.abs(i.angle-e);a<t.hightlightRange?i.classList.add("highlight"):a<t.visibleRange?(i.classList.add("visible"),i.classList.remove("highlight")):(i.classList.remove("highlight"),i.classList.remove("visible"))})},p.prototype.setAngle=function(e){var t=this;t.list.angle=e,t.list.style.webkitTransform="perspective(1000px) rotateY(0deg) rotateX("+e+"deg)",t.calcElementItemVisibility(e)},p.prototype.bindEvent=function(){var e=this,t=0,i=null;e.holder.addEventListener("touchstart",function(a){a.preventDefault(),e.list.style.webkitTransition="",i=(a.changedTouches?a.changedTouches[0]:a).pageY,t=e.list.angle,e.updateInertiaParams(a,!0)},!1),e.holder.addEventListener("touchend",function(t){t.preventDefault(),e.startInertiaScroll(t)},!1),e.holder.addEventListener("touchcancel",function(t){t.preventDefault(),e.startInertiaScroll(t)},!1),e.holder.addEventListener("touchmove",function(a){a.preventDefault();var n=(a.changedTouches?a.changedTouches[0]:a).pageY,r=n-i,s=e.calcAngle(r),c=r>0?t-s:t+s;c>e.endExceed&&(c=e.endExceed),c<e.beginExceed&&(c=e.beginExceed),e.setAngle(c),e.updateInertiaParams(a)},!1),e.list.addEventListener("tap",function(t){elementItem=t.target,"LI"==elementItem.tagName&&e.setSelectedIndex(e.elementItems.indexOf(elementItem),200)},!1)},p.prototype.initInertiaParams=function(){var e=this;e.lastMoveTime=0,e.lastMoveStart=0,e.stopInertiaMove=!1},p.prototype.updateInertiaParams=function(e,t){var i=this,a=e.changedTouches?e.changedTouches[0]:e;if(t)i.lastMoveStart=a.pageY,i.lastMoveTime=e.timeStamp||Date.now(),i.startAngle=i.list.angle;else{var n=e.timeStamp||Date.now();n-i.lastMoveTime>300&&(i.lastMoveTime=n,i.lastMoveStart=a.pageY)}i.stopInertiaMove=!0},p.prototype.startInertiaScroll=function(e){var t=this,i=e.changedTouches?e.changedTouches[0]:e,a=e.timeStamp||Date.now(),n=(i.pageY-t.lastMoveStart)/(a-t.lastMoveTime),r=n>0?-1:1,s=6e-4*r*-1,c=Math.abs(n/s),l=n*c/2,o=t.list.angle,d=t.calcAngle(l)*r,u=d;return o+d<t.beginExceed&&(d=t.beginExceed-o,c=c*(d/u)*.6),o+d>t.endExceed&&(d=t.endExceed-o,c=c*(d/u)*.6),0==d?void t.endScroll():void t.scrollDistAngle(a,o,d,c)},p.prototype.scrollDistAngle=function(e,t,i,a){var n=this;n.stopInertiaMove=!1,function(e,t,i,a){var r=13,s=a/r,c=0;!function l(){if(!n.stopInertiaMove){var e=n.quartEaseOut(c,t,i,s);return n.setAngle(e),c++,c>s-1||e<n.beginExceed||e>n.endExceed?void n.endScroll():void setTimeout(l,r)}}()}(e,t,i,a)},p.prototype.quartEaseOut=function(e,t,i,a){return-i*((e=e/a-1)*e*e*e-1)+t},p.prototype.endScroll=function(){var e=this;if(e.list.angle<e.beginAngle)e.list.style.webkitTransition="150ms ease-out",e.setAngle(e.beginAngle);else if(e.list.angle>e.endAngle)e.list.style.webkitTransition="150ms ease-out",e.setAngle(e.endAngle);else{var t=parseInt((e.list.angle/e.itemAngle).toFixed(0));e.list.style.webkitTransition="100ms ease-out",e.setAngle(e.itemAngle*t)}e.triggerChange()},p.prototype.triggerChange=function(t){var i=this;setTimeout(function(){var a=i.getSelectedIndex(),n=i.items[a];e.trigger&&(a!=i.lastIndex||t)&&e.trigger(i.holder,"change",{index:a,item:n}),i.lastIndex=a},0)},p.prototype.correctAngle=function(e){var t=this;return e<t.beginAngle?t.beginAngle:e>t.endAngle?t.endAngle:e},p.prototype.setItems=function(e){var t=this;t.items=e||[];var i=[];t.items.forEach(function(e){null!==e&&e!==a&&i.push("<li>"+(e.text||e)+"</li>")}),t.list.innerHTML=i.join(""),t.findElementItems(),t.calcElementItemPostion(),t.setAngle(t.correctAngle(t.list.angle)),t.triggerChange(!0)},p.prototype.getItems=function(){var e=this;return e.items},p.prototype.getSelectedIndex=function(){var e=this;return parseInt((e.list.angle/e.itemAngle).toFixed(0))},p.prototype.setSelectedIndex=function(e,t){var i=this;i.list.style.webkitTransition="";var a=i.correctAngle(i.itemAngle*e);if(t&&t>0){var n=a-i.list.angle;i.scrollDistAngle(Date.now(),i.list.angle,n,t)}else i.setAngle(a);i.triggerChange()},p.prototype.getSelectedItem=function(){var e=this;return e.items[e.getSelectedIndex()]},p.prototype.getSelectedValue=function(){var e=this;return(e.items[e.getSelectedIndex()]||{}).value},p.prototype.getSelectedText=function(){var e=this;return(e.items[e.getSelectedIndex()]||{}).text},p.prototype.setSelectedValue=function(e,t){var i=this;for(var a in i.items){var n=i.items[a];if(n.value==e)return void i.setSelectedIndex(a,t)}},e.fn&&(e.fn.picker=function(e){return this.each(function(t,i){if(!i.picker)if(e)i.picker=new p(i,e);else{var a=i.getAttribute("data-picker-options"),n=a?JSON.parse(a):{};i.picker=new p(i,n)}}),this[0]?this[0].picker:null},e.ready(function(){e(".mui-picker").picker()}))}(window.mui||window,window,document,void 0),function(e,t){e.dom=function(i){return"string"!=typeof i?i instanceof Array||i[0]&&i.length?[].slice.call(i):[i]:(e.__create_dom_div__||(e.__create_dom_div__=t.createElement("div")),e.__create_dom_div__.innerHTML=i,[].slice.call(e.__create_dom_div__.childNodes))};var i='<div class="mui-poppicker">		<div class="mui-poppicker-header">			<button class="mui-btn mui-poppicker-btn-cancel">取消</button>			<button class="mui-btn mui-btn-blue mui-poppicker-btn-ok">确定</button>			<div class="mui-poppicker-clear"></div>		</div>		<div class="mui-poppicker-body">		</div>	</div>',a='<div class="mui-picker">		<div class="mui-picker-inner">			<div class="mui-pciker-rule mui-pciker-rule-ft"></div>			<ul class="mui-pciker-list">			</ul>			<div class="mui-pciker-rule mui-pciker-rule-bg"></div>		</div>	</div>';e.PopPicker=e.Class.extend({init:function(a){var n=this;n.options=a||{},n.options.buttons=n.options.buttons||["取消","确定"],n.panel=e.dom(i)[0],t.body.appendChild(n.panel),n.ok=n.panel.querySelector(".mui-poppicker-btn-ok"),n.cancel=n.panel.querySelector(".mui-poppicker-btn-cancel"),n.body=n.panel.querySelector(".mui-poppicker-body"),n.mask=e.createMask(),n.cancel.innerText=n.options.buttons[0],n.ok.innerText=n.options.buttons[1],n.cancel.addEventListener("tap",function(e){n.hide()},!1),n.ok.addEventListener("tap",function(e){if(n.callback){var t=n.callback(n.getSelectedItems());t!==!1&&n.hide()}},!1),n.mask[0].addEventListener("tap",function(){n.hide()},!1),n._createPicker(),n.panel.addEventListener("touchstart",function(e){e.preventDefault()},!1),n.panel.addEventListener("touchmove",function(e){e.preventDefault()},!1)},_createPicker:function(){var t=this,i=t.options.layer||1,n=100/i+"%";t.pickers=[];for(var r=1;i>=r;r++){var s=e.dom(a)[0];s.style.width=n,t.body.appendChild(s);var c=e(s).picker();t.pickers.push(c),s.addEventListener("change",function(e){var t=this.nextSibling;if(t&&t.picker){var i=e.detail||{},a=i.item||{};t.picker.setItems(a.children)}},!1)}},setData:function(e){var t=this;e=e||[],t.pickers[0].setItems(e)},getSelectedItems:function(){var e=this,t=[];for(var i in e.pickers){var a=e.pickers[i];t.push(a.getSelectedItem()||{})}return t},show:function(i){var a=this;a.callback=i,a.mask.show(),t.body.classList.add(e.className("poppicker-active-for-page")),a.panel.classList.add(e.className("active")),a.__back=e.back,e.back=function(){a.hide()}},hide:function(){var i=this;i.disposed||(i.panel.classList.remove(e.className("active")),i.mask.close(),t.body.classList.remove(e.className("poppicker-active-for-page")),e.back=i.__back)},dispose:function(){var e=this;e.hide(),setTimeout(function(){e.panel.parentNode.removeChild(e.panel);for(var t in e)e[t]=null,delete e[t];e.disposed=!0},300)}})}(mui,document),function(e,t){e.dom=function(i){return"string"!=typeof i?i instanceof Array||i[0]&&i.length?[].slice.call(i):[i]:(e.__create_dom_div__||(e.__create_dom_div__=t.createElement("div")),e.__create_dom_div__.innerHTML=i,[].slice.call(e.__create_dom_div__.childNodes))};var i='<div class="mui-dtpicker" data-type="datetime">		<div class="mui-dtpicker-header">			<button data-id="btn-cancel" class="mui-btn">取消</button>			<button data-id="btn-ok" class="mui-btn mui-btn-blue">确定</button>		</div>		<div class="mui-dtpicker-title"><h5 data-id="title-y">年</h5><h5 data-id="title-m">月</h5><h5 data-id="title-d">日</h5><h5 data-id="title-h">时</h5><h5 data-id="title-i">分</h5></div>		<div class="mui-dtpicker-body">			<div data-id="picker-y" class="mui-picker">				<div class="mui-picker-inner">					<div class="mui-pciker-rule mui-pciker-rule-ft"></div>					<ul class="mui-pciker-list">					</ul>					<div class="mui-pciker-rule mui-pciker-rule-bg"></div>				</div>			</div>			<div data-id="picker-m" class="mui-picker">				<div class="mui-picker-inner">					<div class="mui-pciker-rule mui-pciker-rule-ft"></div>					<ul class="mui-pciker-list">					</ul>					<div class="mui-pciker-rule mui-pciker-rule-bg"></div>				</div>			</div>			<div data-id="picker-d" class="mui-picker">				<div class="mui-picker-inner">					<div class="mui-pciker-rule mui-pciker-rule-ft"></div>					<ul class="mui-pciker-list">					</ul>					<div class="mui-pciker-rule mui-pciker-rule-bg"></div>				</div>			</div>			<div data-id="picker-h" class="mui-picker">				<div class="mui-picker-inner">					<div class="mui-pciker-rule mui-pciker-rule-ft"></div>					<ul class="mui-pciker-list">					</ul>					<div class="mui-pciker-rule mui-pciker-rule-bg"></div>				</div>			</div>			<div data-id="picker-i" class="mui-picker">				<div class="mui-picker-inner">					<div class="mui-pciker-rule mui-pciker-rule-ft"></div>					<ul class="mui-pciker-list">					</ul>					<div class="mui-pciker-rule mui-pciker-rule-bg"></div>				</div>			</div>		</div>	</div>';e.DtPicker=e.Class.extend({init:function(a){var n=this,r=e.dom(i)[0];t.body.appendChild(r),e('[data-id*="picker"]',r).picker();var s=n.ui={picker:r,mask:e.createMask(),ok:e('[data-id="btn-ok"]',r)[0],cancel:e('[data-id="btn-cancel"]',r)[0],y:e('[data-id="picker-y"]',r)[0],m:e('[data-id="picker-m"]',r)[0],d:e('[data-id="picker-d"]',r)[0],h:e('[data-id="picker-h"]',r)[0],i:e('[data-id="picker-i"]',r)[0],labels:e('[data-id*="title-"]',r)};s.cancel.addEventListener("tap",function(){n.hide()},!1),s.ok.addEventListener("tap",function(){var e=n.callback(n.getSelected());e!==!1&&n.hide()},!1),s.y.addEventListener("change",function(){n._createDay()},!1),s.m.addEventListener("change",function(){n._createDay()},!1),s.mask[0].addEventListener("tap",function(){n.hide()},!1),n._create(a),n.ui.picker.addEventListener("touchstart",function(e){e.preventDefault()},!1),n.ui.picker.addEventListener("touchmove",function(e){e.preventDefault()},!1)},getSelected:function(){var e=this,t=e.ui,i=e.options.type,a={type:i,y:t.y.picker.getSelectedItem(),m:t.m.picker.getSelectedItem(),d:t.d.picker.getSelectedItem(),h:t.h.picker.getSelectedItem(),i:t.i.picker.getSelectedItem(),toString:function(){return this.value}};switch(i){case"datetime":a.value=a.y.value+"-"+a.m.value+"-"+a.d.value+" "+a.h.value+":"+a.i.value,a.text=a.y.text+"-"+a.m.text+"-"+a.d.text+" "+a.h.text+":"+a.i.text;break;case"date":a.value=a.y.value+"-"+a.m.value+"-"+a.d.value,a.text=a.y.text+"-"+a.m.text+"-"+a.d.text;break;case"time":a.value=a.h.value+":"+a.i.value,a.text=a.h.text+":"+a.i.text;break;case"month":a.value=a.y.value+"-"+a.m.value,a.text=a.y.text+"-"+a.m.text;break;case"hour":a.value=a.y.value+"-"+a.m.value+"-"+a.d.value+" "+a.h.value,a.text=a.y.text+"-"+a.m.text+"-"+a.d.text+" "+a.h.text}return a},setSelectedValue:function(e){var t=this,i=t.ui,a=t._parseValue(e);i.y.picker.setSelectedValue(a.y,0),i.m.picker.setSelectedValue(a.m,0),i.d.picker.setSelectedValue(a.d,0),i.h.picker.setSelectedValue(a.h,0),i.i.picker.setSelectedValue(a.i,0)},isLeapYear:function(e){return e%4==0&&e%100!=0||e%400==0},_inArray:function(e,t){for(var i in e){var a=e[i];if(a===t)return!0}return!1},getDayNum:function(e,t){var i=this;return i._inArray([1,3,5,7,8,10,12],t)?31:i._inArray([4,6,9,11],t)?30:i.isLeapYear(e)?29:28},_fill:function(e){return e=e.toString(),e.length<2&&(e=0+e),e},_createYear:function(e){var t=this,i=t.options,a=t.ui,n=[];if(i.customData.y)n=i.customData.y;else for(var r=i.beginYear,s=i.endYear,c=r;s>=c;c++)n.push({text:c+"",value:c});a.y.picker.setItems(n)},_createMonth:function(e){var t=this,i=t.options,a=t.ui,n=[];if(i.customData.m)n=i.customData.m;else for(var r=1;12>=r;r++){var s=t._fill(r);n.push({text:s,value:s})}a.m.picker.setItems(n)},_createDay:function(e){var t=this,i=t.options,a=t.ui,n=[];if(i.customData.d)n=i.customData.d;else for(var r=t.getDayNum(parseInt(a.y.picker.getSelectedValue()),parseInt(a.m.picker.getSelectedValue())),s=1;r>=s;s++){var c=t._fill(s);n.push({text:c,value:c})}a.d.picker.setItems(n),e=e||a.d.picker.getSelectedValue()},_createHours:function(e){var t=this,i=t.options,a=t.ui,n=[];if(i.customData.h)n=i.customData.h;else for(var r=0;23>=r;r++){var s=t._fill(r);n.push({text:s,value:s})}a.h.picker.setItems(n)},_createMinutes:function(e){var t=this,i=t.options,a=t.ui,n=[];if(i.customData.i)n=i.customData.i;else for(var r=0;59>=r;r++){var s=t._fill(r);n.push({text:s,value:s})}a.i.picker.setItems(n)},_setLabels:function(){var e=this,t=e.options,i=e.ui;i.labels.each(function(e,i){i.innerText=t.labels[e]})},_setButtons:function(){var e=this,t=e.options,i=e.ui;i.cancel.innerText=t.buttons[0],i.ok.innerText=t.buttons[1]},_parseValue:function(e){var t={};if(e){var i=e.replace(":","-").replace(" ","-").split("-");t.y=i[0],t.m=i[1],t.d=i[2],t.h=i[3],t.i=i[4]}else{var a=new Date;t.y=a.getFullYear(),t.m=a.getMonth()+1,t.d=a.getDate(),t.h=a.getHours(),t.i=a.getMinutes()}return t},_create:function(e){var t=this;e=e||{},e.labels=e.labels||["年","月","日","时","分"],e.buttons=e.buttons||["取消","确定"],e.type=e.type||"datetime",e.customData=e.customData||{},t.options=e;var i=new Date;e.beginYear=e.beginYear||i.getFullYear()-5,e.endYear=e.endYear||i.getFullYear()+5;var a=t.ui;t._setLabels(),t._setButtons(),a.picker.setAttribute("data-type",e.type),t._createYear(),t._createMonth(),t._createDay(),t._createHours(),t._createMinutes(),t.setSelectedValue(e.value)},show:function(i){var a=this,n=a.ui;a.callback=i||e.noop,n.mask.show(),t.body.classList.add(e.className("dtpicker-active-for-page")),n.picker.classList.add(e.className("active")),a.__back=e.back,e.back=function(){a.hide()}},hide:function(){var i=this;if(!i.disposed){var a=i.ui;a.picker.classList.remove(e.className("active")),a.mask.close(),t.body.classList.remove(e.className("dtpicker-active-for-page")),e.back=i.__back}},dispose:function(){var e=this;e.hide(),setTimeout(function(){e.ui.picker.parentNode.removeChild(e.ui.picker);for(var t in e)e[t]=null,delete e[t];e.disposed=!0},300)}})}(mui,document);

/**
 * @constructor
 * @description 时间选择控件，返回一个input元素，开发者直接操作该元素即可
 */
function TimeSelector(){
	var obj=new WiStormUI("input");
	obj.merge(this);
	
	obj.type="text";
	if(!TimeSelector.picker){
		if(!W("#W_mui-pciker-list__")){
			//创建选择列表样式
			var style=document.createElement("style");
			style.innerHTML='.mui-pciker-list li,.mui-picker,.mui-picker-inner{box-sizing:border-box;overflow:hidden}.mui-picker{background-color:#ddd;position:relative;height:200px;border:1px solid rgba(0,0,0,.1);-webkit-user-select:none;user-select:none}.mui-dtpicker,.mui-poppicker{left:0;background-color:#eee;box-shadow:0 -5px 7px 0 rgba(0,0,0,.1);-webkit-transition:.3s;width:100%}.mui-picker-inner{position:relative;width:100%;height:100%;-webkit-mask-box-image:-webkit-linear-gradient(bottom,transparent,transparent 5%,#fff 20%,#fff 80%,transparent 95%,transparent);-webkit-mask-box-image:linear-gradient(top,transparent,transparent 5%,#fff 20%,#fff 80%,transparent 95%,transparent)}.mui-pciker-list,.mui-pciker-rule{box-sizing:border-box;padding:0;margin:-18px 0 0;width:100%;height:36px;line-height:36px;position:absolute;left:0;top:50%}.mui-pciker-rule-bg{z-index:0}.mui-pciker-rule-ft{z-index:2;border-top:solid 1px rgba(0,0,0,.1);border-bottom:solid 1px rgba(0,0,0,.1)}.mui-pciker-list{z-index:1;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:perspective(750pt) rotateY(0) rotateX(0);transform:perspective(750pt) rotateY(0) rotateX(0)}.mui-pciker-list li{width:100%;height:100%;position:absolute;text-align:center;vertical-align:middle;-webkit-backface-visibility:hidden;backface-visibility:hidden;font-size:1pc;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;color:#888;padding:0 8px;white-space:nowrap;-webkit-text-overflow:ellipsis;text-overflow:ellipsis;cursor:default;visibility:hidden}.mui-pciker-list li.highlight,.mui-pciker-list li.visible{visibility:visible}.mui-pciker-list li.highlight{color:#222}.mui-poppicker{position:fixed;z-index:999;border-top:solid 1px #ccc;bottom:0;-webkit-transform:translateY(300px)}.mui-poppicker.mui-active{-webkit-transform:translateY(0)}.mui-android-5-1 .mui-poppicker{bottom:-300px;-webkit-transition-property:bottom;-webkit-transform:none}.mui-android-5-1 .mui-poppicker.mui-active{bottom:0;-webkit-transition-property:bottom;-webkit-transform:none}.mui-poppicker-header{padding:6px;font-size:14px;color:#888}.mui-poppicker-header .mui-btn{font-size:9pt;padding:5px 10px}.mui-poppicker-btn-cancel{float:left}.mui-poppicker-btn-ok{float:right}.mui-poppicker-clear{clear:both;height:0;line-height:0;font-size:0;overflow:hidden}.mui-poppicker-body{position:relative;width:100%;height:200px;border-top:solid 1px #ddd}.mui-poppicker-body .mui-picker{width:100%;height:100%;margin:0;border:none;float:left}.mui-dtpicker{position:fixed;z-index:999999;border-top:solid 1px #ccc;bottom:0;-webkit-transform:translateY(300px)}.mui-dtpicker.mui-active{-webkit-transform:translateY(0)}.mui-dtpicker-active-for-page{overflow:hidden!important}.mui-android-5-1 .mui-dtpicker{bottom:-300px;-webkit-transition-property:bottom;-webkit-transform:none}.mui-android-5-1 .mui-dtpicker.mui-active{bottom:0;-webkit-transition-property:bottom;-webkit-transform:none}.mui-dtpicker-header{padding:6px;font-size:14px;color:#888}.mui-dtpicker-header button{font-size:9pt;padding:5px 10px}.mui-dtpicker-header button:last-child{float:right}.mui-dtpicker-body{position:relative;width:100%;height:200px}.mui-ios .mui-dtpicker-body{-webkit-perspective:75pc;perspective:75pc;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.mui-dtpicker-title h5{display:inline-block;width:20%;margin:0;padding:8px;text-align:center;border-top:solid 1px #ddd;background-color:#f0f0f0;border-bottom:solid 1px #ccc}[data-type=hour] [data-id=title-i],[data-type=hour] [data-id=picker-i],[data-type=month] [data-id=title-i],[data-type=month] [data-id=picker-d],[data-type=month] [data-id=title-d],[data-type=month] [data-id=picker-h],[data-type=month] [data-id=title-h],[data-type=month] [data-id=picker-i],[data-type=time] [data-id=picker-y],[data-type=time] [data-id=picker-m],[data-type=time] [data-id=picker-d],[data-type=time] [data-id=title-y],[data-type=time] [data-id=title-m],[data-type=time] [data-id=title-d],[data-type=date] [data-id=title-i],[data-type=date] [data-id=picker-h],[data-type=date] [data-id=title-h],[data-type=date] [data-id=picker-i]{display:none}.mui-dtpicker .mui-picker{width:20%;height:100%;margin:0;float:left;border:none}[data-type=hour] [data-id=picker-h],[data-type=hour] [data-id=title-h],[data-type=datetime] [data-id=picker-h],[data-type=datetime] [data-id=title-h]{border-left:dotted 1px #ccc}[data-type=datetime] .mui-picker,[data-type=time] .mui-dtpicker-title h5{width:20%}[data-type=date] .mui-dtpicker-title h5,[data-type=date] .mui-picker{width:33.3%}[data-type=hour] .mui-dtpicker-title h5,[data-type=hour] .mui-picker{width:25%}[data-type=month] .mui-dtpicker-title h5,[data-type=month] .mui-picker,[data-type=time] .mui-dtpicker-title h5,[data-type=time] .mui-picker{width:50%}';
			style.id="W_mui-pciker-list__";
			document.body.appendChild(style);
		}
		TimeSelector.picker=new mui.DtPicker({"type":"time"});
	}
	obj.addEvent('click',TimeSelector.show,false);
	obj.addEvent('focus',TimeSelector.show,false);
	return obj;
}

TimeSelector.show=function(){
	this.blur();
	W.focus(this);
	TimeSelector.picker.show(TimeSelector.result);
}

TimeSelector.result=function(rs){
	var value=rs.text;
	var input=W.blur();
	if(input){
		input.value=value;
		var evt = document.createEvent("HTMLEvents");
		evt.initEvent("change", false, false);
		input.dispatchEvent(evt);
	}
}
