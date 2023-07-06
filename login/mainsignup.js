var si_arr=JSON.parse(localStorage.getItem("userinfo")) || [];
var form=document.querySelector("#signUpForm");
console.log(form);

form.addEventListener("submit",function(event){
event.preventDefault();

var name=form.fullname.value;
var email=form.email.value;
var password=form.password.value;

si_arr.push({
  fullname:name,
  email:email,
  password:password,
});

localStorage.setItem("userinfo",JSON.stringify(si_arr));

});