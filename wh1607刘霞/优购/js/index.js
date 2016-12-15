//侧面的导航，json解析
			$.get("js/nav.json",function(str){
				
				
				
				for(var i=0;i<$("#left_nav li").size();i++){
					$("#left_nav li").eq(i).append("<h5><a href='#'></a></h5><p></p>")
					$("#left_nav li").eq(i).append("<div class='righter_nav'>");
					$("#left_nav li").eq(i).find("h5 a").html(eval("str.nav"+(i+1)+".title1"));
					
					for(var j=0;j<4;j++){
						$("#left_nav li").eq(i).find("p").append("<span><a href='#'></a></span>");
						
						$("#left_nav li").eq(i).find("p span a").eq(j).html(eval("str.nav"+(i+1)+".title1_part["+j+"]"))
					}
					for(var k=0;k<str.nav1.title1_class.length;k++){
						$("#left_nav li").eq(i).find("div").append("<h6><a href='#'></a></h6>");
						$("#left_nav li").eq(i).find("div").append("<p class='ac'><a href='#'></a></p>");
						//console.log(str.nav1.title1_class[k])
						for(var m=0;m<$("#left_nav li").size();m++){
						
						$("#left_nav li").eq(m).find("div h6 a").eq(k).html(eval("str.nav"+(m+1)+".title1_part["+k+"]"));
						$("#left_nav li").eq(m).find("div .ac a").eq(k).html(eval("str.nav"+(m+1)+".title1_class["+k+"].sport_part"));
						}
					}
					$("#left_nav li").eq(i).hover(function(){
						$("#left_nav li").eq(i).find("div").css("display","none");
						$(this).find("div").css("display","block");
					},function(){
						$(this).find("div").css("display","none");
					})
					
				}
				
				
			})

//轮播图效果
$(function(){
	
	var count=0;
	var timer=null;
	function movetime(){
		
		timer=setInterval(function(){
		movebanner();
		count++;
		if(count==6){
			count=0;
		}
		//console.log(count);
		},2000);
	}
	
		movetime();
	
		for(var i=0;i<$(".carousel_icon li").size();i++){
			$(".carousel_icon li").eq(i).hover(function(){
				//clearInterval(timer);
				
				$(this).addClass("active_banner_icon").siblings().removeClass("active_banner_icon");
				$(".carousel li").eq($(this).index()).css("display","block").siblings().css("display","none");
			});
			
			$(".carousel li").eq(i).hover(function(){
				clearInterval(timer);
				
			},function(){
				movetime();
				count=$(this).index();
				
			})
		}
		function movebanner(){
			$(".carousel_icon li").eq(count).addClass("active_banner_icon").siblings().removeClass("active_banner_icon");
			$(".carousel li").eq(count).css("display","block").siblings().css("display","none");
		}
		
	})





//热门品牌的切换
$(function(){
				var direction=1;
				//alert($("#brind_list").css("margin-left"))
				$("#left_button").click(function(){
					if($("#brind_list").css("margin-left")=='0px'){
						direction=-1;
						
					}else{
						direction=0;
					}
					$("#brind_list").css("margin-left",1100*direction)
				}),
				$("#right_button").click(function(){
					if($("#brind_list").css("margin-left")=='0px'){
						direction=-1;
						
					}else{
						direction=0;
					}
					$("#brind_list").css("margin-left",1100*direction)
				})
			})


//底部选项卡效果

	$(function(){
		for(var i=0;i<$(".tabtab li").size();i++){
			$(".tabtab li").eq(i).hover(function(){
				$(this).addClass("activetab").siblings().removeClass("activetab");
				$(".fortab li").eq($(this).index()).addClass("tabshow").siblings().removeClass("tabshow");
			})
		}
		
		
	})



//判断是否有注册过的用户名密码的cookie，如果有，则登录状态为已经登录

	/*$(function(){
		
		if($.cookie("user1")!=''){
			$("#loginsuce").html($.cookie("user1").split(" ")[0])
		}
	})*/
