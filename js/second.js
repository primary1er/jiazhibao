$(document).ready(function(){
	/*服务优势*/
	$(".sc-con-sa .cb02 li").hover(function(){
		$(this).toggleClass("current");
		$(this).children(".t-btm").stop().fadeToggle(300);
	});
});


