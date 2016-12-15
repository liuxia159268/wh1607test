

//放大镜

$(function(){
	
	
	$(".biggergood").hide();
	for(var i=0;i<$(".smallgood").find("li").size();i++){
		$(".smallgood").find("li").eq(i).hover(function(){
			
			$(".biggood").find("li").eq($(this).index()).show().siblings().hide();
			
		})
		
		
		$(".biggood").mousemove(function(evt){
			$(".mover").show();
			$(".biggergood").show();
			var x=evt.clientX+$(document).scrollLeft()-$(".mover").outerWidth()/2-$(".biggood").offset().left;
			var y=evt.clientY+$(document).scrollTop()-$(".mover").outerHeight()/2-$(".biggood").offset().top;;
			var scale=2.08;
			
			
			if(x<0){
				x=0;
			}else if(y<0){
				y=0;
			}else if(x>$(".biggood").outerWidth()-$(".mover").outerWidth()){
				x=$(".biggood").outerWidth()-$(".mover").outerWidth();
			}else if(y>$(".biggood").outerHeight()-$(".mover").outerHeight()){
				y=$(".biggood").outerHeight()-$(".mover").outerHeight();
			}
			
			$(".mover").css("left",x);
			$(".mover").css("top",y);
			$(".big_picer").css("left",-x*scale);
			$(".big_picer").css("top",-y*scale);
			
			
		})
		$(".biggood").mouseout(function(evt){
			console.log("aaa")
			$(".mover").hide();
			$(".biggergood").hide();
		})
		
		
		
	}
	
	var flag1;
	var flag2;
	var obj;
	var goodsid;
	
	$("#nikecolor").click(function(){
		$(this).css("border-color","red")
		for(var i=0;i<$("#nike li").size();i++){
		
		$("#nike li").eq(i).click(function(){
			$(this).css("border-color","red").siblings().css("border-color","");
			//alert($(this).text())
			flag1=true;
			goodsname=$(".titlegood").text();
			goodsprice=$(".goodprice em").text();
			goodscolor=$("#nikecolor img").attr("src");
			goodssize=$(this).text();
			goodsid=$(this).index();
			goodsnum=$("#nikecount").val();
			
		 obj=JSON.stringify({"src":goodscolor,"name":goodsname,"price":goodsprice,"num":goodsnum,"size":goodssize});
		
		
		
		
		
			
			
			})
		}
		
		
	})
	
	$("#ballcolor a").click(function(){
		//alert($(this).index())
		$("#ballcolor a").eq($(this).index()).css("border-color","red").siblings().css("border-color","")
		for(var i=0;i<$("#ball li").size();i++){
		
		$("#ball li").click(function(){
			$(this).css("border-color","red").siblings().css("border-color","");
			//alert($(this).text())
			flag2=true;
			goodsname=$(".titlegood").text();
			goodsprice=$(".goodprice em").text();
			goodscolor=$("#ballcolor img").attr("src");
			goodssize=$(this).text();
			goodsid=$(this).index();
			goodsnum=$("#ballcount").val();
			console.log($(".goodprice em").text())
		 obj=JSON.stringify({"src":goodscolor,"name":goodsname,"price":goodsprice,"num":goodsnum,"size":goodssize});
			})
		}
		
		
	})
	
		var counter=0;
		
		getgoods();
		
		function getgoods(){
			
			
			if(isNaN(parseInt($.cookie("goodsnum1")))){
				$.cookie("goodsnum1",0);
				
			}
			if(isNaN(parseInt($.cookie("goodsnum2")))){
				$.cookie("goodsnum2",0)
			}
			
			
			
			
			counter=parseInt($.cookie("goodsnum1"))+parseInt($.cookie("goodsnum2"));
		
			
			$("#shoppingcart-count").text(counter)
			$("#shoppingcart-count").css("color","red");
			
			
			
		}
		
		
		
//点击加入购物车效果，并且购物车数量可以显示
//获取商品的尺寸，根据尺寸判断是否为同一个商品

		var goodsname;
		var goodsprice;
		var goodsnum;
		var goodscolor;
		var goodssize;
		
		var aaa=0;
		$("#forbuy").click(function(){
			if(flag1){
			aaa+=parseInt($("#nikecount").val());
			
			$.cookie("goodsnum1",aaa);
			//本地存储方式，存储商品信息：数量，价格，颜色，尺寸，商品名称
			
			
			localStorage.setItem("product"+goodssize,obj);
			
			console.log(localStorage)
			
			
			getgoods();
			
			
			
			}else{
				alert("请选择商品的规格和数量")
			}
			
			
			
			
		})
		
		
		var bbb=0
		$("#forbuy2").click(function(){
			if(flag2){
			bbb+=parseInt($("#ballnum").val());
			
			getgoods();
			
			localStorage.setItem("product"+goodssize,obj);
			console.log(localStorage);
			
			$.cookie("goodsnum2",bbb)
			
			}else{
				alert("请选择商品的规格和数量")
			}
			
			
			
			
		})
		
})










	
