function addUser(){
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("username", user_name);
    document.getElementById("user_name").innerHTML = localStorage.getItem("username");
    window.location = "kwitter_room.html";
 }