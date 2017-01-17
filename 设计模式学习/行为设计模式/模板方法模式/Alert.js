var Alert = function(data) {
	// 没有内容直接返回
	if(!data) {
		return;
	}

	// 设置内容
	this.content = data.content;

	// 创建提示框面板
	this.panel = document.createElement('div');

	// 创建提示内容组件
	this.contentNode = document.createElement('p');

	// 创建确定按钮组件
	this.confirmBtn = document.createElement('span');

	// 创建取消按钮组件
	this.closeBtn = document.createElement('b');

	// 为提示框面板添加类
	this.panel.className = 'alert';

	// 为关闭按钮添加类
	this.closeBtn.className = 'a-close';

	// 为确定按钮添加类
	this.confirmBtn.className = 'a-confirm';

	// 为确定按钮添加文案
	this.confirmBtn.innerHTML = data.confirm || '确认';

	// 为取消按钮添加文案
	// this.closeBtn.innerHTML = data.close || 'X';

	// 为提示内容添加文本
	this.contentNode.innerHTML = this.content;

	// 点击确认按钮执行方法 如果data中有success方法, 否则为空函数
	this.success = data.success || function(){};

	// 点击关闭按钮执行方法
	this.fail = data.fail || function(){};
};

Alert.prototype = {
	// 创建方法
	init : function(){
		// 生成提示框
		this.panel.appendChild(this.closeBtn);
		this.panel.appendChild(this.contentNode);
		this.panel.appendChild(this.confirmBtn);

		// 插入页面中
		document.body.appendChild(this.panel);

		// 绑定事件
		this.bindEvent();

		// 显示提示框
		this.show();
	},
	bindEvent : function(){
		var me = this;
		// 关闭按钮事件
		this.closeBtn.onclick = function(){

			// 执行取消方法
			me.fail();

			// 隐藏弹窗
			me.hide();
		};
		// 确认按钮点击事件
		this.confirmBtn.onclick = function(){
			// 执行关闭确认方法
			me.success();

			// 隐藏弹窗
			me.hide();
		};
	},

	// 隐藏弹窗方法
	hide : function(){
		this.panel.style.display = 'none';
	},

	// 显示弹窗方法
	show : function(){
		this.panel.style.display = 'block';
	}
};