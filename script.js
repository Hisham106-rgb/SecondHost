let name="hisham"

console.log("your good name is",name)
hour=22
if(hour>22){
    console.log("its time to sleep")
}else{
    console.log("its time to work")
}
let sum=0;
for(let i=0;i<5;i++){
    sum=sum+i
    console.log(i)
}
console.log(sum);
for(let i=1;i<=15;i++){
    console.log(i)
}
let j=0;
while(j<30){
    console.log(j)
    j=j+3;
}
function greet(){
    console.log("hello,user")
    

}
greet();

function add(a,b){
    return a+b;
}
let result=add(5,3);
console.log(result);


function sub(a,b){
   return a-b;
}
let res =sub(5,3);
console.log("result is:",res);


function area(b,h){
    return b*h;

}


function arearect(b,h){
    let area = b*h;
    console.log("hight of the rectangle is:",h)
    console.log("wedth of the rectangle is:",b)
    console.log("area of the rectangle is :",area)


}
arearect(5,3);

const fruit=["Apple","Banana","orrange"];
console.log(fruit);
fruit.shift();
console.log(fruit);
fruit.push("kiwi");
console.log(fruit);
fruit.pop("");
console.log(fruit);

const car=["totyota","bmw","polo","tata"]

for(let i=0;i<4;i++){
console.log(car[i]);
}

let i=0;
while(i<4){
    console.log(car[i]);
    i=i+1;
}

const vehicalcar={type:"Flat",model:"500",color:"white"};
console.log(vehicalcar.type);
console.log(vehicalcar.model);
console.log(vehicalcar.color);

function sayHello() {
    alert("Button clicked!");
}
function changeText(){
    document.getElementById("text").innerHTML="you clicked the button!";
    let x=document.getElementById("box");
    x.style.backgroundColor="red";

}
