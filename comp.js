var canvas=document.getElementById('canvas');
var ctx=canvas.getContext("2d");
ctx.lineWidth=10
ctx.beginPath();
ctx.moveTo(150,0);
ctx.lineTo(150,450);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(300,0);
ctx.lineTo(300,450);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(0,150);
ctx.lineTo(450,150);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(0,300);
ctx.lineTo(450,300);
ctx.stroke();


chance=Math.floor(Math.random() * 100)%2;
play=0;
var game=[0,0,0,0,0,0,0,0,0];
canvas.addEventListener('mousedown',function(evt){
var rect = canvas.getBoundingClientRect();
x=evt.clientX-rect.left;
y=evt.clientY-rect.top;
x=Math.floor(x/150);
y=Math.floor(y/150);
console.log(3*y+x);
var img;
if(game[3*y+x]==0 && play==0){
if(chance==1)
{img=document.getElementById('oo');
chance=0;
game[3*y+x]=1;
ctx.drawImage(img,150*x+5,150*y+5,140,140);
}
else
{img=document.getElementById('xx');
chance=1;

var v=0;
x=0;
y=0;
while(v!=1){

x = Math.floor(Math.random() * 100)%3;
y = Math.floor(Math.random() * 100)%3;

//try to make your own
//horizontals
if(game[0]==2 && game[1]==2 && game[2]==0){
x=2;
y=0;
}
else if(game[0]==2 && game[2]==2 && game[1]==0){
x=1;
y=0;
}
else if(game[1]==2 && game[2]==2 && game[0]==0){
x=0;
y=0;
}
else if(game[3]==2 && game[4]==2 && game[5]==0){
x=2;
y=1;
}
else if(game[5]==2 && game[4]==2 && game[3]==0){
x=0;
y=1;
}
else  if(game[5]==2 && game[3]==2 && game[4]==0){
x=1;
y=1;
}
else if(game[0]==2 && game[1]==2 && game[6]==0){
x=0;
y=2;
}
else if(game[0]==2 && game[1]==2 && game[7]==0){
x=1;
y=2;
}
else if(game[0]==2 && game[1]==2 && game[8]==0){
x=2;
y=2;
}
//verticals
else if(game[0]==2 && game[3]==2 && game[6]==0){
x=0;
y=2;
}
else if(game[0]==2 && game[6]==2 && game[3]==0){
x=0;
y=1;
}
else if(game[6]==2 && game[3]==2 && game[0]==0){
x=0;
y=0;
}
else if(game[1]==2 && game[4]==2 && game[7]==0){
x=1;
y=2;
}
else if(game[1]==2 && game[7]==2 && game[4]==0){
x=1;
y=1;
}
else if(game[4]==2 && game[7]==2 && game[1]==0){
x=1;
y=0;
}
else if(game[2]==2 && game[5]==2 && game[8]==0){
x=2;
y=2;
}
else if(game[8]==2 && game[5]==2 && game[2]==0){
x=2;
y=0;
}
else if(game[2]==2 && game[8]==2 && game[5]==0){
x=2;
y=1;
}

//diagonals
else if(game[0]==2 && game[4]==2 && game[8]==0){
x=2;
y=2;
}
else if(game[0]==2 && game[8]==2 && game[4]==0){
x=1;
y=1;
}
else if(game[4]==2 && game[8]==2 && game[0]==0){
x=0;
y=0;
}
else if(game[2]==2 && game[4]==2 && game[6]==0){
x=0;
y=2;
}
else if(game[6]==2 && game[4]==2 && game[2]==0){
x=2;
y=0;
}
else if(game[2]==2 && game[6]==2 && game[4]==0){
x=1;
y=1;
}

//try to cut others
//horizontals
else if(game[0]==1 && game[1]==1 && game[2]==0){
x=2;
y=0;
}
else if(game[0]==1 && game[2]==1 && game[1]==0){
x=1;
y=0;
}
else if(game[1]==1 && game[2]==1 && game[0]==0){
x=0;
y=0;
}
else if(game[3]==1 && game[4]==1 && game[5]==0){
x=2;
y=1;
}
else if(game[5]==1 && game[4]==1 && game[3]==0){
x=0;
y=1;
}
else  if(game[5]==1 && game[3]==1 && game[4]==0){
x=1;
y=1;
}
else if(game[0]==1 && game[1]==1 && game[6]==0){
x=0;
y=2;
}
else if(game[0]==1 && game[1]==1 && game[7]==0){
x=1;
y=2;
}
else if(game[0]==1 && game[1]==1 && game[8]==0){
x=2;
y=2;
}//verticals
else if(game[0]==1 && game[3]==1 && game[6]==0){
x=0;
y=2;
}
else if(game[0]==1 && game[6]==1 && game[3]==0){
x=0;
y=1;
}
else if(game[6]==1 && game[3]==1 && game[0]==0){
x=0;
y=0;
}
else if(game[1]==1 && game[4]==1 && game[7]==0){
x=1;
y=2;
}
else if(game[1]==1 && game[7]==1 && game[4]==0){
x=1;
y=1;
}
else if(game[4]==1 && game[7]==1 && game[1]==0){
x=1;
y=0;
}
else if(game[2]==1 && game[5]==1 && game[8]==0){
x=2;
y=2;
}
else if(game[8]==1 && game[5]==1 && game[2]==0){
x=2;
y=0;
}
else if(game[2]==1 && game[8]==1 && game[5]==0){
x=2;
y=1;
}//diagonals
else if(game[0]==1 && game[4]==1 && game[8]==0){
x=2;
y=2;
}
else if(game[0]==1 && game[8]==1 && game[4]==0){
x=1;
y=1;
}
else if(game[4]==1 && game[8]==1 && game[0]==0){
x=0;
y=0;
}
else if(game[2]==1 && game[4]==1 && game[6]==0){
x=0;
y=2;
}
else if(game[6]==1 && game[4]==1 && game[2]==0){
x=2;
y=0;
}
else if(game[2]==1 && game[6]==1 && game[4]==0){
x=1;
y=1;
}	


if(game[y*3+x]==0){
game[3*y+x]=2;
v=1;
ctx.drawImage(img,150*x+5,150*y+5,140,140);
}

}

}
//horizontal
if(game[0]==1&& game[1]==1 && game[2]==1){
play=1;
ctx.lineWidth=20;
ctx.beginPath();
ctx.moveTo(50,75);
ctx.lineTo(400,75);
ctx.strokeStyle="#07575B";
ctx.stroke();
ctx.font = "100px Comic Sans MS";
ctx.fillStyle = "#003B46";
ctx.textAlign = "center";
ctx.fillText("O Wins!", canvas.width/2, canvas.height/2); 
au=document.getElementById("oo");
	

}
if(game[3]==1&& game[4]==1 && game[5]==1){
play=1;
ctx.lineWidth=20;
ctx.beginPath();
ctx.moveTo(50,225);
ctx.lineTo(400,225);
ctx.strokeStyle="#07575B";
ctx.stroke();
ctx.font = "100px Comic Sans MS";
ctx.fillStyle = "#003B46";
ctx.textAlign = "center";
ctx.fillText("O Wins!", canvas.width/2, canvas.height/2); 
au=document.getElementById("oo");


}
if(game[6]==1&& game[7]==1 && game[8]==1){
play=1;
ctx.lineWidth=20;
ctx.beginPath();
ctx.moveTo(50,375);
ctx.lineTo(400,375);
ctx.strokeStyle="#07575B";
ctx.stroke();
ctx.font = "100px Comic Sans MS";
ctx.fillStyle = "#003B46";
ctx.textAlign = "center";
ctx.fillText("O Wins!", canvas.width/2, canvas.height/2); 
au=document.getElementById("oo");

}
	
//vertical
if(game[0]==1&&game[3]==1&&game[6]==1){
play=1;
ctx.lineWidth=20;
ctx.beginPath();
ctx.moveTo(75,50);
ctx.lineTo(75,400);
ctx.strokeStyle="#07575B";
ctx.stroke();
ctx.font = "100px Comic Sans MS";
ctx.fillStyle = "#003B46";
ctx.textAlign = "center";
ctx.fillText("O Wins!", canvas.width/2, canvas.height/2); 
au=document.getElementById("oo");


}
if(game[1]==1&&game[4]==1&&game[7]==1){
play=1;
ctx.lineWidth=20;
ctx.beginPath();
ctx.moveTo(225,50);
ctx.lineTo(225,400);
ctx.strokeStyle="#07575B";
ctx.stroke();
ctx.font = "100px Comic Sans MS";
ctx.fillStyle = "#003B46";
ctx.textAlign = "center";
ctx.fillText("O Wins!", canvas.width/2, canvas.height/2); 
au=document.getElementById("oo");


}
if(game[2]==1&&game[5]==1&&game[8]==1){
play=1;
ctx.lineWidth=20;
ctx.beginPath();
ctx.moveTo(375,50);
ctx.lineTo(375,400);
ctx.strokeStyle="#07575B";
ctx.stroke();
ctx.font = "100px Comic Sans MS";
ctx.fillStyle = "#003B46";
ctx.textAlign = "center";
ctx.fillText("O Wins!", canvas.width/2, canvas.height/2); 
au=document.getElementById("oo");

}

//diagonal
if(game[0]==1&&game[4]==1&&game[8]==1){
play=1;
ctx.lineWidth=20;
ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(400,400);
ctx.strokeStyle="#07575B";
ctx.stroke();
ctx.font = "100px Comic Sans MS";
ctx.fillStyle = "#003B46";
ctx.textAlign = "center";
ctx.fillText("O Wins!", canvas.width/2, canvas.height/2); 
au=document.getElementById("oo");


}
if(game[2]==1&&game[4]==1&&game[6]==1){
play=1;
ctx.lineWidth=20;
ctx.beginPath();
ctx.moveTo(50,400);
ctx.lineTo(400,50);
ctx.strokeStyle="#07575B";
ctx.stroke();
ctx.font = "100px Comic Sans MS";
ctx.fillStyle = "#003B46";
ctx.textAlign = "center";
ctx.fillText("O Wins!", canvas.width/2, canvas.height/2); 
au=document.getElementById("oo");


}

//mind wins
//horizontal
if(game[0]==2&& game[1]==2 && game[2]==2){
play=1;
ctx.lineWidth=20;
ctx.beginPath();
ctx.moveTo(50,75);
ctx.lineTo(400,75);
ctx.strokeStyle="#07575B";
ctx.stroke();
ctx.font = "100px Comic Sans MS";
ctx.fillStyle = "#003B46";
ctx.textAlign = "center";
ctx.fillText("X Wins!", canvas.width/2, canvas.height/2); 
au=document.getElementById("xx");


}
if(game[3]==2&& game[4]==2 && game[5]==2){
play=1;
ctx.lineWidth=20;
ctx.beginPath();
ctx.moveTo(50,225);
ctx.lineTo(400,225);
ctx.strokeStyle="#07575B";
ctx.stroke();
ctx.font = "100px Comic Sans MS";
ctx.fillStyle = "#003B46";
ctx.textAlign = "center";
ctx.fillText("X Wins!", canvas.width/2, canvas.height/2); 
au=document.getElementById("xx");
}
if(game[6]==2&& game[7]==2 && game[8]==2){
play=1;
ctx.lineWidth=20;
ctx.beginPath();
ctx.moveTo(50,375);
ctx.lineTo(400,375);
ctx.strokeStyle="#07575B";
ctx.stroke();
ctx.font = "100px Comic Sans MS";
ctx.fillStyle = "#003B46";
ctx.textAlign = "center";
ctx.fillText("X Wins!", canvas.width/2, canvas.height/2); 
au=document.getElementById("xx");
	
}
	
//vertical
if(game[0]==2&&game[3]==2&&game[6]==2){
play=1;
ctx.lineWidth=20;
ctx.beginPath();
ctx.moveTo(75,50);
ctx.lineTo(75,400);
ctx.strokeStyle="#07575B";
ctx.stroke();
ctx.font = "100px Comic Sans MS";
ctx.fillStyle = "#003B46";
ctx.textAlign = "center";
ctx.fillText("X Wins!", canvas.width/2, canvas.height/2); 
au=document.getElementById("xx");

}
if(game[1]==2&&game[4]==2&&game[7]==2){
play=1;
ctx.lineWidth=20;
ctx.beginPath();
ctx.moveTo(225,50);
ctx.lineTo(225,400);
ctx.strokeStyle="#07575B";
ctx.stroke();
ctx.font = "100px Comic Sans MS";
ctx.fillStyle = "#003B46";
ctx.textAlign = "center";
ctx.fillText("X Wins!", canvas.width/2, canvas.height/2); 
au=document.getElementById("xx");


}
if(game[2]==2&&game[5]==2&&game[8]==2){
play=1;
ctx.lineWidth=20;
ctx.beginPath();
ctx.moveTo(375,50);
ctx.lineTo(375,400);
ctx.strokeStyle="#07575B";
ctx.stroke();
ctx.font = "100px Comic Sans MS";
ctx.fillStyle = "#003B46";
ctx.textAlign = "center";
ctx.fillText("X Wins!", canvas.width/2, canvas.height/2); 
au=document.getElementById("xx");

}

//diagonal
if(game[0]==2&&game[4]==2&&game[8]==2){
play=1;
play=1;
ctx.lineWidth=20;
ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(400,400);
ctx.strokeStyle="#07575B";
ctx.stroke();
ctx.font = "100px Comic Sans MS";
ctx.fillStyle = "#003B46";
ctx.textAlign = "center";
ctx.fillText("X Wins!", canvas.width/2, canvas.height/2);
au=document.getElementById("xx");


}
if(game[2]==2&&game[4]==2&&game[6]==2){
play=1;
ctx.lineWidth=20;
ctx.beginPath();
ctx.moveTo(50,400);
ctx.lineTo(400,50);
ctx.strokeStyle="#07575B";
ctx.stroke();
ctx.font = "100px Comic Sans MS";
ctx.fillStyle = "#003B46";
ctx.textAlign = "center";
ctx.fillText("X Wins!", canvas.width/2, canvas.height/2); 
au=document.getElementById("xx");
	

}

//draw
if(game[0]!=0 &&game[1]!=0 &&game[2]!=0 &&game[3]!=0 &&game[4]!=0 &&game[5]!=0 &&game[6]!=0 &&game[7]!=0 &&game[8]!=0){
if(play!=1)
{play=1;
ctx.font = "100px Comic Sans MS";
ctx.fillStyle = "#003B46";
ctx.textAlign = "center";
ctx.fillText("Draw", canvas.width/2, canvas.height/2); 
}
}

}
		
},false);