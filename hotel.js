/* The script is placed inside an immediately invoked function expression
   which helps protect the scope of variables */

//PART ONE: GENERATE A RANDOM ROOM RATE. Write a function called genRand() that has no paremeters that will return a room rate between 100 and 400. HINT: You should hit a number within this range within 10 tries.
function genRand() {
    var ranNum = Math.random() * (400 - 100 + 1) + 100;
    var roundNum = Math.round(ranNum);
    return roundNum;
}
  




  // PART TWO: CALCULATE AND RETURN THE EXPIRY DETAILS FOR THE OFFER. Write a function called offerExpires that has one parameter a Date object. The function should return a string in the format "OFFER EXPIRES NEXT "WeekDay" (Date Month Year)". The date should be one week from today's date
function offerExpires(dateObj) {
    var date = new Date(dateObj);
    var month;
    var day;
    switch(date.getMonth())
    {
        case 0: month = "January"; break;
        case 1: month = "February"; break;
        case 2: month = "March"; break;
        case 3: month = "April"; break;
        case 4: month = "May"; break;
        case 5: month = "June"; break;
        case 6: month = "July"; break;
        case 7: month = "August"; break;
        case 8: month = "September"; break;
        case 9: month = "October"; break;
        case 10: month = "November"; break;
        case 11: month = "December"; break;
    }
switch(date.getDay())
    {
        case 0: day = "Sunday";break;
        case 1: day = "Monday";break;
        case 2: day = "Tuesday";break;
        case 3: day = "Thursday";break;
        case 4: day = "Friday";break;
        case 5: day = "Saturday";break;
    }
    var offerExpires = "OFFER EXPIRES NEXT " + day + "<br>" + "(" + date.getDate()  +  " " + month + " " + date.getFullYear() + ")";
    return offerExpires;
}

  
//PART THREE: CALL THE FUNCTIONS AND WRITE INFO TO WEBPAGE

//Call getRand() function to get random room rate and write it to the special rate section on the webpage
document.getElementById("specialRate").innerHTML = genRand();

//create a new Date object
var newDate = new Date(2019, 02, 05);


//Call the function passing the date object to it and write it to the offer ends section on the webpage
document.getElementById("offerEnds").innerHTML = offerExpires(newDate);



