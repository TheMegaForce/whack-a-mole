$(document).ready(function () {
	const $startButton = $("#start");
	const $squares = $(".square");
	const $points = $("#points");

	$startButton.on("click", function () {
		setInterval(function () {
			randomSquare();
		}, 1000);
		randomSquare();
	});

	function randomSquare() {
		const randomSquare = $squares[Math.floor(Math.random() * $squares.length)];
		$(randomSquare).addClass("red-bg");

		setTimeout(function () {
			$(randomSquare).removeClass("red-bg");
		}, 1000);
	}

	$squares.on("click", function (event) {
		if ($(event.target).hasClass("red-bg")) {
			$(event.target).removeClass("red-bg");
			const newPointValue = parseInt($points.text()) + 1;
			$points.text(newPointValue);
		} else {
			console.log("remove point");
		}
	});
});
