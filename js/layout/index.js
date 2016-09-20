require('../../css/reset.css');
require('../../css/index.scss');

var $ = require('zepto');
$(function (){
	window.duoshuoQuery = {short_name:"lisi"};
	(function() {
		var ds = document.createElement('script');
		ds.type = 'text/javascript';ds.async = true;
		ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.unstable.js';
		ds.charset = 'UTF-8';
		(document.getElementsByTagName('head')[0] 
		 || document.getElementsByTagName('body')[0]).appendChild(ds);
	})();

	var $a = $('.nav a');
	var $box = $('.content section');
	$box.height($box.eq(0).children().eq(0).height());
	$a.each(function (index,ele){
		$(this).on('click',function (){
			$a.removeClass('active');
			$(this).addClass('active');
			$box.removeClass('active');
			$box.eq(index).addClass('active');
		});
	});
});