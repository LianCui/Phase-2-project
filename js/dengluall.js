 
	window.onload = function(){
		var aLis = document.getElementsByTagName('li');
		var oFir = document.getElementById('fir');
		var oSec = document.getElementById('sec');
		var oThid = document.getElementById('thid');
		aLis[0].onmousedown = function(){
			oFir.style.display = "block" ;
			oSec.style.display = "none" ;
			oThid.style.display = "none" ;

		}
		aLis[1].onmousedown = function(){
			oFir.style.display = "none" ;
			oSec.style.display = "block" ;
			oThid.style.display = "none" ;

		}
		aLis[2].onmousedown = function(){
			oFir.style.display = "none" ;
			oSec.style.display = "none" ;
			oThid.style.display = "block" ;

		}



		// 正则判断

		$("username").onblur = function(){
			var oValue = this.value.replace(/\s/ig,"");
			var oUsername = document.getElementById("username_span");
			 oUsername.style.display = "block";
			this.value = oValue;
			if(!oValue){
				$("username_span").innerHTML = ("手机号不能为空");
			}else{
				if(oValue.length < 11 || oValue.length> 11){
					$("username_span").innerHTML = ("请输入正确手机号");
					}
				}
			}
		$("password").onblur = function(){
			var oValue = this.value.replace(/\s/ig,"");
			var oPassword = document.getElementById("password_span");
			 oPassword.style.display = "block";
			this.value = oValue;
			if(!oValue){
				$("password_span").innerHTML = ("密码不能为空");
			}else if(oValue.length < 8 ){
				$("password_span").innerHTML = ("密码长度应大于8");
			}else{
				$("password_span").innerHTML = ("");
			}
			}
			$("textname").onblur = function(){
			var oValue = this.value.replace(/\s/ig,"");
			var oTextname = document.getElementById("textname_span");
			 oTextname.style.display = "block";
			this.value = oValue;
			if(!oValue){
				$("textname_span").innerHTML = ("手机号不能为空");
			}else{
				if(oValue.length < 11 || oValue.length> 11){
					$("textname_span").innerHTML = ("请输入正确手机号");
					}
				}
			}
			$("textword").onblur = function(){
			var oValue = this.value.replace(/\s/ig,"");
			var oTextword = document.getElementById("textword_span");
			 oTextword.style.display = "block";
			this.value = oValue;
			if(!oValue){
				$("textword_span").innerHTML = ("密码不能为空");
			}else if(oValue.length < 8 ){
				$("textword_span").innerHTML = ("密码长度应大于8");
			}else{
				$("textword_span").innerHTML = ("");
			}
			}
			function $(id){
			return document.getElementById(id);
			}





			var oErcodeshell = document.getElementById("ercodeshell");
			var oErcode_l = document.getElementById("ercode_l");
			var oErcode_r = document.getElementById("ercode_r");
				oErcode_r.style.display = "none";
			  oErcodeshell.onmouseover = function(){
			  	oErcode_r.style.display = "block";
			  	oErcode_l.style.left = "-60px"; 
			  	}
		 	  oErcodeshell.onmouseout = function(){
		 	        oErcode_r.style.display = "none";
		 	  	    oErcode_l.style.left = "0px";
		 	  }


		 	 //点击确定后出来弹出框
			 var  oButn = document.getElementById("landng1");
			 var  oLang = document.getElementById('landing1');
			 var  oZcshade = document.getElementById("zcshade");
			 var  oConfrim = document.getElementById("confirm");
			 oButn.onclick = function(){
			 	oZcshade.style.display = "block";
			 }
			 oConfrim.onclick = function(){
			 	oZcshade.style.display = "none";
			 }

			oLang.onclick = function(){
			 	oZcshade.style.display = "block";
			 }
			 oConfrim.onclick = function(){
			 	oZcshade.style.display = "none";
			 }


/*
		  // 商城接口登录
		  function $$(id){
    	       return document.getElementById(id);
            }
	       var aInputs = $$("passport").getElementsByTagName("input");
			 $$("landing1").onclick = function(){
			 	var data = `${aInputs[0].name}=${aInputs[0].value}&${aInputs[1].name}=${aInputs[1].value}`;
				data += "&status=login";
				$.ajax({
					method: "post",
					url: "http://datainfo.duapp.com/shopdata/userinfo.php",
					data: data,
					success: function(data){
						if(data == 0){
							alert("用户名不存在")
						}else if(data == 2){
							alert("用户名与密码不符");
						}else{
							//成功
							alert(data);
						}
					}
				})
			} */
	
		
 }
		  