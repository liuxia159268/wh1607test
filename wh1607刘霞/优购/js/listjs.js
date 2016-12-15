$(function(){
	//首先是列表搜索的划入划出事件
	
	$("#outersport").hover(function(){
		$(".forscroll1").css("display","block")
	},function(){
		$(".forscroll1").css("display","none")
	})
	
	
	$("#sporter").hover(function(){
		$(".list_brandlist").css("display","block");
		//$(this).css("border","1px solid #EEE")
		
	},function(){
		$(".list_brandlist").css("display","none")
	})
	
	$("#choosecolor").hover(function(){
		$(".colorlist").css("display","block")
	},function(){
		$(".colorlist").css("display","none")
	})
	
	
	
	
	
	//解析列表页下方的商品
	
	/*var str1=$.ajax({
		type:"GET",
		url:"list.json",
		datatype:"json",
		success:function(data){
			return data;
		}
	});
	console.dir(str1)*/
	
	$.get("js/list.json",function(str){
		
		var count=0;
		for(var key in str){
			
			$(".list_shopping").append("<dl><dt><a href='#'><img /><b></b></a></dt><dd><a href='#'></a></dd><dd><em></em><i></i></dd></dl>")
			count++;
			console.log(str[key].dtb)
			
			//console.log(count)
			
				
				$(".list_shopping dl").eq(count-1).find("dt a img").attr("src",str[key].dtimg);
				$(".list_shopping dl").eq(count-1).find("dt b").html(str[key].dtb);
				$(".list_shopping dl").eq(count-1).find("dd a").html(str[key].title);
				$(".list_shopping dl").eq(count-1).find("dd i").html(str[key].ddi);
				$(".list_shopping dl").eq(count-1).find("dd em").html(str[key].dd);
				
				
				
				
				
				//由于其他商品页面没有连接地址，现在给做过详情页的两个商品写入跳转到相应详情页的连接，方便做购物车功能
				$(".list_shopping dl").eq(0).find("dt a").attr("href","details2.html");
				$(".list_shopping dl").eq(1).find("dt a").attr("href","details1.html");
		}
		
		
			
		
		
})		
	
	
	
})
