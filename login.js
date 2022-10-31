function validateForm(){

    var name = document.getElementById("name");
    var number = document.getElementById("number");
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    var regex_num = /^[0-9]{10}$/;

    var regex_email = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,5})(.[a-z]{2,5}?)$/;
    
    var regex_password = /^[a-zA-Z0-9@!#$&*]{6,14}$/;
    
    if(name.value == ""){
        alert("Name must be filled out");
        name.focus();
        return false;
    }else if(number.value == ""){
        alert("Number must be filled out");
        number.focus();
        return false;
    }else if(!number.value.match(regex_num)){
        alert("Number is incorrect!");
        number.focus();
        return false;

    }else if(!email.value.match(regex_email)){
        alert("Email is incorrect!");
        email.focus();
        return false;
    }else if(!password.value.match(regex_password)){
        alert("Password is incorrect!");
        password.focus();
        return false;
    }

    return true;

}