var num_arr=JSON.parse(localStorage.getItem("usernumber")) || [];
var form=document.querySelector("#signUpForm");
console.log(form);

form.addEventListener("submit",function(event){
event.preventDefault();

var phone=form.phone.value;

num_arr.push({
    phone:phone,
  })
localStorage.setItem("usernumber",JSON.stringify(num_arr));
console.log(phone);
if(phone=="")
{
  alert("Please Enter the number");
}
else{
  window.location.assign("mainsignup.html")
}

});

function func(){
  var login=document.querySelector(".log");
  console.log("clicked");
  window.location.assign("login.html");

}


