// Functions
function drawRoadCanvas() {
	var canvas = document.getElementById('roadCanvas');
  var context = canvas.getContext('2d');
	var totalGoal = document.getElementById('totalGoal');
	var achieve = document.getElementById('achieve');
  var carXPosition = 0

	// resize the canvas to fill browser window dynamically
	window.addEventListener('resize', resizeCanvas, false);

	resizeCanvas();

	function resizeCanvas() {
		canvas.width = window.innerWidth;

		/**
		 * Drawings need to be inside this function otherwise they will be reset when
		 * people resize the browser window and the canvas goes will be cleared.
		 */
		drawStuff();
	}

	function drawStuff() {
		// road
		var my_gradient=context.createLinearGradient(0,50,0,100);
		my_gradient.addColorStop(0,'#222222');
		my_gradient.addColorStop(1,'#888888');
		context.fillStyle=my_gradient;
		context.fillRect(0,50,canvas.width,50);

		// lines
		context.strokeStyle = '#FFFFFF';
		context.setLineDash([15, 15]);
		context.lineWidth = 5;
		context.beginPath();
		context.moveTo(0,73);
		context.lineTo(canvas.width, 73);
		context.stroke();

		context.setLineDash([]);
		context.lineWidth = 1.5;
		context.beginPath();
		context.moveTo(0,53);
		context.lineTo(canvas.width, 53);
		context.stroke();

		context.setLineDash([]);
		context.lineWidth = 2;
		context.beginPath();
		context.moveTo(0,96);
		context.lineTo(canvas.width, 96);
		context.stroke();

		// car
		var img = new Image();
		var roadLong = canvas.width - 100;
		img.onload = function () {
			carXPosition = (achieve.value * roadLong / totalGoal.value);
			context.drawImage(img, carXPosition, 50, 100, 50);
		}
		img.id = 'car';
		img.src = 'goals/img/pc7Kaynqi.svg';
	}
}
