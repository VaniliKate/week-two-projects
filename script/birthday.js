function getAkanName(){
    let yearOfBirth = document.getElementById("year-input").value;
    let monthOfBirth = document.getElementById("month-input").value;
    let dayOfBirth = document.getElementById("day-input").value;
    let genders = document.getElementByName("gender").value;
    };

    function getGender(){
        for(let gender of genders){
            if (gender.checked) {
                return gender.value;
            }
        }
    };

    let myGenderValue = getGender();
    console.log(myGenderValue);

    function monthValidator(){
        if(monthOfBirth < 1 || monthOfBirth > 12){
            return false;
        } else {
            return true;
        }
    };

    function dayValidator (){
        if(monthOfBirth === 2 && Number(yearOfBirth)%4===0){
            if(dayOfMonth > 28 || dayOfBirth < 1){
                return false;
            } else if(monthOfBirth === 2 && dayOfBirth > 29){
                return false;
            } else if(monthOfBirth === 2 && dayOfBirth < 1){
                return false;
            } else {
                return true;
            }
        }
    };

    let monthValid = monthValidator();
    let dayValid = dayValidator();

    let dayOfWeekNumber = Math.floor((((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+
    ((5*Number(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7);

    let daysOfWeek = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday"];

    let femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    let maleAkanNames = [ "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

    
