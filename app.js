const username = document.querySelector(".username");
const password = document.querySelector(".password");
const login = document.querySelector("#loginbtn");
const main_page = document.querySelector(".hero");
const cont_wrapper = document.querySelector(".wrapper");
const error = document.querySelector(".error");



//creating array of username and password
const users = [
    {
        username: "admin",
        password: "admin1234"
    },
]

//onclick login
login.addEventListener("click", ()=>{
    let userInput = username.value;
    let passwordInput = password.value;

    for(let i = 0; i < users.length; i++){
        if(userInput == users[i].username && passwordInput == users[i].password){
            window.location.href = "input.html";
            cont_wrapper.classList.add("show");
            return
        }
        clearFields()
    }


    error.innerHTML = "incorrect username or password";
    setTimeout(()=> error.remove(), 2000);
    
});

//clear field after inputting value and click on login
function clearFields(){
    username.value = "";
    password.value = "";
}
