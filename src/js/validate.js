/* 
用途：检查输入手机号码是否正确 
输入： 
s：字符串 
返回： 
如果通过验证返回true,否则返回false 

*/
function checkMobile(s) {
	var regu = /^[0-9]*$/;
	var re = new RegExp(regu);
	if (re.test(s)) {
		return true;
	} else {
		return false;
	}
}

function is_Letter(s) { //判断车牌是否是数字或字母 

	var regu = "^[a-zA-Z]{1}[0-9a-zA-Z\_]+$";
	var re = new RegExp(regu);
	if (re.test(s)) {
		return true;
	} else {
		return false;
	}
}
function isNumberOr_Letter(s) { //判断是否是数字或字母 

	var regu = "^[0-9a-zA-Z\_]+$";
	var re = new RegExp(regu);
	if (re.test(s)) {
		return true;
	} else {
		return false;
	}
}

function isNumber(s) { //判断是否是数字

	var regu = "^[0-9]*$";
	var re = new RegExp(regu);
	if (re.test(s)) {
		return true;
	} else {
		return false;
	}
}