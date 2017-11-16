$(function(){

        $("#select").hover(function(){
            $("#outmenu").css("display","block");
        },function(){
            $("#outmenu").css("display","none");
        });


        $("#choose1").click(function(){
            $("#choose1").css("backgroundPosition" ,"32px -53px")
        });
        $("#choose").click(function(){
            $("#choose").css("backgroundPosition" ,"32px -53px");

        });

        /*点击多选出现input*/
        $(".choose12").on("click",function(){
            if($(this).closest("div").find("ul").find("li").find(".checko").css("visibility") =="visible"){
                $(this).closest("div").find("ul").find("li").find(".checko").css("visibility","hidden");
            }else{
                $(this).closest("div").find("ul").find("li").find(".checko").css("visibility","visible");
            }
            
        })

     /*具体商品*/
         $.ajax({
          url:"json/detail.json",
          method:"get",
          success:function(data){
            // alert(data.length);
            var html = "";
            for(var i = 0; i < data.length; i++){
                html += '<li><img src = "' + data[i].img + '"/><strong>' + data[i].price + '</strong><span>' + data[i].exprice + '</span><p>' + '<a href="http://item.yintai.com/21-114-7560C.html" target="_blank"> '+ data[i].describe +  '</a></p>' + '<b>' + data[i].title +'</b></li>';
              }
            $(".allshop").find("ul").html(html);
          }
     });


         $.ajax({
          url:"json/detail2.json",
          method:"get",
          success:function(data){
            // alert(data.length);
            var html = "";
            for(var i = 0; i < data.length; i++){
                html += '<li><img src = "' + data[i].img + '"/><strong>' + data[i].price + '</strong><span>' + data[i].exprice + '</span><p>' + '<a href="http://item.yintai.com/21-114-7560C.html" target="_blank"> '+ data[i].describe +  '</a></p>' + '<b>' + data[i].title +'</b></li>';
              }
            $(".allshop1").find("ul").html(html);
          }
     });
         
           /*点击选择不同的页面*/
     
            $(".checkbox").find("a").click(function(){
                //点击按钮的时候
                $(this).css("backgroundColor", "#e5004f").css("color" , "#fff");
                $(this).siblings("a").css("backgroundColor", "#fff").css("color" , "#666");
                //设置当前点击的按钮和对应div
                $("#elsemiddle").find(".allshop").css("display" , "none");
                $("#elsemiddle").find(".allshop").eq($(this).index()).css("display" , "block");
                
            })
        



    })