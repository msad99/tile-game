let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext('2d');
let liv = 40;


let maze = [
    [3,0,2,0,0,0,0,0,0,4],
	[1,1,1,0,1,0,1,0,1,1],
	[0,0,2,0,1,0,1,0,1,1],
	[0,1,0,1,0,0,1,0,1,1],
	[0,1,0,1,0,1,1,2,1,1],
	[0,2,0,1,3,1,3,0,0,1],
	[0,1,0,1,0,1,1,1,0,1],
	[3,1,0,1,0,0,0,1,0,0],
	[1,1,0,1,1,1,0,1,1,0],
	[-1,0,0,2,3,0,0,0,0,0]
];

let x = 0;
let y = 0;

let player = -1;

let tileSize = 50;

function grid() {

    for (y = 0; y < maze.length; y++) {

        for (x = 0; x < maze[y].length; x++) {

            if (maze[y][x] == -1) {
                player = { y, x }; // koordinater for player
                console.log(player.y + "  " + player.x);
                ctx.fillStyle = "orange";
                ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
            }
            else if(maze[y][x] == 0){
                ctx.fillStyle = "blue";
                ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
            }
            else if(maze[y][x] == 1){
                ctx.fillStyle = "red";
                ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
            }
			else if(maze[y][x] == 2){
                ctx.fillStyle = "black";
                ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
            }
			else if(maze[y][x] == 3){
                ctx.fillStyle = "green";
                ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
            }
			else if(maze[y][x] == 4){
                ctx.fillStyle = "white";
                ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
            }
        }
    }

}
function death(){
	let defeat = new Audio("sounds/sms-alert-5-daniel_simon.mp3"); //Getting Sound
	defeat.play(); //Play the associated sound
	window.alert("You´ve died"); //Simple Alert Box
	location.reload(); //Reload the page
}
function prize(){
	let prisLyd = new Audio("sounds/poker-chips-daniel_simon.mp3");
	prisLyd.play();
	liv = liv + 10;
}
function win(){
	window.alert("You´ve made it through the maze.");
	location.reload();
}
function bowFire(){
	let bue = new Audio("sounds/fire_bow_sound-mike-koenig.mp3");
	bue.play();
}
window.addEventListener('keydown', function (event) {
    console.log(event.keyCode);

    switch (event.keyCode) {
		case 37: //Left
			if (maze[player.y][player.x - 1] == 0) {

                maze[player.y][player.x - 1] = -1; //players nye position
                maze[player.y][player.x] = 0; // player gamle position

            }
			if (maze[player.y][player.x - 1] == 2) {
				bowFire();
				liv = liv-20;
				console.log(liv);
                maze[player.y][player.x - 1] = -1; //players nye position
                maze[player.y][player.x] = 0; // player gamle position

            }
			if (maze[player.y][player.x - 1] == 3) {
				prize();
                maze[player.y][player.x - 1] = -1; //players nye position
                maze[player.y][player.x] = 0; // player gamle position

            }
			if (maze[player.y][player.x - 1] == 4) {
				win();
                maze[player.y][player.x - 1] = -1; //players nye position
                maze[player.y][player.x] = 0; // player gamle position

            }
			if(liv>0){
				grid();
			}else{
				death();
			}
			break;
        case 38: //KeyUp
            if (maze[player.y - 1][player.x] == 0) {

                maze[player.y - 1][player.x] = -1; //players nye position
                maze[player.y][player.x] = 0; // player gamle position

            }
			if (maze[player.y - 1][player.x] == 2) {
				bowFire();
				liv = liv-20;
				console.log(liv);
                maze[player.y - 1][player.x] = -1; //players nye position
                maze[player.y][player.x] = 0; // player gamle position

            }
			if (maze[player.y - 1][player.x] == 3) {
				prize();
                maze[player.y - 1][player.x] = -1;
                maze[player.y][player.x] = 0; 

            }
			if (maze[player.y - 1][player.x] == 4) {
				win();
                maze[player.y - 1][player.x] = -1;
                maze[player.y][player.x] = 0; 

            }
			if(liv>0){
				grid();
			}else{
				death();
			}
		
            break;
			
			case 39: //Right
			if (maze[player.y][player.x + 1] == 0) {

                maze[player.y][player.x + 1] = -1; //players nye position
                maze[player.y][player.x] = 0; // player gamle position

            }
			if (maze[player.y][player.x + 1] == 2) {
				bowFire();
				liv = liv-20;
				console.log(liv);
                maze[player.y][player.x + 1] = -1; //players nye position
                maze[player.y][player.x] = 0; // player gamle position

            }
			if (maze[player.y][player.x + 1] == 3) {
				prize();
                maze[player.y][player.x + 1] = -1; //players nye position
                maze[player.y][player.x] = 0; // player gamle position

            }
			if (maze[player.y][player.x + 1] == 4) {
				win();
                maze[player.y][player.x + 1] = -1; //players nye position
                maze[player.y][player.x] = 0; // player gamle position

            }
			if(liv>0){
				grid();
			}else{
				death();
			}
			break;
			
			case 40: //KeyDown
            if (maze[player.y + 1][player.x] == 0) {

                maze[player.y + 1][player.x] = -1; //players nye position
                maze[player.y][player.x] = 0; // player gamle position

            }
			
            if (maze[player.y + 1][player.x] == 2) {
				bowFire();
				liv = liv-20;
				console.log(liv);
                maze[player.y + 1][player.x] = -1; //players nye position
                maze[player.y][player.x] = 0; // player gamle position

            }
			if (maze[player.y + 1][player.x] == 3) {
				prize();
                maze[player.y + 1][player.x] = -1; //players nye position
                maze[player.y][player.x] = 0; // player gamle position

            }
			if (maze[player.y + 1][player.x] == 4) {
				win();
                maze[player.y + 1][player.x] = -1; //players nye position
                maze[player.y][player.x] = 0; // player gamle position

            }
			if(liv>0){
				grid();
			}else{
				death();
			}
            break;
			
        default:
            break;
    }
})
grid();

