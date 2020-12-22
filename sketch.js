// this version to be live on githubpages
// the plots rotation has been reversed for even and odd numbers
// looks a bit better see the plotit() function 

let collatzList=[];
let collPrint;
let num =1;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
  angleMode(DEGREES);
}

function draw() {
 // for(let i =0;i<300;i++){
  num=num+1;
  collatzList = []; // clear the list
  print(num);
  collatz(num);
  //strokeWeight(3)
  fill(random(255),random(255),random(255));
  plotit();

//}
 //noLoop();
}


function collatz(n){   // makes list for each branch
  collatzList = [n]; // add the starting number
  // need to unshift to put them in the list backwards
  
  while (n !== 1){
    if (n%2===0){
      n=n/2;
      collatzList.unshift(n);
    }else{
      n=n*3+1
      collatzList.unshift(n);
    }
  }
 print(collatzList)
}


function plotit(){ //plots each branch
  let len =5;
  //resetMatrix();
  translate(width/2,height)
  //translate(width/2,height/2)
  //translate(width-width/7,width/2)
  for (let i of collatzList){
     if(i%2 ===0){
       rotate(3)   //-3.5
     }else{
       rotate(-6.5)   //6
     }
     // set color for each branch in draw
    stroke(100);
     ellipse(0,0,5,-len-5)
     translate(0,-len)    
  } 
}