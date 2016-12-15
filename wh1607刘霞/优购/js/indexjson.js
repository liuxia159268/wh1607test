
		$.get("js/floor.json",function(str){
			var count=0;
			(function getcount(obj){
					
				for(var attr in obj){
				count++;
	
				}
				return count++;
			})(str);

		for(var i=0;i<count;i++){
			$(".main").append("<div class='floor1111'></div>");
		}
		
		
		var f1h3=str.f1.h3;
		var f1span=str.f1.span;
		var f1title=str.f1.title;	
		var f1title1=str.f1.bigimg;
		var f1_left=str.f1.fleft_list;
		var f1_right=str.f1.fright_list;
		
	
		$(".floor1111").eq(0).append("<h3 id='fone'>"+f1h3+"<span>"+f1span+"</span><a href='#'>more>></a></h3><div class='floor_1'><div class='floor-left'><a class='f-titler' href='#'><img src='"+f1title+"'/></a><ul class='fleft_list'></ul></div>");
		for(var i=0;i<f1_left.length;i++){
			$(".floor_1").eq(0).find("ul").append("<li><a href='#'><img src='"+f1_left[i]+"'</a></li>");			
		}
		$(".floor_1").eq(0).append("<div class='floor-right'><div id='f-right1'><a href='#'><img src='"+f1title1+"'/></a></div><div id='right-list'></div></div></div>");
		for(var j=0;j<f1_right.length;j++){
			$(".floor_1").eq(0).find("#right-list").append("<a href='#'><img src='"+f1_right[j]+"'</a>");	
		}
		
		
		var f2h3=str.f2.h3;
		var f2span=str.f2.span;
		var f2title=str.f2.title;	
		var f2title1=str.f2.bigimg;
		var f2_left=str.f2.fleft_list;
		var f2_right=str.f2.fright_list;
		
		
		
		$(".floor1111").eq(1).append("<h3 id='ftwo'>"+f2h3+"<span>"+f2span+"</span><a href='#'>more>></a></h3><div class='floor_1'><div class='floor-left'><a class='f-titler' href='#'><img src='"+f2title+"'/></a><ul class='fleft_list'></ul></div>");
		for(var i=0;i<f2_left.length;i++){
			$(".floor_1").eq(1).find("ul").append("<li><a href='#'><img src='"+f2_left[i]+"'</a></li>");			
		}
		$(".floor_1").eq(1).append("<div class='floor-right'><div id='f-right1'><a href='#'><img src='"+f2title1+"'/></a></div><div id='right-list'></div></div></div>");
		for(var j=0;j<f2_right.length;j++){
			$(".floor_1").eq(1).find("#right-list").append("<a href='#'><img src='"+f2_right[j]+"'</a>");	
		}
		
		
		var f3h3=str.f3.h3;
		var f3span=str.f3.span;
		var f3title=str.f3.title;	
		var f3title1=str.f3.bigimg;
		var f3_left=str.f3.fleft_list;
		var f3_right=str.f3.fright_list;
		
		
		
		$(".floor1111").eq(2).append("<h3 id='fthree'>"+f3h3+"<span>"+f3span+"</span><a href='#'>more>></a></h3><div class='floor_1'><div class='floor-left'><a class='f-titler' href='#'><img src='"+f3title+"'/></a><ul class='fleft_list'></ul></div>");
		for(var i=0;i<f3_left.length;i++){
			$(".floor_1").eq(2).find("ul").append("<li><a href='#'><img src='"+f3_left[i]+"'</a></li>");			
		}
		$(".floor_1").eq(2).append("<div class='floor-right'><div id='f-right1'><a href='#'><img src='"+f3title1+"'/></a></div><div id='right-list'></div></div></div>");
		for(var j=0;j<f3_right.length;j++){
			$(".floor_1").eq(2).find("#right-list").append("<a href='#'><img src='"+f3_right[j]+"'</a>");	
		}
		
		
		
		var f4h3=str.f4.h3;
		var f4span=str.f4.span;
		var f4title=str.f4.title;	
		var f4title1=str.f4.bigimg;
		var f4_left=str.f4.fleft_list;
		var f4_right=str.f4.fright_list;
		
		
		
		$(".floor1111").eq(3).append("<h3 id='ffour'>"+f4h3+"<span>"+f4span+"</span><a href='#'>more>></a></h3><div class='floor_1'><div class='floor-left'><a class='f-titler' href='#'><img src='"+f4title+"'/></a><ul class='fleft_list'></ul></div>");
		for(var i=0;i<f4_left.length;i++){
			$(".floor_1").eq(3).find("ul").append("<li><a href='#'><img src='"+f4_left[i]+"'</a></li>");			
		}
		$(".floor_1").eq(3).append("<div class='floor-right'><div id='f-right1'><a href='#'><img src='"+f4title1+"'/></a></div><div id='right-list'></div></div></div>");
		for(var j=0;j<f4_right.length;j++){
			$(".floor_1").eq(3).find("#right-list").append("<a href='#'><img src='"+f4_right[j]+"'</a>");	
		}
		
		
		var f5h3=str.f5.h3;
		var f5span=str.f5.span;
		var f5title=str.f5.title;	
		var f5title1=str.f5.bigimg;
		var f5_left=str.f5.fleft_list;
		var f5_right=str.f5.fright_list;
		
		
		
		$(".floor1111").eq(4).append("<h3 id='ffive'>"+f5h3+"<span>"+f5span+"</span><a href='#'>more>></a></h3><div class='floor_1'><div class='floor-left'><a class='f-titler' href='#'><img src='"+f5title+"'/></a><ul class='fleft_list'></ul></div>");
		for(var i=0;i<f5_left.length;i++){
			$(".floor_1").eq(4).find("ul").append("<li><a href='#'><img src='"+f5_left[i]+"'</a></li>");			
		}
		$(".floor_1").eq(4).append("<div class='floor-right'><div id='f-right1'><a href='#'><img src='"+f5title1+"'/></a></div><div id='right-list'></div></div></div>");
		for(var j=0;j<f5_right.length;j++){
			$(".floor_1").eq(4).find("#right-list").append("<a href='#'><img src='"+f5_right[j]+"'</a>");	
		}
		
		
		
		
		
		
		
		
		
		
		
	
		})
