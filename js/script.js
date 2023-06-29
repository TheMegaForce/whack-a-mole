$(document).ready(function () {
	const $startButton = $("#start");
	const $squares = $(".square");

	$startButton.on("click", function () {
		setInterval(function () {
			randomSquare();
		}, 2000);
		randomSquare();
	});

	function randomSquare() {
		const randomSquare = $squares[Math.floor(Math.random() * $squares.length)];
		$(randomSquare).addClass("red-bg");

		setTimeout(function () {
			$(randomSquare).removeClass("red-bg");
		}, 2000);
	}
});
