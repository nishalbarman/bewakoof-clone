var log_arr=JSON.parse(localStorage.getItem("userinfo")) || [];
var form_l=document.querySelector("#loginForm");
console.log(log_arr);

form_l.addEventListener("submit",function(){
    event.preventDefault();
    var email_l=document.querySelector("#email");
    var password_l=document.querySelector("#password");
    
    console.log(log_arr);
    // console.log(email_l.value,password_l.value);
    // console.log(log_arr.email,log_arr.password);
    if(email_l.value=="" || password_l.value=="")
    {
        alert("Please Enter Your Details")
    }
    else{
        log_arr.forEach(function(ele,index,array){
            console.log(ele.email);
            if(ele.email == email_l.value)
        {
            if(ele.password == password_l.value)
            {
                alert("login sucessfull");
                window.location.assign=("./index.html");
            }
            else{
                alert("wrong credentials")
            }
        }
        });

    }   
})
