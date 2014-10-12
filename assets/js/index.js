window.onload = function(){
	$("span", ".btn").hover(function(){
		var index = $(this).index();
		$("span.focus", ".btn").removeClass("focus");
		$(this).addClass("focus");
		$("ul", "#banner .wraper").attr("class","w"+index);
	});
	window.setInterval(function(){
		var index = $("span.focus", ".btn").index()+1;
		(index>5) && (index=0);
		$("span.focus", ".btn").removeClass("focus");
		$("span", ".btn").eq(index).addClass("focus");
		$("ul", "#banner .wraper").attr("class","w"+index);
	}, 5000);
}