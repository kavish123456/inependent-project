name = localStorage.getItem("name");
document.getElementById("welcome").innerHTML = "Welcome to Workable" + name + "!";

function add_task(){
    window.location = "eployer_add_task.html";
}

function welcome() {
    localStorage.getItem("name");
    document.getElementById("welcome").innerHTML = "Welcome To Workable " + name;

}