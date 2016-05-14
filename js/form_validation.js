    function validateForm()
    {
        
        const idRegex       = /\d{9}/;
        const zipRegex      = /^\d{5}(?:[-]\d{4})?$/;
        const phoneRegex    = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
        const emailRegex    = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        
        var id          = document.getElementById("btcNumber").value;
        var firstName   = document.getElementById("firstName").value;
        var lastName    = document.getElementById("lastName").value;
        var address     = document.getElementById("address").value;
        var city        = document.getElementById("city").value;
        var state       = document.getElementById("state").value;
        var zip         = document.getElementById("zip").value;
        var email       = document.getElementById("email").value;
        var phone       = document.getElementById("phoneNumber").value;
        var campus      = document.getElementById("campus").value;
        var radios      = document.getElementsByName("campus");
        var radioBool   = 0;
        
        //  Validate ID Number
        if(id == "")
        {
            
            document.getElementById("btcNumber").focus();
            document.getElementById("btcNumberError").innerHTML="This field is required."; 
            return false;
        }
        if(!idRegex.test(id))
        {
            
            document.getElementById("btcNumber").focus();
            document.getElementById("btcNumberError").innerHTML="Please enter 9 digit numeric only ID";
            return false;
        }
       
        //  Validate firstName
        if(firstName == "")
        {
            document.getElementById("firstName").focus();
            document.getElementById("firstNameError").innerHTML="This field is required."; 
            return false;
        }
       
        //  Validate Last Name
        if(lastName == "")
        {
            document.getElementById("lastName").focus();
            document.getElementById("lastNameError").innerHTML="This field is required."; 
            return false;    
        }
        
        //  Validate address
        if(address == "")
        {
            document.getElementById("address").focus();
            document.getElementById("addressError").innerHTML="This field is required."; 
            return false;   
        }
        
        //  Validate city
        if(city == "")
        {
            document.getElementById("city").focus();
            document.getElementById("cityError").innerHTML="This field is required."; 
            return false;   
        }
        
        //  Validate state
        if(state == "")
        {
            document.getElementById("state").focus();
            document.getElementById("stateError").innerHTML="This field is required."; 
            return false;   
        }
        
        //  Validate zip
        if(zip == "")
        {
            document.getElementById("zip").focus();
            document.getElementById("zipError").innerHTML="This field is required."; 
            return false;   
        }
        if(!zipRegex.test(zip))
        {
            document.getElementById("zip").focus();
            document.getElementById("zipError").innerHTML="Please enter your zip liek nnnnn or nnnnn-nnnn."; 
            return false;   
        }
         
        //  Validate email
        if(email == "")
        {
            document.getElementById("email").focus();
            document.getElementById("emailError").innerHTML="This field is required."; 
            return false;   
        }
        
        if(!email.match(emailRegex))
        {
            document.getElementById("email").focus();
            document.getElementById("emailError").innerHTML="Please enter a valid email address like example@test.com"; 
            return false;
        }
       
        //  Validate phone number
        if(phone == "")
        {
            document.getElementById("phoneNumber").focus();
            document.getElementById("phoneNumberError").innerHTML="This field is required."; 
            return false;   
        }
        
        if(!phone.match(phoneRegex))
        {
            document.getElementById("phoneNumber").focus();
            document.getElementById("phoneNumberError").innerHTML="Please enter a valid phone number like nnn-nnn-nnnn or (nnn) nnn-nnnn"; 
            return false;   
        }
         
        //  Validate campus location
        for(i=0; i < radios.length;i++)
        {
            if(radios[i].checked)
            {
                radioBool++;
                break;
            }
        }
        if(radioBool)
        {
        }
        else{
            document.getElementById("campus").focus();
            document.getElementById("campusError").innerHTML="Please select a location";
            return false;   
        }
        
        
        return true;
       
    }















