sap.ui.define(["sap/ui/core/mvc/Controller"],function(Controller){
	return Controller.extend("test04.controller.First", {
		onInit: function() {
			this.router = sap.ui.core.UIComponent.getRouterFor(this);
		},
		goToNextPage: function(oEvent){
			this.router.navTo("SecondView", {name: 'richard', sex:'male', query: {
					pageName : "second page"
				}}); //},"ture"}); 设置为ture清楚清除缓存
				
				// navTo set true, can remove history
		}
	});
});