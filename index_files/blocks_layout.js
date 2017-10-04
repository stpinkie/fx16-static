var blocks_layout = {};

blocks_layout.init = function(container,items){

};

blocks_layout.applyLayout = function(container,items,paramsFromRealTime){
	var helperDiv = container.find(".helper-div");
	var containerHeight = container.height();
	var helperDivHeight = helperDiv.height();
	var center = (containerHeight/2) - (helperDivHeight/2);
	center = Math.max(0,center);
	helperDiv.css("top",center)
};

