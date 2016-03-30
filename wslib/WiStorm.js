var mui=function(a,b){var c=/complete|loaded|interactive/,d=/^#([\w-]+)$/,e=/^\.([\w-]+)$/,f=/^[\w-]+$/,g=/translate(?:3d)?\((.+?)\)/,h=/matrix(3d)?\((.+?)\)/,i=function(b,c){if(c=c||a,!b)return j();if("object"==typeof b)return j([b],null);if("function"==typeof b)return i.ready(b);if("string"==typeof b)try{if(b=b.trim(),d.test(b)){var e=a.getElementById(RegExp.$1);return j(e?[e]:[])}return j(i.qsa(b,c),b)}catch(f){}return j()},j=function(a,b){return a=a||[],Object.setPrototypeOf(a,i.fn),a.selector=b||"",a};i.uuid=0,i.data={},i.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},j=1,k=arguments.length,l=!1;for("boolean"==typeof h&&(l=h,h=arguments[j]||{},j++),"object"==typeof h||i.isFunction(h)||(h={}),j===k&&(h=this,j--);k>j;j++)if(null!=(a=arguments[j]))for(c in a)d=h[c],e=a[c],h!==e&&(l&&e&&(i.isPlainObject(e)||(f=i.isArray(e)))?(f?(f=!1,g=d&&i.isArray(d)?d:[]):g=d&&i.isPlainObject(d)?d:{},h[c]=i.extend(l,g,e)):e!==b&&(h[c]=e));return h},i.noop=function(){},i.slice=[].slice,i.filter=[].filter,i.type=function(a){return null==a?String(a):k[{}.toString.call(a)]||"object"},i.isArray=Array.isArray||function(a){return a instanceof Array},i.isWindow=function(a){return null!=a&&a===a.window},i.isObject=function(a){return"object"===i.type(a)},i.isPlainObject=function(a){return i.isObject(a)&&!i.isWindow(a)&&Object.getPrototypeOf(a)===Object.prototype},i.isEmptyObject=function(a){for(var c in a)if(c!==b)return!1;return!0},i.isFunction=function(a){return"function"===i.type(a)},i.qsa=function(b,c){return c=c||a,i.slice.call(e.test(b)?c.getElementsByClassName(RegExp.$1):f.test(b)?c.getElementsByTagName(b):c.querySelectorAll(b))},i.ready=function(b){return c.test(a.readyState)?b(i):a.addEventListener("DOMContentLoaded",function(){b(i)},!1),this},i.map=function(a,b){var c,d,e,f=[];if("number"==typeof a.length)for(d=0,len=a.length;d<len;d++)c=b(a[d],d),null!=c&&f.push(c);else for(e in a)c=b(a[e],e),null!=c&&f.push(c);return f.length>0?[].concat.apply([],f):f},i.each=function(a,b,c){if(!a)return this;if("number"==typeof a.length)[].every.call(a,function(a,c){return b.call(a,c,a)!==!1});else for(var d in a)if(c){if(a.hasOwnProperty(d)&&b.call(a[d],d,a[d])===!1)return a}else if(b.call(a[d],d,a[d])===!1)return a;return this},i.focus=function(a){i.os.ios?setTimeout(function(){a.focus()},10):a.focus()},i.trigger=function(a,b,c){return a.dispatchEvent(new CustomEvent(b,{detail:c,bubbles:!0,cancelable:!0})),this},i.getStyles=function(a,b){var c=a.ownerDocument.defaultView.getComputedStyle(a,null);return b?c.getPropertyValue(b)||c[b]:c},i.parseTranslate=function(a,b){var c=a.match(g||"");return c&&c[1]||(c=["","0,0,0"]),c=c[1].split(","),c={x:parseFloat(c[0]),y:parseFloat(c[1]),z:parseFloat(c[2])},b&&c.hasOwnProperty(b)?c[b]:c},i.parseTranslateMatrix=function(a,b){var c=a.match(h),d=c&&c[1];c?(c=c[2].split(","),"3d"===d?c=c.slice(12,15):(c.push(0),c=c.slice(4,7))):c=[0,0,0];var e={x:parseFloat(c[0]),y:parseFloat(c[1]),z:parseFloat(c[2])};return b&&e.hasOwnProperty(b)?e[b]:e},i.hooks={},i.addAction=function(a,b){var c=i.hooks[a];return c||(c=[]),b.index=b.index||1e3,c.push(b),c.sort(function(a,b){return a.index-b.index}),i.hooks[a]=c,i.hooks[a]},i.doAction=function(a,b){i.isFunction(b)?i.each(i.hooks[a],b):i.each(i.hooks[a],function(a,b){return!b.handle()})},i.later=function(a,b,c,d){b=b||0;var e,f,g=a,h=d;return"string"==typeof a&&(g=c[a]),e=function(){g.apply(c,i.isArray(h)?h:[h])},f=setTimeout(e,b),{id:f,cancel:function(){clearTimeout(f)}}},i.now=Date.now||function(){return+new Date};var k={};return i.each(["Boolean","Number","String","Function","Array","Date","RegExp","Object","Error"],function(a,b){k["[object "+b+"]"]=b.toLowerCase()}),window.JSON&&(i.parseJSON=JSON.parse),i.fn={each:function(a){return[].every.call(this,function(b,c){return a.call(b,c,b)!==!1}),this}},"function"==typeof define&&define.amd&&define("mui",[],function(){return i}),i}(document);!function(a,b){function c(c){this.os={};var d=[function(){var a=c.match(/(MicroMessenger)\/([\d\.]+)/i);return a&&(this.os.wechat={version:a[2].replace(/_/g,".")}),!1},function(){var a=c.match(/(Android);?[\s\/]+([\d.]+)?/);return a&&(this.os.android=!0,this.os.version=a[2],this.os.isBadAndroid=!/Chrome\/\d/.test(b.navigator.appVersion)),this.os.android===!0},function(){var a=c.match(/(iPhone\sOS)\s([\d_]+)/);if(a)this.os.ios=this.os.iphone=!0,this.os.version=a[2].replace(/_/g,".");else{var b=c.match(/(iPad).*OS\s([\d_]+)/);b&&(this.os.ios=this.os.ipad=!0,this.os.version=b[2].replace(/_/g,"."))}return this.os.ios===!0}];[].every.call(d,function(b){return!b.call(a)})}c.call(a,navigator.userAgent)}(mui,window),function(a,b){function c(c){this.os=this.os||{};var d=c.match(/Html5Plus/i);d&&(this.os.plus=!0,a(function(){b.body.classList.add("mui-plus")}),c.match(/StreamApp/i)&&(this.os.stream=!0,a(function(){b.body.classList.add("mui-plus-stream")})))}c.call(a,navigator.userAgent)}(mui,document),function(a,b,c){a.targets={},a.targetHandles=[],a.registerTarget=function(b){return b.index=b.index||1e3,a.targetHandles.push(b),a.targetHandles.sort(function(a,b){return a.index-b.index}),a.targetHandles},b.addEventListener("touchstart",function(b){for(var d=b.target,e={};d&&d!==c;d=d.parentNode){var f=!1;if(a.each(a.targetHandles,function(c,g){var h=g.name;f||e[h]||!g.hasOwnProperty("handle")?e[h]||g.isReset!==!1&&(a.targets[h]=!1):(a.targets[h]=g.handle(b,d),a.targets[h]&&(e[h]=!0,g.isContinue!==!0&&(f=!0)))}),f)break}})}(mui,window,document),function(a){String.prototype.trim===a&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Object.setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a}}(),function(){function a(a,b){b=b||{bubbles:!1,cancelable:!1,detail:void 0};var c=document.createEvent("Events"),d=!0;for(var e in b)"bubbles"===e?d=!!b[e]:c[e]=b[e];return c.initEvent(a,d,!0),c}"undefined"==typeof window.CustomEvent&&(a.prototype=window.Event.prototype,window.CustomEvent=a)}(),function(a){"classList"in a.documentElement||!Object.defineProperty||"undefined"==typeof HTMLElement||Object.defineProperty(HTMLElement.prototype,"classList",{get:function(){function a(a){return function(c){var d=b.className.split(/\s+/),e=d.indexOf(c);a(d,e,c),b.className=d.join(" ")}}var b=this,c={add:a(function(a,b,c){~b||a.push(c)}),remove:a(function(a,b){~b&&a.splice(b,1)}),toggle:a(function(a,b,c){~b?a.splice(b,1):a.push(c)}),contains:function(a){return!!~b.className.split(/\s+/).indexOf(a)},item:function(a){return b.className.split(/\s+/)[a]||null}};return Object.defineProperty(c,"length",{get:function(){return b.className.split(/\s+/).length}}),c}})}(document),function(a){if(!a.requestAnimationFrame){var b=0;a.requestAnimationFrame=a.webkitRequestAnimationFrame||function(c,d){var e=(new Date).getTime(),f=Math.max(0,16.7-(e-b)),g=a.setTimeout(function(){c(e+f)},f);return b=e+f,g},a.cancelAnimationFrame=a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame||function(a){clearTimeout(a)}}}(window),function(a,b,c){if(!b.FastClick){var d=function(a,b){return"LABEL"===b.tagName&&b.parentNode&&(b=b.parentNode.querySelector("input")),!b||"radio"!==b.type&&"checkbox"!==b.type||b.disabled?!1:b};a.registerTarget({name:c,index:40,handle:d,target:!1});var e=function(c){var d=a.targets.click;if(d){var e,f;document.activeElement&&document.activeElement!==d&&document.activeElement.blur(),f=c.detail.gesture.changedTouches[0],e=document.createEvent("MouseEvents"),e.initMouseEvent("click",!0,!0,b,1,f.screenX,f.screenY,f.clientX,f.clientY,!1,!1,!1,!1,0,null),e.forwardedTouchEvent=!0,d.dispatchEvent(e),c.detail&&c.detail.gesture.preventDefault()}};b.addEventListener("tap",e),b.addEventListener("doubletap",e),b.addEventListener("click",function(b){return a.targets.click&&!b.forwardedTouchEvent?(b.stopImmediatePropagation?b.stopImmediatePropagation():b.propagationStopped=!0,b.stopPropagation(),b.preventDefault(),!1):void 0},!0)}}(mui,window,"click"),function(a,b){a(function(){if(a.os.ios){var c="mui-focusin",d="mui-bar-tab",e="mui-bar-footer",f="mui-bar-footer-secondary",g="mui-bar-footer-secondary-tab";b.addEventListener("focusin",function(h){if(!(a.os.plus&&window.plus&&plus.webview.currentWebview().children().length>0)){var i=h.target;if(i.tagName&&("TEXTAREA"===i.tagName||"INPUT"===i.tagName&&("text"===i.type||"search"===i.type||"number"===i.type))){if(i.disabled||i.readOnly)return;b.body.classList.add(c);for(var j=!1;i&&i!==b;i=i.parentNode){var k=i.classList;if(k&&k.contains(d)||k.contains(e)||k.contains(f)||k.contains(g)){j=!0;break}}if(j){var l=b.body.scrollHeight,m=b.body.scrollLeft;setTimeout(function(){window.scrollTo(m,l)},20)}}}}),b.addEventListener("focusout",function(a){var d=b.body.classList;d.contains(c)&&(d.remove(c),setTimeout(function(){window.scrollTo(b.body.scrollLeft,b.body.scrollTop)},20))})}})}(mui,document),function(a){a.namespace="mui",a.classNamePrefix=a.namespace+"-",a.classSelectorPrefix="."+a.classNamePrefix,a.className=function(b){return a.classNamePrefix+b},a.classSelector=function(b){return b.replace(/\./g,a.classSelectorPrefix)},a.eventName=function(b,c){return b+(a.namespace?"."+a.namespace:"")+(c?"."+c:"")}}(mui),function(a){var b=1,c={},d={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"},e=function(){return!0},f=function(){return!1},g=function(b,c){return b.detail?b.detail.currentTarget=c:b.detail={currentTarget:c},a.each(d,function(a,c){var d=b[a];b[a]=function(){return this[c]=e,d&&d.apply(b,arguments)},b[c]=f},!0),b},h=function(a){return a&&(a._mid||(a._mid=b++))},i={},j=function(b,d,e,f){return function(e){for(var f=c[b._mid][d],h=[],i=e.target,j={};i&&i!==document&&i!==b&&(!~["click","tap","doubletap","longtap","hold"].indexOf(d)||!i.disabled&&!i.classList.contains("mui-disabled"));i=i.parentNode){var k={};a.each(f,function(c,d){j[c]||(j[c]=a.qsa(c,b)),j[c]&&~j[c].indexOf(i)&&(k[c]||(k[c]=d))},!0),a.isEmptyObject(k)||h.push({element:i,handlers:k})}j=null,e=g(e),a.each(h,function(b,c){i=c.element;var f=i.tagName;return"tap"===d&&"INPUT"!==f&&"TEXTAREA"!==f&&"SELECT"!==f&&(e.preventDefault(),e.detail&&e.detail.gesture&&e.detail.gesture.preventDefault()),a.each(c.handlers,function(b,c){a.each(c,function(a,b){b.call(i,e)===!1&&(e.preventDefault(),e.stopPropagation())},!0)},!0),e.isPropagationStopped()?!1:void 0},!0)}},k=function(a,b){var c=i[h(a)],d=!1;if(c){if(d=[],b){var e=function(a){return a.type===b};return c.filter(e)}d=c}return d},l=/^(INPUT|TEXTAREA|BUTTON|SELECT)$/;a.fn.on=function(b,d,e){return this.each(function(){var f=this;h(f),h(e);var g=!1,k=c[f._mid]||(c[f._mid]={}),m=k[b]||(k[b]={});a.isEmptyObject(m)&&(g=!0);var n=m[d]||(m[d]=[]);if(n.push(e),g){var o=i[h(f)];o||(o=[]);var p=j(f,b,d,e);o.push(p),p.i=o.length-1,p.type=b,i[h(f)]=o,f.addEventListener(b,p),"tap"===b&&f.addEventListener("click",function(a){if(a.target){var b=a.target.tagName;if(!l.test(b))if("A"===b){var c=a.target.href;c&&~c.indexOf("tel:")||a.preventDefault()}else a.preventDefault()}})}})},a.fn.off=function(b,d,e){return this.each(function(){var f=h(this);if(b)if(d)if(e){var g=c[f]&&c[f][b]&&c[f][b][d];a.each(g,function(a,b){return h(b)===h(e)?(g.splice(a,1),!1):void 0},!0)}else c[f]&&c[f][b]&&delete c[f][b][d];else c[f]&&delete c[f][b];else c[f]&&delete c[f];c[f]?(!c[f][b]||a.isEmptyObject(c[f][b]))&&k(this,b).forEach(function(a){this.removeEventListener(a.type,a),delete i[f][a.i]}.bind(this)):k(this).forEach(function(a){this.removeEventListener(a.type,a),delete i[f][a.i]}.bind(this))})}}(mui),function(a,b){a.EVENT_START="touchstart",a.EVENT_MOVE="touchmove",a.EVENT_END="touchend",a.EVENT_CANCEL="touchcancel",a.EVENT_CLICK="click",a.gestures={session:{}},a.preventDefault=function(a){a.preventDefault()},a.stopPropagation=function(a){a.stopPropagation()},a.addGesture=function(b){return a.addAction("gestures",b)};var c=Math.round,d=Math.abs,e=Math.sqrt,f=(Math.atan,Math.atan2),g=function(a,b,c){c||(c=["x","y"]);var d=b[c[0]]-a[c[0]],f=b[c[1]]-a[c[1]];return e(d*d+f*f)},h=function(a,b){if(a.length>=2&&b.length>=2){var c=["pageX","pageY"];return g(b[1],b[0],c)/g(a[1],a[0],c)}return 1},i=function(a,b,c){c||(c=["x","y"]);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*f(e,d)/Math.PI},j=function(a,b){return a===b?"":d(a)>=d(b)?a>0?"left":"right":b>0?"up":"down"},k=function(a,b){var c=["pageX","pageY"];return i(b[1],b[0],c)-i(a[1],a[0],c)},l=function(a,b,c){return{x:b/a||0,y:c/a||0}},m=function(b,c){a.gestures.stoped||a.doAction("gestures",function(d,e){a.gestures.stoped||a.options.gestureConfig[e.name]!==!1&&e.handle(b,c)})},n=function(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1},o=function(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];e.indexOf(g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d},p=function(a){var b=a.length;if(1===b)return{x:c(a[0].pageX),y:c(a[0].pageY)};for(var d=0,e=0,f=0;b>f;)d+=a[f].pageX,e+=a[f].pageY,f++;return{x:c(d/b),y:c(e/b)}},q=function(){return a.options.gestureConfig.pinch},r=function(b){for(var d=[],e=0;e<b.touches.length;)d[e]={pageX:c(b.touches[e].pageX),pageY:c(b.touches[e].pageY)},e++;return{timestamp:a.now(),gesture:b.gesture,touches:d,center:p(b.touches),deltaX:b.deltaX,deltaY:b.deltaY}},s=function(b){var c=a.gestures.session,d=b.center,e=c.offsetDelta||{},f=c.prevDelta||{},g=c.prevTouch||{};(b.gesture.type===a.EVENT_START||b.gesture.type===a.EVENT_END)&&(f=c.prevDelta={x:g.deltaX||0,y:g.deltaY||0},e=c.offsetDelta={x:d.x,y:d.y}),b.deltaX=f.x+(d.x-e.x),b.deltaY=f.y+(d.y-e.y)},t=function(b){var c=a.gestures.session,d=b.touches,e=d.length;c.firstTouch||(c.firstTouch=r(b)),q()&&e>1&&!c.firstMultiTouch?c.firstMultiTouch=r(b):1===e&&(c.firstMultiTouch=!1);var f=c.firstTouch,l=c.firstMultiTouch,m=l?l.center:f.center,n=b.center=p(d);b.timestamp=a.now(),b.deltaTime=b.timestamp-f.timestamp,b.angle=i(m,n),b.distance=g(m,n),s(b),b.offsetDirection=j(b.deltaX,b.deltaY),b.scale=l?h(l.touches,d):1,b.rotation=l?k(l.touches,d):0,v(b)},u=25,v=function(b){var c,e,f,g,h=a.gestures.session,i=h.lastInterval||b,k=b.timestamp-i.timestamp;if(b.gesture.type!=a.EVENT_CANCEL&&(k>u||void 0===i.velocity)){var m=i.deltaX-b.deltaX,n=i.deltaY-b.deltaY,o=l(k,m,n);e=o.x,f=o.y,c=d(o.x)>d(o.y)?o.x:o.y,g=j(m,n)||i.direction,h.lastInterval=b}else c=i.velocity,e=i.velocityX,f=i.velocityY,g=i.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g},w={},x=function(b,c){var d=a.slice.call(b.touches||b),e=b.type,f=[],g=[];if(e!==a.EVENT_START&&e!==a.EVENT_MOVE||1!==d.length){var h=0,f=[],g=[],i=a.slice.call(b.changedTouches||b);c.target=b.target;var j=a.gestures.session.target||b.target;if(f=d.filter(function(a){return n(a.target,j)}),e===a.EVENT_START)for(h=0;h<f.length;)w[f[h].identifier]=!0,h++;for(h=0;h<i.length;)w[i[h].identifier]&&g.push(i[h]),(e===a.EVENT_END||e===a.EVENT_CANCEL)&&delete w[i[h].identifier],h++;if(!g.length)return!1}else w[d[0].identifier]=!0,f=d,g=d,c.target=b.target;f=o(f.concat(g),"identifier",!0);var k=f.length,l=g.length;return e===a.EVENT_START&&k-l===0&&(c.isFirst=!0,a.gestures.touch=a.gestures.session={target:b.target}),c.isFinal=(e===a.EVENT_END||e===a.EVENT_CANCEL)&&k-l===0,c.touches=f,c.changedTouches=g,!0},y=function(b){var c={gesture:b},d=x(b,c);d&&(t(c),m(b,c),a.gestures.session.prevTouch=c)};b.addEventListener(a.EVENT_START,y),b.addEventListener(a.EVENT_MOVE,y),b.addEventListener(a.EVENT_END,y),b.addEventListener(a.EVENT_CANCEL,y),b.addEventListener(a.EVENT_CLICK,function(b){(a.targets.popover&&b.target===a.targets.popover||a.targets.tab||a.targets.offcanvas||a.targets.modal)&&b.preventDefault()},!0),a.isScrolling=!1;var z=null;b.addEventListener("scroll",function(){a.isScrolling=!0,z&&clearTimeout(z),z=setTimeout(function(){a.isScrolling=!1},250)})}(mui,window),function(a,b){var c=0,d=function(d,e){var f=a.gestures.session,g=this.options,h=a.now();switch(d.type){case a.EVENT_MOVE:h-c>300&&(c=h,f.flickStart=e.center);break;case a.EVENT_END:case a.EVENT_CANCEL:f.flickStart&&g.flickMaxTime>h-c&&e.distance>g.flickMinDistince&&(e.flick=!0,e.flickTime=h-c,e.flickDistanceX=e.center.x-f.flickStart.x,e.flickDistanceY=e.center.y-f.flickStart.y,a.trigger(f.target,b,e),a.trigger(f.target,b+e.direction,e))}};a.addGesture({name:b,index:5,handle:d,options:{flickMaxTime:200,flickMinDistince:10}})}(mui,"flick"),function(a,b){var c=function(c,d){var e=a.gestures.session;if(c.type===a.EVENT_END||c.type===a.EVENT_CANCEL){var f=this.options;d.direction&&f.swipeMaxTime>d.deltaTime&&d.distance>f.swipeMinDistince&&(d.swipe=!0,a.trigger(e.target,b,d),a.trigger(e.target,b+d.direction,d))}};a.addGesture({name:b,index:10,handle:c,options:{swipeMaxTime:300,swipeMinDistince:18}})}(mui,"swipe"),function(a,b){var c=function(c,d){var e=a.gestures.session;switch(c.type){case a.EVENT_START:break;case a.EVENT_MOVE:if(!d.direction)return;e.lockDirection&&e.startDirection&&e.startDirection&&e.startDirection!==d.direction&&("up"===e.startDirection||"down"===e.startDirection?d.direction=d.deltaY<0?"up":"down":d.direction=d.deltaX<0?"left":"right"),e.drag||(e.drag=!0,a.trigger(e.target,b+"start",d)),a.trigger(e.target,b,d),a.trigger(e.target,b+d.direction,d);break;case a.EVENT_END:case a.EVENT_CANCEL:e.drag&&d.isFinal&&a.trigger(e.target,b+"end",d)}};a.addGesture({name:b,index:20,handle:c,options:{fingers:1}})}(mui,"drag"),function(a,b){var c,d,e=function(e,f){var g=a.gestures.session,h=this.options;switch(e.type){case a.EVENT_END:if(!f.isFinal)return;var i=g.target;if(!i||i.disabled||i.classList&&i.classList.contains("mui-disabled"))return;if(f.distance<h.tapMaxDistance&&f.deltaTime<h.tapMaxTime){if(a.options.gestureConfig.doubletap&&c&&c===i&&d&&f.timestamp-d<h.tapMaxInterval)return a.trigger(i,"doubletap",f),d=a.now(),void(c=i);a.trigger(i,b,f),d=a.now(),c=i}}};a.addGesture({name:b,index:30,handle:e,options:{fingers:1,tapMaxInterval:300,tapMaxDistance:5,tapMaxTime:250}})}(mui,"tap"),function(a,b){var c,d=function(d,e){var f=a.gestures.session,g=this.options;switch(d.type){case a.EVENT_START:clearTimeout(c),c=setTimeout(function(){a.trigger(f.target,b,e)},g.holdTimeout);break;case a.EVENT_MOVE:e.distance>g.holdThreshold&&clearTimeout(c);break;case a.EVENT_END:case a.EVENT_CANCEL:clearTimeout(c)}};a.addGesture({name:b,index:10,handle:d,options:{fingers:1,holdTimeout:500,holdThreshold:2}})}(mui,"longtap"),function(a,b){var c,d=function(d,e){var f=a.gestures.session,g=this.options;switch(d.type){case a.EVENT_START:a.options.gestureConfig.hold&&(c&&clearTimeout(c),c=setTimeout(function(){e.hold=!0,a.trigger(f.target,b,e)},g.holdTimeout));break;case a.EVENT_MOVE:break;case a.EVENT_END:case a.EVENT_CANCEL:c&&(clearTimeout(c)&&(c=null),a.trigger(f.target,"release",e))}};a.addGesture({name:b,index:10,handle:d,options:{fingers:1,holdTimeout:0}})}(mui,"hold"),function(a,b){var c=function(c,d){var e=this.options,f=a.gestures.session;switch(c.type){case a.EVENT_START:break;case a.EVENT_MOVE:if(a.options.gestureConfig.pinch){if(d.touches.length<2)return;f.pinch||(f.pinch=!0,a.trigger(f.target,b+"start",d)),a.trigger(f.target,b,d);var g=d.scale,h=d.rotation,i="undefined"==typeof d.lastScale?1:d.lastScale,j=1e-12;g>i?(i=g-j,a.trigger(f.target,b+"out",d)):i>g&&(i=g+j,a.trigger(f.target,b+"in",d)),Math.abs(h)>e.minRotationAngle&&a.trigger(f.target,"rotate",d)}break;case a.EVENT_END:case a.EVENT_CANCEL:a.options.gestureConfig.pinch&&f.pinch&&2===d.touches.length&&(f.pinch=!1,a.trigger(f.target,b+"end",d))}};a.addGesture({name:b,index:10,handle:c,options:{minRotationAngle:0}})}(mui,"pinch"),function(a){a.global=a.options={gestureConfig:{tap:!0,doubletap:!1,longtap:!1,hold:!1,flick:!0,swipe:!0,drag:!0,pinch:!1}},a.initGlobal=function(b){return a.options=a.extend(!0,a.global,b),this};var b={},c=!1;a.init=function(d){return c=!0,a.options=a.extend(!0,a.global,d||{}),a.ready(function(){a.doAction("inits",function(c,d){var e=!(b[d.name]&&!d.repeat);e&&(d.handle.call(a),b[d.name]=!0)})}),this},a.addInit=function(b){return a.addAction("inits",b)},a(function(){var b=document.body.classList,c=[];a.os.ios?(c.push({os:"ios",version:a.os.version}),b.add("mui-ios")):a.os.android&&(c.push({os:"android",version:a.os.version}),b.add("mui-android")),a.os.wechat&&(c.push({os:"wechat",version:a.os.wechat.version}),b.add("mui-wechat")),c.length&&a.each(c,function(c,d){var e="";d.version&&a.each(d.version.split("."),function(c,f){e=e+(e?"-":"")+f,b.add(a.className(d.os+"-"+e))})})})}(mui),function(a){var b={swipeBack:!1,preloadPages:[],preloadLimit:10,keyEventBind:{backbutton:!0,menubutton:!0}},c={autoShow:!0,duration:a.os.ios?200:100,aniShow:"slide-in-right"};a.options.show&&(c=a.extend(!0,c,a.options.show)),a.currentWebview=null,a.isHomePage=!1,a.extend(!0,a.global,b),a.extend(!0,a.options,b),a.waitingOptions=function(b){return a.extend(!0,{},{autoShow:!0,title:""},b)},a.showOptions=function(b){return a.extend(!0,{},c,b)},a.windowOptions=function(b){return a.extend({scalable:!1,bounce:""},b)},a.plusReady=function(a){return window.plus?setTimeout(function(){a()},0):document.addEventListener("plusready",function(){a()},!1),this},a.fire=function(b,c,d){b&&(""!==d&&(d=d||{},a.isPlainObject(d)&&(d=JSON.stringify(d||{}).replace(/\'/g,"\\u0027").replace(/\\/g,"\\u005c"))),b.evalJS("typeof mui!=='undefined'&&mui.receive('"+c+"','"+d+"')"))},a.receive=function(b,c){if(b){try{c&&(c=JSON.parse(c))}catch(d){}a.trigger(document,b,c)}};var d=function(b){if(!b.preloaded){a.fire(b,"preload");for(var c=b.children(),d=0;d<c.length;d++)a.fire(c[d],"preload");b.preloaded=!0}},e=function(b,c,d){if(d){if(!b[c+"ed"]){a.fire(b,c);for(var e=b.children(),f=0;f<e.length;f++)a.fire(e[f],c);b[c+"ed"]=!0}}else{a.fire(b,c);for(var e=b.children(),f=0;f<e.length;f++)a.fire(e[f],c)}};a.openWindow=function(b,c,f){if(window.plus){"object"==typeof b?(f=b,b=f.url,c=f.id||b):"object"==typeof c?(f=c,c=b):c=c||b,f=f||{};var g,h,i=f.params||{},j=null,k=null;if(a.webviews[c]&&(k=a.webviews[c],plus.webview.getWebviewById(c)&&(j=k.webview)),k&&j)return g=k.show,g=f.show?a.extend(g,f.show):g,j.show(g.aniShow,g.duration,function(){d(j),e(j,"pagebeforeshow",!1)}),k.afterShowMethodName&&j.evalJS(k.afterShowMethodName+"('"+JSON.stringify(i)+"')"),j;if(f.createNew!==!0&&(j=plus.webview.getWebviewById(c)))return g=a.showOptions(f.show),j.show(g.aniShow,g.duration,function(){d(j),e(j,"pagebeforeshow",!1)}),j;var l=a.waitingOptions(f.waiting);return l.autoShow&&(h=plus.nativeUI.showWaiting(l.title,l.options)),f=a.extend(f,{id:c,url:b}),j=a.createWindow(f),g=a.showOptions(f.show),g.autoShow&&j.addEventListener("loaded",function(){h&&h.close(),j.show(g.aniShow,g.duration,function(){d(j),e(j,"pagebeforeshow",!1)}),j.showed=!0,f.afterShowMethodName&&j.evalJS(f.afterShowMethodName+"('"+JSON.stringify(i)+"')")},!1),j}},a.createWindow=function(b,c){if(window.plus){var d,e=b.id||b.url;if(b.preload){a.webviews[e]&&a.webviews[e].webview.getURL()?d=a.webviews[e].webview:(b.createNew!==!0&&(d=plus.webview.getWebviewById(e)),d||(d=plus.webview.create(b.url,e,a.windowOptions(b.styles),a.extend({preload:!0},b.extras)),b.subpages&&a.each(b.subpages,function(b,c){var e=plus.webview.create(c.url,c.id||c.url,a.windowOptions(c.styles),a.extend({preload:!0},c.extras));d.append(e)}))),a.webviews[e]={webview:d,preload:!0,show:a.showOptions(b.show),afterShowMethodName:b.afterShowMethodName};var f=a.data.preloads,g=f.indexOf(e);if(~g&&f.splice(g,1),f.push(e),f.length>a.options.preloadLimit){var h=a.data.preloads.shift(),i=a.webviews[h];i&&i.webview&&a.closeAll(i.webview),delete a.webviews[h]}}else c!==!1&&(d=plus.webview.create(b.url,e,a.windowOptions(b.styles),b.extras),b.subpages&&a.each(b.subpages,function(b,c){var e=plus.webview.create(c.url,c.id||c.url,a.windowOptions(c.styles),c.extras);d.append(e)}));return d}},a.preload=function(b){return b.preload||(b.preload=!0),a.createWindow(b)},a.closeOpened=function(b){var c=b.opened();if(c)for(var d=0,e=c.length;e>d;d++){var f=c[d],g=f.opened();g&&g.length>0?a.closeOpened(f):f.parent()!==b&&f.close("none")}},a.closeAll=function(b,c){a.closeOpened(b),c?b.close(c):b.close()},a.createWindows=function(b){a.each(b,function(b,c){a.createWindow(c,!1)})},a.appendWebview=function(b){if(window.plus){var c,d=b.id||b.url;return a.webviews[d]||(c=plus.webview.create(b.url,d,b.styles,b.extras),plus.webview.currentWebview().append(c),a.webviews[d]=b),c}},a.webviews={},a.data.preloads=[],a.plusReady(function(){a.currentWebview=plus.webview.currentWebview()}),a.addInit({name:"5+",index:100,handle:function(){var b=a.options,c=b.subpages||[];if(a.os.plus)a.plusReady(function(){a.each(c,function(b,c){a.appendWebview(c)}),plus.webview.currentWebview()===plus.webview.getWebviewById(plus.runtime.appid)&&(a.isHomePage=!0,setTimeout(function(){d(plus.webview.currentWebview())},300)),a.os.ios&&a.options.statusBarBackground&&plus.navigator.setStatusBarBackground(a.options.statusBarBackground),a.os.android&&parseFloat(a.os.version)<4.4&&null==plus.webview.currentWebview().parent()&&document.addEventListener("resume",function(){var a=document.body;a.style.display="none",setTimeout(function(){a.style.display=""},10)})});else if(c.length>0){var e=document.createElement("div");e.className="mui-error";var f=document.createElement("span");f.innerHTML="在该浏览器下，不支持创建子页面，具体参考",e.appendChild(f);var g=document.createElement("a");g.innerHTML='"mui框架适用场景"',g.href="http://ask.dcloud.net.cn/article/113",e.appendChild(g),document.body.appendChild(e),console.log("在该浏览器下，不支持创建子页面")}}}),window.addEventListener("preload",function(){var b=a.options.preloadPages||[];a.plusReady(function(){a.each(b,function(b,c){a.createWindow(a.extend(c,{preload:!0}))})})})}(mui),function(a,b){a.addBack=function(b){return a.addAction("backs",b)},a.addBack({name:"browser",index:100,handle:function(){return b.history.length>1?(b.history.back(),!0):!1}}),a.back=function(){("function"!=typeof a.options.beforeback||a.options.beforeback()!==!1)&&a.doAction("backs")},b.addEventListener("tap",function(b){var c=a.targets.action;c&&c.classList.contains("mui-action-back")&&a.back()}),b.addEventListener("swiperight",function(b){var c=b.detail;a.options.swipeBack===!0&&Math.abs(c.angle)<3&&a.back()})}(mui,window),function(a,b){a.os.plus&&a.os.android&&a.addBack({name:"mui",index:5,handle:function(){if(a.targets._popover&&a.targets._popover.classList.contains("mui-active"))return a(a.targets._popover).popover("hide"),!0;var b=document.querySelector(".mui-off-canvas-wrap.mui-active");if(b)return a(b).offCanvas("close"),!0;var c=a.isFunction(a.getPreviewImage)&&a.getPreviewImage();return c&&c.isShown()?(c.close(),!0):void 0}}),a.addBack({name:"5+",index:10,handle:function(){if(!b.plus)return!1;var c=plus.webview.currentWebview(),d=c.parent();return d?d.evalJS("mui&&mui.back();"):c.canBack(function(d){d.canBack?b.history.back():c.id===plus.runtime.appid||(c.preload?c.hide("auto"):a.closeAll(c))}),!0}}),a.menu=function(){var c=document.querySelector(".mui-action-menu");if(c)a.trigger(c,"touchstart"),a.trigger(c,"tap");else if(b.plus){var d=a.currentWebview,e=d.parent();e&&e.evalJS("mui&&mui.menu();")}};var c=function(){a.back()},d=function(){a.menu()};a.plusReady(function(){a.options.keyEventBind.backbutton&&plus.key.addEventListener("backbutton",c,!1),a.options.keyEventBind.menubutton&&plus.key.addEventListener("menubutton",d,!1)}),a.addInit({name:"keyEventBind",index:1e3,handle:function(){a.plusReady(function(){a.options.keyEventBind.backbutton||plus.key.removeEventListener("backbutton",c),a.options.keyEventBind.menubutton||plus.key.removeEventListener("menubutton",d)})}})}(mui,window),function(a){a.addInit({name:"pullrefresh",index:1e3,handle:function(){var b=a.options,c=b.pullRefresh||{},d=c.down&&c.down.hasOwnProperty("callback"),e=c.up&&c.up.hasOwnProperty("callback");if(d||e){var f=c.container;if(f){var g=a(f);1===g.length&&(a.os.plus&&a.os.android?a.plusReady(function(){var b=plus.webview.currentWebview();if(e){var f={};f.up=c.up,f.webviewId=b.id||b.getURL(),g.pullRefresh(f)}if(d){var h=b.parent(),i=b.id||b.getURL();if(h){e||g.pullRefresh({webviewId:i});var j={webviewId:i};j.down=a.extend({},c.down),j.down.callback="_CALLBACK",h.evalJS("mui&&mui(document.querySelector('.mui-content')).pullRefresh('"+JSON.stringify(j)+"')")}}}):g.pullRefresh(c))}}}})}(mui),function(a,b,c){var d="application/json",e="text/html",f=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,g=/^(?:text|application)\/javascript/i,h=/^(?:text|application)\/xml/i,i=/^\s*$/;a.ajaxSettings={type:"GET",beforeSend:a.noop,success:a.noop,error:a.noop,complete:a.noop,context:null,xhr:function(a){return new b.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:d,xml:"application/xml, text/xml",html:e,text:"text/plain"},timeout:0,processData:!0,cache:!0};var j=function(a,b){var c=b.context;return b.beforeSend.call(c,a,b)===!1?!1:void 0},k=function(a,b,c){c.success.call(c.context,a,"success",b),m("success",b,c)},l=function(a,b,c,d){d.error.call(d.context,c,b,a),m(b,c,d)},m=function(a,b,c){c.complete.call(c.context,b,a)},n=function(b,c,d,e){var f,g=a.isArray(c),h=a.isPlainObject(c);a.each(c,function(c,i){f=a.type(i),e&&(c=d?e:e+"["+(h||"object"===f||"array"===f?c:"")+"]"),!e&&g?b.add(i.name,i.value):"array"===f||!d&&"object"===f?n(b,i,d,c):b.add(c,i)})},o=function(b){b.processData&&b.data&&"string"!=typeof b.data&&(b.data=a.param(b.data,b.traditional)),!b.data||b.type&&"GET"!==b.type.toUpperCase()||(b.url=p(b.url,b.data),b.data=c)},p=function(a,b){return""===b?a:(a+"&"+b).replace(/[&?]{1,2}/,"?")},q=function(a){return a&&(a=a.split(";",2)[0]),a&&(a===e?"html":a===d?"json":g.test(a)?"script":h.test(a)&&"xml")||"text"},r=function(b,d,e,f){return a.isFunction(d)&&(f=e,e=d,d=c),a.isFunction(e)||(f=e,e=c),{url:b,data:d,success:e,dataType:f}};a.ajax=function(d,e){"object"==typeof d&&(e=d,d=c);var f=e||{};f.url=d||f.url;for(var g in a.ajaxSettings)f[g]===c&&(f[g]=a.ajaxSettings[g]);o(f);var h=f.dataType;f.cache!==!1&&(e&&e.cache===!0||"script"!==h)||(f.url=p(f.url,"_="+a.now()));var m,n=f.accepts[h],r={},s=function(a,b){r[a.toLowerCase()]=[a,b]},t=/^([\w-]+:)\/\//.test(f.url)?RegExp.$1:b.location.protocol,u=f.xhr(f),v=u.setRequestHeader;if(s("X-Requested-With","XMLHttpRequest"),s("Accept",n||"*/*"),(n=f.mimeType||n)&&(n.indexOf(",")>-1&&(n=n.split(",",2)[0]),u.overrideMimeType&&u.overrideMimeType(n)),(f.contentType||f.contentType!==!1&&f.data&&"GET"!==f.type.toUpperCase())&&s("Content-Type",f.contentType||"application/x-www-form-urlencoded"),f.headers)for(var w in f.headers)s(w,f.headers[w]);if(u.setRequestHeader=s,u.onreadystatechange=function(){if(4===u.readyState){u.onreadystatechange=a.noop,clearTimeout(m);var b,c=!1;if(u.status>=200&&u.status<300||304===u.status||0===u.status&&"file:"===t){h=h||q(f.mimeType||u.getResponseHeader("content-type")),b=u.responseText;try{"script"===h?(1,eval)(b):"xml"===h?b=u.responseXML:"json"===h&&(b=i.test(b)?null:a.parseJSON(b))}catch(d){c=d}c?l(c,"parsererror",u,f):k(b,u,f)}else l(u.statusText||null,u.status?"error":"abort",u,f)}},j(u,f)===!1)return u.abort(),l(null,"abort",u,f),u;if(f.xhrFields)for(var w in f.xhrFields)u[w]=f.xhrFields[w];var x="async"in f?f.async:!0;u.open(f.type.toUpperCase(),f.url,x,f.username,f.password);for(var w in r)v.apply(u,r[w]);return f.timeout>0&&(m=setTimeout(function(){u.onreadystatechange=a.noop,u.abort(),l(null,"timeout",u,f)},f.timeout)),u.send(f.data?f.data:null),u},a.param=function(a,b){var c=[];return c.add=function(a,b){this.push(encodeURIComponent(a)+"="+encodeURIComponent(b))},n(c,a,b),c.join("&").replace(/%20/g,"+")},a.get=function(){return a.ajax(r.apply(null,arguments))},a.post=function(){var b=r.apply(null,arguments);return b.type="POST",a.ajax(b)},a.getJSON=function(){var b=r.apply(null,arguments);return b.dataType="json",a.ajax(b)},a.fn.load=function(b,c,d){if(!this.length)return this;var e,g=this,h=b.split(/\s/),i=r(b,c,d),j=i.success;return h.length>1&&(i.url=h[0],e=h[1]),i.success=function(a){if(e){var b=document.createElement("div");
b.innerHTML=a.replace(f,"");var c=document.createElement("div"),d=b.querySelectorAll(e);if(d&&d.length>0)for(var h=0,i=d.length;i>h;h++)c.appendChild(d[h]);g[0].innerHTML=c.innerHTML}else g[0].innerHTML=a;j&&j.apply(g,arguments)},a.ajax(i),this}}(mui,window),function(a){var b=document.createElement("a");b.href=window.location.href,a.plusReady(function(){a.ajaxSettings=a.extend(a.ajaxSettings,{xhr:function(a){if(a.crossDomain)return new plus.net.XMLHttpRequest;if("file:"!==b.protocol){var c=document.createElement("a");if(c.href=a.url,c.href=c.href,a.crossDomain=b.protocol+"//"+b.host!=c.protocol+"//"+c.host,a.crossDomain)return new plus.net.XMLHttpRequest}return new window.XMLHttpRequest}})})}(mui),function(a,b,c){a.offset=function(a){var d={top:0,left:0};return typeof a.getBoundingClientRect!==c&&(d=a.getBoundingClientRect()),{top:d.top+b.pageYOffset-a.clientTop,left:d.left+b.pageXOffset-a.clientLeft}}}(mui,window),function(a,b){a.scrollTo=function(a,c,d){c=c||1e3;var e=function(c){if(0>=c)return b.scrollTo(0,a),void(d&&d());var f=a-b.scrollY;setTimeout(function(){b.scrollTo(0,b.scrollY+f/c*10),e(c-10)},16.7)};e(c)},a.animationFrame=function(a){var b,c,d;return function(){b=arguments,d=this,c||(c=!0,requestAnimationFrame(function(){a.apply(d,b),c=!1}))}}}(mui,window),function(a){var b=!1,c=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/,d=function(){};d.extend=function(a){function d(){!b&&this.init&&this.init.apply(this,arguments)}var e=this.prototype;b=!0;var f=new this;b=!1;for(var g in a)f[g]="function"==typeof a[g]&&"function"==typeof e[g]&&c.test(a[g])?function(a,b){return function(){var c=this._super;this._super=e[a];var d=b.apply(this,arguments);return this._super=c,d}}(g,a[g]):a[g];return d.prototype=f,d.prototype.constructor=d,d.extend=arguments.callee,d},a.Class=d}(mui),function(a,b,c){var d="mui-pull-top-pocket",e="mui-pull-bottom-pocket",f="mui-pull",g="mui-pull-loading",h="mui-pull-caption",i="mui-pull-caption-down",j="mui-pull-caption-refresh",k="mui-pull-caption-nomore",l="mui-icon",m="mui-spinner",n="mui-icon-pulldown",o="mui-block",p="mui-hidden",q="mui-visibility",r=g+" "+l+" "+n,s=g+" "+l+" "+n,t=g+" "+l+" "+m,u=['<div class="'+f+'">','<div class="{icon}"></div>','<div class="'+h+'">{contentrefresh}</div>',"</div>"].join(""),v={init:function(b,c){this._super(b,a.extend(!0,{scrollY:!0,scrollX:!1,indicators:!0,deceleration:.003,down:{height:50,contentdown:"下拉可以刷新",contentover:"释放立即刷新",contentrefresh:"正在刷新..."},up:{height:50,auto:!1,contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了",duration:300}},c))},_init:function(){this._super(),this._initPocket()},_initPulldownRefresh:function(){this.pulldown=!0,this.pullPocket=this.topPocket,this.pullPocket.classList.add(o),this.pullPocket.classList.add(q),this.pullCaption=this.topCaption,this.pullLoading=this.topLoading},_initPullupRefresh:function(){this.pulldown=!1,this.pullPocket=this.bottomPocket,this.pullPocket.classList.add(o),this.pullPocket.classList.add(q),this.pullCaption=this.bottomCaption,this.pullLoading=this.bottomLoading},_initPocket:function(){var a=this.options;a.down&&a.down.hasOwnProperty("callback")&&(this.topPocket=this.scroller.querySelector("."+d),this.topPocket||(this.topPocket=this._createPocket(d,a.down,s),this.wrapper.insertBefore(this.topPocket,this.wrapper.firstChild)),this.topLoading=this.topPocket.querySelector("."+g),this.topCaption=this.topPocket.querySelector("."+h)),a.up&&a.up.hasOwnProperty("callback")&&(this.bottomPocket=this.scroller.querySelector("."+e),this.bottomPocket||(this.bottomPocket=this._createPocket(e,a.up,t),this.scroller.appendChild(this.bottomPocket)),this.bottomLoading=this.bottomPocket.querySelector("."+g),this.bottomCaption=this.bottomPocket.querySelector("."+h),this.wrapper.addEventListener("scrollbottom",this))},_createPocket:function(a,c,d){var e=b.createElement("div");return e.className=a,e.innerHTML=u.replace("{contentrefresh}",c.contentrefresh).replace("{icon}",d),e},_resetPullDownLoading:function(){var a=this.pullLoading;a&&(this.pullCaption.innerHTML=this.options.down.contentdown,a.style.webkitTransition="",a.style.webkitTransform="",a.style.webkitAnimation="",a.className=s)},_setCaptionClass:function(a,b,c){if(!a)switch(c){case this.options.up.contentdown:b.className=h+" "+i;break;case this.options.up.contentrefresh:b.className=h+" "+j;break;case this.options.up.contentnomore:b.className=h+" "+k}},_setCaption:function(a,b){if(!this.loading){var c=this.options,d=this.pullPocket,e=this.pullCaption,f=this.pullLoading,g=this.pulldown,h=this;d&&(b?setTimeout(function(){e.innerHTML=h.lastTitle=a,g?f.className=s:(h._setCaptionClass(!1,e,a),f.className=t),f.style.webkitAnimation="",f.style.webkitTransition="",f.style.webkitTransform=""},100):a!==this.lastTitle&&(e.innerHTML=a,g?a===c.down.contentrefresh?(f.className=t,f.style.webkitAnimation="spinner-spin 1s step-end infinite"):a===c.down.contentover?(f.className=r,f.style.webkitTransition="-webkit-transform 0.3s ease-in",f.style.webkitTransform="rotate(180deg)"):a===c.down.contentdown&&(f.className=s,f.style.webkitTransition="-webkit-transform 0.3s ease-in",f.style.webkitTransform="rotate(0deg)"):(a===c.up.contentrefresh?f.className=t+" "+q:f.className=t+" "+p,h._setCaptionClass(!1,e,a)),this.lastTitle=a))}}};a.PullRefresh=v}(mui,document),function(a,b,c,d){var e="mui-scrollbar",f="mui-scrollbar-indicator",g=e+"-vertical",h=e+"-horizontal",i="mui-active",j={quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(a){return a*(2-a)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(a){return Math.sqrt(1- --a*a)}}},k=a.Class.extend({init:function(b,c){this.wrapper=this.element=b,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller&&this.scroller.style,this.stopped=!1,this.options=a.extend(!0,{scrollY:!0,scrollX:!1,startX:0,startY:0,indicators:!0,stopPropagation:!1,hardwareAccelerated:!0,fixedBadAndorid:!1,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT|VIDEO)$/},momentum:!0,snap:!1,bounce:!0,bounceTime:300,bounceEasing:j.circular.style,directionLockThreshold:5,parallaxElement:!1,parallaxRatio:.5},c),this.x=0,this.y=0,this.translateZ=this.options.hardwareAccelerated?" translateZ(0)":"",this._init(),this.scroller&&(this.refresh(),this.scrollTo(this.options.startX,this.options.startY))},_init:function(){this._initParallax(),this._initIndicators(),this._initEvent()},_initParallax:function(){this.options.parallaxElement&&(this.parallaxElement=c.querySelector(this.options.parallaxElement),this.parallaxStyle=this.parallaxElement.style,this.parallaxHeight=this.parallaxElement.offsetHeight,this.parallaxImgStyle=this.parallaxElement.querySelector("img").style)},_initIndicators:function(){var a=this;if(a.indicators=[],this.options.indicators){var b,c=[];a.options.scrollY&&(b={el:this._createScrollBar(g),listenX:!1},this.wrapper.appendChild(b.el),c.push(b)),this.options.scrollX&&(b={el:this._createScrollBar(h),listenY:!1},this.wrapper.appendChild(b.el),c.push(b));for(var d=c.length;d--;)this.indicators.push(new l(this,c[d]))}},_initSnap:function(){this.currentPage={},this.pages=[];for(var a=this.snaps,b=a.length,c=0,d=-1,e=0,f=0,g=0;b>g;g++){var h=a[g],j=h.offsetLeft,k=h.offsetWidth;(0===g||j<=a[g-1].offsetLeft)&&(c=0,d++),this.pages[c]||(this.pages[c]=[]),e=this._getSnapX(j),f=e-Math.round(k/2),this.pages[c][d]={x:e,cx:f,pageX:c,element:h},h.classList.contains(i)&&(this.currentPage=this.pages[c][0]),e>=this.maxScrollX&&c++}this.options.startX=this.currentPage.x||0},_getSnapX:function(a){return Math.max(Math.min(0,-a+this.wrapperWidth/2),this.maxScrollX)},_gotoPage:function(a){this.currentPage=this.pages[Math.min(a,this.pages.length-1)][0];for(var b=0,c=this.snaps.length;c>b;b++)b===a?this.snaps[b].classList.add(i):this.snaps[b].classList.remove(i);this.scrollTo(this.currentPage.x,0,this.options.bounceTime)},_nearestSnap:function(a){if(!this.pages.length)return{x:0,pageX:0};var b=0,c=this.pages.length;for(a>0?a=0:a<this.maxScrollX&&(a=this.maxScrollX);c>b;b++)if(a>=this.pages[b][0].cx)return this.pages[b][0];return{x:0,pageX:0}},_initEvent:function(c){var d=c?"removeEventListener":"addEventListener";b[d]("orientationchange",this),b[d]("resize",this),this.scroller[d]("webkitTransitionEnd",this),this.wrapper[d]("touchstart",this),this.wrapper[d]("touchcancel",this),this.wrapper[d]("touchend",this),this.wrapper[d]("drag",this),this.wrapper[d]("dragend",this),this.wrapper[d]("flick",this),this.wrapper[d]("scrollend",this),this.options.scrollX&&this.wrapper[d]("swiperight",this);var e=this.wrapper.querySelector(".mui-segmented-control");e&&mui(e)[c?"off":"on"]("click","a",a.preventDefault),this.wrapper[d]("scrollend",this._handleIndicatorScrollend.bind(this)),this.wrapper[d]("scrollstart",this._handleIndicatorScrollstart.bind(this)),this.wrapper[d]("refresh",this._handleIndicatorRefresh.bind(this))},_handleIndicatorScrollend:function(){this.indicators.map(function(a){a.fade()})},_handleIndicatorScrollstart:function(){this.indicators.map(function(a){a.fade(1)})},_handleIndicatorRefresh:function(){this.indicators.map(function(a){a.refresh()})},handleEvent:function(a){if(this.stopped)return void this.resetPosition();switch(a.type){case"touchstart":this._start(a);break;case"drag":this.options.stopPropagation&&a.stopPropagation(),this._drag(a);break;case"dragend":case"flick":this.options.stopPropagation&&a.stopPropagation(),this._flick(a);break;case"touchcancel":case"touchend":this._end(a);break;case"webkitTransitionEnd":this._transitionEnd(a);break;case"scrollend":this._scrollend(a),a.stopPropagation();break;case"orientationchange":case"resize":this._resize();break;case"swiperight":a.stopPropagation()}},_start:function(b){if(this.moved=this.needReset=!1,this._transitionTime(),this.isInTransition){this.needReset=!0,this.isInTransition=!1;var c=a.parseTranslateMatrix(a.getStyles(this.scroller,"webkitTransform"));this.setTranslate(Math.round(c.x),Math.round(c.y)),a.trigger(this.scroller,"scrollend",this),b.preventDefault()}this.reLayout(),a.trigger(this.scroller,"beforescrollstart",this)},_getDirectionByAngle:function(a){return-80>a&&a>-100?"up":a>=80&&100>a?"down":a>=170||-170>=a?"left":a>=-35&&10>=a?"right":null},_drag:function(c){var d=c.detail;if((this.options.scrollY||"up"===d.direction||"down"===d.direction)&&a.os.ios&&parseFloat(a.os.version)>=8){var e=d.gesture.touches[0].clientY;if(e+10>b.innerHeight||10>e)return void this.resetPosition(this.options.bounceTime)}var f=isReturn=!1;this._getDirectionByAngle(d.angle);if("left"===d.direction||"right"===d.direction?this.options.scrollX?(f=!0,this.moved||(a.gestures.session.lockDirection=!0,a.gestures.session.startDirection=d.direction)):this.options.scrollY&&!this.moved&&(isReturn=!0):"up"===d.direction||"down"===d.direction?this.options.scrollY?(f=!0,this.moved||(a.gestures.session.lockDirection=!0,a.gestures.session.startDirection=d.direction)):this.options.scrollX&&!this.moved&&(isReturn=!0):isReturn=!0,(this.moved||f)&&(c.stopPropagation(),d.gesture&&d.gesture.preventDefault()),!isReturn){this.moved?c.stopPropagation():a.trigger(this.scroller,"scrollstart",this);var g=0,h=0;this.moved?(g=d.deltaX-a.gestures.session.prevTouch.deltaX,h=d.deltaY-a.gestures.session.prevTouch.deltaY):(g=d.deltaX,h=d.deltaY);var i=Math.abs(d.deltaX),j=Math.abs(d.deltaY);i>j+this.options.directionLockThreshold?h=0:j>=i+this.options.directionLockThreshold&&(g=0),g=this.hasHorizontalScroll?g:0,h=this.hasVerticalScroll?h:0;var k=this.x+g,l=this.y+h;(k>0||k<this.maxScrollX)&&(k=this.options.bounce?this.x+g/3:k>0?0:this.maxScrollX),(l>0||l<this.maxScrollY)&&(l=this.options.bounce?this.y+h/3:l>0?0:this.maxScrollY),this.requestAnimationFrame||this._updateTranslate(),this.moved=!0,this.x=k,this.y=l,a.trigger(this.scroller,"scroll",this)}},_flick:function(b){if(this.moved){b.stopPropagation();var c=b.detail;if(this._clearRequestAnimationFrame(),"dragend"!==b.type||!c.flick){var d=Math.round(this.x),e=Math.round(this.y);if(this.isInTransition=!1,!this.resetPosition(this.options.bounceTime)){if(this.scrollTo(d,e),"dragend"===b.type)return void a.trigger(this.scroller,"scrollend",this);var f=0,g="";return this.options.momentum&&c.flickTime<300&&(momentumX=this.hasHorizontalScroll?this._momentum(this.x,c.flickDistanceX,c.flickTime,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:d,duration:0},momentumY=this.hasVerticalScroll?this._momentum(this.y,c.flickDistanceY,c.flickTime,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:e,duration:0},d=momentumX.destination,e=momentumY.destination,f=Math.max(momentumX.duration,momentumY.duration),this.isInTransition=!0),d!=this.x||e!=this.y?((d>0||d<this.maxScrollX||e>0||e<this.maxScrollY)&&(g=j.quadratic),void this.scrollTo(d,e,f,g)):void a.trigger(this.scroller,"scrollend",this)}}}},_end:function(a){this.needReset=!1,(!this.moved&&this.needReset||"touchcancel"===a.type)&&this.resetPosition()},_transitionEnd:function(b){b.target==this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,a.trigger(this.scroller,"scrollend",this)))},_scrollend:function(b){Math.abs(this.y)>0&&this.y<=this.maxScrollY&&a.trigger(this.scroller,"scrollbottom",this)},_resize:function(){var a=this;clearTimeout(a.resizeTimeout),a.resizeTimeout=setTimeout(function(){a.refresh()},a.options.resizePolling)},_transitionTime:function(b){if(b=b||0,this.scrollerStyle.webkitTransitionDuration=b+"ms",this.parallaxElement&&this.options.scrollY&&(this.parallaxStyle.webkitTransitionDuration=b+"ms"),this.options.fixedBadAndorid&&!b&&a.os.isBadAndroid&&(this.scrollerStyle.webkitTransitionDuration="0.001s",this.parallaxElement&&this.options.scrollY&&(this.parallaxStyle.webkitTransitionDuration="0.001s")),this.indicators)for(var c=this.indicators.length;c--;)this.indicators[c].transitionTime(b)},_transitionTimingFunction:function(a){if(this.scrollerStyle.webkitTransitionTimingFunction=a,this.parallaxElement&&this.options.scrollY&&(this.parallaxStyle.webkitTransitionDuration=a),this.indicators)for(var b=this.indicators.length;b--;)this.indicators[b].transitionTimingFunction(a)},_translate:function(a,b){this.x=a,this.y=b},_clearRequestAnimationFrame:function(){this.requestAnimationFrame&&(cancelAnimationFrame(this.requestAnimationFrame),this.requestAnimationFrame=null)},_updateTranslate:function(){var a=this;(a.x!==a.lastX||a.y!==a.lastY)&&a.setTranslate(a.x,a.y),a.requestAnimationFrame=requestAnimationFrame(function(){a._updateTranslate()})},_createScrollBar:function(a){var b=c.createElement("div"),d=c.createElement("div");return b.className=e+" "+a,d.className=f,b.appendChild(d),a===g?(this.scrollbarY=b,this.scrollbarIndicatorY=d):a===h&&(this.scrollbarX=b,this.scrollbarIndicatorX=d),this.wrapper.appendChild(b),b},_preventDefaultException:function(a,b){for(var c in b)if(b[c].test(a[c]))return!0;return!1},_reLayout:function(){if(this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.indicators.map(function(a){a.refresh()}),this.options.snap&&"string"==typeof this.options.snap){var a=this.scroller.querySelectorAll(this.options.snap);this.itemLength=0,this.snaps=[];for(var b=0,c=a.length;c>b;b++){var d=a[b];d.parentNode===this.scroller&&(this.itemLength++,this.snaps.push(d))}this._initSnap()}},_momentum:function(a,b,c,e,f,g){var h,i,j=parseFloat(Math.abs(b)/c);return g=g===d?6e-4:g,h=a+j*j/(2*g)*(0>b?-1:1),i=j/g,e>h?(h=f?e-f/2.5*(j/8):e,b=Math.abs(h-a),i=b/j):h>0&&(h=f?f/2.5*(j/8):0,b=Math.abs(a)+h,i=b/j),{destination:Math.round(h),duration:i}},_getTranslateStr:function(a,b){return this.options.hardwareAccelerated?"translate3d("+a+"px,"+b+"px,0px) "+this.translateZ:"translate("+a+"px,"+b+"px) "},setStopped:function(a){this.stopped=!!a},setTranslate:function(b,c){if(this.x=b,this.y=c,this.scrollerStyle.webkitTransform=this._getTranslateStr(b,c),this.parallaxElement&&this.options.scrollY){var d=c*this.options.parallaxRatio,e=1+d/((this.parallaxHeight-d)/2);e>1?(this.parallaxImgStyle.opacity=1-d/100*this.options.parallaxRatio,this.parallaxStyle.webkitTransform=this._getTranslateStr(0,-d)+" scale("+e+","+e+")"):(this.parallaxImgStyle.opacity=1,this.parallaxStyle.webkitTransform=this._getTranslateStr(0,-1)+" scale(1,1)")}if(this.indicators)for(var f=this.indicators.length;f--;)this.indicators[f].updatePosition();this.lastX=this.x,this.lastY=this.y,a.trigger(this.scroller,"scroll",this)},reLayout:function(){this.wrapper.offsetHeight;var b=parseFloat(a.getStyles(this.wrapper,"padding-left"))||0,c=parseFloat(a.getStyles(this.wrapper,"padding-right"))||0,d=parseFloat(a.getStyles(this.wrapper,"padding-top"))||0,e=parseFloat(a.getStyles(this.wrapper,"padding-bottom"))||0,f=this.wrapper.clientWidth,g=this.wrapper.clientHeight;this.scrollerWidth=this.scroller.offsetWidth,this.scrollerHeight=this.scroller.offsetHeight,this.wrapperWidth=f-b-c,this.wrapperHeight=g-d-e,this.maxScrollX=Math.min(this.wrapperWidth-this.scrollerWidth,0),this.maxScrollY=Math.min(this.wrapperHeight-this.scrollerHeight,0),this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this._reLayout()},resetPosition:function(a){var b=this.x,c=this.y;return a=a||0,!this.hasHorizontalScroll||this.x>0?b=0:this.x<this.maxScrollX&&(b=this.maxScrollX),!this.hasVerticalScroll||this.y>0?c=0:this.y<this.maxScrollY&&(c=this.maxScrollY),b==this.x&&c==this.y?!1:(this.scrollTo(b,c,a,this.options.bounceEasing),!0)},refresh:function(){this.reLayout(),a.trigger(this.scroller,"refresh",this),this.resetPosition()},scrollTo:function(a,b,c,d){var d=d||j.circular;this.isInTransition=c>0&&(this.lastX!=a||this.lastY!=b),this.isInTransition?(this._clearRequestAnimationFrame(),this._transitionTimingFunction(d.style),this._transitionTime(c),this.setTranslate(a,b)):this.setTranslate(a,b)},scrollToBottom:function(a,b){a=a||this.options.bounceTime,this.scrollTo(0,this.maxScrollY,a,b)},gotoPage:function(a){this._gotoPage(a)},destory:function(){this._initEvent(!0),delete a.data[this.wrapper.getAttribute("data-scroll")],this.wrapper.setAttribute("data-scroll","")}}),l=function(b,d){this.wrapper="string"==typeof d.el?c.querySelector(d.el):d.el,this.wrapperStyle=this.wrapper.style,this.indicator=this.wrapper.children[0],this.indicatorStyle=this.indicator.style,this.scroller=b,this.options=a.extend({listenX:!0,listenY:!0,fade:!1,speedRatioX:0,speedRatioY:0},d),this.sizeRatioX=1,this.sizeRatioY=1,this.maxPosX=0,this.maxPosY=0,this.options.fade&&(this.wrapperStyle.webkitTransform=this.scroller.translateZ,this.wrapperStyle.webkitTransitionDuration=this.options.fixedBadAndorid&&a.os.isBadAndroid?"0.001s":"0ms",this.wrapperStyle.opacity="0")};l.prototype={handleEvent:function(a){},transitionTime:function(b){b=b||0,this.indicatorStyle.webkitTransitionDuration=b+"ms",this.scroller.options.fixedBadAndorid&&!b&&a.os.isBadAndroid&&(this.indicatorStyle.webkitTransitionDuration="0.001s")},transitionTimingFunction:function(a){this.indicatorStyle.webkitTransitionTimingFunction=a},refresh:function(){this.transitionTime(),this.options.listenX&&!this.options.listenY?this.indicatorStyle.display=this.scroller.hasHorizontalScroll?"block":"none":this.options.listenY&&!this.options.listenX?this.indicatorStyle.display=this.scroller.hasVerticalScroll?"block":"none":this.indicatorStyle.display=this.scroller.hasHorizontalScroll||this.scroller.hasVerticalScroll?"block":"none",this.wrapper.offsetHeight,this.options.listenX&&(this.wrapperWidth=this.wrapper.clientWidth,this.indicatorWidth=Math.max(Math.round(this.wrapperWidth*this.wrapperWidth/(this.scroller.scrollerWidth||this.wrapperWidth||1)),8),this.indicatorStyle.width=this.indicatorWidth+"px",this.maxPosX=this.wrapperWidth-this.indicatorWidth,this.minBoundaryX=0,this.maxBoundaryX=this.maxPosX,this.sizeRatioX=this.options.speedRatioX||this.scroller.maxScrollX&&this.maxPosX/this.scroller.maxScrollX),this.options.listenY&&(this.wrapperHeight=this.wrapper.clientHeight,this.indicatorHeight=Math.max(Math.round(this.wrapperHeight*this.wrapperHeight/(this.scroller.scrollerHeight||this.wrapperHeight||1)),8),this.indicatorStyle.height=this.indicatorHeight+"px",this.maxPosY=this.wrapperHeight-this.indicatorHeight,this.minBoundaryY=0,this.maxBoundaryY=this.maxPosY,this.sizeRatioY=this.options.speedRatioY||this.scroller.maxScrollY&&this.maxPosY/this.scroller.maxScrollY),this.updatePosition()},updatePosition:function(){var a=this.options.listenX&&Math.round(this.sizeRatioX*this.scroller.x)||0,b=this.options.listenY&&Math.round(this.sizeRatioY*this.scroller.y)||0;a<this.minBoundaryX?(this.width=Math.max(this.indicatorWidth+a,8),this.indicatorStyle.width=this.width+"px",a=this.minBoundaryX):a>this.maxBoundaryX?(this.width=Math.max(this.indicatorWidth-(a-this.maxPosX),8),this.indicatorStyle.width=this.width+"px",a=this.maxPosX+this.indicatorWidth-this.width):this.width!=this.indicatorWidth&&(this.width=this.indicatorWidth,this.indicatorStyle.width=this.width+"px"),b<this.minBoundaryY?(this.height=Math.max(this.indicatorHeight+3*b,8),this.indicatorStyle.height=this.height+"px",b=this.minBoundaryY):b>this.maxBoundaryY?(this.height=Math.max(this.indicatorHeight-3*(b-this.maxPosY),8),this.indicatorStyle.height=this.height+"px",b=this.maxPosY+this.indicatorHeight-this.height):this.height!=this.indicatorHeight&&(this.height=this.indicatorHeight,this.indicatorStyle.height=this.height+"px"),this.x=a,this.y=b,this.indicatorStyle.webkitTransform=this.scroller._getTranslateStr(a,b)},fade:function(a,b){if(!b||this.visible){clearTimeout(this.fadeTimeout),this.fadeTimeout=null;var c=a?250:500,d=a?0:300;a=a?"1":"0",this.wrapperStyle.webkitTransitionDuration=c+"ms",this.fadeTimeout=setTimeout(function(a){this.wrapperStyle.opacity=a,this.visible=+a}.bind(this,a),d)}}},a.Scroll=k,a.fn.scroll=function(b){var c=[];return this.each(function(){var d=null,e=this,f=e.getAttribute("data-scroll");if(f)d=a.data[f];else{f=++a.uuid;var g=a.extend({},b);e.classList.contains("mui-segmented-control")&&(g=a.extend(g,{scrollY:!1,scrollX:!0,indicators:!1,snap:".mui-control-item"})),a.data[f]=d=new k(e,g),e.setAttribute("data-scroll",f)}c.push(d)}),1===c.length?c[0]:c}}(mui,window,document),function(a,b,c,d){var e="mui-visibility",f="mui-hidden",g=a.Scroll.extend(a.extend({handleEvent:function(a){this._super(a),"scrollbottom"===a.type&&a.target===this.scroller&&this._scrollbottom()},_scrollbottom:function(){this.pulldown||this.loading||(this.pulldown=!1,this._initPullupRefresh(),this.pullupLoading())},_start:function(a){a.touches&&a.touches.length&&a.touches[0].clientX>30&&a.target&&!this._preventDefaultException(a.target,this.options.preventDefaultException)&&a.preventDefault(),this.loading||(this.pulldown=this.pullPocket=this.pullCaption=this.pullLoading=!1),this._super(a)},_drag:function(a){this._super(a),!this.pulldown&&!this.loading&&this.topPocket&&"down"===a.detail.direction&&this.y>=0&&this._initPulldownRefresh(),this.pulldown&&this._setCaption(this.y>this.options.down.height?this.options.down.contentover:this.options.down.contentdown)},_reLayout:function(){this.hasVerticalScroll=!0,this._super()},resetPosition:function(a){if(this.pulldown){if(this.y>=this.options.down.height)return this.pulldownLoading(d,a||0),!0;!this.loading&&this.topPocket.classList.remove(e)}return this._super(a)},pulldownLoading:function(a,b){if("undefined"==typeof a&&(a=this.options.down.height),this.scrollTo(0,a,b,this.options.bounceEasing),!this.loading){this._initPulldownRefresh(),this._setCaption(this.options.down.contentrefresh),this.loading=!0,this.indicators.map(function(a){a.fade(0)});var c=this.options.down.callback;c&&c.call(this)}},endPulldownToRefresh:function(){var a=this;a.topPocket&&a.loading&&this.pulldown&&(a.scrollTo(0,0,a.options.bounceTime,a.options.bounceEasing),a.loading=!1,a._setCaption(a.options.down.contentdown,!0),setTimeout(function(){a.loading||a.topPocket.classList.remove(e)},350))},pullupLoading:function(a,b,c){b=b||0,this.scrollTo(b,this.maxScrollY,c,this.options.bounceEasing),this.loading||(this._initPullupRefresh(),this._setCaption(this.options.up.contentrefresh),this.indicators.map(function(a){a.fade(0)}),this.loading=!0,a=a||this.options.up.callback,a&&a.call(this))},endPullupToRefresh:function(a){var b=this;b.bottomPocket&&(b.loading=!1,a?(this.finished=!0,b._setCaption(b.options.up.contentnomore),b.wrapper.removeEventListener("scrollbottom",b)):(b._setCaption(b.options.up.contentdown),b.loading||b.bottomPocket.classList.remove(e)))},disablePullupToRefresh:function(){this._initPullupRefresh(),this.bottomPocket.className="mui-pull-bottom-pocket "+f,this.wrapper.removeEventListener("scrollbottom",this)},enablePullupToRefresh:function(){this._initPullupRefresh(),this.bottomPocket.classList.remove(f),this._setCaption(this.options.up.contentdown),this.wrapper.addEventListener("scrollbottom",this)},refresh:function(a){a&&this.finished&&(this.enablePullupToRefresh(),this.finished=!1),this._super()}},a.PullRefresh));a.fn.pullRefresh=function(b){if(1===this.length){var c=this[0],d=null;b=b||{};var e=c.getAttribute("data-pullrefresh");return e?d=a.data[e]:(e=++a.uuid,a.data[e]=d=new g(c,b),c.setAttribute("data-pullrefresh",e)),b.down&&b.down.auto?d.pulldownLoading(b.down.autoY):b.up&&b.up.auto&&d.pullupLoading(),d}}}(mui,window,document),function(a,b){var c="mui-slider",d="mui-slider-group",e="mui-slider-loop",f="mui-slider-indicator",g="mui-action-previous",h="mui-action-next",i="mui-slider-item",j="mui-active",k="."+i,l="."+f,m=".mui-slider-progress-bar",n=a.Slider=a.Scroll.extend({init:function(b,c){this._super(b,a.extend(!0,{fingers:1,interval:0,scrollY:!1,scrollX:!0,indicators:!1,bounceTime:200,startX:!1,snap:k},c)),this.options.startX},_init:function(){for(var a=this.wrapper.querySelectorAll("."+d),b=0,c=a.length;c>b;b++)if(a[b].parentNode===this.wrapper){this.scroller=a[b];break}this.scroller&&(this.scrollerStyle=this.scroller.style,this.progressBar=this.wrapper.querySelector(m),this.progressBar&&(this.progressBarWidth=this.progressBar.offsetWidth,this.progressBarStyle=this.progressBar.style),this._super(),this._initTimer())},_triggerSlide:function(){var b=this;b.isInTransition=!1;b.currentPage;b.slideNumber=b._fixedSlideNumber(),b.loop&&(0===b.slideNumber?b.setTranslate(b.pages[1][0].x,0):b.slideNumber===b.itemLength-3&&b.setTranslate(b.pages[b.itemLength-2][0].x,0)),b.lastSlideNumber!=b.slideNumber&&(b.lastSlideNumber=b.slideNumber,b.lastPage=b.currentPage,a.trigger(b.wrapper,"slide",{slideNumber:b.slideNumber})),b._initTimer()},_handleSlide:function(b){var c=this;if(b.target===c.wrapper){var d=b.detail;d.slideNumber=d.slideNumber||0;var e=c.scroller.querySelectorAll(k),f=d.slideNumber;if(c.loop&&(f+=1),!c.wrapper.classList.contains("mui-segmented-control"))for(var g=0,h=e.length;h>g;g++){var i=e[g];i.parentNode===c.scroller&&(g===f?i.classList.add(j):i.classList.remove(j))}var l=c.wrapper.querySelector(".mui-slider-indicator");if(l){l.getAttribute("data-scroll")&&a(l).scroll().gotoPage(d.slideNumber);var m=l.querySelectorAll(".mui-indicator");if(m.length>0)for(var g=0,h=m.length;h>g;g++)m[g].classList[g===d.slideNumber?"add":"remove"](j);else{var n=l.querySelector(".mui-number span");if(n)n.innerText=d.slideNumber+1;else for(var o=c.wrapper.querySelectorAll(".mui-control-item"),g=0,h=o.length;h>g;g++)o[g].classList[g===d.slideNumber?"add":"remove"](j)}}b.stopPropagation()}},_handleTabShow:function(a){var b=this;b.gotoItem(a.detail.tabNumber||0,b.options.bounceTime)},_handleIndicatorTap:function(a){var b=this,c=a.target;(c.classList.contains(g)||c.classList.contains(h))&&(b[c.classList.contains(g)?"prevItem":"nextItem"](),a.stopPropagation())},_initEvent:function(b){var c=this;c._super(b);var d=b?"removeEventListener":"addEventListener";c.wrapper[d]("swiperight",a.stopPropagation),c.wrapper[d]("scrollend",c._triggerSlide.bind(this)),c.wrapper[d]("slide",c._handleSlide.bind(this)),c.wrapper[d](a.eventName("shown","tab"),c._handleTabShow.bind(this));var e=c.wrapper.querySelector(l);e&&e[d]("tap",c._handleIndicatorTap.bind(this))},_drag:function(a){this._super(a);var c=a.detail.direction;if("left"===c||"right"===c){var d=this.wrapper.getAttribute("data-slidershowTimer");d&&b.clearTimeout(d),a.stopPropagation()}},_initTimer:function(){var a=this,c=a.wrapper,d=a.options.interval,e=c.getAttribute("data-slidershowTimer");e&&b.clearTimeout(e),d&&(e=b.setTimeout(function(){c&&((c.offsetWidth||c.offsetHeight)&&a.nextItem(!0),a._initTimer())},d),c.setAttribute("data-slidershowTimer",e))},_fixedSlideNumber:function(a){a=a||this.currentPage;var b=a.pageX;return this.loop&&(b=0===a.pageX?this.itemLength-3:a.pageX===this.itemLength-1?0:a.pageX-1),b},_reLayout:function(){this.hasHorizontalScroll=!0,this.loop=this.scroller.classList.contains(e),this._super()},_getScroll:function(){var b=a.parseTranslateMatrix(a.getStyles(this.scroller,"webkitTransform"));return b?b.x:0},_transitionEnd:function(b){b.target===this.scroller&&this.isInTransition&&(this._transitionTime(),this.isInTransition=!1,a.trigger(this.wrapper,"scrollend",this))},_flick:function(a){if(this.moved){var b=a.detail,c=b.direction;this._clearRequestAnimationFrame(),this.isInTransition=!0,"flick"===a.type?(b.deltaTime<200&&(this.x=this._getPage(this.slideNumber+("right"===c?-1:1),!0).x),this.resetPosition(this.options.bounceTime)):"dragend"!==a.type||b.flick||this.resetPosition(this.options.bounceTime),a.stopPropagation()}},_initSnap:function(){if(this.scrollerWidth=this.itemLength*this.scrollerWidth,this.maxScrollX=Math.min(this.wrapperWidth-this.scrollerWidth,0),this._super(),this.currentPage.x)this.slideNumber=this._fixedSlideNumber(),this.lastSlideNumber="undefined"==typeof this.lastSlideNumber?this.slideNumber:this.lastSlideNumber;else{var a=this.pages[this.loop?1:0];if(a=a||this.pages[0],!a)return;this.currentPage=a[0],this.slideNumber=0,this.lastSlideNumber="undefined"==typeof this.lastSlideNumber?0:this.lastSlideNumber}this.options.startX=this.currentPage.x||0},_getSnapX:function(a){return Math.max(-a,this.maxScrollX)},_getPage:function(a,b){return this.loop?a>this.itemLength-(b?2:3)?(a=1,time=0):(b?-1:0)>a?(a=this.itemLength-2,time=0):a+=1:(b||(a>this.itemLength-1?(a=0,time=0):0>a&&(a=this.itemLength-1,time=0)),a=Math.min(Math.max(0,a),this.itemLength-1)),this.pages[a][0]},_gotoItem:function(b,c){this.currentPage=this._getPage(b,!0),this.scrollTo(this.currentPage.x,0,c,this.options.bounceEasing),0===c&&a.trigger(this.wrapper,"scrollend",this)},setTranslate:function(a,b){this._super(a,b);var c=this.progressBar;c&&(this.progressBarStyle.webkitTransform=this._getTranslateStr(-a*(this.progressBarWidth/this.wrapperWidth),0))},resetPosition:function(a){return a=a||0,this.x>0?this.x=0:this.x<this.maxScrollX&&(this.x=this.maxScrollX),this.currentPage=this._nearestSnap(this.x),this.scrollTo(this.currentPage.x,0,a),!0},gotoItem:function(a,b){this._gotoItem(a,"undefined"==typeof b?this.options.bounceTime:b)},nextItem:function(){this._gotoItem(this.slideNumber+1,this.options.bounceTime)},prevItem:function(){this._gotoItem(this.slideNumber-1,this.options.bounceTime)},getSlideNumber:function(){return this.slideNumber||0},refresh:function(b){b?(a.extend(this.options,b),this._super(),this.nextItem()):this._super()},destory:function(){this._initEvent(!0),delete a.data[this.wrapper.getAttribute("data-slider")],this.wrapper.setAttribute("data-slider","")}});a.fn.slider=function(b){var d=null;return this.each(function(){var e=this;if(this.classList.contains(c)||(e=this.querySelector("."+c)),e&&e.querySelector(k)){var f=e.getAttribute("data-slider");f?(d=a.data[f],d&&b&&d.refresh(b)):(f=++a.uuid,a.data[f]=d=new n(e,b),e.setAttribute("data-slider",f))}}),d},a.ready(function(){a(".mui-slider").slider(),a(".mui-scroll-wrapper.mui-slider-indicator.mui-segmented-control").scroll({
scrollY:!1,scrollX:!0,indicators:!1,snap:".mui-control-item"})})}(mui,window),function(a,b){if(a.os.plus&&a.os.android){var c="mui-plus-pullrefresh",d="mui-visibility",e="mui-hidden",f="mui-block",g="mui-pull-caption",h="mui-pull-caption-down",i="mui-pull-caption-refresh",j="mui-pull-caption-nomore",k=a.Class.extend({init:function(a,b){this.element=a,this.options=b,this.wrapper=this.scroller=a,this._init(),this._initPulldownRefreshEvent()},_init:function(){var a=this;window.addEventListener("dragup",a),b.addEventListener("plusscrollbottom",a),a.scrollInterval=window.setInterval(function(){a.isScroll&&!a.loading&&window.pageYOffset+window.innerHeight+10>=b.documentElement.scrollHeight&&(a.isScroll=!1,a.bottomPocket&&a.pullupLoading())},100)},_initPulldownRefreshEvent:function(){var b=this;b.topPocket&&b.options.webviewId&&a.plusReady(function(){var a=plus.webview.getWebviewById(b.options.webviewId);if(a){b.options.webview=a;var c=b.options.down,d=c.height;a.addEventListener("dragBounce",function(d){switch(b.pulldown?b.pullPocket.classList.add(f):b._initPulldownRefresh(),d.status){case"beforeChangeOffset":b._setCaption(c.contentdown);break;case"afterChangeOffset":b._setCaption(c.contentover);break;case"dragEndAfterChangeOffset":a.evalJS("mui&&mui.options.pullRefresh.down.callback()"),b._setCaption(c.contentrefresh)}},!1),a.setBounce({position:{top:2*d+"px"},changeoffset:{top:d+"px"}})}})},handleEvent:function(a){var b=this;b.stopped||(b.isScroll=!1,("dragup"===a.type||"plusscrollbottom"===a.type)&&(b.isScroll=!0,setTimeout(function(){b.isScroll=!1},1e3)))}}).extend(a.extend({setStopped:function(a){this.stopped=!!a;var b=plus.webview.currentWebview();if(this.stopped)b.setStyle({bounce:"none"}),b.setBounce({position:{top:"none"}});else{var c=this.options.down.height;b.setStyle({bounce:"vertical"}),b.setBounce({position:{top:2*c+"px"},changeoffset:{top:c+"px"}})}},pulldownLoading:function(){var b=a.options.pullRefresh.down.callback;b&&b.call(this)},_pulldownLoading:function(){var b=this;a.plusReady(function(){plus.webview.getWebviewById(b.options.webviewId).evalJS("mui&&mui.options.pullRefresh.down&&mui.options.pullRefresh.down.callback()")})},endPulldownToRefresh:function(){var a=plus.webview.currentWebview();a.parent().evalJS("mui&&mui(document.querySelector('.mui-content')).pullRefresh('"+JSON.stringify({webviewId:a.id})+"')._endPulldownToRefresh()")},_endPulldownToRefresh:function(){var a=this;a.topPocket&&a.options.webview&&(a.options.webview.endPullToRefresh(),a.loading=!1,a._setCaption(a.options.down.contentdown,!0),setTimeout(function(){a.loading||a.topPocket.classList.remove(f)},350))},pullupLoading:function(a){var b=this;b.isLoading||(b.isLoading=!0,b.pulldown!==!1?b._initPullupRefresh():this.pullPocket.classList.add(f),setTimeout(function(){b.pullLoading.classList.add(d),b.pullLoading.classList.remove(e),b.pullCaption.innerHTML="",b.pullCaption.className=g+" "+i,b.pullCaption.innerHTML=b.options.up.contentrefresh,a=a||b.options.up.callback,a&&a.call(b)},300))},endPullupToRefresh:function(a){var b=this;b.pullLoading&&(b.pullLoading.classList.remove(d),b.pullLoading.classList.add(e),b.isLoading=!1,a?(b.finished=!0,b.pullCaption.className=g+" "+j,b.pullCaption.innerHTML=b.options.up.contentnomore,window.removeEventListener("dragup",b)):(b.pullCaption.className=g+" "+h,b.pullCaption.innerHTML=b.options.up.contentdown))},disablePullupToRefresh:function(){this._initPullupRefresh(),this.bottomPocket.className="mui-pull-bottom-pocket "+e,window.removeEventListener("dragup",this)},enablePullupToRefresh:function(){this._initPullupRefresh(),this.bottomPocket.classList.remove(e),this.pullCaption.className=g+" "+h,this.pullCaption.innerHTML=this.options.up.contentdown,window.addEventListener("dragup",this)},scrollTo:function(b,c,d){a.scrollTo(b,c,d)},refresh:function(a){a&&this.finished&&(this.enablePullupToRefresh(),this.finished=!1)}},a.PullRefresh));a.fn.pullRefresh=function(d){var e;0===this.length?(e=b.createElement("div"),e.className="mui-content",b.body.appendChild(e)):e=this[0],d=d||{},"string"==typeof d&&(d=a.parseJSON(d)),!d.webviewId&&(d.webviewId=plus.webview.currentWebview().id||plus.webview.currentWebview().getURL());var f=null,g=d.webviewId&&d.webviewId.replace(/\//g,"_"),h=e.getAttribute("data-pullrefresh-plus-"+g);return h?f=a.data[h]:(h=++a.uuid,e.setAttribute("data-pullrefresh-plus-"+g,h),b.body.classList.add(c),a.data[h]=f=new k(e,d)),d.down&&d.down.auto?f._pulldownLoading():d.up&&d.up.auto&&f.pullupLoading(),f}}}(mui,document),function(a,b,c,d){var e="mui-off-canvas-left",f="mui-off-canvas-right",g="mui-off-canvas-backdrop",h="mui-off-canvas-wrap",i="mui-slide-in",j="mui-active",k="mui-transitioning",l=".mui-inner-wrap",m=a.Class.extend({init:function(b,d){this.wrapper=this.element=b,this.scroller=this.wrapper.querySelector(l),this.classList=this.wrapper.classList,this.scroller&&(this.options=a.extend(!0,{dragThresholdX:10,scale:.8,opacity:.1,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT|VIDEO)$/}},d),c.body.classList.add("mui-fullscreen"),this.refresh(),this.initEvent())},_preventDefaultException:function(a,b){for(var c in b)if(b[c].test(a[c]))return!0;return!1},refresh:function(a){this.slideIn=this.classList.contains(i),this.scalable=this.classList.contains("mui-scalable")&&!this.slideIn,this.scroller=this.wrapper.querySelector(l),this.offCanvasLefts=this.wrapper.querySelectorAll("."+e),this.offCanvasRights=this.wrapper.querySelectorAll("."+f),a?a.classList.contains(e)?this.offCanvasLeft=a:a.classList.contains(f)&&(this.offCanvasRight=a):(this.offCanvasRight=this.wrapper.querySelector("."+f),this.offCanvasLeft=this.wrapper.querySelector("."+e)),this.offCanvasRightWidth=this.offCanvasLeftWidth=0,this.offCanvasLeftSlideIn=this.offCanvasRightSlideIn=!1,this.offCanvasRight&&(this.offCanvasRightWidth=this.offCanvasRight.offsetWidth,this.offCanvasRightSlideIn=this.slideIn&&this.offCanvasRight.parentNode===this.wrapper),this.offCanvasLeft&&(this.offCanvasLeftWidth=this.offCanvasLeft.offsetWidth,this.offCanvasLeftSlideIn=this.slideIn&&this.offCanvasLeft.parentNode===this.wrapper),this.backdrop=this.scroller.querySelector("."+g),this.options.dragThresholdX=this.options.dragThresholdX||10,this.visible=!1,this.startX=null,this.lastX=null,this.offsetX=null,this.lastTranslateX=null},handleEvent:function(b){switch(b.type){case"touchstart":b.target&&!this._preventDefaultException(b.target,this.options.preventDefaultException)&&b.preventDefault();break;case"webkitTransitionEnd":b.target===this.scroller&&this._dispatchEvent();break;case"drag":var c=b.detail;this.startX?this.lastX=c.center.x:(this.startX=c.center.x,this.lastX=this.startX),!this.isDragging&&Math.abs(this.lastX-this.startX)>this.options.dragThresholdX&&("left"===c.direction||"right"===c.direction)&&(this.slideIn?(this.scroller=this.wrapper.querySelector(l),this.classList.contains(j)?this.offCanvasRight&&this.offCanvasRight.classList.contains(j)?(this.offCanvas=this.offCanvasRight,this.offCanvasWidth=this.offCanvasRightWidth):(this.offCanvas=this.offCanvasLeft,this.offCanvasWidth=this.offCanvasLeftWidth):"left"===c.direction&&this.offCanvasRight?(this.offCanvas=this.offCanvasRight,this.offCanvasWidth=this.offCanvasRightWidth):"right"===c.direction&&this.offCanvasLeft?(this.offCanvas=this.offCanvasLeft,this.offCanvasWidth=this.offCanvasLeftWidth):this.scroller=null):this.classList.contains(j)?"left"===c.direction?(this.offCanvas=this.offCanvasLeft,this.offCanvasWidth=this.offCanvasLeftWidth):(this.offCanvas=this.offCanvasRight,this.offCanvasWidth=this.offCanvasRightWidth):"right"===c.direction?(this.offCanvas=this.offCanvasLeft,this.offCanvasWidth=this.offCanvasLeftWidth):(this.offCanvas=this.offCanvasRight,this.offCanvasWidth=this.offCanvasRightWidth),this.offCanvas&&this.scroller&&(this.startX=this.lastX,this.isDragging=!0,a.gestures.session.lockDirection=!0,a.gestures.session.startDirection=c.direction,this.offCanvas.classList.remove(k),this.scroller.classList.remove(k),this.offsetX=this.getTranslateX(),this._initOffCanvasVisible())),this.isDragging&&(this.updateTranslate(this.offsetX+(this.lastX-this.startX)),c.gesture.preventDefault(),b.stopPropagation());break;case"dragend":if(this.isDragging){var c=b.detail,d=c.direction;this.isDragging=!1,this.offCanvas.classList.add(k),this.scroller.classList.add(k);var e=0,f=this.getTranslateX();if(this.slideIn){if(e=f>=0?this.offCanvasRightWidth&&f/this.offCanvasRightWidth||0:this.offCanvasLeftWidth&&f/this.offCanvasLeftWidth||0,e>=.5&&"left"===d?this.openPercentage(0):e>0&&.5>=e&&"left"===d?this.openPercentage(-100):e>=.5&&"right"===d?this.openPercentage(0):e>=-.5&&0>e&&"left"===d?this.openPercentage(100):e>0&&.5>=e&&"right"===d?this.openPercentage(-100):-.5>=e&&"right"===d?this.openPercentage(0):e>=-.5&&"right"===d?this.openPercentage(100):-.5>=e&&"left"===d?this.openPercentage(0):e>=-.5&&"left"===d?this.openPercentage(-100):this.openPercentage(0),1===e||-1===e||0===e)return void this._dispatchEvent()}else{if(e=f>=0?this.offCanvasLeftWidth&&f/this.offCanvasLeftWidth||0:this.offCanvasRightWidth&&f/this.offCanvasRightWidth||0,0===e)return this.openPercentage(0),void this._dispatchEvent();e>0&&.5>e&&"right"===d?this.openPercentage(0):e>.5&&"left"===d?this.openPercentage(100):0>e&&e>-.5&&"left"===d?this.openPercentage(0):"right"===d&&0>e&&e>-.5?this.openPercentage(0):.5>e&&"right"===d?this.openPercentage(-100):"right"===d&&e>=0&&(e>=.5||c.flick)?this.openPercentage(100):"left"===d&&0>=e&&(-.5>=e||c.flick)?this.openPercentage(-100):this.openPercentage(0),(1===e||-1===e)&&this._dispatchEvent()}}}},_dispatchEvent:function(){this.classList.contains(j)?a.trigger(this.wrapper,"shown",this):a.trigger(this.wrapper,"hidden",this)},_initOffCanvasVisible:function(){this.visible||(this.visible=!0,this.offCanvasLeft&&(this.offCanvasLeft.style.visibility="visible"),this.offCanvasRight&&(this.offCanvasRight.style.visibility="visible"))},initEvent:function(){var a=this;a.backdrop&&a.backdrop.addEventListener("tap",function(b){a.close(),b.detail.gesture.preventDefault()}),this.classList.contains("mui-draggable")&&(this.wrapper.addEventListener("touchstart",this),this.wrapper.addEventListener("drag",this),this.wrapper.addEventListener("dragend",this)),this.wrapper.addEventListener("webkitTransitionEnd",this)},openPercentage:function(a){var b=a/100;this.slideIn?(this.offCanvasLeft&&a>=0?(b=0===b?-1:0,this.updateTranslate(this.offCanvasLeftWidth*b),this.offCanvasLeft.classList[0!==a?"add":"remove"](j)):this.offCanvasRight&&0>=a&&(b=0===b?1:0,this.updateTranslate(this.offCanvasRightWidth*b),this.offCanvasRight.classList[0!==a?"add":"remove"](j)),this.classList[0!==a?"add":"remove"](j)):(this.offCanvasLeft&&a>=0?(this.updateTranslate(this.offCanvasLeftWidth*b),this.offCanvasLeft.classList[0!==b?"add":"remove"](j)):this.offCanvasRight&&0>=a&&(this.updateTranslate(this.offCanvasRightWidth*b),this.offCanvasRight.classList[0!==b?"add":"remove"](j)),this.classList[0!==b?"add":"remove"](j))},updateTranslate:function(b){if(b!==this.lastTranslateX){if(this.slideIn){if(this.offCanvas.classList.contains(f)){if(0>b)return void this.setTranslateX(0);if(b>this.offCanvasRightWidth)return void this.setTranslateX(this.offCanvasRightWidth)}else{if(b>0)return void this.setTranslateX(0);if(b<-this.offCanvasLeftWidth)return void this.setTranslateX(-this.offCanvasLeftWidth)}this.setTranslateX(b)}else{if(!this.offCanvasLeft&&b>0||!this.offCanvasRight&&0>b)return void this.setTranslateX(0);if(this.leftShowing&&b>this.offCanvasLeftWidth)return void this.setTranslateX(this.offCanvasLeftWidth);if(this.rightShowing&&b<-this.offCanvasRightWidth)return void this.setTranslateX(-this.offCanvasRightWidth);this.setTranslateX(b),b>=0?(this.leftShowing=!0,this.rightShowing=!1,b>0&&(this.offCanvasLeft&&a.each(this.offCanvasLefts,function(a,b){b===this.offCanvasLeft?this.offCanvasLeft.style.zIndex=0:b.style.zIndex=-1}.bind(this)),this.offCanvasRight&&(this.offCanvasRight.style.zIndex=-1))):(this.rightShowing=!0,this.leftShowing=!1,this.offCanvasRight&&a.each(this.offCanvasRights,function(a,b){b===this.offCanvasRight?b.style.zIndex=0:b.style.zIndex=-1}.bind(this)),this.offCanvasLeft&&(this.offCanvasLeft.style.zIndex=-1))}this.lastTranslateX=b}},setTranslateX:a.animationFrame(function(a){if(this.scroller)if(this.scalable&&this.offCanvas.parentNode===this.wrapper){var b=Math.abs(a)/this.offCanvasWidth,c=1-(1-this.options.scale)*b,d=this.options.scale+(1-this.options.scale)*b,f=(1-(1-this.options.opacity)*b,this.options.opacity+(1-this.options.opacity)*b);this.offCanvas.classList.contains(e)?(this.offCanvas.style.webkitTransformOrigin="-100%",this.scroller.style.webkitTransformOrigin="left"):(this.offCanvas.style.webkitTransformOrigin="200%",this.scroller.style.webkitTransformOrigin="right"),this.offCanvas.style.opacity=f,this.offCanvas.style.webkitTransform="translate3d(0,0,0) scale("+d+")",this.scroller.style.webkitTransform="translate3d("+a+"px,0,0) scale("+c+")"}else this.slideIn?this.offCanvas.style.webkitTransform="translate3d("+a+"px,0,0)":this.scroller.style.webkitTransform="translate3d("+a+"px,0,0)"}),getTranslateX:function(){if(this.offCanvas){var b=this.slideIn?this.offCanvas:this.scroller,c=a.parseTranslateMatrix(a.getStyles(b,"webkitTransform"));return c&&c.x||0}return 0},isShown:function(a){var b=!1;if(this.slideIn)b="left"===a?this.classList.contains(j)&&this.wrapper.querySelector("."+e+"."+j):"right"===a?this.classList.contains(j)&&this.wrapper.querySelector("."+f+"."+j):this.classList.contains(j)&&(this.wrapper.querySelector("."+e+"."+j)||this.wrapper.querySelector("."+f+"."+j));else{var c=this.getTranslateX();b="right"===a?this.classList.contains(j)&&0>c:"left"===a?this.classList.contains(j)&&c>0:this.classList.contains(j)&&0!==c}return b},close:function(){this._initOffCanvasVisible(),this.offCanvas=this.wrapper.querySelector("."+f+"."+j)||this.wrapper.querySelector("."+e+"."+j),this.offCanvasWidth=this.offCanvas.offsetWidth,this.scroller&&(this.offCanvas.offsetHeight,this.offCanvas.classList.add(k),this.scroller.classList.add(k),this.openPercentage(0))},show:function(a){return this._initOffCanvasVisible(),this.isShown(a)?!1:(a||(a=this.wrapper.querySelector("."+f)?"right":"left"),"right"===a?(this.offCanvas=this.offCanvasRight,this.offCanvasWidth=this.offCanvasRightWidth):(this.offCanvas=this.offCanvasLeft,this.offCanvasWidth=this.offCanvasLeftWidth),this.scroller&&(this.offCanvas.offsetHeight,this.offCanvas.classList.add(k),this.scroller.classList.add(k),this.openPercentage("left"===a?100:-100)),!0)},toggle:function(a){var b=a;a&&a.classList&&(b=a.classList.contains(e)?"left":"right",this.refresh(a)),this.show(b)||this.close()}}),n=function(a){if(parentNode=a.parentNode,parentNode){if(parentNode.classList.contains(h))return parentNode;if(parentNode=parentNode.parentNode,parentNode.classList.contains(h))return parentNode}},o=function(b,d){if("A"===d.tagName&&d.hash){var e=c.getElementById(d.hash.replace("#",""));if(e){var f=n(e);if(f)return a.targets._container=f,e}}return!1};a.registerTarget({name:d,index:60,handle:o,target:!1,isReset:!1,isContinue:!0}),b.addEventListener("tap",function(b){if(a.targets.offcanvas)for(var d=b.target;d&&d!==c;d=d.parentNode)if("A"===d.tagName&&d.hash&&d.hash==="#"+a.targets.offcanvas.id){b.detail&&b.detail.gesture&&b.detail.gesture.preventDefault(),a(a.targets._container).offCanvas().toggle(a.targets.offcanvas),a.targets.offcanvas=a.targets._container=null;break}}),a.fn.offCanvas=function(b){var c=[];return this.each(function(){var d=null,e=this;e.classList.contains(h)||(e=n(e));var f=e.getAttribute("data-offCanvas");f?d=a.data[f]:(f=++a.uuid,a.data[f]=d=new m(e,b),e.setAttribute("data-offCanvas",f)),("show"===b||"close"===b||"toggle"===b)&&d.toggle(),c.push(d)}),1===c.length?c[0]:c},a.ready(function(){a(".mui-off-canvas-wrap").offCanvas()})}(mui,window,document,"offcanvas"),function(a,b){var c="mui-action",d=function(a,b){var d=b.className||"";return"string"!=typeof d&&(d=""),d&&~d.indexOf(c)?(b.classList.contains("mui-action-back")&&a.preventDefault(),b):!1};a.registerTarget({name:b,index:50,handle:d,target:!1,isContinue:!0})}(mui,"action"),function(a,b,c,d){var e="mui-modal",f=function(a,b){if("A"===b.tagName&&b.hash){var d=c.getElementById(b.hash.replace("#",""));if(d&&d.classList.contains(e))return d}return!1};a.registerTarget({name:d,index:50,handle:f,target:!1,isReset:!1,isContinue:!0}),b.addEventListener("tap",function(b){a.targets.modal&&(b.detail.gesture.preventDefault(),a.targets.modal.classList.toggle("mui-active"))})}(mui,window,document,"modal"),function(a,b,c,d){var e="mui-popover",f="mui-popover-arrow",g="mui-popover-action",h="mui-backdrop",i="mui-bar-popover",j="mui-bar-backdrop",k="mui-backdrop-action",l="mui-active",m="mui-bottom",n=function(b,d){if("A"===d.tagName&&d.hash){if(a.targets._popover=c.getElementById(d.hash.replace("#","")),a.targets._popover&&a.targets._popover.classList.contains(e))return d;a.targets._popover=null}return!1};a.registerTarget({name:d,index:60,handle:n,target:!1,isReset:!1,isContinue:!0});var o,p=function(a){},q=function(b){this.removeEventListener("webkitTransitionEnd",q),this.addEventListener("touchmove",a.preventDefault),a.trigger(this,"shown",this)},r=function(b){v(this,"none"),this.removeEventListener("webkitTransitionEnd",r),this.removeEventListener("touchmove",a.preventDefault),p(!1),a.trigger(this,"hidden",this)},s=function(){var b=c.createElement("div");return b.classList.add(h),b.addEventListener("touchmove",a.preventDefault),b.addEventListener("tap",function(b){var d=a.targets._popover;d&&(d.addEventListener("webkitTransitionEnd",r),d.classList.remove(l),t(d),c.body.setAttribute("style",""))}),b}(),t=function(b){s.setAttribute("style","opacity:0"),a.targets.popover=a.targets._popover=null,o=a.later(function(){!b.classList.contains(l)&&s.parentNode&&s.parentNode===c.body&&c.body.removeChild(s)},350)};b.addEventListener("tap",function(b){if(a.targets.popover){for(var d=!1,e=b.target;e&&e!==c;e=e.parentNode)e===a.targets.popover&&(d=!0);d&&(b.detail.gesture.preventDefault(),u(a.targets._popover,a.targets.popover))}});var u=function(a,b){o&&o.cancel(),a.removeEventListener("webkitTransitionEnd",q),a.removeEventListener("webkitTransitionEnd",r),s.classList.remove(j),s.classList.remove(k);var d=c.querySelector(".mui-popover.mui-active");if(d&&(d.addEventListener("webkitTransitionEnd",r),d.classList.remove(l),a===d))return void t(d);var e=!1;(a.classList.contains(i)||a.classList.contains(g))&&(a.classList.contains(g)?(e=!0,s.classList.add(k)):s.classList.add(j)),v(a,"block"),a.offsetHeight,a.classList.add(l),s.setAttribute("style",""),c.body.appendChild(s),p(!0),w(a,b,e),s.classList.add(l),a.addEventListener("webkitTransitionEnd",q)},v=function(a,b,c,d){var e=a.style;"undefined"!=typeof b&&(e.display=b),"undefined"!=typeof c&&(e.top=c+"px"),"undefined"!=typeof d&&(e.left=d+"px")},w=function(d,e,h){if(d&&e){if(h)return void v(d,"block");var i=b.innerWidth,j=b.innerHeight,k=d.offsetWidth,l=d.offsetHeight,n=e.offsetWidth,o=e.offsetHeight,p=a.offset(e),q=d.querySelector("."+f);q||(q=c.createElement("div"),q.className=f,d.appendChild(q));var r=q&&q.offsetWidth/2||0,s=0,t=0,u=0,w=0,x=d.classList.contains(g)?0:5,y="top";l+r<p.top-b.pageYOffset?s=p.top-l-r:l+r<j-(p.top-b.pageYOffset)-o?(y="bottom",s=p.top+o+r):(y="middle",s=Math.max((j-l)/2+b.pageYOffset,0),t=Math.max((i-k)/2+b.pageXOffset,0)),"top"===y||"bottom"===y?(t=n/2+p.left-k/2,u=t,x>t&&(t=x),t+k>i&&(t=i-k-x),q&&("top"===y?q.classList.add(m):q.classList.remove(m),u-=t,w=k/2-r/2+u,w=Math.max(Math.min(w,k-2*r-6),6),q.setAttribute("style","left:"+w+"px"))):"middle"===y&&q.setAttribute("style","display:none"),v(d,"block",s,t)}};a.createMask=function(b){var d=c.createElement("div");d.classList.add(h),d.addEventListener("touchmove",a.preventDefault),d.addEventListener("tap",function(){e.close()});var e=[d];return e._show=!1,e.show=function(){return e._show=!0,d.setAttribute("style","opacity:1"),c.body.appendChild(d),e},e._remove=function(){return e._show&&(e._show=!1,d.setAttribute("style","opacity:0"),a.later(function(){var a=c.body;d.parentNode===a&&a.removeChild(d)},350)),e},e.close=function(){b?b()!==!1&&e._remove():e._remove()},e},a.fn.popover=function(){var b=arguments;this.each(function(){a.targets._popover=this,("show"===b[0]||"hide"===b[0]||"toggle"===b[0])&&u(this,b[1])})}}(mui,window,document,"popover"),function(a,b,c,d,e){var f="mui-control-item",g="mui-segmented-control",h="mui-segmented-control-vertical",i="mui-control-content",j="mui-bar-tab",k="mui-tab-item",l=function(a,b){return b.classList&&(b.classList.contains(f)||b.classList.contains(k))?(b.parentNode&&b.parentNode.classList&&b.parentNode.classList.contains(h)||a.preventDefault(),b):!1};a.registerTarget({name:d,index:80,handle:l,target:!1}),b.addEventListener("tap",function(b){var e=a.targets.tab;if(e){for(var h,l,m,n="mui-active",o="."+n,p=e.parentNode;p&&p!==c;p=p.parentNode){if(p.classList.contains(g)){h=p.querySelector(o+"."+f);break}p.classList.contains(j)&&(h=p.querySelector(o+"."+k))}h&&h.classList.remove(n);var q=e===h;if(e&&e.classList.add(n),e.hash&&(m=c.getElementById(e.hash.replace("#","")))){if(!m.classList.contains(i))return void e.classList[q?"remove":"add"](n);if(!q){var r=m.parentNode;l=r.querySelectorAll("."+i+o);for(var s=0;s<l.length;s++){var t=l[s];t.parentNode===r&&t.classList.remove(n)}m.classList.add(n);var u=m.parentNode.querySelectorAll("."+i);a.trigger(m,a.eventName("shown",d),{tabNumber:Array.prototype.indexOf.call(u,m)}),b.detail&&b.detail.gesture.preventDefault()}}}})}(mui,window,document,"tab"),function(a,b,c){var d="mui-switch",e="mui-switch-handle",f="mui-active",g="mui-dragging",h="mui-disabled",i="."+e,j=function(a,b){return b.classList&&b.classList.contains(d)?b:!1};a.registerTarget({name:c,index:100,handle:j,target:!1});var k=function(a){this.element=a,this.classList=this.element.classList,this.handle=this.element.querySelector(i),this.init(),this.initEvent()};k.prototype.init=function(){this.toggleWidth=this.element.offsetWidth,this.handleWidth=this.handle.offsetWidth,this.handleX=this.toggleWidth-this.handleWidth-3},k.prototype.initEvent=function(){this.element.addEventListener("touchstart",this),this.element.addEventListener("drag",this),this.element.addEventListener("swiperight",this),this.element.addEventListener("touchend",this),this.element.addEventListener("touchcancel",this)},k.prototype.handleEvent=function(a){if(!this.classList.contains(h))switch(a.type){case"touchstart":this.start(a);break;case"drag":this.drag(a);break;case"swiperight":this.swiperight();break;case"touchend":case"touchcancel":this.end(a)}},k.prototype.start=function(a){this.classList.add(g),(0===this.toggleWidth||0===this.handleWidth)&&this.init()},k.prototype.drag=function(a){var b=a.detail;this.isDragging||("left"===b.direction||"right"===b.direction)&&(this.isDragging=!0,this.lastChanged=void 0,this.initialState=this.classList.contains(f)),this.isDragging&&(this.setTranslateX(b.deltaX),a.stopPropagation(),b.gesture.preventDefault())},k.prototype.swiperight=function(a){this.isDragging&&a.stopPropagation()},k.prototype.end=function(b){this.classList.remove(g),this.isDragging?(this.isDragging=!1,b.stopPropagation(),a.trigger(this.element,"toggle",{isActive:this.classList.contains(f)})):this.toggle()},k.prototype.toggle=function(){var b=this.classList;b.contains(f)?(b.remove(f),this.handle.style.webkitTransform="translate(0,0)"):(b.add(f),this.handle.style.webkitTransform="translate("+this.handleX+"px,0)"),a.trigger(this.element,"toggle",{isActive:this.classList.contains(f)})},k.prototype.setTranslateX=a.animationFrame(function(a){if(this.isDragging){var b=!1;(this.initialState&&-a>this.handleX/2||!this.initialState&&a>this.handleX/2)&&(b=!0),this.lastChanged!==b&&(b?(this.handle.style.webkitTransform="translate("+(this.initialState?0:this.handleX)+"px,0)",this.classList[this.initialState?"remove":"add"](f)):(this.handle.style.webkitTransform="translate("+(this.initialState?this.handleX:0)+"px,0)",this.classList[this.initialState?"add":"remove"](f)),this.lastChanged=b)}}),a.fn["switch"]=function(b){var c=[];return this.each(function(){var b=null,d=this.getAttribute("data-switch");d?b=a.data[d]:(d=++a.uuid,a.data[d]=new k(this),this.setAttribute("data-switch",d)),c.push(b)}),c.length>1?c:c[0]},a.ready(function(){a("."+d)["switch"]()})}(mui,window,"toggle"),function(a,b,c){function d(a,b){var c=b?"removeEventListener":"addEventListener";a[c]("drag",F),a[c]("dragend",F),a[c]("swiperight",F),a[c]("swipeleft",F),a[c]("flick",F)}var e,f,g="mui-active",h="mui-selected",i="mui-grid-view",j="mui-table-view-radio",k="mui-table-view-cell",l="mui-collapse-content",m="mui-disabled",n="mui-switch",o="mui-btn",p="mui-slider-handle",q="mui-slider-left",r="mui-slider-right",s="mui-transitioning",t="."+p,u="."+q,v="."+r,w="."+h,x="."+o,y=.8,z=isOpened=openedActions=progress=!1,A=sliderActionLeft=sliderActionRight=buttonsLeft=buttonsRight=sliderDirection=sliderRequestAnimationFrame=!1,B=translateX=lastTranslateX=sliderActionLeftWidth=sliderActionRightWidth=0,C=function(a){a?f?f.classList.add(g):e&&e.classList.add(g):(B&&B.cancel(),f?f.classList.remove(g):e&&e.classList.remove(g))},D=function(){if(translateX!==lastTranslateX){if(buttonsRight&&buttonsRight.length>0){progress=translateX/sliderActionRightWidth,translateX<-sliderActionRightWidth&&(translateX=-sliderActionRightWidth-Math.pow(-translateX-sliderActionRightWidth,y));for(var a=0,b=buttonsRight.length;b>a;a++){var c=buttonsRight[a];"undefined"==typeof c._buttonOffset&&(c._buttonOffset=c.offsetLeft),buttonOffset=c._buttonOffset,E(c,translateX-buttonOffset*(1+Math.max(progress,-1)))}}if(buttonsLeft&&buttonsLeft.length>0){progress=translateX/sliderActionLeftWidth,translateX>sliderActionLeftWidth&&(translateX=sliderActionLeftWidth+Math.pow(translateX-sliderActionLeftWidth,y));for(var a=0,b=buttonsLeft.length;b>a;a++){var d=buttonsLeft[a];"undefined"==typeof d._buttonOffset&&(d._buttonOffset=sliderActionLeftWidth-d.offsetLeft-d.offsetWidth),buttonOffset=d._buttonOffset,buttonsLeft.length>1&&(d.style.zIndex=buttonsLeft.length-a),E(d,translateX+buttonOffset*(1-Math.min(progress,1)))}}E(A,translateX),lastTranslateX=translateX}sliderRequestAnimationFrame=requestAnimationFrame(function(){D()})},E=function(a,b){a&&(a.style.webkitTransform="translate3d("+b+"px,0,0)")};b.addEventListener("touchstart",function(b){e&&C(!1),e=f=!1,z=isOpened=openedActions=!1;for(var g=b.target,h=!1;g&&g!==c;g=g.parentNode)if(g.classList){var p=g.classList;if(("INPUT"===g.tagName&&"radio"!==g.type&&"checkbox"!==g.type||"BUTTON"===g.tagName||p.contains(n)||p.contains(o)||p.contains(m))&&(h=!0),p.contains(l))break;if(p.contains(k)){e=g;var q=e.parentNode.querySelector(w);if(!e.parentNode.classList.contains(j)&&q&&q!==e)return a.swipeoutClose(q),void(e=h=!1);if(!e.parentNode.classList.contains(i)){var r=e.querySelector("a");r&&r.parentNode===e&&(f=r)}var s=e.querySelector(t);s&&(d(e),b.stopPropagation()),h||(s?(B&&B.cancel(),B=a.later(function(){C(!0)},100)):C(!0));break}}}),b.addEventListener("touchmove",function(a){C(!1)});var F={handleEvent:function(a){switch(a.type){case"drag":this.drag(a);break;case"dragend":this.dragend(a);break;case"flick":this.flick(a);break;case"swiperight":this.swiperight(a);break;case"swipeleft":this.swipeleft(a)}},drag:function(a){if(e){z||(A=sliderActionLeft=sliderActionRight=buttonsLeft=buttonsRight=sliderDirection=sliderRequestAnimationFrame=!1,A=e.querySelector(t),A&&(sliderActionLeft=e.querySelector(u),sliderActionRight=e.querySelector(v),sliderActionLeft&&(sliderActionLeftWidth=sliderActionLeft.offsetWidth,buttonsLeft=sliderActionLeft.querySelectorAll(x)),sliderActionRight&&(sliderActionRightWidth=sliderActionRight.offsetWidth,buttonsRight=sliderActionRight.querySelectorAll(x)),e.classList.remove(s),isOpened=e.classList.contains(h),isOpened&&(openedActions=e.querySelector(u+w)?"left":"right")));var b=a.detail,c=b.direction,d=b.angle;if("left"===c&&(d>150||-150>d)?(buttonsRight||buttonsLeft&&isOpened)&&(z=!0):"right"===c&&d>-30&&30>d&&(buttonsLeft||buttonsRight&&isOpened)&&(z=!0),z){a.stopPropagation(),a.detail.gesture.preventDefault();var f=a.detail.deltaX;if(isOpened&&("right"===openedActions?f-=sliderActionRightWidth:f+=sliderActionLeftWidth),f>0&&!buttonsLeft||0>f&&!buttonsRight){if(!isOpened)return;f=0}0>f?sliderDirection="toLeft":f>0?sliderDirection="toRight":sliderDirection||(sliderDirection="toLeft"),sliderRequestAnimationFrame||D(),translateX=f}}},flick:function(a){z&&a.stopPropagation()},swipeleft:function(a){z&&a.stopPropagation()},swiperight:function(a){z&&a.stopPropagation()},dragend:function(b){if(z){b.stopPropagation(),sliderRequestAnimationFrame&&(cancelAnimationFrame(sliderRequestAnimationFrame),sliderRequestAnimationFrame=null);var c=b.detail;z=!1;var d="close",f="toLeft"===sliderDirection?sliderActionRightWidth:sliderActionLeftWidth,g=c.swipe||Math.abs(translateX)>f/2;g&&(isOpened?"left"===c.direction&&"right"===openedActions?d="open":"right"===c.direction&&"left"===openedActions&&(d="open"):d="open"),e.classList.add(s);var i;if("open"===d){var j="toLeft"===sliderDirection?-f:f;if(E(A,j),i="toLeft"===sliderDirection?buttonsRight:buttonsLeft,"undefined"!=typeof i){for(var k=null,l=0;l<i.length;l++)k=i[l],E(k,j);k.parentNode.classList.add(h),e.classList.add(h),isOpened||a.trigger(e,"toLeft"===sliderDirection?"slideleft":"slideright")}}else E(A,0),sliderActionLeft&&sliderActionLeft.classList.remove(h),sliderActionRight&&sliderActionRight.classList.remove(h),e.classList.remove(h);var m;if(buttonsLeft&&buttonsLeft.length>0&&buttonsLeft!==i)for(var l=0,n=buttonsLeft.length;n>l;l++){var o=buttonsLeft[l];m=o._buttonOffset,"undefined"==typeof m&&(o._buttonOffset=sliderActionLeftWidth-o.offsetLeft-o.offsetWidth),E(o,m)}if(buttonsRight&&buttonsRight.length>0&&buttonsRight!==i)for(var l=0,n=buttonsRight.length;n>l;l++){var p=buttonsRight[l];m=p._buttonOffset,"undefined"==typeof m&&(p._buttonOffset=p.offsetLeft),E(p,-m)}}}};a.swipeoutOpen=function(b,c){if(b){var d=b.classList;if(!d.contains(h)){c||(c=b.querySelector(v)?"right":"left");var e=b.querySelector(a.classSelector(".slider-"+c));if(e){e.classList.add(h),d.add(h),d.remove(s);for(var f,g=e.querySelectorAll(x),i=e.offsetWidth,j="right"===c?-i:i,k=g.length,l=0;k>l;l++)f=g[l],"right"===c?E(f,-f.offsetLeft):E(f,i-f.offsetWidth-f.offsetLeft);d.add(s);for(var l=0;k>l;l++)E(g[l],j);E(b.querySelector(t),j)}}}},a.swipeoutClose=function(b){if(b){var c=b.classList;if(c.contains(h)){var d=b.querySelector(v+w)?"right":"left",e=b.querySelector(a.classSelector(".slider-"+d));if(e){e.classList.remove(h),c.remove(h),c.add(s);var f,g=e.querySelectorAll(x),i=e.offsetWidth,j=g.length;E(b.querySelector(t),0);for(var k=0;j>k;k++)f=g[k],"right"===d?E(f,-f.offsetLeft):E(f,i-f.offsetWidth-f.offsetLeft)}}}},b.addEventListener("touchend",function(a){e&&(C(!1),A&&d(e,!0))}),b.addEventListener("touchcancel",function(a){e&&(C(!1),A&&d(e,!0))});var G=function(b){var c=b.target&&b.target.type||"";if("radio"!==c&&"checkbox"!==c){var d=e.classList;if(d.contains("mui-radio")){var f=e.querySelector("input[type=radio]");f&&(f.disabled||f.readOnly||(f.checked=!f.checked,a.trigger(f,"change")))}else if(d.contains("mui-checkbox")){var f=e.querySelector("input[type=checkbox]");f&&(f.disabled||f.readOnly||(f.checked=!f.checked,a.trigger(f,"change")))}}};b.addEventListener(a.EVENT_CLICK,function(a){e&&e.classList.contains("mui-collapse")&&a.preventDefault()}),b.addEventListener("doubletap",function(a){e&&G(a)});var H=/^(INPUT|TEXTAREA|BUTTON|SELECT)$/;b.addEventListener("tap",function(b){if(e){var c=!1,d=e.classList,f=e.parentNode;if(f&&f.classList.contains(j)){if(d.contains(h))return;var i=f.querySelector("li"+w);return i&&i.classList.remove(h),d.add(h),void a.trigger(e,"selected",{el:e})}if(d.contains("mui-collapse")&&!e.parentNode.classList.contains("mui-unfold")){if(H.test(b.target.tagName)||b.detail.gesture.preventDefault(),!d.contains(g)){
var k=e.parentNode.querySelector(".mui-collapse.mui-active");k&&k.classList.remove(g),c=!0}d.toggle(g),c&&a.trigger(e,"expand")}else G(b)}})}(mui,window,document),function(a,b){a.alert=function(c,d,e,f){if(a.os.plus){if(void 0===typeof c)return;"function"==typeof d?(f=d,d=null,e="确定"):"function"==typeof e&&(f=e,e=null),a.plusReady(function(){plus.nativeUI.alert(c,f,d,e)})}else b.alert(c)}}(mui,window),function(a,b){a.confirm=function(c,d,e,f){if(a.os.plus){if(void 0===typeof c)return;"function"==typeof d?(f=d,d=null,e=null):"function"==typeof e&&(f=e,e=null),a.plusReady(function(){plus.nativeUI.confirm(c,f,d,e)})}else f(b.confirm(c)?{index:0}:{index:1})}}(mui,window),function(a,b){a.prompt=function(c,d,e,f,g){if(a.os.plus){if(void 0===typeof message)return;"function"==typeof d?(g=d,d=null,e=null,f=null):"function"==typeof e?(g=e,e=null,f=null):"function"==typeof f&&(g=f,f=null),a.plusReady(function(){plus.nativeUI.prompt(c,g,e,d,f)})}else{var h=b.prompt(c);g(h?{index:0,value:h}:{index:1,value:""})}}}(mui,window),function(a,b){a.toast=function(b){if(a.os.plus)a.plusReady(function(){plus.nativeUI.toast(b,{verticalAlign:"bottom"})});else{var c=document.createElement("div");c.classList.add("mui-toast-container"),c.innerHTML='<div class="mui-toast-message">'+b+"</div>",document.body.appendChild(c),setTimeout(function(){document.body.removeChild(c)},2e3)}}}(mui,window),function(a,b,c){var d="mui-icon",e="mui-icon-clear",f="mui-icon-speech",g="mui-icon-search",h="mui-input-row",i="mui-placeholder",j="mui-tooltip",k="mui-hidden",l="mui-focusin",m="."+e,n="."+f,o="."+i,p="."+j,q=function(a){for(;a&&a!==c;a=a.parentNode)if(a.classList&&a.classList.contains(h))return a;return null},r=function(a,b){this.element=a,this.options=b||{actions:"clear"},~this.options.actions.indexOf("slider")?(this.sliderActionClass=j+" "+k,this.sliderActionSelector=p):(~this.options.actions.indexOf("clear")&&(this.clearActionClass=d+" "+e+" "+k,this.clearActionSelector=m),~this.options.actions.indexOf("speech")&&(this.speechActionClass=d+" "+f,this.speechActionSelector=n),~this.options.actions.indexOf("search")&&(this.searchActionClass=i,this.searchActionSelector=o)),this.init()};r.prototype.init=function(){this.initAction(),this.initElementEvent()},r.prototype.initAction=function(){var b=this,c=b.element.parentNode;c&&(b.sliderActionClass?b.sliderAction=b.createAction(c,b.sliderActionClass,b.sliderActionSelector):(b.searchActionClass&&(b.searchAction=b.createAction(c,b.searchActionClass,b.searchActionSelector),b.searchAction.addEventListener("tap",function(c){a.focus(b.element),c.stopPropagation()})),b.speechActionClass&&(b.speechAction=b.createAction(c,b.speechActionClass,b.speechActionSelector),b.speechAction.addEventListener("click",a.stopPropagation),b.speechAction.addEventListener("tap",function(a){b.speechActionClick(a)})),b.clearActionClass&&(b.clearAction=b.createAction(c,b.clearActionClass,b.clearActionSelector),b.clearAction.addEventListener("tap",function(a){b.clearActionClick(a)}))))},r.prototype.createAction=function(a,b,e){var f=a.querySelector(e);if(!f){var f=c.createElement("span");f.className=b,b===this.searchActionClass&&(f.innerHTML='<span class="'+d+" "+g+'"></span><span>'+this.element.getAttribute("placeholder")+"</span>",this.element.setAttribute("placeholder",""),this.element.value.trim()&&a.classList.add("mui-active")),a.insertBefore(f,this.element.nextSibling)}return f},r.prototype.initElementEvent=function(){var b=this.element;if(this.sliderActionClass){var c=this.sliderAction,d=b.offsetLeft,e=b.offsetWidth-28,f=c.offsetWidth,g=Math.abs(b.max-b.min),h=null,i=function(){c.classList.remove(k),f=f||c.offsetWidth;var a=e/g*Math.abs(b.value-b.min);c.style.left=14+d+a-f/2+"px",c.innerText=b.value,h&&clearTimeout(h),h=setTimeout(function(){c.classList.add(k)},1e3)};b.addEventListener("input",i),b.addEventListener("tap",i),b.addEventListener("touchmove",function(a){a.stopPropagation()})}else{if(this.clearActionClass){var j=this.clearAction;if(!j)return;a.each(["keyup","change","input","focus","cut","paste"],function(a,c){!function(a){b.addEventListener(a,function(){j.classList[b.value.trim()?"remove":"add"](k)})}(c)}),b.addEventListener("blur",function(){j.classList.add(k)})}this.searchActionClass&&(b.addEventListener("focus",function(){b.parentNode.classList.add("mui-active")}),b.addEventListener("blur",function(){b.value.trim()||b.parentNode.classList.remove("mui-active")}))}},r.prototype.setPlaceholder=function(a){if(this.searchActionClass){var b=this.element.parentNode.querySelector(o);b&&(b.getElementsByTagName("span")[1].innerText=a)}else this.element.setAttribute("placeholder",a)},r.prototype.clearActionClick=function(b){var c=this;c.element.value="",a.focus(c.element),c.clearAction.classList.add(k),b.preventDefault()},r.prototype.speechActionClick=function(d){if(b.plus){var e=this,f=e.element.value;e.element.value="",c.body.classList.add(l),plus.speech.startRecognize({engine:"iFly"},function(b){e.element.value+=b,a.focus(e.element),plus.speech.stopRecognize(),a.trigger(e.element,"recognized",{value:e.element.value}),f!==e.element.value&&(a.trigger(e.element,"change"),a.trigger(e.element,"input"))},function(a){c.body.classList.remove(l)})}else alert("only for 5+");d.preventDefault()},a.fn.input=function(b){var c=[];return this.each(function(){var b=null,d=[],e=q(this.parentNode);if("range"===this.type&&e.classList.contains("mui-input-range"))d.push("slider");else{var f=this.classList;f.contains("mui-input-clear")&&d.push("clear"),f.contains("mui-input-speech")&&d.push("speech"),"search"===this.type&&e.classList.contains("mui-search")&&d.push("search")}var g=this.getAttribute("data-input-"+d[0]);if(g)b=a.data[g];else{g=++a.uuid,b=a.data[g]=new r(this,{actions:d.join(",")});for(var h=0,i=d.length;i>h;h++)this.setAttribute("data-input-"+d[h],g)}c.push(b)}),1===c.length?c[0]:c},a.ready(function(){a(".mui-input-row input").input()})}(mui,window,document),function(a){var b="ontouchstart"in document,c=b?"tap":"click",d="change",e="mui-numbox",f="mui-numbox-btn-plus",g="mui-numbox-btn-minus",h="mui-numbox-input",i=a.Numbox=a.Class.extend({init:function(b,c){var d=this;if(!b)throw"构造 numbox 时缺少容器元素";d.holder=b,c=c||{},c.step=parseInt(c.step||1),d.options=c,d.input=a.qsa("."+h,d.holder)[0],d.plus=a.qsa("."+f,d.holder)[0],d.minus=a.qsa("."+g,d.holder)[0],d.checkValue(),d.initEvent()},initEvent:function(){var b=this;b.plus.addEventListener(c,function(c){var e=parseInt(b.input.value)+b.options.step;b.input.value=e.toString(),a.trigger(b.input,d,null)}),b.minus.addEventListener(c,function(c){var e=parseInt(b.input.value)-b.options.step;b.input.value=e.toString(),a.trigger(b.input,d,null)}),b.input.addEventListener(d,function(c){b.checkValue(),a.trigger(b,d,b.getValue())})},getValue:function(){var a=this;return parseInt(a.input.value)},checkValue:function(){var a=this,b=a.input.value;if(null==b||""==b||isNaN(b))a.input.value=a.options.min||0,a.minus.disabled=null!=a.options.min;else{var b=parseInt(b);null!=a.options.max&&!isNaN(a.options.max)&&b>=parseInt(a.options.max)?(b=a.options.max,a.plus.disabled=!0):a.plus.disabled=!1,null!=a.options.min&&!isNaN(a.options.min)&&b<=parseInt(a.options.min)?(b=a.options.min,a.minus.disabled=!0):a.minus.disabled=!1,a.input.value=b}},setOption:function(a,b){var c=this;c.options[a]=b}});a.fn.numbox=function(a){return this.each(function(a,b){if(!b.numbox)if(d)b.numbox=new i(b,d);else{var c=b.getAttribute("data-numbox-options"),d=c?JSON.parse(c):{};d.step=b.getAttribute("data-numbox-step")||d.step,d.min=b.getAttribute("data-numbox-min")||d.min,d.max=b.getAttribute("data-numbox-max")||d.max,b.numbox=new i(b,d)}}),this[0]?this[0].numbox:null},a.ready(function(){a("."+e).numbox()})}(mui);
//mui源码
/**
 * WiStorm框架的基础文件，要使用框架必须引入本文件；
 * 里面整合了mui.js的代码，还包括了框架一些非常基础的东西，例如WAPI的入口、UI类的基类、基本工具等；
 */

	

function getSearch(){
    var url=location.search;
    if(!url)return {};
    url=url.split("?")[1].split("&");
    var json={};
    var n=url.length;
    for(var i=0;i<n;i++){
        json[url[i].split("=")[0]]=decodeURIComponent(url[i].split("=")[1]);
    }
    return json;
}
//获取跳转参数 即 http://127.0.0.1:8020/baba_wx/src/customer_add.html?a=123&b=asd  问号后面部分
var _g=getSearch();

var	WiStorm_root="http://"+location.host+"/baba_wx/";
if(location.host=="h5.bibibaba.cn")
	WiStorm_root="http://h5.bibibaba.cn/baba/wx/";
var u = navigator.userAgent;
var _d=false;
if(_g.debug)_d=true;
var WiStorm={
	test_mode:false,
	debug:_d,
	config:{
		"description": "WiStorm框架的配置信息",
		"app_key": "9410bc1cbfa8f44ee5f8a331ba8dd3fc",
		"app_secret": "21fb644e20c93b72773bf0f8d0905052",
		"wx_app_id":"wxa5c196f7ec4b5df9",
		"skin": "default",
		"default_language": "zh-cn",
		"update_url": WiStorm_root+"/update/version.json",
		"wx_ticket_url":WiStorm_root+"wslib/toolkit/WX.TokenAndTicket.php?action=ticket",
		"wx_sdk":"http://res.wx.qq.com/open/js/jweixin-1.0.0.js",
		"wx_login":WiStorm_root+"wslib/toolkit/oauth2.php",
		"safety_url":WiStorm_root+"wslib/toolkit/Safety.php"
	},
	setting:{},//用户设置，由W.getSetting(name)和W.setSetting(key,val)操作
	included:[],//当前页面使用include(url)来包含的文件名
	root:"",//app根目录的绝对路径（即www目录的绝对路径）
	agent:{
	    trident: u.indexOf('Trident') > -1, //IE内核
	    presto: u.indexOf('Presto') > -1, //opera内核
	    webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
	    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
	    mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
	    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
	    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
	    iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
	    iPad: u.indexOf('iPad') > -1, //是否iPad
	    weixin: u.indexOf('MicroMessenger') > -1, //是否微信
	    qq: u.match(/\sQQ/i) == " qq" //是否QQ
	}
};//包含框架相关
u=undefined;
_d=undefined;

//执行错误直接弹出
onerror=function(msg,url,l){
	var flie=self.location.href.split(/[\\\/.]/);
    var flieName=flie[flie.length-2];
    url=url.split(/[\\\/.]/);
    url=url[url.length-2];
    var text="错误："+msg+";\n界面："+flieName+";\n文件："+url+";\n行数："+l;
    if((msg.indexOf("WeixinJSBridge")!=-1&&l==1)||
		(msg=="Uncaught TypeError: Cannot read property 'classList' of null"&&url=="WiStorm"&&l==1))
		return;
	if(WiStorm.debug){
		alert(text);
	}else{
		var userText=localStorage.getItem("_WiStormUserSetting_");
		var user,account;
		if(userText){
			try{
				user=JSON.parse(userText);
			}catch(e){
				//TODO handle the exception
				user={account:"解析用户信息出错"};
			}
		}else{
			account="未登录";
		}
		account=user.account||"未登录";
		var errorJson={"bug_report":text,"account":account};
		if(typeof Wapi=="object"){//如果已经加载了api文件，则直接发送错误
			Wapi.user.createCrash(errorJson,function(res){});
		}else{//否则存在本地，等Wapi加载完会自动发送
			var errorLog=localStorage.getItem("errorList");
			var errorList;
			if(errorLog){
				try{
					errorList=JSON.parse(errorLog);
				}catch(e){
					//TODO handle the exception
					errorList=[];
				}
			}else{
				errorList=[];
			}
			errorList.push(errorJson);
			localStorage.setItem("errorList",JSON.stringify(errorList));
		}
	}
}
W.debug=function(str){
	if(WiStorm.debug)
		alert(str);
};

/**
 * 日期的toString方法扩展，输出更符合普通格式的字符串
 */
Date.prototype.WtoString=function(){
  var d=this;
  var j={};
  j.m=d.getMonth()+1;
  j.d=d.getDate();
  j.h=d.getHours();
  j.mi=d.getMinutes();
  j.s=d.getSeconds();
  for(items in j){
    if(j[items]<10)
      j[items]="0"+j[items];
  }
  return d.getFullYear()+"-"+j.m+"-"+j.d+" "+j.h+":"+j.mi+":"+j.s;
}


/**
 * 添加事件监听器，会判断是移动设备还是桌面，把click事件换成touch事件;
 * 功能与参数addEventListener()一样
 * @param {String} type
 * @param {Function} listener
 * @param {Boolean} useCapture
 */
Node.prototype.addEvent=function(type,listener,useCapture){
	if(WiStorm.agent.mobile){
		if(type=="click"){
			if(typeof mui=="undefined")
				this.addEventListener("touchstart",listener,useCapture);
			else 
				this.addEventListener("tap",listener,useCapture);
		}else if(type=="animationend"||type=="transitionend"||type=="animationstart"||type=="animationiteration"){
			var a=type.substring(0,1).toUpperCase();//安卓与ios兼容
			var Wtype="webkit"+a+type.substring(1);
			this.addEventListener(type,listener,useCapture);	
			this.addEventListener(Wtype,listener,useCapture);	
		}else{
			this.addEventListener(type,listener,useCapture);	
		}
	}else{
		this.addEventListener(type,listener,useCapture);	
	}
	return this;
}

/**
 * 合并两个json对象，如果存在相同属性，取第二个json的属性值
 * @param {Object} json1
 * @param {Object} json2
 */
function jsonConcat(json1,json2){
	for(key in json2){
		json1[key]=json2[key];
	}
}

/**
 * 
 * 兼容ios的字符串转日期对象
 * @param {String} str
 */
function NewDate(str) {
    var date = new Date();
    if(!str)
    	return date;
    var t=str.split(/[T\s]/);
    var str_before = t[0]; //获取年月日
    var str_after = t[1]; //获取时分秒
    var years = str_before.split('-')[0]; //分别截取得到年月日
    var months = str_before.split('-')[1] - 1;
    var days = str_before.split('-')[2];
    var hours = str_after.split(':')[0]||0;
    var mins = str_after.split(':')[1]||0;
    var seces = str_after.split(':')[2].replace("Z", "");
    var secs = seces.split('.')[0]||0;
    var smsecs = seces.split('.')[1]||0;
    if(str.indexOf("T")==-1){
    	date.setFullYear(years, months, days);
    	date.setHours(hours, mins, secs, smsecs);
    }else{
    	date.setUTCFullYear(years, months, days);
    	date.setUTCHours(hours, mins, secs, smsecs);
    }
    return date;
}

/**
 * 与php中的include作用一样，用于包含一个js文件到当前文件；
 * 包含时会先进行判断，是否已经包含过该文件，如果已经包含过则不处理；
 * 第二个参数,可选值为true,false,"defer"，"async"，如果是字符串，则设置成scrpit标签的defer或async属性
 * 如果是同步的，可以即时包含即时调用，不过要小心使用，因为同步可能会造成明显阻塞，特别是包含大文件时，
 * 异步则是直接在页面head标签末尾添加一个script标签，加载指定的js文件;
 * 最好在文档开头便引入，但必须位于WiStorm.js文件的下面（因为该方法是在这里定义的）;
 * @param {String} url,要包含的js文件的路径
 * @param {Boolean} s
 * @example
 * include("wslib/toolkit/Encrypt.js");//异步加载js，加载完成后执行
 * var md5=Encrypt.hex_md5("md5测试");
 * include("wslib/api/WUserApi.js","defer")//异步加载，并且html加载完成之后再执行这个js
 * include("wslib/api/WUserApi.js",true)//阻塞同步加载，加载完成马上执行
 */
function include(url,s){
	if(WiStorm.included){//检查是否包含过
		for(var i=WiStorm.included.length-1;i>=0;i--){
			if(url==WiStorm.included[i])
				return;
		}
	}
	var path=WiStorm.root+url;
	
	if(typeof s=="boolean"&&s){
		var js=W._get({"url":path,"dataType":"text"});
		window.eval(js);
	}else{
		var script=document.createElement("script");
		script.src=path;
		script[s]=s;
		W("head").appendChild(script);
	}
	
	if(WiStorm.included){//包含成功，把文件路径存储到WiStorm.included数组里
		WiStorm.included.push(url);
	}else{
		WiStorm.included=[url];
	}
}

/**
 * 在html中输出变量,可以用于输出html，文字，js代码，但不能在html标签内使用，但可以整个标签输出,也可以输出Element 对象
 * @example 
 * <pre>
 * <div><script>echo(___.echo_test)</script></div>
 * <div>___.echo_test是：“<script>echo(___.echo_test)</script>”，"<script>echo(___.echo_test)</script>"</div>
 * <div id="<script>echo(___.echo_test)</script>" >错误的用法，可以按下面来使用</div>
 * <script>echo("<div id='"+___.echo_test+"'>这样就可以正确输出")</script></div>
 * </pre>
 * @param {String} str
 */
function echo(str){
	var scripts=document.scripts[document.scripts.length-1];
	var parent=scripts.parentNode;
	if(typeof str=="string"||typeof str=="string")
		document.write(str);
	else{
		var attr,a=scripts.attributes.length;
		for(var i=0;i<a;i++){
			attr=scripts.attributes[i];
			str.setAttribute(attr.name,attr.value);
		}
		parent.appendChild(str);
	}
	parent.removeChild(scripts);
}

/**
 * 用于在html页面中替换指定字符（在language/下的文字资源）,
 * 只替换所在script标签的上一个元素内的对应字符如下例子，只替换input标签里的___.psw_tip，之前的元素不进行操作；
 * 需特别注意，这个方法是有性能损耗的，请尽量使用echo来进行动态输出文字资源，尽量不要使用本方法
 * @example
 * input type="password" id="psw" placeholder="___.psw_tip">
 * <script>reEcho()</script>
 */
function reEcho(){
	var pre=document.scripts[document.scripts.length-1].previousElementSibling;
	var preHtml=pre.outerHTML;
	pre.outerHTML=preHtml.replace(/___\.\w+/,reEcho.replace);
}
reEcho.replace=function(match){
	return eval(match);
}

/**
 * 在文档加载时根据用户设置或者框架配置文件动态引入css
 * @param {String} cssName,css文件名（包含后缀）
 * @example
 * head><br>
 * title>单元测试页面 /title><br>
 * script src="wslib/WiStorm.js"> /script><br>
 * !--引入mui.css--><br>
 * script>link("mui.css")</script>
 * </head>
 */
function link(cssName){
	var skinFolder=W.getSkin();
	var pathName=WiStorm.root+'skin/'+skinFolder+'/'+cssName;
	var lin=document.createElement("link");
	lin.href=pathName;
	lin.rel="stylesheet";
	document.head.appendChild(lin);
}

/**
 * 用于页面引入js文件，好处是以绝对路径引入，不用管文件的相对位置,async参数可选值为“async”，“defer”；
 * 注意：此方法在ie中无论async参数传递什么，都是采用异步加载方式的，即永远等价于script("xxx.js","async")
 * @param {String} scriptPath，根目录到文件的路径
 * @param {String} async，是否同步
 */
function script(scriptPath,async){
	document.write('<script src="'+WiStorm.root+scriptPath+'" '+async+'></script>');
	var scripts=document.scripts[document.scripts.length-1];
	var parent=scripts.parentNode;
	parent.removeChild(scripts);
}


/**
 * @constructor
 * @description 所有ui类的超类；子类需使用伪原型继承；本身没有实际作用，主要用于被继承实现，继承例子查看下面：
 * @param {string} tag 需要创建的标签名
 * @extends {Element}
 * @example	
 *	new UI("div");
 * @property {json} prototype 基类的原型链，用于存储基类的方法
 * @return {Element}
 */
function WiStormUI(tag){
	var obj=document.createElement(tag);

	var funObj=WiStormUI.prototype;
	for(fun in funObj){
		obj[fun]=funObj[fun];
    }
    obj._type="WiStormUI";
    obj._parentType="Element";
	return obj;
}
/**
 * 定义类方法
 */
WiStormUI.prototype={
	merge:function(obj){
		var funObj=obj.__proto__;
		for (fun in funObj) {
			this[fun]=funObj[fun];
	    }
	    this._parentType=this._type;
	    this._type=obj.constructor.name;
	},
	getName:function(){
		return this._type;
	},
	getParentName:function(){
		return this._parentType;
	},
	template:function(dom,data){
		var htm=dom.innerHTML;
		this.innerHTML=htm.replace(/(\<|&lt;)\%.*?\%(&gt;|\>)/g,function(word){
			word=word.replace(/(\<|&lt;|&gt;|\>|%)/g,'');
  			return data[word]||'';
		});
	}
};

WiStormUI.show=function(){
	var content=this.querySelector(".content");
	this.className=this.className.replace("fadeOut","fadeIn");
	content.className=content.className.replace("toTop","fromTop");
	
	this.className=this.className.replace(/\s*hide/,"");
	this._show=true;
}

WiStormUI.hide=function(){
	var content=this.querySelector(".content");
	this.className=this.className.replace("fadeIn","fadeOut");
	content.className=content.className.replace("fromTop","toTop");
	this._show=false;
}

/**
 * W是一个选择器，相当于jq的$，返回的是原生js对象（dom）
 * 框架封装的原生选择器，直接传递css选择字符串，默认返回第一个匹配的元素，
 * 如果需要返回全部匹配的元素需要指定第二个参数为true;
 * 返回原生的Element元素或者是所有匹配的Element组成的数组
 * @param {String} select,css选择器字符串
 * @param {Boolean} needAll,是否返回全部匹配的元素（默认只返回第一个）
 * @example
 * var tets1=W("div>a");
 * var test2=W("div>a",ture)[0];
 * @return {Element}
 */
function W(select,needAll){
	if(needAll)
		return document.querySelectorAll(select);
	else
		return document.querySelector(select);
}

/**
 * 空方法，用于需要空方法的地方，免得每次都创建
 */
W.noop = function(){};

/**
 * @description 同步的ajax，只支持get，传入参数可以为json也可以是一个url字符串返回值只支持json或者text（默认为json），
 * 可在配置json中配置，只有三个属性，url,type,data,dataType,除url外全部可选(一般用于获取本地配置文件等必须保证获取顺序的资源)
 * @param {Object} options()
 * @return {json}
 */
W._get=function(options){//同步的专用ajax
	if(typeof options=="string"){
		var json={url:options}
	}else
		var json=options;
	
    var data="";
    if(json.data){
	    for (items in json.data){
			data+="&"+items+"="+json.data[items];
		}
		json.url+="?"+data;
    }
	
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.open("GET",json.url,false);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send(data);
    
    var res=xmlhttp.responseText;
    if(json.dataType=="text")
		return res;
	else{
		var j=null;
		try{
			j=JSON.parse(res);
			return j
		}catch(e){
			//TODO handle the exception
			console.log("解析json出错；url："+json.url);
		}
	}
}

/**
 * 框架的ajax
 * @param {String} url
 * @param {Object} options，具体可参考http://dev.dcloud.net.cn/mui/ajax/
 */
W.ajax=function(url,options) {
	var json={
		dataType:"json",
		timeout:10000,
		type:"GET",
		success:W.noop,
		error:W.noop
	}
	var headers = {
		"X-Requested-With": "XMLHttpRequest",
		"Accept": "*/*",
		"Content-Type": "application/x-www-form-urlencoded"
	};
	json.url=url;
	jsonConcat(json,options);
	jsonConcat(headers,options.headers);
	
	json.type=json.type.toUpperCase();
    var data="";
    if(json.data){
	    for (items in json.data){
			data+="&"+items+"="+json.data[items];
		}
		if(json.type=="GET")
			json.url+="?"+data.slice(1);
    }
	
	var xmlhttp=new XMLHttpRequest();
	if (json.timeout>0){
		xmlhttp.abortTimeout=setTimeout(function(){
			xmlhttp.onreadystatechange=W.noop;
			xmlhttp.abort();
			json.error(xmlhttp,'timeout',json);
		}, json.timeout);
	}
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState === 4) {
			xmlhttp.onreadystatechange = W.noop;
			clearTimeout(xmlhttp.abortTimeout);
			var result, error = false;
			if ((xmlhttp.status >= 200 && xmlhttp.status < 300) || xmlhttp.status === 304 ||xmlhttp.status === 0){
				var dataType=json.dataType;
				var resultText = xmlhttp.responseText||'{"status_code":-1,"err_msg":"无返回信息"}';
				try {
					if (dataType === 'xml') {
						result = xmlhttp.responseXML;
					} else if (dataType === 'json') {
						result = JSON.parse(resultText);
					}
				} catch (e) {
					error = e;
				}
				if (error) {
					json.error(xmlhttp,'parsererror',json);
				} else {
					json.success(result, xmlhttp, json);
				}
			} else {
				json.error(xmlhttp,xmlhttp.status ? 'error' : 'abort', json);
			}
		}
	}
	xmlhttp.open(json.type,json.url,true);
	
	for (var name in json.headers) {
		xmlhttp.setRequestHeader(name,json.headers[name]);
	}
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send(data);
    
    return xmlhttp;
};

/**
 * 简化的ajax，用get方式
 * @param {String} url
 * @param {Object} data
 * @param {Function} success
 * @param {String} dataType
 */
W.get=function(url,data,success,dataType){
	var options={
		data:data,
		dataType:dataType,//服务器返回json格式数据
		type:'get',//HTTP请求类型
		timeout:10000,//超时时间设置为10秒；
		success:success,
		error:function(xhr,type,errorThrown){
			console.log(type+"___url:"+url);
		}
	};
	W.ajax(url,options);
}

/**
 * 简化的ajax，用post方式
 * @param {String} url
 * @param {Object} data
 * @param {Function} success
 * @param {String} dataType
 */
W.post=function(url,data,success,dataType){
		var options={
		data:data,
		dataType:dataType,//服务器返回json格式数据
		type:'post',//HTTP请求类型
		timeout:10000,//超时时间设置为10秒；
		success:success,
		error:function(xhr,type,errorThrown){
			console.log(type+"___url:"+url);
		}
	};
	W.ajax(url,options);	
}

/**
 * 简化的ajax，用get方式,返回json格式数据
 * @param {String} url
 * @param {Object} data
 * @param {Function} success
 */
W.getJSON=function(url,data,success){
	var options={
		data:data,
		dataType:"json",
		type:'get',
		timeout:10000,
		success:success,
		error:function(xhr,type,errorThrown){
			console.log(type+"___url:"+url);
		}
	};
	W.ajax(url,options);
}


/**
 * 热切换当前引用的css文件（切换皮肤）
 * @param {String} folderName,skin/下的代表皮肤的目录名
 * @example
 * W.changeSkin("default");//切换成默认皮肤
 */
W.changeSkin=function(folderName){
	var skinFolder=W.getSkin();
	var allLink=W("link",true);
	var oldHref;
	for(var i=allLink.length-1;i>=0;i--){
		oldHref=allLink[i].href;
		allLink[i].href=oldHref.replace(WiStorm.root+"skin/"+skinFolder,WiStorm.root+"skin/"+folderName);
	}
	W.setSetting("skin",folderName);
}

/**
 * 返回当前应用的皮肤风格
 * @return {String}
 */
W.getSkin=function(){
	return W.getSetting("skin")||WiStorm.config.skin||"default";
}

/**
 * 按key返回用户设置的某个值
 * @param {String} key
 * @return {String}
 */
W.getSetting=function(key){
	return WiStorm.setting[key];
}

/**
 * 设置用户设置的值
 * @param {String} key
 * @param {Object} val
 */
W.setSetting=function(key,val){
	WiStorm.setting[key]=val;
	localStorage.setItem("_WiStormUserSetting_",JSON.stringify(WiStorm.setting));
}
/**
 * 返回元素的第j级祖先元素，
 * 当第二个参数是一个字符串时，那么此时相当于jq的parents()的用法
 * @param {Element} e,当前元素
 * @param {Number} j,祖先的层数或css选择器
 */
W.parents=function(e,j){
	if(typeof j=="number"){
		for(var i=0;i<j;i++){
			e=e.parentElement;
		}
		return e;
	}else{//以下代码未测试过
		var targets=document.querySelectorAll(j);//整个文档中符合选择器的元素
		var tl=targets.length;
		var parents=[];
		
		for(var p=e.parentElement;p;p=p.parentElement){
			for(var j=0;j<tl;j++){
				if(p==targets[j])
					return p;
			}
		}
	}
}

/**
 * 设置当前元素伪焦点，使用WiStormUI时有时需要伪焦点
 * @param {Element} dom,要设置伪焦点的元素
 */
W.focus=function(dom){
	dom.blur();
	W.blur();
	dom.setAttribute("data-w-focus","true");
	W.focus.target=dom;
}

/**
 * 把当前获得伪焦点的元素，取消伪焦点
 * @return {Element}
 */
W.blur=function(){
	var input=W.getFocus();
	if(input)
		input.setAttribute("data-w-focus","false");
	return input;
}

/**
 * 获取当前获得伪焦点的元素
 * @return {Element}
 */
W.getFocus=function(){
	return W.focus.target;
}

/**
 * 框架定义的警告框，按ios风格使用div重置,传入一个json,"title":"标题","content":"内容","callback": 点击确定后回调
 * @param {json} opt,弹出框配置
 * @example 
 * W.alert(json);<br>
 * W.alert("一切参数都是可选的，甚至可以直接传递一个字符串");<br>
 * W.alert("一切参数都是可选的，甚至可以直接传递一个字符串",callback);<br>
 */
W.alert=function (opt){
	var json={
		"title":___.app_name,
		"content":"",
		"ok":___.ok,
		"callback":function(){}
	}
	if(typeof opt=="string"||typeof opt=="number"){
		json.content=opt;
		json.callback=arguments[1]||function(){};
	}else
		jsonConcat(json,opt);
		
	var obj=W.alertBox;
	if(obj){
		if(obj._show){
			obj.waiting.push(json);
		}else{
			obj.querySelector(".title").innerText=json.title;
			obj.querySelector(".alert").innerHTML=json.content;
			var ok=obj.querySelector(".alert_but>div");
			ok.innerText=json.ok;
			obj.callback=json.callback;
			obj.show();
		}
	}else{
		obj=new WiStormUI("div");
		obj.className="cover_paper alert_box fadeIn";
		obj.innerHTML='<div class="tabel_center"><div class="alert_view content fromTop"><div class="alert_content"><h3 class="title">'+json.title+'</h3><h4 class="alert">'+json.content+'</h4></div><div class="alert_but"><div>'+json.ok+'</div></div></div></div>';
		obj.show=WiStormUI.show;
		obj.hide=WiStormUI.hide;
		obj.callback=json.callback;
		obj.waiting=new Array();
		obj._show=true;
		obj.querySelector(".alert_but>div").addEvent("click",function(){
			W.alertBox.callback();
			W.alertBox.hide();
			if(obj.waiting.length){
				setTimeout("W.alert(W.alertBox.waiting.shift());",500);
			}
		},false);
		document.body.appendChild(obj);
		W.alertBox=obj;
	}
}

/**
 * 框架定义的带确认的警告框，按ios风格使用div重置,传入一个json,
 * "title":"标题","content":"内容","callback": 点击确定后回调,"y":"确定按钮文字","n":"取消按钮文字"
 * @param {json} opt,弹出框配置
 * @example 
 * W.confirm(json);<br>
 * W.confirm("一切参数都是可选的，甚至可以直接传递一个字符串");<br>
 * W.confirm("一切参数都是可选的，甚至可以直接传递一个字符串",callback);<br>
 */
W.confirm=function(opt){
	var json={
		"title":___.app_name,
		"content":"",
		"y":___.ok,
		"n":___.cancel,
		"callback":function(){}
	}
	if(typeof opt=="string"||typeof opt=="number"){
		json.content=opt;
		json.callback=arguments[1]||function(){};
	}else
		jsonConcat(json,opt);
		
	var obj=W.confirmBox;
	if(obj){
		if(obj._show){
			obj.waiting.push(json);
		}else{
			obj.querySelector(".title").innerText=json.title;
			obj.querySelector(".alert").innerHTML=json.content;
			obj.querySelector(".alert_but>._but").innerText=json.y;
			obj.querySelector(".alert_but>.no").innerText=json.n;
			obj.callback=json.callback;
			obj.show();
		}
	}else{
		obj=new WiStormUI("div");
		obj.className="cover_paper alert_box fadeIn";
		obj.innerHTML='<div class="tabel_center"><div class="alert_view content fromTop"><div class="alert_content"><h3 class="title">'+json.title+'</h3><h4 class="alert">'+json.content+'</h4></div><div class="alert_but"><div class="_but" style="border-right:1px solid #ccc">'+json.y+'</div><div class="_but no">'+json.n+'</div</div></div></div>';
		obj.show=WiStormUI.show;
		obj.hide=WiStormUI.hide;
		obj.callback=json.callback;
		obj.waiting=new Array();
		obj._show=true;

		obj.querySelector(".alert_but>._but").addEvent("click",function(){
			W.confirmBox.callback(true);
			W.confirmBox.hide();
			if(obj.waiting.length){
				setTimeout("W.confirm(W.confirmBox.waiting.shift());",500);
			}
		},false);
		obj.querySelector(".alert_but>.no").addEvent("click",function(){
			W.confirmBox.callback(false);
			W.confirmBox.hide();
			if(obj.waiting.length){
				setTimeout("W.confirm(W.confirmBox.waiting.shift());",500);
			}
		},false);
		document.body.appendChild(obj);
		W.confirmBox=obj;
	}
}

/**
 * 框架定义的提示输入框，按ios风格使用div重置,传入一个json,
 * "title":"标题","content":"内容","callback": 点击确定后回调,"y":"确定按钮文字","n":"取消按钮文字"
 * @param {json} opt,弹出框配置
 * @example 
 * W.prompt(json);<br>
 * W.prompt("一切参数都是可选的，甚至可以直接传递一个字符串");<br>
 * W.prompt("一切参数都是可选的，甚至可以直接传递一个字符串",callback);<br>
 */
W.prompt=function(opt){
	var json={
		"title":___.app_name,
		"content":"",
		"y":___.ok,
		"n":___.cancel,
		"callback":function(){}
	}
	if(typeof opt=="string"||typeof opt=="number"){
		json.content=opt;
		json.callback=arguments[1]||function(){};
	}else
		jsonConcat(json,opt);
		
	var obj=W.promptBox;
	if(obj){
		if(obj._show){
			obj.waiting.push(json);
		}else{
			obj.querySelector(".title").innerText=json.title;
			obj.querySelector(".alert").innerHTML=json.content;
			obj.querySelector(".alert_but>._but").innerText=json.y;
			obj.querySelector(".alert_but>.no").innerText=json.n;
			obj.callback=json.callback;
			obj.show();
		}
	}else{
		obj=new WiStormUI("div");
		obj.className="cover_paper alert_box fadeIn";
		obj.innerHTML='<div class="tabel_center"><div class="alert_view content fromTop"><div class="alert_content" style="padding-bottom:0"><h3 class="title">'+json.title+'</h3><h4 class="alert">'+json.content+'</h4><input type="text" style="margin-bottom: .5em;"></div><div class="alert_but"><div class="_but" style="border-right:1px solid #ccc">'+json.y+'</div><div class="_but no">'+json.n+'</div</div></div></div>';
		obj.show=WiStormUI.show;
		obj.hide=WiStormUI.hide;
		obj.callback=json.callback;
		obj.waiting=new Array();
		obj._show=true;

		obj.querySelector(".alert_but>._but").addEvent("click",function(){
			var input=W.promptBox.querySelector("input");
			W.promptBox.callback(input.value);
			W.promptBox.hide();
			if(obj.waiting.length){
				setTimeout("W.prompt(W.promptBox.waiting.shift());",500);
			}
			input.value=null;
		},false);
		obj.querySelector(".alert_but>.no").addEvent("click",function(){
			W.promptBox.callback(null);
			W.promptBox.hide();
			if(obj.waiting.length){
				setTimeout("W.prompt(W.promptBox.waiting.shift());",500);
			}
			W.promptBox.querySelector("input").value=null;
		},false);
		document.body.appendChild(obj);
		W.promptBox=obj;
	}
}

/**
 * 框架定义的信息提示框，按ios风格使用div重置,传入要提示的字符串
 * @param {String} str,信息字符串
 * @example 
 * W.toast("5秒后会自动消失");
 */
W.toast=function(str){
	var obj=W.toastBox;
	if(obj&&!obj._show){
		if(W("input:focus")){
			obj.style.top="20%";
		}else{
			obj.style.top="70%";
		}
		obj.innerText=str;
		obj.show();
		setTimeout(function(){obj.hide()},5000);
	}else{
		obj=new WiStormUI("div");
		obj.className="toast alert_box fromDown";
		obj.innerText=str;
		obj.waiting=new Array();
		obj.show=function(){
			this.className=this.className.replace("toTop","fromDown");
			this._show=true;
		};
		obj.hide=function(){
			this.className=this.className.replace("fromDown","toTop");
			this._show=false;
			if(obj.waiting.length){
				setTimeout("W.toast(W.toastBox.waiting.shift());",500);
			}
		};
		obj._show=true;
		if(W("input:focus")){
			obj.style.top="20%";
		}else{
			obj.style.top="70%";
		}
		document.body.appendChild(obj);
		W.toastBox=obj;
		setTimeout(function(){obj.hide()},5000);
	}
}

W.loading=function(b){
	if(!W.loading._load){
		var load=new WiStormUI("div");
		load.className="loading";
		load.innerHTML="<span></span><div class='text'></div>";
		W.loading._load=load;
		document.body.appendChild(load);
	}
	if(b){
		if(typeof b=="string"||typeof b=="number")
			W.loading._load.querySelector("div").innerText=b;
		W.loading._load.style.display="block";
	}else {
		W.loading._load.querySelector("div").innerText="";
		W.loading._load.style.display="none";
	}
}

W.update=function(url){
	plus.nativeUI.showWaiting("升级中...");
	var dtask=plus.downloader.createDownload(url,{method:"GET"},function(d,status){
	    if ( status == 200 ) { 
	        console.log( "Download wgtu success: " + d.filename );
		    plus.runtime.install(d.filename,{},function(){
	        	plus.nativeUI.closeWaiting();
	    	    plus.nativeUI.alert("Update wgtu success, restart now!",function(){
	            	plus.runtime.restart();
	        	});
	        },function(e){
	            plus.nativeUI.closeWaiting();
	            alert("Update wgtu failed: "+e.message);
	        });
	    } else {
	        plus.nativeUI.closeWaiting();
	        alert( "Download wgtu failed: " + status ); 
	    } 
	});
	dtask.addEventListener('statechanged',function(d,status){
	    console.log("statechanged: "+d.state);
	});

	//删除旧的更新包(如果有)
	plus.io.requestFileSystem( plus.io.PUBLIC_DOWNLOADS,function(fs){
		fs.root.createReader().readEntries(function(entries){
			for(var i=0;i<entries.length; i++){
				if(entries[i].name.search(".wgt")!=-1)
					entries[i].remove();
			}
		},function(e){
			alert("Read entries failed: "+e.message);
		});
	},function(e){
		alert("Request file system failed: "+e.message);
	});
	
	//下载新更新包
	dtask.start();
}

W.checkUpdate=function(){
	var check_url=WiStorm.config.update_url;
	W.getJSON(check_url,null,function(date){
		if(date.version!=WiStorm.version){
			W.confirm({
				"title":"应用更新",
				"content":"检测到有新版本："+date.version+"，"+date.content+"更新包大小："+date.size+"，是否现在更新？",
				"y":"现在更新",
				"n":"下次再说",
				"callback":function(b){
					if(b){
						if(date[WiStorm.version])
							W.update(date[WiStorm.version]);
						else
							W.alert("抱歉，没有您的版本升级包，请您到应用商店更新应用或到官网获取完整安装包");
					}
				}
			});
		}
	});
}

/**
 * 传入正常的日期字符串，返回一个Date对象
 * @param {String} str
 */
W.date=function(str){
	var date = new Date();
    var str_before = str.split('T')[0]; //获取年月日
    var str_after = str.split('T')[1]; //获取时分秒
    var years = str_before.split('-')[0]; //分别截取得到年月日
    var months = str_before.split('-')[1] - 1;
    var days = str_before.split('-')[2];
    var hours = str_after.split(':')[0];
    var mins = str_after.split(':')[1];
    var seces = str_after.split(':')[2].replace("Z", "");
    var secs = seces.split('.')[0];
    var smsecs = seces.split('.')[1];
    date.setUTCFullYear(years, months, days);
    date.setUTCHours(hours, mins, secs, smsecs);
    return date;
}

/**
 * 判断是否email
 * @param {Object} str
 */
W.isEmail=function(str){
	var exp=new RegExp("^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$");
	return exp.test(str);
}

/**
 * 把json从本地存储里获取出来，并转换成json对象，如果非json数据，第二个参数传true
 * @param {String} name
 * @param {Boolean} notJson
 */
W.ls=function(name,notJson){
	var r=localStorage.getItem(name);
	if(r&&r!=""){
		if(notJson){
			return r;
		}else{
			try{
				return JSON.parse(r);
			}catch(err){
				return null;
			}
		}
	}else return null;
}

/**
 * 存储json到本地存储，如果不是json对象，则第三个参数传true
 * @param {String} name
 * @param {Object} val
 * @param {Boolean} notJson
 */
W.setLS=function(name,val,notJson){
	if(notJson)
		localStorage.setItem(name,val);
	else 
		localStorage.setItem(name,JSON.stringify(val)); 
}

/**
 * 返回当前url内的search数据数组（即?后面部分）
 * @example
 * //url="www.baidu.com?w=123"
 * var test=W.getSearch();
 * alert(test.w);
 */
W.getSearch=getSearch;
getSearch=undefined;

/**
 * 设置cookie，expiredays负数代表分钟，正数的单位为“天”（24小时）path为cookie的有效路径
 * @param {String} c_name
 * @param {String} value
 * @param {Number} expiredays
 * @param {String} path
 */
W.setCookie=function(c_name,value,expiredays,path){
	var exdate=new Date();
	expiredays=expiredays||1;//默认为1天
	if(expiredays>1)
		exdate.setDate(exdate.getDate()+expiredays);
	else if(expiredays>0)
		exdate.setHours(exdate.getHours()+expiredays*24);
	else 
		exdate.setMinutes(exdate.getMinutes()-expiredays);
	var domain="";
	if(path){
		domain="; path="+path+";";
	}else{
		domain="; path=/; domain="+document.domain;
	}
	var tem=c_name+"="+encodeURIComponent(value)+((expiredays==null)?"":";expires="+exdate.toGMTString())+domain;
	document.cookie=tem;
}

/**
 * 获取cookie
 * @param {String} c_name
 */
W.getCookie=function(c_name){
	if(document.cookie.length>0){
		c_start=document.cookie.indexOf(c_name+"=");
		if (c_start!=-1){ 
		    c_start=c_start + c_name.length+1;
		    c_end=document.cookie.indexOf(";",c_start);
		    if(c_end==-1)c_end=document.cookie.length;
		    return decodeURIComponent(document.cookie.substring(c_start,c_end));
	    } 
	}
}

//重新加载用户设置
W._getSeting=function(){
	var setting=localStorage.getItem("_WiStormUserSetting_");
	try{
		if(setting)
			WiStorm.setting=JSON.parse(setting);
		else
			WiStorm.setting={};
	}catch(err){
		console.log(___.setting_echange_skinrror);
	}
	delete setting;
}

W.init=function(json){
	mui.init(json);
}

/**
 * 5+的Ready事件封装，如果执行此方法时5+的ready事件已经触发过了，则会立即执行；
 * 其中第一个参数为要执行的方法，第二参数web是一个标志，为true时，则不管是普通浏览器环境下，还是在打包成原生应用的情况下，都会执行；
 * 如果不传web参数或者传递一个false值，则只会在原生应用下执行
 * @param {Function} fun
 * @param {Boolean} web
 */
W.plusReady=function(fun,web){
	if(web){
		if(window.plus)
			setTimeout(fun,0);
		else
			document.addEvent("plusready",fun,false);
	}else{
		if(WiStorm.isWeb)
			return;//普通浏览器下不执行下面的代码
		if(window.plus)
			setTimeout(fun,0);
		else
			document.addEvent("plusready",fun,false);
	}
}

/**
 * 独特的编码方法，主要用于绕过微信登录后只能跳转指定域名的限制
 */
W.encoded=function(str){
	var code={"000":":","001":"/","002":"_","003":".","004":"?","005":"&","006":"=","007":"\\","008":"+","009":"-","00a":"%","00b":"#","00c":"(","00d":")","00e":"{","00f":"}","00g":"[","00h":"]","00i":"|","00j":";","00k":">","00l":"<","00m":",","00n":"!","00o":"@","00p":"$","00q":"^","00r":"*","00s":"'","00t":'"',};
	//编码(让微信支持本地回调)本地开发时使用，上线不应该使用
	for (items in code) {
		var r = new RegExp("\\" + code[items], "g");
		str = str.replace(r, items)
	}
	return str;
}

W.logout=function(){
	W.setCookie("access_token","");
	W.setSetting("user",null);
	W.setSetting("pwd",null);
	W._login=false;
	top.location=WiStorm.root+'index.html?intent=logout';
}

W.wxLogin=function(){
	if(WiStorm.test_mode){
		var url = WiStorm.config.wx_login; //测试使用
		url = url.replace(/\?\S*/, "");
		url = W.encoded(url);
		top.location = "https://open.weixin.qq.com/connect/oauth2/authorize?appid="+WiStorm.config.wx_app_id+"&redirect_uri=http://h5.bibibaba.cn/jump.html&response_type=code&scope=snsapi_userinfo&state="+url+"#wechat_redirect";
	}else{
		W.setCookie("__login_redirect_uri__",location.href,-15);
		var u=encodeURIComponent(WiStorm.config.wx_login);
		top.location="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+WiStorm.config.wx_app_id+"&redirect_uri="+u+"&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect";
	}				
}

//静默授权获取open_id
W.getOpenId=function(needweixin,s){
	if(needweixin||!WiStorm.agent.weixin)return;
	s=s||"snsapiBase";
	W.setCookie("__login_redirect_uri__",location.href,-15);
	var u=encodeURIComponent(WiStorm.config.wx_login);
	top.location="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+WiStorm.config.wx_app_id+"&redirect_uri="+u+"&response_type=code&scope=snsapi_base&state="+s+"#wechat_redirect";
}

/**
 * 去字符串左右空格
 * @param {Object} str
 */
W.trim=function(str) {
    str=str.replace(/(^\s*)|(\s*$)/g, "");
	return str;
}

/**
 * 输出api返回的错误信息
 * @param {Object} code
 */
W.errorCode=function(json){
	if(json.status_code==3){
		W.confirm("错误码：3；登录凭证已失效，点击确定登录；",function(b){
			if(b){
				if(WiStorm.agent.weixin){
					W.wxLogin();
				}else{
					W.setCookie("__login_redirect_uri__",location.href,-15);
					top.location=WiStorm.root+"index.html";
				}
			}
		});
	}else{
		W.alert("error_code："+json.status_code+"；error_msg："+json.err_msg);
	}
}

W.fillFriend=function(id,fid,name,fname,c){
	if(id==fid||!id||!fid||!WiStorm.agent.weixin)return;
	name=name||"";
	fname=fname||"";
	c=c||0;
	Wapi.friend.update(function(res){
		if (res && res.status_code) {
			window.onerror("friend.add错误，错误码："+res.status_code+";错误信息:"+res.err_msg,location.href,1242);
		}
	},{_open_id:id,_friend_open_id:fid,click_count:c,'name':name,friend_name:fname});
}

W.dom={};//专门用于缓存页面元素

///下面是一些进入应用则需要执行的代码，例如加载配置文件，语言文件等

//根据页面路径获取绝对路径
var tem=location.href;
var s=tem.search("/www/")+5;
WiStorm.root=tem.slice(0,s);
if(location.protocol=="http:"||location.protocol=="https:"){//浏览器环境
	WiStorm.root=WiStorm_root;
	WiStorm.isWeb=true;
}
tem=undefined;
s=undefined;


//按语言加载文字资源
/**
 * @description （全局变量）对应语言的文字资源（原本全局变量的命名应该以下划线开头和结尾，
 * 但考虑到这个变量可能会用得很频繁，所以以三个下划线符号“___”来命名）
 * 微信下不执行
 */
if(!WiStorm.isWeb){
	var ___=W._get(WiStorm.root+"language/"+navigator.language.toLowerCase()+".json");
	if(!___)
		___=W._get(WiStorm.root+"language/"+WiStorm.config.default_language+".json");
}else{
	var ___={
		"app_name":"WiStorm",
		"login":"登录",
		"account":"账号",
		"account_tip":"请输入账户名",
		"psw":"密码",
		"psw_tip":"请输入密码",
		"setting_error":"解析用户设置错误",
		"change_skin":"一键换肤",
		"date_k":["日","一","二","三","四","五","六"],
		"date_K":["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],
		"date_m":["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
		"date_M":["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
		"ok":"确定",
		"cancel":"取消",
		"yes":"是",
		"no":"否",
		"register":"注册",
		"forget":"忘记密码?",
		"server_error":{
			"no_account":"操作失败，账号不存在；",
			"psw_error":"操作失败，密码错误；",
			"code_error":"操作失败，access_token已失效；",
			"no_code":"操作失败，设备条码不存在；",
			"visit_error":"操作失败，超过访问频率；",
			"db_error":"数据库异常或者指令下发失败；",
			"unkonw_error":"操作失败，未知错误；"
		}
	}
}

/**
 * 获取本地用户存储
 * 在微信中每隔24小时会清理一次，所以基本上只能得到本次登录之后存储的数据
 */
W._getSeting();
var _user=W.getSetting("user");
if(_user&&W.getCookie("access_token")){
	W._login=true;
	_user.access_token=W.getCookie("access_token");
}else 
	W._login=false;

//普通浏览器中部分实现html5+中的某些方法
if(WiStorm.isWeb){
	/**
	 * 封装好的退后方法，返回上一页
	 */
	W.back=function(){
			var thisView=plus.webview.currentWebview();
			window.addEventListener("beforeunload",function(){
				clearTimeout(W._unloadId);
			},false);
			thisView.back();
			W._unloadId=setTimeout(function(){
				plus.webview.currentWebview().hide();
			},50);
	}
	
	if(top==window){
		W._view={
			"window":window,
			"_id":location.href.split("/").pop(),
			append:function(){},
			appendJsFile:function(){console.log("appendJsFile方法在普通浏览器下不可用")},
			back:function(){
				this.window.history.back();
			},
			canBack:function(){console.log("canBack方法在普通浏览器下不可用")},
			canForward:function(){console.log("canForward方法在普通浏览器下不可用")},
			children:function(){console.log("children方法在普通浏览器下不可用")},
			clear:function(){
				this.window.document.write("");
			},
			close:function(aniClose, duration, extras){
				plus.webview.close(this,aniClose, duration, extras);
			},
			draw:function(){console.log("draw方法在普通浏览器下不可用")},
			evalJS:function(js){
				this.window.eval(js);
			},
			forward:function(){
				this.window.history.forward();
			},
			getStyle:function(){
				return this.__style;
			},
			getTitle:function(){
				return this.window.document.querySelector("title").innerText;
			},
			getURL:function(){
				return this.window.location.href;
			},
			hide:function(aniHide, duration, extras){
				plus.webview.hide(this,aniHide, duration, extras);
			},
			isVisible:function(){
				return this._isVisible;
			},
			loadData:function(data){
				this.window.document.write(data);
			},
			loadURL:function(url){
				this.window.location=url;
			},
			nativeInstanceObject:function(){console.log("nativeInstanceObject方法在普通浏览器下不可用")},
			opened:function(){console.log("opened方法在普通浏览器下不可用")},
			opener:function(){
				return W._view;
			},
			parent:function(){
				return W._view;
			},
			reload:function(){
				this.window.location.reload();
			},
			resetBounce:function(){console.log("resetBounce方法在普通浏览器下不可用")},
			remove:function(){console.log("remove方法在普通浏览器下不可用")},
			removeFromParent:function(){
				plus.webview.close(this);
			},
			setBounce:function(){console.log("setBounce方法在普通浏览器下不可用")},
			setBlockNetworkImage:function(){console.log("setBlockNetworkImage方法在普通浏览器下不可用")},
			setContentVisible:function(visible){
				if(visible)
					this.window.document.firstElementChild.style.zIndex="1";
				else 
					this.window.document.firstElementChild.style.zIndex="0";
			},
			setPullToRefresh:function(){console.log("setPullToRefresh方法在普通浏览器下不可用,这种下拉刷新方式在普通浏览器性能要求过高，不建议使用，如果必须要使用可以自行实现")},
			setStyle:function(styles){
				jsonConcat(this.style,styles);
				if(styles&&styles.zindex)
					this.style.zIndex=styles.zindex;
				jsonConcat(this.__style,styles);
			},
			setJsFile:function(){console.log("setJsFile方法在普通浏览器下不可用")},
			show:function(aniShow, duration, showedCB, extras){
				plus.webview.show(this,aniShow,duration,showedCB,extras)
			},
			stop:function(){console.log("stop方法在普通浏览器下不可用")}
		}
		W._webview=new Array();
		window.plus={
			webview:{
				all:function(){
					return W._webview;
				},
				close:function(id_wvobj, aniClose, duration, extras){
					var wvobj=null;
					if(typeof id_wvobj=="string"||typeof id_wvobj=="number")
						wvobj=window.plus.webview.getWebviewById(id_wvobj);
					else{
						if(id_wvobj.tagName)
							wvobj=id_wvobj;
						else
							return;
					}
					document.body.removeChild(wvobj);
				},
				create:function(){
					var url=arguments[0];
					var id=arguments[1]||url;
					var styles=arguments[2];
					var extras=arguments[3];
					
					var obj=new WiStormUI("div");
					obj.className="child_view hide";
					var iframe=new WiStormUI("iframe");
					iframe.src=url;
					iframe.addEvent("load",function(){
						obj.window=this.contentWindow;
						obj.window._viewIndex=W._webview.length-1;
						
						//this.style.height=obj.window.document.body.scrollHeight+"px";
						//alert(obj.window.document.body.scrollHeight);
					});
					obj.appendChild(iframe);
					
					jsonConcat(obj,W._view);
					jsonConcat(obj,extras);
					obj._id=id;
					
					obj.__style={};
					obj.setStyle(styles);
					
					obj.addEvent("animationend",function(){//切入切出动画完成以后触发
						if(this.showedCB){
							this.showedCB();
							this.showedCB=null;
						}
						if(!this.isVisible()){
							this.classList.add("hide");
						}
					},false);
					document.body.appendChild(obj);
					W._webview.push(obj);
					return obj;
				},
				currentWebview:function(){
					return W._view;
				},
				getWebviewById:function(id){
					for(var i=W._webview.length-1;i>=0;i--){
							if(W._webview[i]._id==id){
								return W._webview[i];
							}
						}
				},
				getLaunchWebview:function(){console.log("getLaunchWebview方法在普通浏览器下不可用");},
				hide:function(id_wvobj, aniHide, duration, extras){
					var wvobj=null;
					if(typeof id_wvobj=="string"||typeof id_wvobj=="number")
						wvobj=window.plus.webview.getWebviewById(id_wvobj);
					else{
						wvobj=id_wvobj;
					}
					
					if(!wvobj.tagName&&window.W._view.allHide){//如果是对主页面执行
						var tem=W("body>*:not(.child_view)",true);
						for(var i=tem.length-1;i>=0;i--){
							if(tem[i].tagName!="NAV"){
								tem[i]._display=tem[i].style.display;
								tem[i].style.display="none";
							}
						}
						
						window.W._view.allHide=false;
						return;
					}
					wvobj.className="child_view hide";
					wvobj._isVisible=false;
				},
				open:function(url, id, styles, aniShow, duration, showedCB){
					var view=plus.webview.create(url,id,styles);
					plus.webview.show(view,aniShow, duration, showedCB);
					return view;
				},
				show:function(id_wvobj, aniShow, duration, showedCB, extras){
					var wvobj=null;
					if(typeof id_wvobj=="string"||typeof id_wvobj=="number")
						wvobj=window.plus.webview.getWebviewById(id_wvobj);
					else{
						wvobj=id_wvobj;
					}
					window.W._view.allHide="true";//表示主页面也可以被隐藏，在plus.webview.hide中使用
					window.plus.webview._show.hide();
					wvobj.className="child_view fromRight show";
					wvobj.showedCB=showedCB;
					
					if(!wvobj.tagName){
						var tem=W("body>*:not(.child_view)",true);
						for(var i=tem.length-1;i>=0;i--){
							if(tem[i].tagName!="NAV"){
								if(tem[i]._display)
									tem[i].style.display=tem[i]._display;
								else
									tem[i].style.removeProperty("display");
							}
						}
					}
					if(wvobj._id!=location.href.split("/").pop())
						history.pushState(null,wvobj._id,wvobj._id);
					wvobj._isVisible=true;
					window.plus.webview._show=wvobj;
				},
				defauleHardwareAccelerated:function(){console.log("defauleHardwareAccelerated方法在普通浏览器下不可用");},
				_show:W._view
			}
		}
		window._viewIndex=-1;
		window.addEventListener("popstate",function(){
			var ref=location.href.split("/").pop();
			var view=window.plus.webview.getWebviewById(ref);
			if(!view){
				view=window.plus.webview.currentWebview();
				if(ref!=view._id)
					return;
			}
			view.show();
		});
	}else{
		window.plus={
			"webview":{}
		};
		jsonConcat(window.plus.webview,top.plus.webview);
		window.plus.webview.currentWebview=function(){
			return top.W._webview[window._viewIndex];
		};
	}
}else{
	W.back=mui.back;
}

W.plusReady(function(){
	plus.runtime.getProperty(plus.runtime.appid, function(inf) {
		WiStorm.version = inf.version;
	});
});//5+准备好后执行

//当api准备好之后执行
W.apiready=function(callback){
	if(typeof Wapi!="undefined")
		callback();
	else
		window.addEventListener("W.apiready",callback);
}

W.login=function(){
	if(_g.sso_login){//已经授权
		if (!_g.access_token) {//登录不成功
			if (_g.status_code == 1) {//未绑定
				if(_g.intent!="bind"){
					W.alert("未绑定帐号，请先绑定",function(){
						W.setCookie("__login_redirect_uri__",location.href,-60);
						top.location=WiStorm.root+"src/temp_user.html?intent=logout";
					});
				}
				return;
			}else{//登录失败
				W.errorCode(_g);
				return;
			}
		} else {
			//登录成功
			W.setSetting("openId",_g.openid);
			W.setCookie("access_token", _g.access_token,1);
			Wapi.user.get(function(res) {//获取用户数据
				if (res.status_code) {
					W.alert(res.err_msg+"；获取用户信息失败；error_code:"+res.status_code);
					return;
				} else {
					W._login = true;//表示已登录
					_user=res;
					_user.open_id=res.login_id;
					_user.access_token=W.getCookie("access_token");
					//如果是商户登录，seller_id等于他自己的cust_id
					res.seller_id=(res.cust_type==2)?res.cust_id:res.seller_id;
					W.setSetting("user",res);
					var evt = document.createEvent("HTMLEvents");
					evt.initEvent("W.loginSuccess", false, false);//当页面load事件触发并且已经登录成功则会触发该事件,用于某些需要不经过登录页也可以直接访问，但是又需要用户授权登录的页面
					window.dispatchEvent(evt);
				}
			}, {
				cust_id: _g.cust_id,
				access_token: _g.access_token
			});
		}
	}else{
		W.alert("没有sso_login");
	}
}

if(_g.needUser&&!_g.openid){
	W.wxLogin();
}else if(_g.needOpenId=="true"&&!_g.openid){
	W.getOpenId();
}
if(!W._login&&location.pathname.indexOf("index.html")<0&&_g.intent!="logout"){
	if(WiStorm.agent.weixin){
		if(_g.sso_login){
			window.addEventListener("load",W.login);
		}else{
			W.wxLogin();
		}
	}else{
		W.setCookie("__login_redirect_uri__",location.href,-15);
		top.location=WiStorm.root+"index.html";
	}
}else if(W._login){
	window.addEventListener("load",function(){
		var evt = document.createEvent("HTMLEvents");
		evt.initEvent("W.loginSuccess", false, false);//当页面load事件触发并且已经登录成功则会触发该事件,用于某些需要不经过登录页也可以直接访问，但是又需要用户授权登录的页面
		window.dispatchEvent(evt);
	});
}

window.addEventListener("DOMContentLoaded",function(){
	var back=W(".W_back",true);
	for(var i=back.length-1;i>=0;i--){
		back[i].addEvent("click",W.back);
	}
	
	var script=W("script",true);
	for(var i=0;i<script.length;i++){
		if(script.src)
			WiStorm.included.push(script.src.replace(WiStorm.root,""));
	}
});