let date=new Date();
console.log(date);
let time=date.setTime(parseInt(prompt("Enter time in 24 hours")));
console.log(time);
if(time>=4 && time<12){
    console.log("This is morning");
}
else if(time>=12 && time<=16){
    console.log("This is afternoon");
}
else if(time>16 && time<19){
    console.log("This is evening");
}
else{
    console.log("This is night");
}