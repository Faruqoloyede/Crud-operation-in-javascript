const logout = document.querySelector("#Logoutbtn");
const input = document.querySelector(".name");
const age_input = document.querySelector(".age");
const mobile_input = document.querySelector(".mobile");
const addBtn = document.querySelector("#addbtn");
const welcomeText = document.querySelector(".welcome");

const users = JSON.parse(localStorage.getItem("users") || "[]");


//showing to the Dom

function showUsers(){
    document.querySelectorAll("td").forEach((td) => td.remove())
    users.forEach((user, index)=>{
        const list = document.querySelector("#user-list");
        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.age}</td>
        <td>${user.mobile}</td>
        <td><i class= "fas fa-trash text-danger mx-3" onclick="delUser(${index})"></i></td>
        `;

        list.appendChild(row);
    });
}

showUsers();

function Welcome(){
    welcomeText.innerHTML = "you are logged in as admin";
    setTimeout(()=> welcomeText.remove(), 3000);
}

window.onload = Welcome();
//delete user
function delUser(userId){

    let comDel = confirm("are you sur you want to delete");

    if(!comDel){
        return false
    }
    users.splice(userId, 1);
    localStorage.setItem("users", JSON.stringify(users));
    showUsers();
}
//onclick of addbtn add user
addBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    let nameInput = input.value;
    let ageInput = age_input.value;
    let mobileInput = mobile_input.value;

    if(nameInput || ageInput || mobileInput){

        let userInfo = {
            name: nameInput,
            age: ageInput,
            mobile: mobileInput,
        }
        //saving to local storage
        users.push(userInfo);
        localStorage.setItem("users", JSON.stringify(users));

        showUsers();
        clearFields();
    };
});

function clearFields(){
    input.value = "";
    age_input.value = "";
    mobile_input.value = "";
}

//logout button
logout.addEventListener("click", ()=>{
    let confirmLogout = confirm("are you sure you want to logout");

    if(!confirmLogout){
        return false
    }
    window.location.href = "index.html";
});