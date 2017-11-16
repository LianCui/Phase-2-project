$(function(){
	$("#normal").hover(function(){
		$("#glass").css("display","block");
		$("#magnify").css("display","block");
		$("#normal2").css("display","block");
	},function(){
		$("#glass").css("display","none");
		$("#magnify").css("display","none");
		$("#normal2").css("display","none");
	})



	// 放大镜
	 $("#non").mousemove(function(ev){
	 	var left = ev.offsetX - $("#glass").outerWidth()/2;
	 	var top = ev.offsetY - $("#glass").outerHeight()/2;
	 	if(left < 0){
	 		left = 0;
	 	}else if(left > this.offsetWidth - $("#glass").outerWidth()){
	 		left = this.offsetWidth - $("#glass").outerWidth();
	 	}
	 	if(top < 0){
	 		top = 0;
	 	}else if(top > this.offsetHeight - $("#glass").outerHeight()){
	 		top = this.offsetHeight - $("#glass").outerHeight();
	 	}
	 	$("#glass").css("left",left);
	 	$("#glass").css("top",top);

	 	var proportionX = left / (this.offsetWidth - $("#glass").outerWidth());
	 	var proportionY = top / (this.offsetHeight - $("#glass").outerWidth());

	 	var mLeft = - proportionX * ($("#magnify").outerWidth() - $(
	 		"#normal2").outerWidth());
	 	var mTop = - proportionY * ($("#magnify").outerHeight() - $("#normal2").outerHeight())
	 	$("#magnify").css("left",mLeft);
	 	$("#magnify").css("top",mTop);
	 });
	


		// 收藏分享
	$("#chatwe").hover(function(){
		$("#wcer").css("display" , "block");
	},function(){
		$("#wcer").css("display" , "none");
	});
	
	$("#share").hover(function(){
		$("#sharesele").css("display" , "block");
	},function(){
		$("#sharesele").css("display" , "none");
	});

     /*转换图片*/


		$("#slidsp").find("ul").on("click","li",function(){
				 
				$("#normal").find("img").css("display", "none");
				$("#normal").find("img").eq($(this).index()).css("display", "block")
			})

	
	//点击加入购物车生成cookie
	$(".addcar").on("click",function(){
		
		//判断是否是第一次添加cargo cookie
		var first = $.cookie("cargo") == null ? true : false;

		if(first){
			//是第一次添加
			var arr = [];
			var obj = {id: this.className, num: 1};
			arr.push(obj);
			var cookieStr = JSON.stringify(arr);
			$.cookie("cargo", cookieStr, {expires: 7});
			console.log(cookieStr);
			// alert(0);
		}else{

			//不是第一次添加，将之前存储的cookie取出
			var Str = $.cookie("cargo");
		
			//转成数组
			var arr = eval(Str);
			//判断是否是第一次添加该商品
			var isYes = false;
			for(var i in arr){ 
				if(arr[i].id == this.className){
					arr[i].num++;
					var cookieStr = JSON.stringify(arr);
						$.cookie("cargo", cookieStr,  {
							expires: 7
						});
					isYes = true;
					// alert(2)
					console.log(cookieStr);
				}
				
			}

			if(!isYes){
				//<4>如果之前没有存储过
				var obj = {id: this.className, num: 1};
				arr.push(obj);
				var cookieStr = JSON.stringify(arr);
					$.cookie("cargo", cookieStr, {
						expires: 7
					});
					// alert(3);
					// console.log(3);
			}

			
		}
		for(var i in arr){ 
			if(arr[i].id == this.className){
				$("#num").html(arr[i].num);
			}
			
		}

	})

		var arr = eval($.cookie("cargo"));
		for(var i in arr){ 
			if(arr[i].id == "addcar"){
				$("#num").html(arr[i].num);
				
			}

			
		}
	


	// 加载多张图片
	 

	 
		 $.ajax({
		          url:"json/jutishangpin.json",
		          method:"get",
		          success:function(data){
		            // alert(data.length);
		            var html = "";
		             //alert(data.length);
		            for(var i = 0; i < data.length; i++){
		                html += '<div><img src = "' + data[i].img + '"/></div>'
		              }
		            $(".spreferra4").html(html);
		          }
		     });



		 $.ajax({
          url:"json/xiangqing.json",
          method:"get",
          success:function(data){
            // alert(data.length);
            var html = "";
             //alert(data.length);
            for(var i = 0; i < data.length; i++){
                html += '<div><img src = "' + data[i].img + '"/></div>'
              }
            $(".spreferra5").html(html);
          }
     });




  //右侧图片加载
      
   			$.ajax({
		          url:"json/xiangye.json",
		          method:"get",
		          success:function(data){
		            // alert(data.length);
		            var html = "";
		             //alert(data.length);
		            for(var i = 0; i < data.length; i++){
   						html += '<li><a href=href="http://item.yintai.com/21-464-8254C.html?from=bfd_c" target="_blank"><img src ="'+ data[i].img +'" width:120 height:160 /></a><p><a href="http://item.yintai.com/21-464-8254C.html?from=bfd_c" target="_blank">' + data[i].describe +'</a></p><p><strong>'+data[i].prices + '</strong><em>'+data[i].exprices +'</em></p></li>'
   					}
   					// alert(html);
   					 $(".spreferrarul").html(html);

   				}
   			});
})	
