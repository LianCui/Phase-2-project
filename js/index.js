// document.write("<script src='jquery-1.11.1.js'></script>");

$(function(){
        $(".hd-left-ul li:eq(2)").hover(function(){
            $(".wechat-code-cls").css("display","block");
        },function(){
            $(".wechat-code-cls").css("display","none");
        });

        $(".hd-left-ul li:eq(4)").hover(function(){
        	$(".hd-left-cls").css("display","block");
        },function(){
        	$(".hd-left-cls").css("display","none");
        });

        $(".top-logs li:eq(4)").hover(function(){
        	$(".yt-seller-myhome").css("display","block");
        },function(){
        	$(".yt-seller-myhome").css("display","none");
        })

        /*购物车划过后出*/

        $(".shopcard").hover(function(){
           $("#empty").css("display","block");
        },function(){
          $("#empty").css("display","none");
        });


     /*外出打开栏*/ 

      $("#outmenu").on("mouseenter","li.li1",function(){
        var iNow = $(this).index();
        $.ajax({
          url:"json/menu.json",
          method:"get",
          success:function(data){
             var html1 = "";
             var html = "";
             for(var attr in data[iNow]){
                var html2 ="";
                var html3 = "";
                if(attr == "text"){
                  for(var j = 0;j<data[iNow].text.length;j++){
               html3 += "<a href = 'http://www.yintai.com/product/search.aspx?keyword=%E9%93%B6%E9%A5%B0&N=10001493?intcmp=GGW20150326_home_peishi_yinshi'  target='_blank'> "+ data[iNow].text[j] +"</a>";
              }
               html3 = "<div id = 'openmenu2'><h3>"+'品牌'+"</h3>"+ "<p>" + html3+ "</p>"+"</div>";
              
            }else{
              for(var i = 0;i < data[iNow][attr].length - 1;i++){

              if(i == 0){
                html1 = "<h3>" + data[iNow][attr][0] + "</h3>";
                  }
              else{
                html2 += "<a href = 'http://www.yintai.com/product/list-10000605.html?intcmp=GGW20150327_home_meizhuang_mianmo ' target='_blank'>"+data[iNow][attr][i]+"</a>"
                   } 
                } 
            html +=  "<div class = 'openmenu1-1'>" + html1 + "<p>" + html2 + "</p>"  + "</div>";
              }           
            } 
            html =  "<div id = 'openmenu1'>" + html + "</div>";

            $("#openmenu").html(html+html3);

          }

        })
      
    })


  /*具体商品*/
        $.ajax({ 
          url:"json/data12.json",
          method:"get",
          success:function(data){
            // alert(data.length);
            var html = "";
            for(var i = 0; i < data.length; i++){
                html += '<li><a href="http://www.yintai.com/store/store-50004625.html"  target="_blank"><img src = "' + data[i].img + '"/><h3>' + data[i].title + '</h3><p>' + data[i].describe + '</p><span>' + data[i].price + '</span><b>' + data[i].exprice + '</b></a></li>';
              }
            $(".date2").find("ul").html(html);
          }
     });

        $.ajax({
          url:"json/datwo12.json",
          method:"get",
          success:function(data){
             // alert(data.length);
            var html = "";
            for(var i = 0; i < data.length; i++){
                html += '<li><a href="http://item.yintai.com/21-460-4732C.html" target="_blank"><img src = "' + data[i].img + '"/><h3>' + data[i].title + '</h3><p>' + data[i].describe + '</p><span>' + data[i].price + '</span><b>' + data[i].exprice + '</b></a></li>';
              }
              // alert(html);
            $(".datwo2").find("ul").html(html); 
           }
         });


        $.ajax({
          url:"json/fashion.json",
          method:"get",
          success:function(data){
             // alert(data.length);
            var html = "";
            for(var i = 0; i < data.length; i++){
                html += '<li><a href="http://item.yintai.com/21-466-4461C.html" target="_blank"><img src = "' + data[i].img + '"/><h3>' + data[i].title + '</h3><p>' + data[i].describe + '</p><span>' + data[i].price + '</span><b>' + data[i].exprice + '</b></a></li>';
              }
              // alert(html);
            $("#fashion2").find("ul").html(html); 
           }
         });

         


/*轮播图*/
var curIndex = 0;  
 var autoChange = setInterval(function(){ 
    if(curIndex < $(".imgList li").length-1){ 
      curIndex ++; 
    }else{ 
      curIndex = 0;
    }
     changeTo(curIndex); 
  },2000);
  function changeTo(num){ 
    $(".imgList").find("li").removeClass("imgOn").hide().eq(num).fadeIn().addClass("imgOn");
  }
})
 
