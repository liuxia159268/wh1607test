$(function(){
 				$("#Korea").find("a").hover(function(){
 					this.innerHTML="Seoul Station";
 					
 				},function(){
 					this.innerHTML="首尔站";
 					
 				})
 			})


$(function(){
		 		$("#mobile_phone").hover(function(){
		 			$(this).find(".ThinkChange").css({"display":"block"})
		 		},function(){
		 			$(this).find(".ThinkChange").css({"display":"none"})
		 		})
		 	})

$(function(){
		 		$("#my_yougou").hover(function(){
		 			$(this).find(".my_yg_1").css({"display":"block"})
		 		},function(){
		 			
		 			$(this).find(".my_yg_1").css({"display":"none"});
		 		})
		 	})

$(function(){
		 		$("#notice").hover(function(){
		 			$(this).find(".notice_list").css({"display":"block"})
		 		},function(){
		 			$(this).find(".notice_list").css({"display":"none"})
		 		})
		 	})

$(function(){
		 		$("#headermore").hover(function(){
		 			$(this).find(".header_more").css({"display":"block"})
		 		},function(){
		 			$(this).find(".header_more").css({"display":"none"})
		 		})
		 	})