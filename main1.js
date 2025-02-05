function valii(){
    
    var msg="";
    
    //variable its block scope
    
    var name =document.getElementById('name').value;
    var phone =document.getElementById('phone').value;
    var username =document.getElementById('username').value;
    var password =document.getElementById('password').value;
    var cpassword =document.getElementById('cpassword').value;
    var subject =document.getElementById('subject').value;
    var message =document.getElementById('message').value;
	var email = document.getElementById('email').value;
    
    if(name == ""){
        //alert('please enter name')
        
        msg='<span class="box"><i class="fa-solid fa-circle-exclamation"></i>please enter name</span>';
        document.getElementById('err').innerHTML = msg;
        
        return false;
        
    }else if(phone == ""){
        msg='<span class="box"><i class="fa-solid fa-circle-exclamation"></i>please enter PHONE</span>';
        document.getElementById('err').innerHTML = msg;
        
        return false;
    }else if( email == ""){
		msg = '<span class="box"><i class="fa-solid fa-circle-exclamation"></i>please enter email</span>';
		document.getElementById('err').innerHTML = msg;
		
		return false;
	}else if(password == ""  || cpassword == ""){
        
        msg='<span class="box"><i class="fa-solid fa-circle-exclamation"></i>please enter name</span>';
        document.getElementById('err').innerHTML = msg;
        
        return false;
        
    }else if(password !==  cpassword){
        
          msg='<span class="box"><i class="fa-solid fa-circle-exclamation"></i>please enter password</span>';
        document.getElementById('err').innerHTML = msg;
        
        return false;
        
    }else{
         msg='<span class="box2">thanks for support</span>';
        document.getElementById('err').innerHTML = msg;
        
        return false;
    }
}

