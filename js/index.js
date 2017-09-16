/*首页banner轮播*/
$(document).ready(function(){
	var dotAreaWidth = $(".dotBox").width();
	$(".dotBox").css({"margin-left":-dotAreaWidth/2});
	
	var bannerLen = $(".bannerBox li").length;
	var bannerNum = 0;
	var bannerTimer = null;
	var autoTime = 5000;
	bannerTimer = setInterval(autoPlay,autoTime);
	function autoPlay(){
		bannerNum = bannerNum + 1;
		if(bannerNum>=bannerLen){
			bannerNum = 0;
		}
		$(".bannerBox li").eq(bannerNum).fadeIn(800).siblings().fadeOut(800);
		$(".dotBox li").eq(bannerNum).addClass("cur").siblings().removeClass("cur");
	}
	
	$(".dotBox li").click(function(){
		clearInterval(bannerTimer);
		bannerNum = $(this).index();
		$(".bannerBox li").eq(bannerNum).fadeIn(800).siblings().fadeOut(800);
		$(".dotBox li").eq(bannerNum).addClass("cur").siblings().removeClass("cur");
		bannerTimer = setInterval(autoPlay,autoTime);
	});
	
	//点击左右箭头
	$(".bannerArea .btn-prev").click(function(){
		clearInterval(bannerTimer);
		if(bannerNum<=0){
			bannerNum = bannerLen - 1;
		}else{
			bannerNum = bannerNum - 1;
		}
		$(".bannerBox li").eq(bannerNum).fadeIn(800).siblings().fadeOut(800);
		$(".dotBox li").eq(bannerNum).addClass("cur").siblings().removeClass("cur");
		bannerTimer = setInterval(autoPlay,autoTime);
	});
	$(".bannerArea .btn-next").click(function(){
		clearInterval(bannerTimer);
		if(bannerNum>=bannerLen - 1){
			bannerNum = 0;
		}else{
			bannerNum = bannerNum + 1;
		}
		$(".bannerBox li").eq(bannerNum).fadeIn(800).siblings().fadeOut(800);
		$(".dotBox li").eq(bannerNum).addClass("cur").siblings().removeClass("cur");
		bannerTimer = setInterval(autoPlay,autoTime);
	});
	
	//进入移出banner区域效果
	$(".bannerArea").mouseenter(function(){
		$(this).children(".btnBox").addClass("btnHover");
		clearInterval(bannerTimer);
	}).mouseleave(function(){
		$(this).children(".btnBox").removeClass("btnHover");
		bannerTimer = setInterval(autoPlay,autoTime);
	});
});


/*板块效果*/
$(document).ready(function(){
	/*板块01*/
	$(".in-cb01 li").mouseenter(function(){
		$(".in-cb01-btm div").eq($(this).index()).stop().slideDown();	
	}).mouseleave(function(){
		$(".in-cb01-btm div").eq($(this).index()).stop().slideUp();	
	});
	
	/*板块02*/
	var in_cb02_len = $(".in-cb02 .inBox ul li").length;
	var in_cb02_wid = 370;
	var in_cb02_num = 0;
	var in_cb02_time = 5000;
	var in_cb02_timer = null;
	
	in_cb02_timer = setInterval(in_cb02_play,in_cb02_time);
	function in_cb02_play(){
		in_cb02_num = in_cb02_num + 1;
		if(in_cb02_num>=in_cb02_len-2){
			in_cb02_num = 0;
		}
		$(".in-cb02 .inBox ul").stop().animate({"left":-in_cb02_wid*in_cb02_num});
	}
	$(".in-cb02 .btn-prev").click(function(){
		clearInterval(in_cb02_timer);
		if(in_cb02_num<=0){
			in_cb02_num = in_cb02_len - 3;
		}else{
			in_cb02_num = in_cb02_num - 1;
		}
		$(".in-cb02 .inBox ul").stop().animate({"left":-in_cb02_wid*in_cb02_num});
		in_cb02_timer = setInterval(in_cb02_play,in_cb02_time);
	});
	$(".in-cb02 .btn-next").click(function(){
		clearInterval(in_cb02_timer);
		if(in_cb02_num>=in_cb02_len - 3){
			in_cb02_num = 0;
		}else{
			in_cb02_num = in_cb02_num + 1;
		}
		$(".in-cb02 .inBox ul").stop().animate({"left":-in_cb02_wid*in_cb02_num});
		in_cb02_timer = setInterval(in_cb02_play,in_cb02_time);
	});
	$(".in-cb02 .inBox").mouseenter(function(){
		clearInterval(in_cb02_timer);
	}).mouseleave(function(){
		in_cb02_timer = setInterval(in_cb02_play,in_cb02_time);
	});
	
	/*板块03*/
	var in_cb03_len = $(".in-cb03 .last-box ul li").length;
	var in_cb03_wid = 370;
	var in_cb03_num = 0;
	var in_cb03_time = 5000;
	var in_cb03_timer = null;
	
	in_cb03_timer = setInterval(in_cb03_play,in_cb03_time);
	function in_cb03_play(){
		in_cb03_num = in_cb03_num + 1;
		if(in_cb03_num>=in_cb03_len-2){
			in_cb03_num = 0;
		}
		$(".in-cb03 .last-box ul").stop().animate({"left":-in_cb03_wid*in_cb03_num});
	}
	$(".in-cb03 .btn-prev").click(function(){
		clearInterval(in_cb03_timer);
		if(in_cb03_num<=0){
			in_cb03_num = in_cb03_len - 3;
		}else{
			in_cb03_num = in_cb03_num - 1;
		}
		$(".in-cb03 .last-box ul").stop().animate({"left":-in_cb03_wid*in_cb03_num});
		in_cb03_timer = setInterval(in_cb_play,in_cb_time);
	});
	$(".in-cb03 .btn-next").click(function(){
		clearInterval(in_cb03_timer);
		if(in_cb03_num>=in_cb03_len - 3){
			in_cb03_num = 0;
		}else{
			in_cb03_num = in_cb03_num + 1;
		}
		$(".in-cb03 .last-box ul").stop().animate({"left":-in_cb03_wid*in_cb03_num});
		in_cb03_timer = setInterval(in_cb03_play,in_cb03_time);
	});
	$(".in-cb03 .last-box-warp").mouseenter(function(){
		clearInterval(in_cb03_timer);
	}).mouseleave(function(){
		in_cb03_timer = setInterval(in_cb03_play,in_cb03_time);
	});
});
