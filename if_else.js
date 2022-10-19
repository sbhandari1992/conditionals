// greeting
time = 22;



if (time >= 6 & time < 12){
    console.log('Good morning');
}
else if (time >= 12 & time < 18){
    console.log('Good afternoon');
}
else {
    console.log('Good evening');
}

// agerange
let age = 1;
let ageCategories;

if (age >=1 & age <= 5) {
    ageCategories = 'Babys';
}
else if (age >= 5 & age < 18) {
    ageCategories = 'Kids';
}
else if (age >=18 & age < 25) {
    ageCategories = 'Youth';
}
else if (age >=25 & age < 40) {
    ageCategories = 'Adults';
}
else if (age >=40 & age <= 80 ) {
    ageCategories = 'Siniors';
}
else {
    let ageCategories = 'Expired'
}
console.log(ageCategories);


