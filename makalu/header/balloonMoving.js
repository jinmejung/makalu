$(document).ready(function(){
	balloonMoving();
});

function balloonMoving(){
	var balloon = $('.balloon'); // 말풍선
	var actionTime = 500; // 올라갈 때와 내려갈 때 각각의 시간
	var delayTime = 800; // 액션이 1회 끝나고 다음 순번까지 딜레이 되는 시간

	// 풍선이 올라가는 영역
	balloon.animate({
		top : -10
	}, actionTime-100, 'easeOutCirc', function(){
		// 풍선이 내려가는 영역
		balloon.animate({
			top : 0
		}, actionTime, 'easeOutBounce', function(){
			balloonMoving();
		}).delay(delayTime);
	});

}