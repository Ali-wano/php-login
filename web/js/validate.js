const name = document.querySelector(".name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const Cpassword = document.querySelector(".Cpassword");
const errMsg = document.querySelector(".errMsg");

function submit() {
    if (name.value == "") {
       errMsg.innerHTML = "Please fill out this fild";
       return false;
    }else{
        alert("HELLO")
    }
}
