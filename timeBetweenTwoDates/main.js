let startDate = document.getElementById( 'start_date' );
let endDate = document.getElementById( 'end_date' );
let submitButton = document.getElementById('submit');
const dynamicDates = document.getElementById('dynamicDates');



function  checkDays(){    
    let sDate = new Date(startDate.value);
    let eDate = new Date(endDate.value);
    
    let Difference = eDate.getTime() - sDate.getTime();
    let  Days = Math.ceil(Difference / (1000 * 3600 * 24)); // Number of days between the two dates

    if(Days < 0){
        alert("End date must be greater than Start date");
        return false;
    }else{
        alert( "Number of days: "+Days) ;
        dynamicDates.innerText ="Number of days: "+Days;
    }
}



