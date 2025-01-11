// var favCar={};
// favCar.color="blue",
// favCar.covertible_property="true",
// console.log(favCar);
let companies =["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
let remainingcompanies=companies.shift();
companies.splice(1,1,"Ola");
companies.push("Amazon");
console.log(companies);