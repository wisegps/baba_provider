/**
	作者：cyy
	时间：2015-11-30
	描述：字符串处理的格式工厂类
*/

/**
 * 把undifined 值输出为空字符串
 */

function $V(value) {
	if (value == undefined) {
		value = "";
	}
	return value;
}

/**
 * 时间字符串格式化
 */

function $T(time) {
	if (time == undefined) {
		return "";
	}
	var d = str2Date(time).WtoString();
	return d.slice(5, -3);
}


/**
 * 时间字符串格式化
 */

function $T_All(time) {
	if (time == undefined) {
		return "";
	}
	var d = str2Date(time).WtoString();
	return d.slice(0, -3);
}

function str2Date(time) {
	var date = new Date();
	var str_before = time.split('T')[0]; //获取年月日
	var str_after = time.split('T')[1]; //获取时分秒
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
 * 获取今天开始时间
 */
function getBeginToday() {
	var date = new Date();
	date.setUTCHours(-8, 0, 0, 0);
	return date.WtoString().slice(0, -9);
}


/**
 * 获取当前时间
 */
function getCurrentTime() {
	var date = new Date();
	return date.WtoString().slice(0, -9);
}

/**
 * 获取本周开始时间
 */
function getBeginWeek() {
	var date = new Date();
	date.setUTCHours(-24 * 7 - 8);
	return date.WtoString().slice(0, -9);
}

/**
 * 获取上一个月
 *
 * @date 格式为yyyy-mm-dd的日期，如：2014-01-25
 */
function getPreMonth(date) {
	var arr = date.split('-');
	var year = arr[0]; //获取当前日期的年份
	var month = arr[1]; //获取当前日期的月份
	var day = arr[2]; //获取当前日期的日
	var days = new Date(year, month, 0);
	days = days.getDate(); //获取当前日期中月的天数
	var year2 = year;
	var month2 = parseInt(month) - 1;
	if (month2 == 0) {
		year2 = parseInt(year2) - 1;
		month2 = 12;
	}
	var day2 = day;
	var days2 = new Date(year2, month2, 0);
	days2 = days2.getDate();
	if (day2 > days2) {
		day2 = days2;
	}
	if (month2 < 10) {
		month2 = '0' + month2;
	}
	var t2 = year2 + '-' + month2 + '-' + day2;
	return t2;
}



/**
 * 获取本月开始时间
 */
function getBeginMonth() {
	var date = new Date();
	date.setUTCHours(-8, 0, 0, 0);
	var d = getPreMonth(date.WtoString());
	return d.slice(0, -9);;
}


/**
 * 到店时间描述
 */
function $ArriveDesc(time) {
	if (time == undefined) {
		return "";
	}
	var d = str2Date(time);

	var ts = new Date() - d; //计算剩余的毫秒数  
	var dd = parseInt(ts / 1000 / 60 / 60 / 24, 10); //计算剩余的天数  
	var hh = parseInt(ts / 1000 / 60 / 60 % 24, 10); //计算剩余的小时数  
	var mm = parseInt(ts / 1000 / 60 % 60, 10); //计算剩余的分钟数  
	//var ss = parseInt(ts / 1000 % 60, 10); //计算剩余的秒数  
	var surfix = "前到店";
	if (dd > 0) {
		return dd + "天" + surfix;
	} else if (hh > 0) {
		return hh + "小时" + surfix;
	} else if (mm > 0) {
		return mm + "分钟" + surfix;
	} else {
		return "";
	}




}





function $BizType(id) {
	if (id == undefined) {
		return id;
	}
	var type = ["维修", "保养", "美容", ""];
	return type[id];
}


/**
 * 提醒类型转换//提醒类别   0:保养到期    1:长时间未到店     2:故障
 * @param {Object} id
 */
function $ReminderType(id) {
	if (id == undefined) {
		return id;
	}
	var type = ["保养提醒", "未到店提醒", "故障提醒", ""];
	return type[id];
}


/**
 * 字符串去掉最后一个逗号
 * @param {Object} id
 */
function $trimComma(value) {
	if (value == "") {
		return value;
	}
	var len = value.length;
	if (value.lastIndexOf(',') == len - 1) {
		value = value.slice(0, -1);
	}
	return value;
}