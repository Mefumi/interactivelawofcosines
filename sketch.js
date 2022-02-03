
function setup() {
  // put setup code here
 createCanvas(1000,500)
 img = loadImage('lawofcosine.png')
 textSize(15)

}

function distance(x1,y1,x2,y2){

  return Math.sqrt((x1-x2)**2+(y1-y2)**2)
}

function angleLawOfCosines(a,b,c){
  return Math.acos((a**2+b**2-c**2)/(2*a*b))
}

let point1 = [250,100]
let point2 = [120, 325]
let point3 = [380,325]

let movingPoint1
let movingPoint2
let movingPoint3
let a
let b
let c

function draw() {
  background(10)
  strokeWeight(0)
  fill(200)
  rect(0,0,500,500)
  if (!mouseIsPressed){
    movingPoint1 = 0 
    movingPoint2 = 0
    movingPoint3 = 0
  }
  if (distance(mouseX,mouseY,point1[0],point1[1]) < 10 && mouseIsPressed && !movingPoint2 && !movingPoint3){
    movingPoint1 = true
  }
  if (movingPoint1){
    point1[0] = mouseX
    point1[1] = mouseY
  }

  if (distance(mouseX,mouseY,point2[0],point2[1]) < 10 && mouseIsPressed && !movingPoint3 && !movingPoint1){
    movingPoint2 = true
  }
  if (movingPoint2){
    point2[0] = mouseX
    point2[1] = mouseY
  }

  if (distance(mouseX,mouseY,point3[0],point3[1]) < 10 && mouseIsPressed && !movingPoint2 && !movingPoint1){
    movingPoint3 = true
  }
  if (movingPoint3){
    point3[0] = mouseX
    point3[1] = mouseY
  }
  
  
  stroke('red')

  strokeWeight(5)
  line(point1[0],point1[1],point2[0],point2[1])
  line(point2[0],point2[1],point3[0],point3[1])
  line(point3[0],point3[1],point1[0],point1[1])
  stroke('blue')
  strokeWeight(10)
  point(point1[0],point1[1])
  point(point2[0],point2[1])
  point(point3[0],point3[1])
  noStroke()
  fill(50,100,255)
  text(`A: (${point1[0]}, ${point1[1]})`,550,100)
  text(`B: (${point2[0]}, ${point2[1]})`,550,120)
  text(`C: (${point3[0]}, ${point3[1]})`,550,140)
  fill('red')
  a = distance(point2[0],point2[1],point3[0],point3[1])
  b = distance(point1[0],point1[1],point3[0],point3[1])
  c = distance(point2[0],point2[1],point1[0],point1[1])
  text(`a = ${a}`,550,160)
  text(`b = ${b}`,550,180)
  text(`c = ${c}`,550,200)
  fill('green')
  text(`α = ${angleLawOfCosines(b,c,a)} = ${180/Math.PI*angleLawOfCosines(b,c,a)}°`,550,220)
  text(`β = ${angleLawOfCosines(a,c,b)} = ${180/Math.PI*angleLawOfCosines(a,c,b)}°`,550,240)
  text(`γ = ${angleLawOfCosines(a,b,c)} = ${180/Math.PI*angleLawOfCosines(b,a,c)}°`,550,260)

  fill('blue')
  text("A",point1[0]-10,point1[1]-10)
  text("B",point2[0]-10,point2[1]-10)
  text("C",point3[0]+10,point3[1]-10)
  fill('red')
  text("c",(point1[0]+point2[0])/2-15,(point1[1]+point2[1])/2-10)
  text("b",(point3[0]+point1[0])/2+15,(point1[1]+point3[1])/2-10)
  text("a",(point3[0]+point2[0])/2-15,(point3[1]+point2[1])/2+20)
  fill('green')
  text("α",point1[0]-5,point1[1]+25)
  text("β",point2[0]+20,point2[1]-10)
  text("γ",point3[0]-25,point3[1]-10)
  image(img,540,300)


}