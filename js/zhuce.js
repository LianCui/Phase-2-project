$(function(){
	$(".btn").click(function(){
		$("#zcshade").css("display" , "block");
	});
	$(".confirm").click(function(){
		$("#zcshade").css("display" , "none");
	});
	

  // 商城接口
    function $$(id){
    	return document.getElementById(id);
    }
	var aInputs = $$("return1").getElementsByTagName('input');
	$$("bin").onclick = function(){
		var data = `${aInputs[0].name}=${aInputs[0].value}&${aInputs[2].name}=${aInputs[2].value}`;
		data += "&status=register";
		$.ajax({
			method: "post",
			url: "http://datainfo.duapp.com/shopdata/userinfo.php",
			data: data,
			success: function(data){
				if(data == 0){
					alert("用户名重名")
				}else if(data == 2){
					alert("数据库报错");
				}else{
					//成功
					alert("注册成功");
				}
			}
		})
	}

	
})