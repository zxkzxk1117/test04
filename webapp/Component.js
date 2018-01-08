sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"test04/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("test04.Component", {

		metadata: {
			//manifest: "json",
			"rootView": "test04.view.App",
			"routing": {
				"config": {
					"routerClass": "sap.m.routing.Router",
					"viewType": "XML",
					"viewPath": "test04.view",
					"controlId": "myApp",
					"controlAggregation": "pages",
					"transition": "slide", //flip, show
					"bypassed": {
						"target": "notFound"
					}
				},
				"routes": [{
					"pattern": "",
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
			jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
			UIComponent.prototype.init.apply(this, arguments);
			var router = this.getRouter();
			this.routeHandler = new sap.m.routing.RouteMatchedHandler(router);
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