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
});
