function ValidateForm() {
    var name = document.getElementById("fullname").value;
    var Email = document.getElementById("email").value;
    var phonenumber = document.getElementById("pnumber").value;
    var Address = document.getElementById("address").value;
    var usernm = document.getElementById("uname").value;
    var password = document.getElementById("pass").value;
    var confpassword = document.getElementById("confpass").value;

    if (name == "") {
        document.getElementById("fname").innerHTML = " ** please fill the full name";
        return false;
    }
    if ((name.length < 3)) {
        document.getElementById("fname").innerHTML = " ** please fill the username min 3 character";
        return false;
    }


    if (Email == "") {
        document.getElementById("e-mail").innerHTML = " ** please fill the email";
        return false;
    }
    if(Email.indexOf('@') <= 0){
        document.getElementById('e-mail').innerHTML = " ** please fill the email in proper format ";
        return false;
    }


    if (isNaN(phonenumber)) {
        document.getElementById("phnumber").innerHTML = " ** please fill with number";
        return false;
    }


    if (Address.length > 100) {
        document.getElementById("add").innerHTML = " ** Adress must be 100 character";
        return false;
    }


    if (usernm == "") {
        document.getElementById("user").innerHTML = " ** please fill the username";
        return false;
    }
    if(usernm != usernm.toLowerCase()){
        document.getElementById("user").innerHTML = " ** username must be lowercase";
        return false;
    }


    if (password == ""){
        document.getElementById("Pass").innerHTML = " ** please fill the password";
        return false;
    }
    if ((password.length < 8) || (password.length > 16)) {
        document.getElementById("Pass").innerHTML = " ** please fill the password between 8 and 16 ";
        return false;
    }
    
    if(password != confpassword){
        document.getElementById("confPass").innerHTML = " ** password are not matching ";
        return false;
    }

    

    if (confpassword == "") {
        document.getElementById("confPass").innerHTML = " ** please fill the confirm password";
        return false;
    }


}