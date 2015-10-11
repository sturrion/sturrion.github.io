
// to create a rgb random color
var red = Math.floor((Math.random() * 255) + 0);
var green = Math.floor((Math.random() * 255) + 0);
var blue = Math.floor((Math.random() * 255) + 0);
var color = 'rgb(' + [red,green,blue].join(',') + ')'

// change the headers background color 
$(".headers").css( "background-color" , color );

// change it every 3 second
setInterval(function (){
	red = Math.floor((Math.random() * 255) + 0);
	green = Math.floor((Math.random() * 255) + 0);
	blue = Math.floor((Math.random() * 255) + 0);
	color = 'rgb(' + [red,green,blue].join(',') + ')'
	$(".headers").css( "background-color" , color );
}, 3000);

// change the interest item background color on mouse over
$(".interest").mouseover(function (){
	$(this).css( "background-color" , color );
});

// return the interest item background color to white
$(".interest").mouseout(function (){
	$(this).css( "background-color" , 'white' );
});



$(".image_int").click(function (){
	var image = $(this).attr("src");
	var wwidth = $(window).width();
	var wheight = $(window).height();
	console.log(image);
	window.open(image,"_blank","toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=" + wwidth + ", height=" + wheight );
});








