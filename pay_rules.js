let payRate = 17.30;
let hourWorked = 45;
let basicHour = 40;

let OTRate = 1.5;



if (hourWorked <= basicHour) {
    let RegPay = payRate * hourWorked;
    console.log(RegPay);

}
else {
    let grossPay = ((hourWorked - basicHour) * (payRate * OTRate)) + (basicHour * payRate) ;
    console.log(grossPay);


}



