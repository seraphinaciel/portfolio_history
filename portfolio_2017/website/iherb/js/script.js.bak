// JavaScript Document

/* Accordion */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].onclick = function(){
		this.classList.toggle("active");
		this.nextElementSibling.classList.toggle("show");
  }
}

/* cssmenu */
( function( $ ) {
$( document ).ready(function() {
$('#cssmenu li.has-sub>a').on('click', function(){
		$(this).removeAttr('href');
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp();
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown();
			element.siblings('li').children('ul').slideUp();
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp();
		}
	});
});
} )( jQuery );

// Modal
$(document).ready(function(){
    $("#m-log").click(function(){
        $("#modal-log").modal({backdrop: "static"});
    });
	$("#m-sign").click(function(){
        $("#modal-sign").modal({backdrop: "static"});
    });
});

// show & hide
	function MM_showHideLayers() { //v9.0
	  var i,p,v,obj,args=MM_showHideLayers.arguments;
	  for (i=0; i<(args.length-2); i+=3) 
	  with (document) if (getElementById && ((obj=getElementById(args[i]))!=null)) { v=args[i+2];
		if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
		obj.visibility=v; }
	}

// countdown :: USA LA기준

// set the date we're counting down to
var target_date = new Date('Jan, 1, 2017').getTime();
 
// variables for time units
var days, hours, minutes, seconds;
 
// get tag element
var countdown = document.getElementById('countdown');
 
// update the tag with id "countdown" every 1 second
setInterval(function () {
 
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600 * 2);
	//3600 * 2를 한 이유 :: 미서부 캘리포니아 LA랑 서울이랑 2시간 차이나서...ㅋ
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
     
    // format countdown string + set tag value
    // countdown.innerHTML = '<span class="days">' + days +  ' <b>Days</b></span> <span class="hours">' + hours + ' <b>Hours</b></span> <span class="minutes">'
    //+ minutes + ' <b>Minutes</b></span> <span class="seconds">' + seconds + ' <b>Seconds</b></span>';  
    countdown.innerHTML = '<span class="hours">' + hours + ' <b>시</b></span> <span class="minutes">' + minutes + ' <b>분</b></span> <span class="seconds">' + seconds + ' <b>초</b></span>';  
 
}, 1000);

// tooltip
$(document).ready(function(){
    $('.tool1').tooltip({title: "<p><span>유통기한에 대한 기간과 권장사용기간의 날짜는 제품의 종류 및 브랜드에 따라 결정됩니다.</span></p><p>부패하기 쉬운 제품 (플랙스 오일 또는 유산균 관련 상품)은 보편적으로 짧은 유통기한을 가지고 있습니다. 본사의 물류창고는 냉방장치가 설치되어 있지만, 이와 같은 제품들은 최대의 신선도를 위해 냉장보관실(냉동 또는 냉장시설)에 보관됩니다.본사의 인수부서는 모든 상품의 정확한 유통기한의 확인 및 데이터 입력을 위해 최선을 다하고 있습니다. 간혹 불일치하는 정보가 확인될 수 있습니다. 그러나 iHerb의 월등히 높은 상품 교체률을 통해 본사의 재고품이 업계에서 가장 신선함을 보증합니다.</p>", html: true, trigger: "hover"}); 
    $('.tool2').tooltip({title: "<p><span>배송 무게는 제품, 포장제, 배송상자의 무게를 포함하고 있습니다.</span></p><p>추가로, 배송품의 부피(길이, 너비, 높이)에 따라 배송무게가 조정될 수 있습니다. 유리용기제품, 액체류, 파손되기 쉬운 제품, 냉장보관을 요하는 제품 등 특정 종류의 제품은 별도의 포장 보충제를 필요로 하며, 이와 같은 경우 배송 무게가 별도의 보호제가 필요치 않은 제품들보다 높게 측정될 수 있습니다.</p>", html: true, trigger: "hover"}); 
    $('.tool3').tooltip({title: "<p><span>수퍼스페셜</span></p><p>제한된 시간동안 진행되는 특별할인이 적용중인 제품입니다!</p>", html: true, trigger: "hover"}); 
});

// js confirm
$(document).ready(function(){
    $(".btn-success").click(function(){
        alert('상품을 장바구니에 담았습니다.');
    });
	$(".btn-warning").click(function(){
        alert('상품을 찜했습니다.');
    });
});
