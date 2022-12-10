let car=document.getElementById("car");

let carX=car.offsetLeft;
let carY=car.offsetTop;
    
console.log(carX)
console.log(carY)

document.addEventListener("keydown",move_car);

function move_car(e){
    if(e.key=='ArrowDown' && carY<500){
    carY+=10;
    }
    if(e.key=='ArrowUp' && carY>0){
        carY-=10;
    }
    if(e.key=='ArrowRight'&& carX<280){
        carX+=10;
    }
    if(e.key=='ArrowLeft' && carX>0){
        carX-=10;
    }
    car.style.top=carY+"px";
    car.style.left=carX+"px";
}
