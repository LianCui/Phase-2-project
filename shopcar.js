$(function(){
	/*判断cookie是否有数据***/

	var first = $.cookie("goods") == null ? true : false;
	if(first){
		/*无数据加载购物车为空的页面******************/
		html = '<p class="shopgoods_empty_img"></p><p class="shopgoods_empty_tip1">购物车为空</p><p class="shopgoods_empty_tip2">请挑选心爱的商品吧！</p>';
		$(".shop_enmpty").html(html);
	$(".shop_enmpty").css("display","block");
		$(".shopgoods_list_cont").css("display","none");
	}else{
		//有数据加载数据
		$(".shop_enmpty").css("display","none");
		sc_msg();
		$(".shopgoods_list_cont").css("display","block");
	}
	sc_car();
	$(".newpro_box ul").on("click", ".pinfo_buy", function(){

			//抛物线运动
			ballMove(this);

			// alert(this.);
			//是否是第一次添加cookie
			var id = this.id;
			var first = $.cookie("goods") == null ? true : false;
			if(first){
				//第一次添加  [{id:id,num:2}]
				$.cookie("goods", '[{id:' + id + ',num:1}]', {
					expires: 7
				});
			}else{
				var str = $.cookie("goods");
				var arr = eval(str);
				var same = false; //代表是否有相同商品

				//遍历所有的对象，判断是否id相同，num++
				for(var i in arr){
					if(arr[i].id == id){
						arr[i].num = arr[i].num + 1;
						var cookieStr = JSON.stringify(arr);
						$.cookie("goods", cookieStr,  {
							expires: 7
						});
						same = true;
						break;
					}
				}

				//没有相同的商品
				if(!same){
					var obj = {id: id, num: 1};
					arr.push(obj);
					var cookieStr = JSON.stringify(arr);
					$.cookie("goods", cookieStr, {
						expires: 7
					});
				}
				sc_car();
			}




			return false;
		})


	//购物车数字
		function sc_car(){
			var sc_str = $.cookie("goods");
			if(sc_str){ //判断字符串是否存在
				var sc_arr = eval(sc_str);
				var sc_num = 0;
				for(var i in sc_arr){
					sc_num = Number(sc_arr[i].num) + sc_num;
				}
				$(".sshopcar_amout").html(sc_num);
				$(".h_allinfo_jianshu").find("span").html(sc_num);
			}
		}

		$(".sidebar_cont_closebtn").click(function(){
					$(".sidebar_content").animate({
						left:0
					})


		})
		$(".sitem_btn").click(function(){
			$(".sidebar_content").animate({
						left:-300
					})
			sc_msg();
		})


	//已经存储在cookie数据进行加载
	function sc_msg(){
		$.ajax({
			url: "json/shoplist.json",
			type: "get",
			success: function(res){

				var sc_arr = eval($.cookie("goods"));
				var first = $.cookie("goods") == null ? true : false;
				if(first){
					/*加载购物车为空的页面******************/
					var html_no = '<p class="shopgoods_empty_img"></p><p class="shopgoods_empty_tip1">购物车为空</p><p class="shopgoods_empty_tip2">请挑选心爱的商品吧！</p>';
					$(".shop_enmpty").html(html_no);
	/*			$(".shop_enmpty").css("display","block");
					$(".shopgoods_list_cont").css("display","none");*/
				}else{
				var html = '';
				var price = 0;
				for(var i in sc_arr){
					html += '<li from="group" gid="' + sc_arr[i].id +'"><div class="header_goodsimg"><a href="'+res[sc_arr[i].id].Ahref+'"><img src="'+res[sc_arr[i].id].img+'"></a></div><div class="header_goodsinfo"><p class="header_ginfo_name"><a href="'+res[sc_arr[i].id].Ahref+'">' + res[sc_arr[i].id].title + '</a></p><div class="header_ginfo_opearte"><span class="header_ginfo_price">￥' + res[sc_arr[i].id].price + '</span><p class="header_ginfo_amount"><span class="h_amout_down" data="' + sc_arr[i].id +'"></span><input type="text" name="buy_num" old="2" value="' + sc_arr[i].num +'"><span class="h_amout_up" data="' + sc_arr[i].id +'"></span></p><a class="header_ginfo_del" data="' + sc_arr[i].id +'" href="#">删除</a></div></div></li>';
				price += Number(res[sc_arr[i].id].price)*sc_arr[i].num;
				}
				$(".iscroll_cont").html(html);
				var html_num = '<p class="h_allinfo_jianshu">共<span>0</span>件商品</p><p class="h_allinfo_zongjia">共计<span>￥</span><em>' + price +'</em></p><p class="h_allinfo_gobuy"><a href="shopcar.html">去购物车结算</a></p>';
				$(".header_shopgoods_allinfo").html(html_num);
				sc_car();
				$(".shopgoods_list_cont").css("display","block");
				$(".shop_enmpty").css("display","none");
				}
			}
		})
	}

		$(".header_ginfo_del").click(function(){
			var str = $.cookie("goods");
			var arr = eval(str);
			var id = $(this).attr("data");
				//遍历所有的对象，判断是否id相同，num++
				for(var i in arr){
					if(arr[i].id == id){
						var cookieStr = JSON.stringify(arr);
						$.cookie("goods", cookieStr,  {
							expires:-1
						});
						break;
					}
				}
				sc_car();
		})

	function ballMove(node){
			//抛物线运动
			$("#ball").css({
				display: "block",
				left:$(node).offset().left,
				top: $(node).offset().top
			})
			var offsetX = $(".sitem_btn").find("i").offset().left - $("#ball").offset().left;
			var offsetY = $(".sitem_btn").find("i").offset().top - $("#ball").offset().top;

			//【注】配置参数的
			var bool = new Parabola({
				el: "#ball",
				targetEl: null,
				offset: [offsetX, offsetY],
				curvature: 0.0005,
				duration: 400,
				callback: function(){
					$("#ball").css("display", "none")
				}

			})

			bool.start();
			sc_car();
		}


		//购物车删除操作
		$(".iscroll_cont").on("click",".header_ginfo_del",function(){
			var str = $.cookie("goods");
			var arr = eval(str);

			//遍历所有的对象，判断是否id相同，删除
			for(var i in arr){
				if(arr[i].id == $(this).attr('data')){
					arr.splice(i,1);
					var cookieStr = JSON.stringify(arr);
					$.cookie("goods", cookieStr,  {
						expires: 7
					});

				}
			}
			sc_msg();
		})
		//购物车商品增加
		$(".iscroll_cont").on("click",".h_amout_up", function(){
			var str = $.cookie("goods");
				var arr = eval(str);

				//遍历所有的对象，判断是否id相同，num++
				for(var i in arr){
					if(arr[i].id == $(this).attr('data')){
						arr[i].num = arr[i].num + 1;
						var cookieStr = JSON.stringify(arr);
						$.cookie("goods", cookieStr,  {
							expires: 7
						});
					}
				}
			console.log($.cookie("goods"));
			sc_msg();
		})
		//购物车商品减少
		$(".iscroll_cont").on("click",".h_amout_down", function(){
			var str = $.cookie("goods");
				var arr = eval(str);

				//遍历所有的对象，判断是否id相同，num--
				for(var i in arr){
					if(arr[i].id == $(this).attr('data')){
						arr[i].num = arr[i].num - 1;
						if(arr[i].num < 1){
							arr[i].num =1
						}
						var cookieStr = JSON.stringify(arr);
							$.cookie("goods", cookieStr,  {
								expires: 7
							});
					}
				}
			console.log($.cookie("goods"));
			sc_msg();
		})












})
