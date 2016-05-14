$().ready(function() {

    $.validator.addMethod("zipRegex",function(value,element){
        return this.optional(element) || /^\d{5}(?:[-]\d{4})?$/.test(value);
    },"Your zip must be in format nnnnn or nnnnn-nnnn");

    $.validator.addMethod("idRegex",function(value,element){
        return this.optional(element) || /^000\d{6}$/.test(value);
    },"Your id must be in format 000nnnnnn and numbers only");

    // validate signup form on keyup and submit
    $("#signupForm").validate({
        rules: {
            btcNumber:{required: true,
                       idRegex:true,
                      },
            firstName: {required: true},
            lastName: {required: true},
            address: {
                required: true,

            },
            city: {
                required: true,

            },
            state: {
                required: true,

            },
            zip: {
                required: true,
                zipRegex: /^\d{5}(?:[-]\d{4})?$/,

            },
            email: {
                required: true,
                email: true
            },
            phoneNumber: {
                required: true,
                phoneUS: true,

            },
            campus: {
                required: true,

            },
        },	
        messages: {


            email: {email:"Your email must be in format example@example.com"},
            phoneNumber:{phoneUS:"Your phone number must be in format nnn-nnn-nnnn or (nnn) nnn-nnnn"},
            campus: "Please choose a location"
        }
    });

});