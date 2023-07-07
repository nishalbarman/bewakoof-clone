var log_arr=JSON.parse(localStorage.getItem("userinfo")) || [];
var form_l=document.querySelector("#loginForm");
console.log(form_l);

form_l.addEventListener("submit",function(){
    event.preventDefault();
    var email_l=document.querySelector("#email");
    var password_l=document.querySelector("#password");
    
    console.log(log_arr);
    // console.log(email_l.value,password_l.value);
    // console.log(log_arr.email,log_arr.password);
    log_arr.forEach(function(ele,index,array){
        console.log(ele.email);
        if(ele.email == email_l.value)
    {
        if(ele.password == password_l.value)
        {
            alert("login sucessfull");
            // window.location.href="index.html";
        }
        else{
            alert("wrong credentials")
        }
    }
    })
    
})
