function displayDateAndTime(){

    let curDateObj = new Date ()
    let curHours = curDateObj.getHours()
    let curMins = curDateObj.getMinutes()
    let curSecs = curDateObj.getSeconds()
    let curDate = curDateObj.getDate()
    let curMonth = curDateObj.getMonth()+1
    let curYear = curDateObj.getFullYear()
    let ampm = curHours >= 12 ? "PM" : "AM";
    curHours = curHours % 12;
    curHours = curHours ? curHours : 12; 

    document.getElementsByClassName("hours")[0].innerText=curHours
    document.getElementsByClassName("min")[0].innerText=curMins
    document.getElementsByClassName("sec")[0].innerText=curSecs
    document.getElementsByClassName("date")[0].innerText=curDate
    document.getElementsByClassName("month")[0].innerText=curMonth
    document.getElementsByClassName("year")[0].innerText=curYear
    document.getElementsByClassName("ampm")[0].innerText = ampm;
    
    const daysOfWeek = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    let curDay = daysOfWeek[curDateObj.getDay()];
    
    document.getElementsByClassName("day")[0].innerText = curDay;





}