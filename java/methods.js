var car={};
car.mileage=98765;
car.color="red";
console.log(car);
car.turnthekey=function(){
    console.log("the engine is running")
}
car.lightson=function(){
    console.log("the lights are on.")
}
console.log(car);
car.turnthekey();
car.lightson();