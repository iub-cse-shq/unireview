$(document).ready(function(){
	$("#submitInput").click(function(e){
		e.preventDefault();
		var form = $("#registrationForm");
		var name = $("#nameInput");
		var email = $("#emailInput");
		var phone = $("#phoneInput");
		var gender = $("#genderInput");

		var nameSpan = $("#nameError");
		var emailSpan = $("#emailError");
		var phoneSpan = $("#phoneError");
		var genderSpan = $("#genderError");

		var nameString = name.val();
		var emailString = email.val();
		var phoneString = phone.val();
		var genderString = gender.val();

		if(!checkName(nameString)){
			name.css("border", "solid red 3px");
			nameSpan.html("not a valid name");
		}
		else{
			name.css("border", "solid green 3px");
			nameSpan.html("");
		}

		if(!checkPhoneNumber(phoneString)){
			phone.css("border", "solid red 3px");
			phoneSpan.html("not a valid phone number");
		}
		else{
			phone.css("border", "solid green 3px");
			phoneSpan.html("");
		}		

		if(!checkEmail(emailString)){
			email.css("border", "solid red 3px");
			emailSpan.html("not a valid  email address");
		}
		else{
			email.css("border", "solid green 3px");
			emailSpan.html("");
		}

		if(!$('input[name=gender]:checked').val()){
			gender.css("border", "solid red 3px");
			genderSpan.html(" Select Your Gender");
		}else{
			genderSpan.html("");
		}

		// if(!checkName(nameString) && !checkPhoneNumber(phoneString) && !checkEmail(emailString)){
		// 	name.css("border", "solid red 3px");
		// 	nameSpan.html("not a valid name");

		// 	phone.css("border", "solid red 3px");
		// 	phoneSpan.html("not a valid phone number");

		// 	email.css("border", "solid red 3px");
		// 	emailSpan.html("not a valid  email address");
		// }

		// else {
		// 	name.css("border", "solid green 3px");
			
		// 	phone.css("border", "solid green 3px");
			
		// 	email.css("border", "solid green 3px");
			
		// }

		// else {
		// 	form.submit();
		// }	

	});



	function checkPhoneNumber(phoneString){
		var retVal = false;
		if(phoneString.length == 13){
			if(phoneString[0] == '8' && phoneString[1] == '8'){
				if(phoneString.substr(2) != "00000000000"){
					if($.isNumeric(phoneString)){
						retVal = true;
					}
				}
			}
		}
		return retVal;
	}



	function checkEmail(emailString){
		var retVal = false;
        //var emailFormat = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        var emailFormat = /^([a-zA-Z0-9_.])+\@(([a-zA-Z])+\.)+([a-zA-Z]{2,4})+$/;
        if(emailFormat.test(emailString)){
        	retVal=true;
        }

		return retVal;
	}



	function checkName(nameString){
		var retVal = false;
		var space =0;

		for(var i=0;i<nameString.length-1;i++){
				if (nameString[i]==' ') {
					space = i;
					break;
				}
			}
		if(nameString[space-1]=='.'){
			if (nameString.length-space>3) {
				if (/^[A-Za-z\s]+$/.test(nameString.substr(0,space-1)) &&  /^[A-Za-z\s]+$/.test(nameString.substr(space+1)) ) {
					retVal=true;	
				}
			}	
		}
		else{
			if (nameString.length-space>3) {
				if (/^[A-Za-z\s]+$/.test(nameString.substr(0,space-1)) &&  /^[A-Za-z\s]+$/.test(nameString.substr(space+1)) ) {
					retVal=true;	
				}
			}	
		}	
    
		return retVal;
	}

    
	// function checkGender(genderString){
	// 	var retVal = false;
 //        if(genderString == 'm' || genderString == 'f' ){
 //        	retVal=true;
 //        }

	// 	return retVal;
	// }




});