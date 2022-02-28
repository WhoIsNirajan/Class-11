var marks = [30,40,45,35];


function setup() {
  createCanvas(400, 400);
var sum =0
for (let i = 0; i < marks.length; i++) {
console.log(marks[i]) 

sum = sum +marks[i]
console.log(sum)
}
var avg = sum/marks.length
console .log(avg)

}

function draw() {
  background(150);
}
