var BANK_TYPE_ALIPAY="alipay";var BANK_TYPE_BILLPAY="billpay";var BANK_TYPE_MOBILEPAY="mobliepay";var BANK_TYPE_TENPAY="tenpay";var BANK_TYPE_UNIONPAY="unionB2cPay";var BANK_TYPE_CMBPAY="cmbB2cPay";var BANK_TYPE_ICBCPAY="icbcB2cPay";var BANK_TYPE_ABCPAY="abcB2cPay";var BANK_TYPE_CCBPAY="ccbB2cPay";var BANK_TYPE_BOCPAY="bocB2cPay";var BANK_TYPE_BCOMPAY="bcomB2cPay";var BANK_TYPE_LAKALAPAY="lakalaB2cPay";var BANK_TYPE_YIJIAPAY="yijipay";var BANK_TYPE_WEIXINAPAY="weixinpay";var payType_bankPay="bankPay";var payType_motoPay="motoPay";var payConfData=new YouGou.Util.Map();payConfData.put("zhifubao",{bankType:BANK_TYPE_ALIPAY,bankNo1:1001,payType:"",bankNo2:"",bankGroup:"1"});payConfData.put("lakala",{bankType:BANK_TYPE_LAKALAPAY,bankNo1:1002,payType:"",bankNo2:"",bankGroup:"1"});payConfData.put("kuaiqian",{bankType:BANK_TYPE_BILLPAY,bankNo1:1003,payType:"",bankNo2:"",bankGroup:"1"});payConfData.put("caifutong",{bankType:BANK_TYPE_TENPAY,bankNo1:1004,payType:"",bankNo2:"",bankGroup:"1"});payConfData.put("yinlian",{bankType:BANK_TYPE_UNIONPAY,bankNo1:3006,payType:"",bankNo2:"",bankGroup:"1"});payConfData.put("shouji",{bankType:BANK_TYPE_MOBILEPAY,bankNo1:1005,payType:"",bankNo2:"",bankGroup:"1"});payConfData.put("jwzhifubao",{bankType:BANK_TYPE_ALIPAY,bankNo1:5001,payType:"",bankNo2:"",bankGroup:"1"});payConfData.put("seoul_jwzhifubao",{bankType:BANK_TYPE_ALIPAY,bankNo1:7001,payType:"",bankNo2:"",bankGroup:"1"});payConfData.put("zhifubao_saoma",{bankType:BANK_TYPE_ALIPAY,bankNo1:6001,payType:"",bankNo2:"",bankGroup:"1"});payConfData.put("yiji",{bankType:BANK_TYPE_YIJIAPAY,bankNo1:1006,payType:"",bankNo2:"",bankGroup:"1"});payConfData.put("weixin",{bankType:BANK_TYPE_WEIXINAPAY,bankNo1:1007,payType:"",bankNo2:"",bankGroup:"1"});payConfData.put("gongshang",{bankType:BANK_TYPE_ICBCPAY,bankNo1:3002,payType:"",bankNo2:"ICBCB2C",bankGroup:"2"});payConfData.put("zhaoshang",{bankType:BANK_TYPE_CMBPAY,bankNo1:3001,payType:"",bankNo2:"",bankGroup:"2"});payConfData.put("nongye",{bankType:BANK_TYPE_ABCPAY,bankNo1:3003,payType:"",bankNo2:"ABC",bankGroup:"2"});payConfData.put("jianshe",{bankType:BANK_TYPE_CCBPAY,bankNo1:3004,payType:"",bankNo2:"CCB",bankGroup:"2"});payConfData.put("zhongguo",{bankType:BANK_TYPE_BOCPAY,bankNo1:3005,payType:"",bankNo2:"BOCB2C",bankGroup:"2"});payConfData.put("jiaotong",{bankType:BANK_TYPE_BCOMPAY,bankNo1:3007,payType:"",bankNo2:"BCOM",bankGroup:"2"});payConfData.put("xingye",{bankType:BANK_TYPE_BILLPAY,bankNo1:10033,payType:10,bankNo2:"CIB",bankGroup:"2"});payConfData.put("minsheng",{bankType:BANK_TYPE_BILLPAY,bankNo1:10034,payType:10,bankNo2:"CMBC",bankGroup:"2"});payConfData.put("guangfa",{bankType:BANK_TYPE_BILLPAY,bankNo1:10035,payType:10,bankNo2:"GDB",bankGroup:"2"});payConfData.put("pufa",{bankType:BANK_TYPE_TENPAY,bankNo1:10042,payType:"",bankNo2:"SPDB",bankGroup:"2"});payConfData.put("pingan",{bankType:BANK_TYPE_TENPAY,bankNo1:10043,payType:"",bankNo2:"PAB",bankGroup:"2"});payConfData.put("beijing",{bankType:BANK_TYPE_TENPAY,bankNo1:10044,payType:"",bankNo2:"BOB",bankGroup:"2"});payConfData.put("guangda",{bankType:BANK_TYPE_MOBILEPAY,bankNo1:10051,payType:"",bankNo2:"CEBB",bankGroup:"2"});payConfData.put("zhongxin",{bankType:BANK_TYPE_MOBILEPAY,bankNo1:10052,payType:"",bankNo2:"ECITIC",bankGroup:"2"});payConfData.put("shenfazhan",{bankType:BANK_TYPE_BILLPAY,bankNo1:10036,payType:10,bankNo2:"SDB",bankGroup:"2"});payConfData.put("huaxia",{bankType:BANK_TYPE_BILLPAY,bankNo1:10037,payType:10,bankNo2:"HXB",bankGroup:"2"});payConfData.put("youzheng",{bankType:BANK_TYPE_BILLPAY,bankNo1:10038,payType:10,bankNo2:"PSBC",bankGroup:"2"});payConfData.put("shanghai",{bankType:BANK_TYPE_BILLPAY,bankNo1:10039,payType:10,bankNo2:"SHB",bankGroup:"2"});payConfData.put("guangzhou",{bankType:BANK_TYPE_BILLPAY,bankNo1:100310,payType:10,bankNo2:"GZCB",bankGroup:"2"});payConfData.put("hangzhou",{bankType:BANK_TYPE_BILLPAY,bankNo1:100311,payType:10,bankNo2:"HZB",bankGroup:"2"});payConfData.put("bohai",{bankType:BANK_TYPE_BILLPAY,bankNo1:100312,payType:10,bankNo2:"CBHB",bankGroup:"2"});payConfData.put("dongya",{bankType:BANK_TYPE_BILLPAY,bankNo1:100313,payType:10,bankNo2:"BEA",bankGroup:"2"});payConfData.put("ningbo",{bankType:BANK_TYPE_BILLPAY,bankNo1:100314,payType:10,bankNo2:"NBCB",bankGroup:"2"});payConfData.put("gongshang_quick",{bankType:BANK_TYPE_ALIPAY,bankNo1:"10010107",payType:payType_motoPay,bankNo2:"ICBC-MOTO-CREDIT",bankGroup:"3"});payConfData.put("zhaoshang_quick",{bankType:BANK_TYPE_ALIPAY,bankNo1:"10012607",payType:payType_motoPay,bankNo2:"CMB-EXPRESS-CREDIT",bankGroup:"3"});payConfData.put("jianshe_quick",{bankType:BANK_TYPE_ALIPAY,bankNo1:"10010207",payType:payType_motoPay,bankNo2:"CCB-MOTO-CREDIT",bankGroup:"3"});payConfData.put("zhongguo_quick",{bankType:BANK_TYPE_ALIPAY,bankNo1:"10010307",payType:payType_motoPay,bankNo2:"BOC-MOTO-CREDIT",bankGroup:"3"});payConfData.put("nongye_quick",{bankType:BANK_TYPE_ALIPAY,bankNo1:"10010407",payType:payType_motoPay,bankNo2:"ABC-EXPRESS-CREDIT",bankGroup:"3"});payConfData.put("pingan_quick",{bankType:BANK_TYPE_ALIPAY,bankNo1:"10010507",payType:payType_motoPay,bankNo2:"SPABANK-MOTO-CREDIT",bankGroup:"3"});payConfData.put("shenfazhan_quick",{bankType:BANK_TYPE_ALIPAY,bankNo1:"10010607",payType:payType_motoPay,bankNo2:"SDB-EXPRESS-CREDIT",bankGroup:"3"});payConfData.put("huaxia_quick",{bankType:BANK_TYPE_ALIPAY,bankNo1:"10010707",payType:payType_motoPay,bankNo2:"HXBANK-EXPRESS-CREDIT",bankGroup:"3"});payConfData.put("minsheng_quick",{bankType:BANK_TYPE_ALIPAY,bankNo1:"10010807",payType:payType_motoPay,bankNo2:"CMBC-EXPRESS-CREDIT",bankGroup:"3"});payConfData.put("xingye_quick",{bankType:BANK_TYPE_ALIPAY,bankNo1:"10010907",payType:payType_motoPay,bankNo2:"CIB-EXPRESS-CREDIT",bankGroup:"3"});payConfData.put("beijing_quick",{bankType:BANK_TYPE_ALIPAY,bankNo1:"10011007",payType:payType_motoPay,bankNo2:"BJBANK-EXPRESS-CREDIT",bankGroup:"3"});payConfData.put("shanghainongshang_quick",{bankType:BANK_TYPE_ALIPAY,bankNo1:"10011107",payType:payType_motoPay,bankNo2:"SHRCB-EXPRESS-CREDIT",bankGroup:"3"});payConfData.put("guangfa_quick",{bankType:BANK_TYPE_ALIPAY,bankNo1:"10011207",payType:payType_motoPay,bankNo2:"GDB-EXPRESS-CREDIT",bankGroup:"3"});payConfData.put("guangda_quick",{bankType:BANK_TYPE_ALIPAY,bankNo1:"10011307",payType:payType_motoPay,bankNo2:"CEB-EXPRESS-CREDIT",bankGroup:"3"});payConfData.put("ningxia_quick",{bankType:BANK_TYPE_ALIPAY,bankNo1:"10011407",payType:payType_motoPay,bankNo2:"NXBANK-EXPRESS-CREDIT",bankGroup:"3"});payConfData.put("dalian_quick",{bankType:BANK_TYPE_ALIPAY,bankNo1:"10011507",payType:payType_motoPay,bankNo2:"DLB-EXPRESS-CREDIT",bankGroup:"3"});payConfData.put("dongguan_quick",{bankType:BANK_TYPE_ALIPAY,bankNo1:"10011607",payType:payType_motoPay,bankNo2:"BOD-EXPRESS-CREDIT",bankGroup:"3"});payConfData.put("ningbo_quick",{bankType:BANK_TYPE_ALIPAY,bankNo1:"10011707",payType:payType_motoPay,bankNo2:"NBBANK-EXPRESS-CREDIT",bankGroup:"3"});payConfData.put("tianjin_quick",{bankType:BANK_TYPE_ALIPAY,bankNo1:"10011807",payType:payType_motoPay,bankNo2:"TCCB-EXPRESS-CREDIT",bankGroup:"3"});payConfData.put("hangzhou_quick",{bankType:BANK_TYPE_ALIPAY,bankNo1:"10011907",payType:payType_motoPay,bankNo2:"HZCB-EXPRESS-CREDIT",bankGroup:"3"});payConfData.put("hebei_quick",{bankType:BANK_TYPE_ALIPAY,bankNo1:"10012007",payType:payType_motoPay,bankNo2:"BHB-EXPRESS-CREDIT",bankGroup:"3"});payConfData.put("jiangsu_quick",{bankType:BANK_TYPE_ALIPAY,bankNo1:"10012107",payType:payType_motoPay,bankNo2:"JSBANK-EXPRESS-CREDIT",bankGroup:"3"});payConfData.put("nanjing_quick",{bankType:BANK_TYPE_ALIPAY,bankNo1:"10012207",payType:payType_motoPay,bankNo2:"NJCB-EXPRESS-CREDIT",bankGroup:"3"});payConfData.put("weishang_quick",{bankType:BANK_TYPE_ALIPAY,bankNo1:"10012307",payType:payType_motoPay,bankNo2:"HSBANK-EXPRESS-CREDIT",bankGroup:"3"});payConfData.put("tailong_quick",{bankType:BANK_TYPE_ALIPAY,bankNo1:"10012407",payType:payType_motoPay,bankNo2:"ZJTLCB-EXPRESS-CREDIT",bankGroup:"3"});payConfData.put("wujiangnongshang_quick",{bankType:BANK_TYPE_ALIPAY,bankNo1:"10012507",payType:payType_motoPay,bankNo2:"WJRCB-EXPRESS-CREDIT",bankGroup:"3"});payConfData.put("zhongxin_quick",{bankType:BANK_TYPE_ALIPAY,bankNo1:"10012707",payType:payType_motoPay,bankNo2:"CITIC-EXPRESS-CREDIT",bankGroup:"3"});payConfData.put("pufa_quick",{bankType:BANK_TYPE_ALIPAY,bankNo1:"10012807",payType:payType_motoPay,bankNo2:"SPDB-EXPRESS-CREDIT",bankGroup:"3"});function initPay(b){$("#lastPayType dd").bind("click",function(){if($(this).hasClass("dis")){return}try{var d=composeQueryCondition()}catch(g){var d=ygOrder.base.composeQueryCondition()}$("#lastPayType dd").removeClass("curr");$(this).addClass("curr");var c=$(this).find("input[type=radio]").attr("name");$(this).find("input[name=webbankpay]").attr("checked",true);$("input[name=payment]").attr("checked",false);$("#payment_1").attr("checked",true);$("#mobileCheckDiv").hide();selectedBankHanlder($(this).find("input[type=radio]").val());try{var f=composeQueryCondition()}catch(g){var f=ygOrder.base.composeQueryCondition()}if(d!=f){try{paymentChanged()}catch(g){ygOrder.base.calculateCart()}}});$(".jsPayTypeList dd").click(function(){});$("#payTypeList dd").bind("click",function(){if($(this).hasClass("dis")){return}try{var f=composeQueryCondition()}catch(h){var f=ygOrder.base.composeQueryCondition()}$("#payTypeList dd").removeClass("curr");$(this).addClass("curr");if($(this).hasClass("alizfb")){$(this).parents("div:first").find("#pay_p").css({position:"absolute",top:"125px",left:0});$(this).parents("div:first").find("#pay_span").show()}else{$(this).parents("div:first").find("#payBtn").css({position:"static"});$(this).parents("div:first").find("#pay_p").css({position:"static"});$(this).parents("div:first").find("#pay_span").hide()}if($(this).hasClass("weixin")){$(this).parents("div:first").find("#payBtn").hide()}var c=$(this).find("input[type=radio]").attr("name");if(c=="webbankpay"){$(this).find("input[name=webbankpay]").attr("checked","checked");$("#payment_1").attr("checked","checked")}else{$("input[name=webbankpay]").attr("checked",false)}if($(this).find("input").hasClass("jsFqpayBankRadio")){var d=$(this).find(".jsFqpayBox");d.show();d.find("input[name=fqqsRadio]").change(function(){d.find(".jsFqqs").html($(this).val())})}else{$(".jsFqpayBox").hide()}selectedBankHanlder($(this).find("input[type=radio]").val());$("#mobileCheckDiv").hide();try{var g=composeQueryCondition()}catch(h){var g=ygOrder.base.composeQueryCondition()}if(f!=g){try{paymentChanged()}catch(h){ygOrder.base.calculateCart()}}getSendPayData("#payTypeList")});var a=$('input:radio[name="webbankpay"]:checked').val();if(!YouGou.Util.isEmpty(a)){$('input:radio[name="webbankpay"]:checked').addClass("curr");selectedBankHanlder(a)}}function getHelp(c,a){var b=$(".payproblem");switch(c){case"1":if(a!="6001"){b.hide()}else{b.hide();b.eq(1).show()}break;case"2":b.hide();b.eq(0).show();break;case"3":b.hide();b.eq(2).show();break;default:b.hide();break}}function selectedBankHanlder(b){if(YouGou.Util.isEmpty(b)){return}var a=payConfData.get(b);if(YouGou.Util.isNull(a)){return}$("#paymethod").val(a.payType);$("#defaultbank").val(a.bankNo2);$("#bankType").val(a.bankType);$("#onlinePayStyleNo").val(a.bankNo1);getHelp(a.bankGroup,a.bankNo1)}function modifyPayType(a){if(a!="jwzhifubao"||a!="seoul_jwzhifubao"){$("#lastPayType dd").unbind("click");$("#lastPayType").hide();$("#payTypeList dl:first").css({"margin-top":"0"});$("#payTypeList dl:eq(1)").removeAttr("style");$("#payTypeList").show();$("#paymethod,#defaultbank,#bankType,#onlinePayStyleNo").val("");$("#aliQRcodeArea_t").hide();$("#wxQRcodeArea_t").hide()}$(".payNowBtn").css("display","inline-block");getHelp(null,null)}function saveBankHanlder(d){var c=$("#tradeCurrency").val();try{payData=null;payDataWx=null;$("#aliQRcodeArea_t").html("");$("#wxQRcodeArea_t").html("");closeDialog()}catch(f){ygDialog.close()}$("#payTypeList").hide();$("#payTypeList dl dd").removeClass("curr");var a=$("#lastPayType");var g=false;if(d.bankNo.indexOf("_quick")!=-1){g=true}var b=[];b.push('<dl class="clearfix"><dt class="f14">您当前选择的支付方式是：'+d.bankName+"</dt>");b.push('<dd class="curr currPayType"><span><input type="radio" name="webbankpay" id="bank_'+d.bankNo+'" value="'+d.bankNo+'" checked="checked" class="curr" /></span>');b.push('<img src="'+d.bankImg+'" title="'+d.bankName+'" alt="'+d.bankName+'"/>');if(g){b.push("<sup></sup>")}if(c!="HKD"){b.push('<a href="javascript:void(0);" onclick="modifyPayType(\''+d.bankNo+'\');" class="cblue mdpay_lnk">点此修改在线支付方式 &gt;&gt;</a></p>')}b.push('<input type="hidden" id="lastAlipay" value="lastAlipay"/><input type="hidden" id="lastWx" value="lastWx"/>');b.push("</dd></dl>");a.html(b.join(""));$("input[name=payment]").attr("checked",false);$("#payment_1").attr("checked",true);$("#mobileCheckDiv").hide();try{ygOrder.base.calculateCart()}catch(f){}a.show();selectedBankHanlder(d.bankNo)}var isJoinBank=false;var startTime="2012/12/07 11:55";var endTime="2012/12/13 12:05";function joinBank(f){var a=$("#tradeCurrency").val();if(a=="HKD"){isJoinBank=false}if(isJoinBank){try{var d="/cms_outlets_sysdate.jhtml";var c=0;$.ajax({url:d,cache:false,async:false,type:"post",dataType:"string",success:function(e){var h=e;if(ValidtorTime(h,startTime)&&!ValidtorTime(h,endTime)){c=1}if(ValidtorTime(h,endTime)){c=2}b(c,f)}})}catch(g){}}function b(e,h){if(e==1){if(h=="window"){$("#pinganBank").addClass("dis");$("#pinganBank").find("input[type=radio]").attr("disabled","disabled").attr("checked",false);$("#pinganBank").find("img").attr("src","/template/common/images/bank/bank44-1.png");$("#sfzBank").addClass("dis");$("#sfzBank").find("input[type=radio]").attr("disabled","disabled").attr("checked",false);$("#sfzBank").find("img").attr("src","/template/common/images/bank/bank51-1.png")}else{$("#payTypeList input[type=radio][name=webbankpay]").each(function(){if($(this).val()=="pingan_quick"){$(this).attr("id","bank_zhongxin_quick").val("zhongxin_quick");$(this).closest("dd").find("img").attr("src","/template/common/images/bank/bank75.png").attr("title","中信银行").attr("alt","中信银行")}if($(this).val()=="pingan"||$(this).val()=="shenfazhan"||$(this).val()=="pingan_quick"||$(this).val()=="shenfazhan_quick"){$(this).attr("disabled","disabled").attr("checked",false);$(this).closest("dd").addClass("dis");$(this).attr("disabled","disabled").attr("checked",false);if($(this).val()=="pingan"||$(this).val()=="pingan_quick"){$(this).closest("dd").find("img").attr("src","/template/common/images/bank/bank44-1.png")}else{$(this).closest("dd").find("img").attr("src","/template/common/images/bank/bank51-1.png")}}});$("#paymentBank").after('<div class="warnTips bankJoin">因为深圳发展银行和平安银行合并，'+startTime+"至"+endTime+"两家银行将停机升级，请选择其它银行支付，敬请谅解。 </div>");if($("#lastPayType").find("input[name=webbankpay]").val()=="pingan"||$("#lastPayType").find("input[name=webbankpay]").val()=="shenfazhan"){$("#lastPayType").hide();$("#payTypeList").show()}}}if(e==2){if(h=="window"){$("#pinganBank").removeClass("dis").append('<span class="bankSeltips ml25">支持深圳发展银行</span>');$("#sfzBank").addClass("dis");$("#sfzBank").find("input[type=radio]").attr("disabled","disabled");$("#sfzBank").append('<span class="bankSeltips">请选择平安银行付款</span>');$("#sfzBank").find("img").attr("src","/template/common/images/bank/bank51-1.png")}else{$("#payTypeList input[type=radio][name=webbankpay]").each(function(){if($(this).val()=="pingan"||$(this).val()=="pingan_quick"){$(this).closest("dd").append('<span class="bankSeltips ml25">支持深圳发展银行</span>')}if($(this).val()=="shenfazhan"||$(this).val()=="shenfazhan_quick"){$(this).closest("dd").addClass("dis");$(this).closest("dd").find("input[type=radio]").attr("disabled","disabled");$(this).closest("dd").append('<span class="bankSeltips">请选择平安银行付款</span>');$(this).closest("dd").find("img").attr("src","/template/common/images/bank/bank51-1.png")}});$("#paymentBank").after('<div class="warnTips bankJoin"> 因为深圳发展银行和平安银行合并成”平安银行”，请选择”平安银行”付款，敬请谅解。 </div>');if($("#lastPayType").find("input[name=webbankpay]").val()=="shenfazhan"){$("#lastPayType").hide();$("#payTypeList").show()}}}}}function ValidtorTime(d,c){var b=new Date(d.replace(/\-/g,"/"));var a=new Date(c.replace(/\-/g,"/"));if(b>a){return true}return false}$(function(){joinBank("");showSaoma();$("#payTypeList dd").hover(function(){if($(this).hasClass("dis")){return}$(this).addClass("hover")},function(){$(this).removeClass("hover")});getSendPayData("#lastPayType")});function showSaoma(){var c="2015/03/04 23:59:59";var a="2015/04/23 00:00:00";try{var b="/cms_outlets_sysdate.jhtml";$.ajax({url:b,cache:false,async:false,type:"post",dataType:"string",success:function(e){var f=e;if(ValidtorTime(f,c)&&!ValidtorTime(f,a)){$("span[name='zhifubaoTip']").text("扫码立减5元");$(".smtip").css("display","inline-block");$(".alipayTips").css("display","inline-block");$(".tit").live("mouseenter",function(g){g.stopPropagation();$(".desc").css("display","block")});$(".tit").live("mouseleave",function(g){g.stopPropagation();$(".desc").css("display","none")})}else{$(".smtip").text("支持银行卡快捷");$(".alipayTips").css("display","none")}}})}catch(d){}}var payDiv='<div class="aliQRframe"><span id="waitQrCode" style="display:none"></span><div class="aliQRpage"><iframe class="alipayqrcodeFrame" width="600px" height="800px" frameborder="0" name="alipayqrcodeFrame" scrolling="no"></iframe></div></div>';var payData=null;var payDivWx='<div class="wxQRframe"><span id="waitQrCode" style="display:none"></span><div class="wxQRpage"><iframe class="wxQrcodeFrame" width="600px" height="800px" frameborder="0" name="wxQrcodeFrame" scrolling="no"></iframe></div></div>';var payDataWx=null;function getSendPayData(c){if($("#payorderForm").length>0){var b=$("#bizNo").val();var a=$("#onlinePayStyleNo").val();if($("#bank_zhifubao,#bank_zhifubao_saoma",c).attr("checked")){if(payData!=null){if($("#aliQRcodeArea_o").hasClass("iframeload")&&$(".aliQRframe","#aliQRcodeArea_t").size()<1){$("#aliQRcodeArea_t").append($(".aliQRframe","#aliQRcodeArea_o"));$("#waitQrCode",c).html('<img src="/images/loading.gif" />二维码生成中，请稍候...');$("#waitQrCode",c).show();$(".alipayqrcodeFrame").load(function(){$("#waitQrCode",c).html("");$("#waitQrCode",c).hide()})}$(".aliQRcodeArea").slideDown("normal")}else{if($("#lastAlipay")[0]){$("#aliQRcodeArea_t").append($(payDiv))}$(".aliQRcodeArea").show().addClass("iframeload");$("#waitQrCode",c).html('<img src="/images/loading.gif" />二维码生成中，请稍候...');$("#waitQrCode",c).show();$.ajax({type:"post",url:"/pay/getSendPayData.jhtml",data:$("#payorderForm").serialize(),success:function(d){if(!YouGou.Util.isEmpty(d)){if(d=="0"||d=="1"){window.location.href="/pay/paySuccessWarning.jhtml?onlinePayStyleNo="+a+"&orderNo="+b+"&hrefFlag="+d}else{payData=d;$(".alipayqrcodeFrame").attr("src",payData);$(".alipayqrcodeFrame").load(function(){$("#waitQrCode",c).html("");$("#waitQrCode",c).hide()})}}else{$("#waitQrCode",c).html("");$("#waitQrCode",c).hide()}},error:function(d){$("#waitQrCode",c).html("");$("#waitQrCode",c).hide()}})}$("html,body").animate({scrollTop:$("#bank_zhifubao,#bank_zhifubao_saoma",c).offset().top-59},1000)}else{$(".aliQRcodeArea").hide()}if($("#bank_weixin",c).attr("checked")){$(".payNowBtn").css("display","none");if(payDataWx!=null){if($("#wxQRcodeArea_o").hasClass("iframeload")&&$(".wxQRframe","#wxQRcodeArea_t").size()<1){$("#wxQRcodeArea_t").append($(".wxQRframe","#wxQRcodeArea_o"));$("#waitQrCode",c).html('<img src="/images/loading.gif" />二维码生成中，请稍候...');$("#waitQrCode",c).show();$(".wxQrcodeFrame").load(function(){$("#waitQrCode",c).html("");$("#waitQrCode",c).hide()})}$(".wxQRcodeArea").slideDown("normal")}else{if($("#lastWx")[0]){$("#wxQRcodeArea_t").append($(payDivWx))}$(".wxQRcodeArea").show().addClass("iframeload");$("#waitQrCode",c).html('<img src="/images/loading.gif" />二维码生成中，请稍候...');$("#waitQrCode",c).show();$.ajax({type:"post",url:"/pay/getSendPayData.jhtml",type:"post",dataType:"string",data:$("#payorderForm").serialize(),success:function(d){if(!YouGou.Util.isEmpty(d)){if(d=="0"||d=="1"){window.location.href="/pay/paySuccessWarning.jhtml?onlinePayStyleNo="+a+"&orderNo="+b+"&hrefFlag="+d}else{payDataWx=d;$(".wxQrcodeFrame").attr("src",payDataWx);$(".wxQrcodeFrame").load(function(){$("#waitQrCode",c).html("");$("#waitQrCode",c).hide()})}}else{$("#waitQrCode",c).html("");$("#waitQrCode",c).hide()}},error:function(d){$("#waitQrCode",c).html("");$("#waitQrCode",c).hide()}})}$("html,body").animate({scrollTop:$("#bank_weixin",c).offset().top-59},1000);checkWxPayOrderStatus(a,b)}else{$(".payNowBtn").css("display","inline-block");$(".wxQRcodeArea").hide()}}}function checkWxPayOrderStatus(c,d){if(!YouGou.Util.isEmpty(c)&&!YouGou.Util.isEmpty(d)&&c=="1007"){var a=60*60*1000;var b=$("#tradeOutTime").val();if(b.length>0&&b!="0"){a=parseInt(b)*60*1000}var e=setInterval(function(){a-=1000;if(a<=1000){clearInterval(e);window.location.href="/pay/paySuccessWarning.jhtml?orderNo="+d+"&hrefFlag=1"}else{var f=$("#onlinePayStyleNo").val();if(f=="1007"){$.ajax({type:"post",url:"/pay/checkPayOrderStatus.jhtml",data:{bizNo:d},success:function(g){if(g=="success"){clearInterval(e);window.location.href="/pay/paySuccess.jhtml?bizNo="+d+"&bankNo="+c}},error:function(g){clearInterval(e)}})}}},1000)}};