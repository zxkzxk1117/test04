sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/routing/History", "sap/m/MessageToast"],function(Controller, History, MessageToast){
	return Controller.extend("test04.controller.Second", {
		onInit:function(){
			this.router = sap.ui.core.UIComponent.getRouterFor(this);
			this.router.getRoute("SecondView").attachMatched(this._onRouteMatched, this);
			
			// this.router.attachRouteMatched(function (oEvent){
			// 	var sRouteName = oEvent.getParameter("name");
			// 	// do something, i.e. send usage statistics to back end
			// 	// in order to improve our app and the user experience (Build-Measure-Learn cycle)
			// 	jQuery.sap.log.info("User accessed route " + sRouteName + ", timestamp = " + new Date().getTime());
			// });
		},
		_onRouteMatched: function(oEvent){
			var para = oEvent.getParameter("arguments");
			var bookMarkPara = para["?query"];
			// alert('receive Para Name:'+para.name);
			// alert('receive Para sex:'+para.sex);
			// alert(bookMarkPara.pageName);
		},
		onNavBack: function(oEvent){
			var oHistory, sPreviousHash;
			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			}
		},
		navByDisplayTarget: function(){
			this.router.getTargets().display("notFound");
		}
	});
});