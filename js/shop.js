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
        });


             var isshow = true;/*布尔值*/

          $(".check").on("click",function(){
            if(isshow){
             $(".check").css("backgroundPosition","0 -55px");
             isshow = !isshow; /*false*/
            }else if(!isshow){
             $(".check").css("backgroundPosition","0 -73px");  
              isshow = true;
              }
            });
           
           $("#handle1 a").click(function(){
             $("#handle1-1").css("display" , "block");
           });
           $("#handle1-1 span").click(function(){
             $("#handle1-1").css("display" , "none");
           });


           $("#handle2 a").click(function(){
             $(".headle2-1").css("display" , "block");
           });
           $("#handle1-1 span").click(function(){
             $(".headle2-1").css("display" , "none");
           })


           $.ajax({
            url:"data/data.json",
            type:"get",
            success:function(data){
              var arr = eval($.cookie("cargo")); 
            
              var html = '';
              for (var i = 0; i < arr.length; i++) {
                html += '<i class = "check" style="margin-top: 14.5px;margin-left: 27px"></i><div id = "checkshop"><a id = "checkimg" href="http://item.yintai.com/21-464-8251.html"     target="_blank"><img width="54px"; height="60px" src="'+data[0].src+'" alt="" /></a><div id = "checkp"><a href="http://item.yintai.com/21-464-8251.html" target="_blank"><em></em><p>'+data[0].title+'</p></a></div><div id = "checkcs"><p>颜色:  <span>'+data[0].color+'</span></p><p>尺寸:  <span>'+data[0].size+'</span></p></div></div><div id = "checkR"><strong>￥'+data[0].price+'</strong></div><div id ="checkinput"><a  class = "inputres" href="javascript:void(0)">-</a><input class = "input1" id = "input12" type="text" value="'+arr[i].num+'" lastvalue = "1" > <a class = "inputadd" href="javascript:void(0)">+</a></div><div id = "integral" style="margin-top:11px;margin-left:30px">'+data[0].price+'</div><div id = "handle"><div id = "handle1"><a href="#">移入收藏</a><div id = "handle1-1"><p>你确定要添加到收藏吗?</p><span>确定</span><span>取消</span></div>  </div><div id = "handle2"><a href="#">删除商品</a><div id = "handle1-1" class="headle2-1"><p>你确定要删除商品吗?</p><span>确定</span><span>取消</span></div> </div></div>'
              }
              $("#samegoods2").html(html);
            }
           })
})







