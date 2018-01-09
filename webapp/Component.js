sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"test04/model/models",
	"sap/m/routing/RouteMatchedHandler"
], function(UIComponent, Device, models,routing) {
	"use strict";

	return UIComponent.extend("test04.Component", {

		metadata: {
			manifest: "json",
			"rootView": "test04.view.App", //需要装载的页面
			"routing": { //整个项目的路由信息
				"config": {
					"routerClass": "sap.m.routing.Router",  //制定指定一个基类
					"viewType": "XML",
					"viewPath": "test04.view", //view的路径
					"controlId": "myApp",	//父级容器的ID
					"controlAggregation": "pages",	
					"transition": "flip", //slide,flip, show 三种动画
					"bypassed": { //跳转路径不存在
						"target": "notFound"
					}
				},
				"routes": [{
					"pattern": "",   //若为空则为默认出初始页面
					"name": "FirstView",
					"target": "First"
				}, {
					"pattern": "Second/{name}/{sex}/resume:?query:",
					"name": "SecondView",
					"target": "Second"
				}],
				"targets": {
					"First": {
						"viewName": "First",
						"viewLevel":1 
					},
					"Second": {
						"viewName": "Second",
						"viewLevel":2
					},
					"notFound": {
						"viewName": "NotFound",
						"transition": "show"
					}
				}
			}
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			//init
		//	jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
			UIComponent.prototype.init.apply(this, arguments);
			var router = this.getRouter(); //获得的上面定义的routing
		//	this.routeHandler = new routing(router);  //处理路由的操作
			router.initialize();
		},
		createContent: function() {
			var view = sap.ui.view({
				id: "app",
				viewName: "test04.view.App",
				type: "XML",
				viewData: {
					component: this
				}
			});

			return view;
		}
	});
});