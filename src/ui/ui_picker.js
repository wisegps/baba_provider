
//提醒类型选择器
function remind_type_picker(eid) {
	//普通示例
	var element = W("#"+eid);
	var picker = new mui.PopPicker();
	picker.setData([{
		value: '0',
		text: '保养提醒'
	}, {
		value: '1',
		text: '未到店提醒'
	}, {
		value: '2',
		text: '故障提醒'
	}]);
	picker.show(function(items) {
		element.value = items[0].text;
		element.data_value= items[0].value;
		element.dataset.rmd_type = items[0].value;
		var evt = document.createEvent("HTMLEvents");
		evt.initEvent("change", false, false);
		element.dispatchEvent(evt);
	});
}

//发动机状态选择器
function engine_status_picker(eid) {
	//普通示例
	var element = W("#"+eid);
	var picker = new mui.PopPicker();
	picker.setData([{
		value: '1',
		text: '启动'
	}, {
		value: '2',
		text: '怠速'
	}, {
		value: '3',
		text: '冷车'
	}, {
		value: '4',
		text: '热车'
	}]);
	picker.show(function(items) {
		element.value = items[0].text;
		element.data_value= items[0].value;
	});
}
//持续时间选择器
function duration_picker(eid) {
	//普通示例
	var element = W("#"+eid);
	var picker = new mui.PopPicker();
	picker.setData([{
		value: '1',
		text: '三天'
	}, {
		value: '2',
		text: '一周'
	}]);
	picker.show(function(items) {
		element.value = items[0].text;
		element.data_value= items[0].value;
	});
}

//车况条件选择器
function condition_picker(eid) {
	//普通示例
	var element = W("#"+eid);
	var picker = new mui.PopPicker();
	picker.setData([{
		value: '1',
		text: '无'
	}, {
		value: '2',
		text: '电瓶电压'
	}, {
		value: '3',
		text: '水温'
	}]);
	picker.show(function(items) {
		element.value = items[0].text;
		element.data_value= items[0].value;
		
	});
}

