//分享
$(document).ready(function() {
	window._bd_share_config = {
		common : {
			bdText : '内容内容',	
			bdDesc : '自定义分享摘要',	
			bdUrl : 'www.szdart.com', 	
			bdPic : '自定义分享图片'
		},
		share : [{
			"bdSize" : 16
		}],
	}
	with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)];
});

//nav导航
$(document).ready(function(){
	$(".navArea li").hover(function(){
		$(this).children("div").stop().slideToggle(150);
	});
	
	//侧导航
	var sidebarHalfHeight = -(parseInt($(".sidebar").height())/2);
	$(".sidebar").css({"margin-top":sidebarHalfHeight});
	$(window).scroll(function(){
		var winScrollTop = $(window).scrollTop();
		if(winScrollTop>=500){
			$(".sidebar").fadeIn(200);
		}else{
			$(".sidebar").fadeOut(200);
		}
	});
	$(".bar-top").click(function(){
		$("html,body").stop().animate({"scrollTop":0},500);
	});
	$(".bar-code").mouseenter(function(){
		$(".bar-code-in").stop().animate({"left":"-129px"});
	}).mouseleave(function(){
		$(".bar-code-in").stop().animate({"left":"129px"});
	});
});
