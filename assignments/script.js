const create = document.getElementById("create");
const backbutton = document.getElementById("back");
const content = document.getElementById("content");
const signup = document.getElementById("signup");

create.addEventListener("click", function () {
    content.classList.add("hidden");
    signup.classList.remove("hidden");
});

backbutton.addEventListener("click", function () {
    content.classList.remove("hidden");
    signup.classList.add("hidden");
});
document.getElementById("submit").addEventListener("click",function(){
    Email=document.getElementById("email").value;
    correctMail="chittibasamsetti@gmail.com"
      if(Email===correctMail){
        alert("Welcome");
      }
      else{
        alert("incorrect email or password");
      }
    })
    function add(a,b){
       return a+b
    }
    function sub(a,b){
      return a-b
   }
   export{add,sub}
