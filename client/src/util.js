function datediff(dateinput,outputreq) {
    // var dob = new Date("9/20/2001");  
    // console.log(Date.now())
    // //calculate month difference from current date in time  
    // var month_diff = Date.now() - dob.getTime();  

    // //convert the calculated difference in date format  
    // var age_dt = new Date(month_diff);   

    // //extract year from date      
    // var year = age_dt.getUTCFullYear();  

    // //now calculate the age of the user  
    // var age = Math.abs(year - 1970);  







    var from = dateinput.split("-");
    var birthdateTimeStamp = new Date(from[2], from[1] - 1, from[0]);
    var cur = new Date();
    var diff = cur - birthdateTimeStamp;
    // This is the difference in milliseconds
    var currentAge = Math.round(diff / 31557600000);
    // Divide by 1000*60*60*24*365.25

    var daysmissing=currentAge*365
    console.log(currentAge);

if(outputreq=="age"){
    return currentAge
}
if(outputreq=="missingdays"){
    return daysmissing
}






    // console.log(startdate)
    // var d1 = Date.parse(startdate)
    // var d2 = Date.now()

    // var diff = d2 - d1;

    // var milliseconds = diff;
    // var second = 1000;
    // var minute = second * 60;
    // var hour = minute * 60;
    // var day = hour * 24;
    // var month = day * 30;
    // var year = day * 365;

    // var years = Math.round(milliseconds / year);
    // var months = years * 12;
    // var days = years * 365;
    // var hours = Math.round(milliseconds / hour);
    // var seconds = Math.round(milliseconds / second);

    // console.log(years)
    // let currentDate = new Date().toJSON().slice(0, 10);
    // console.log(currentDate); // "2022-06-17"

    //return currentAge
}

module.exports = { datediff }