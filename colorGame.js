var numSquares = 6;
var colors = generateRandomColor(numSquares);
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var squares = document.querySelectorAll('.square');
var h1 = document.querySelector("h1");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector('#easy');
var hardBtn = document.querySelector('#hard');

// easy mode
easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	messageDisplay.textContent = "";
	resetButton.textContent = "New color";
	numSquares = 3;
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i< squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}

})

// hard mode
hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	messageDisplay.textContent = "";
	resetButton.textContent = "New color";
	numSquares = 6;
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i< squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
})

//reset button
resetButton.addEventListener("click", function(){
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i< squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	if(resetButton.textContent == "Play again?"){
		resetButton.textContent = "New color";
	}

})

for(var i = 0; i< squares.length; i++){
	squares[i].style.backgroundColor = colors[i];


	squares[i].addEventListener('click', function(e) {
		if(this.style.backgroundColor == pickedColor){
			changeColors(this.style.backgroundColor);
			messageDisplay.textContent = "Correct!";
			h1.style.backgroundColor = pickedColor;
			resetButton.textContent = "Play again?"
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again!";
		}
	});
}
function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color
	}
}
function pickColor(){
	random = Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateRandomColor(num){
	var arr = [];
	for(var i = 0; i <num; i++){
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	r = Math.floor(Math.random()* 256);
	g = Math.floor(Math.random()* 256);
	b = Math.floor(Math.random()* 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}