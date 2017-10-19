function getClass(els){
	var dom = document.getElementsByTagName("*");
	var arr = [];
	for(var i=0;i<dom.length;i++){
		if( dom[i].className.indexOf(" "+els) >=0 || dom[i].className.indexOf(els+" ") >=0  ||  dom[i].className.indexOf(" "+els+" ") >=0 ){
			arr.push(dom[i]);
		}
	}
	return arr;
}
var check =getClass("check"),
	selectedTotal = document.getElementById("selectedTotal"),
	priceTotal = document.getElementById("priceTotal"),
	cartTable = document.getElementById("cartTable"),
	tr = cartTable.tBodies[0].rows,
	checkAll =getClass("check-all"),
	selected = document.getElementById("selected"),
	foot = document.getElementById("foot"),
	selectedViewList = document.getElementById("selectedViewList");
for(var i=0;i<check.length;i++){
	check[i].onclick = function(){
		if(this.className =="check-all check"){
			for(var i =0;i<check.length;i++){
				check[i].checked=this.checked;
			}
		}
		if( this.checked == false ){
			for(var i=0;i<checkAll.length;i++){
				checkAll[i].checked=false;
			}
		}
		getTotal();
	}
}
selected.onclick = function(){
	if(selectedTotal.innerHTML != 0){
		foot.className = "foot show";
	}else{
		foot.className = "foot";
	}
}
selectedViewList.onclick = function(e){
	var e = window.event || e;
	var el = e.target || e.srcElement;
	if(el.className == "del"){
		var inputs =  tr[ el.getAttribute("index") ].getElementsByTagName("input")[0];
		inputs.checked = false;
		inputs.onclick();
	}
}
for(var i=0;i<tr.length;i++){
	tr[i].onclick = function(e){
		var e = window.event || e;
		var el = e.target || e.srcElement;
		var els = el.className;
		switch(els){
			case "add":
				var num = parseInt(this.getElementsByTagName("input")[1].value);
				this.getElementsByTagName("input")[1].value = num + 1;
				getPirce(this);
			break;
			case "reduce":
				if( this.getElementsByTagName("input")[1].value > 1  ){
					var num = parseInt(this.getElementsByTagName("input")[1].value);
					this.getElementsByTagName("input")[1].value = num - 1;
					getPirce(this);
				}
			break;
			case "delete":
				var con = confirm("确定要删除吗?");
				if(con){
					this.parentNode.removeChild(this);
				}
			break;
		}
		getTotal();
	}
}
function getPirce(tr){
	var td2 = tr.cells[2];
	var td4 = tr.cells[4];
	var input1 = tr.getElementsByTagName("input")[1].value;
	var td3 = tr.cells[3].getElementsByTagName("span")[0];
	td4.innerHTML = (td2.innerHTML * input1).toFixed(2);
	if(input1 > 1){
		td3.innerHTML = "-";
	}else{
		td3.innerHTML = "";
	}
}
function getTotal(){
	var selectNum = 0,
		price = 0,
		htmlStr = "";
	for(var i=0;i<tr.length;i++){
		if(tr[i].getElementsByTagName("input")[0].checked){
			selectNum += parseInt(tr[i].getElementsByTagName("input")[1].value);
			price+= parseFloat( tr[i].cells[4].innerHTML );
			htmlStr+="<div><img src='"+tr[i].getElementsByTagName("img")[0].src+"'><span class='del' index='"+i+"'>取消选择</span></div>";
		}
	}
	selectedTotal.innerHTML = selectNum;
	priceTotal.innerHTML =  price.toFixed(2);
	selectedViewList.innerHTML = htmlStr;
}