var zTree;
var setting;
setting = {
	checkable: true,
	checkStyle: "radio",
	checkRadioType: "all",
	async : true,
	asyncUrl : "/channel/tree?type=1", // 获取节点数据的URL地址
	asyncParam : [ "id" ], // 获取节点数据时，必须的数据名称，例如：id、name
	callback : { },
	checkType : {
		"Y" : "",
		"N" : "s"
	},
	isSimpleData : true,
	treeNodeKey : "id",
	treeNodeParentKey : "pid"
};
$(document).ready(function() {
		refreshTree();
});
var zNodes = [];
function refreshTree(asyncUrl) {
	zTree = $("#channel_tree").zTree(setting, zNodes);
}


