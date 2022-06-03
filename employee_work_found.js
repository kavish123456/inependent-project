function dwld(){
    localStorage.getItem("task_name");
    localStorage.getItem("Task_Description");
    localStorage.getItem("Task_Wage");
    localStorage.getItem("myFile");
    localStorage.getItem("Contact_details");
    document.getElementById("task_name").innerHTML = task_name;
    document.getElementById("Task_Description").innerHTML = Task_Description;
    document.getElementById("Task_Wage").innerHTML = Task_Wage;
    document.getElementById("myFile").innerHTML = myFile;
    document.getElementById("Contact_details").innerHTML = Contact_details;
}