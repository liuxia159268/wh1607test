

//判断购物车中是否有商品，如果cookie中没有缓存的商品数据，则显示购物车为空的div，否则显示购物车信息

$(function(){
	if(localStorage.length>0){
		
		$(".nothing").hide();
		$(".hassomething").show();
	}else{
		
		$(".nothing").show();
		$(".hassomething").hide();
	}
	
	//清空购物车
	$(".count2").click(function(){
			$(".nothing").show();
			$(".hassomething").hide();
	})
	
	
	//遍历localstorage
		//console.log(localStorage.length)
		var allprice=0;
		for(var i=1;i<localStorage.length;i++){
			
			var key=localStorage.key(i);
		
		//console.log(typeof {"aaa":"bbb"})
			var objjson=JSON.parse(localStorage.getItem(key))
			
			$("tbody").append($("<tr class='goods'><td><input type='checkbox' name='newslist' /><img/></td><td class='goodsname'></td><td class='short'><span></span></td><td class='oneprice'></td><td class='goodsnum'><input class='leftclick' type='button' value='-' /><input class='goodnumer' type='text' /><input class='rightclick' type='button'  value='+' /></td><td class='goodsprice'></td><td class='deletegood'><span>移入收藏夹子</span><span class='deleteparert' style='cursor:pointer'>删除</span></td></tr>"))
			
			$(".goods ").eq(i-1).find("img").attr("src",objjson.src);
			//console.log($(".goods td").eq(1).html());
			$(".goodsname").eq(i-1).html(objjson.name);
			$(".short").eq(i-1).find("span").html("尺寸："+objjson.size);
			$(".goodnumer").eq(i-1).val(objjson.num);
			$(".oneprice").eq(i-1).text(objjson.price);
			
			$(".deleteparert").eq(i-1).click(function(){
				$(this).parent().parent().hide();
			})
			
			allprice+=parseInt(objjson.price.substring(1));
		
			
		}
		
		//首先执行计算商品价格操作，循环遍历已有的商品分别累加价格得到价格总数
		geteachprice();
		
		
		
		
		var allprice;
		function geteachprice(){
			
			for(var j=0;j<$(".leftclick").size();j++){
				
				var forgoodsprice=parseInt($(".oneprice").eq(j).text().substring(1))*parseInt($(".goodnumer").eq(j).val());
				$(".goodsprice").eq(j).html("￥"+forgoodsprice);
				
					allprice+=forgoodsprice;
				
			}
			
			
		}
		$(".leftclick").eq(0).click(function(){
					
					console.dir($(".rightclick"))
					$(".goodnumer").eq(0).val($(".goodnumer").eq(0).val()-1);
					
					});
					
		$(".rightclick").eq(0).click(function(){
					
					
					$(".goodnumer").eq(0).val(parseInt($(".goodnumer").eq(0).val())+1);
					
					});	
		$(".leftclick").eq(1).click(function(){
					
					console.dir($(".rightclick"))
					$(".goodnumer").eq(1).val($(".goodnumer").eq(1).val()-1);
					
					});
					
		$(".rightclick").eq(1).click(function(){
					
					
					$(".goodnumer").eq(1).val(parseInt($(".goodnumer").eq(1).val())+1);
					
					});	
		$(".leftclick").eq(2).click(function(){
					
					console.dir($(".rightclick"))
					$(".goodnumer").eq(2).val($(".goodnumer").eq(2).val()-1);
					
					});
					
		$(".rightclick").eq(2).click(function(){
					
					
					$(".goodnumer").eq(2).val(parseInt($(".goodnumer").eq(2).val())+1);
					
					});	
		
	//全选	
	$("#allseclect").click(function () {
		
		//console.log($("#allseclect").is(":checked"));
		
		if($("#allseclect").is(":checked")){
			
			$("tr input[name=newslist]").each(function () {
				
				$(this).attr("checked", true);
				
				$("#priceall").text("￥"+allprice)
			});
			
		
		}
		else
   		{
   			
   			
			$("tr input[name=newslist]").each(function () {
				if ($(this).attr("checked")) {
					$(this).attr("checked", false);
					$("#priceall").html(0);
					
					//$(this).next().css({ "background-color": "#ffffff", "color": "#000000" });
				} else {
					
					$(this).attr("checked", true);
					$("#priceall").text("￥"+allprice)
					//$(this).next().css({ "background-color": "#3366cc", "color": "#000000" });
				} 
			});
			
    
   		}
		
	});
	
	//每一个点击的事件
	
	
	
	
	
	
	
	
})
