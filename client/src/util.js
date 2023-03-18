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







    // var from = dateinput.split("-");
    // var birthdateTimeStamp = new Date(from[2], from[1] - 1, from[0]);
    // var cur = new Date();
    // var diff = cur - birthdateTimeStamp;
    // // This is the difference in milliseconds
    // var currentAge = Math.round(diff / 31557600000);
    // // Divide by 1000*60*60*24*365.25

    // var daysmissing=currentAge*365
    // console.log(currentAge);
    let temp = dateinput.split("-") 
    var d1 = Date.parse(`${temp[1]}-${temp[0]}-${temp[2]}`)
    var d2 = Date.now()

    var diff = d2 - d1;

    const milliseconds = diff;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    const year = day * 365;

    var years = Math.round(milliseconds / year);
    var months = Math.round(milliseconds / month);
    var days = Math.round(milliseconds / day);
    var hours = Math.round(milliseconds / hour);
    var minutes = Math.round(milliseconds / minute);
    var seconds = Math.round(milliseconds / second);

    let res = "";
    if(years) res += years + " Years ";
    else if(months) res += months + " Months ";
    else if(days) res += days + " Days ";
    else if(hours) res += hours + " Hours ";
    else if(minutes) res += minutes + " Minutes ";
    else if(seconds) res += seconds + " Seconds ";

    return res;
    //console.log(currentDate); // "2022-06-17"
// if(outputreq=="age"){
//     return years
// }
// if(outputreq=="missingdays"){
//     return days
// }






    // console.log(startdate)
    

    //return currentAge
}

module.exports = { datediff }