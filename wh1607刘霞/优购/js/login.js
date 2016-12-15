$(function(){

	$("#forlogin").click(function(){
		
		
		$(this).attr("class","loginactive");
		$("#forreg").attr("class","");
		$(".yg_login").css("display","block");
		$(".yg_register").css("display","none");
		$(".loginnotice").html("用户登录")
	});
	$("#forreg").click(function(){
		
		
		$(this).attr("class","loginactive");
		$("#forlogin").attr("class","");
		$(".yg_register").css("display","block");
		$(".yg_login").css("display","none");
		$(".loginnotice").html("新用户注册")
	})
})


//注册页面的信息



$(function(){
	
	$("#regist").click(function(){
		//alert(a)
		
		if(a&&b&&c&&($("#checkbox1").is(":checked"))){
			
			alert("注册成功，点击确认跳转到登录页面");
			$("#forreg").attr("class","");
			$("#forlogin").attr("class","loginactive");
			$(".yg_login").css("display","block");
			$(".yg_register").css("display","none");
			
			
			
			$.cookie("user1",($('#regname').val()+' '+$('#code2').val()));
			
			//$.cookie("user1").split(" ");
			
			
		}else{
			alert("请填写注册信息");
		}
	})
	
	var a;
	var b;
	var c;
	check();
	checkyzm();
	checkmima();
	
	function check(){

				$("#regname").blur(function(){
					var reg=/^1[3|4|5|7|8][0-9]{9}$/;
				if($(this).val()==""){
					$("#inp11").html("请输入用户名")
				}else if(reg.test($(this).val())){
					$("#inp11").html("")
					return a=true;
				}else{
					$("#inp11").html("格式不正确")
					console.log($(this).val())
				}
				
			})
			
			
		
	}
	    $("#checkcon").click(function(){
        var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
        var str = '';
        for(var i = 0 ; i < 4 ; i ++ ){
        	 str += ''+arr[Math.floor(Math.random() * arr.length)];
        }
           
        	$(this).html(str);
    	})
	    function checkyzm(){
	    	$("#regcheck").blur(function(){
	    		//console.log($(this).val()==$("#checkcon").text())
	    		if($(this).val()==""){
					$("#inp22").html("请输入验证码")
				}else if($(this).val()==$("#checkcon").text()){
					$("#inp22").html("")
					return b=true;
				}else{
					$("#inp22").html("验证码有误");
					alert($("#checkcon").html())
					alert($(this).val())
				}
				
	    	})
	    	
	    	
	    }
	    
	    function checkmima(){
	    	$("#code1").blur(function(){
	    		if($(this).val()==""){
	    			$("#inp33").html("请输入密码")
	    		}else{
	    			$("#inp33").html("");
	    		}
	    	})
	    	$("#code2").blur(function(){
		    		if($(this).val()==""){
		    			$("#inp44").html("请输入确认密码")
		    		}else if($("#code1").val()==$(this).val()){
		    			$("#inp44").html("");
		    			return c=true;
		    		}else{
		    			
		    			$("#inp44").html("两次输入密码不一致，请重新输入");
		    		}
	    		})
	    }
	   
	    
	
})

//登录页面的信息

$(function(){
	$("#username").blur(function(){
		if($(this).val()==""){
			$("#inpu66").html("请输入帐号")
		}else{
			$("#inpu66").html("")
		}
	})
	$("#password").blur(function(){
		if($(this).val()==""){
			$("#inpu77").html("请输入密码")
		}else{
			$("#inpu77").html("")
		}
	})
	$("#loginer").click(function(){
		//alert($.cookie("user1").split(" ")[0])
		if(($("#username").val()!="")&&($("#password").val()!="")){
			if($.cookie("user1").split(" ")[0]==$("#username").val()){
				if($.cookie("user1").split(" ")[1]==$("#password").val()){
					alert("登录成功，即将跳转到首页");
					location.href="index.html";
				}else{
					alert("用户名或者密码输入有误，请重新输入")
				}
			}
		}
	})
	
})
