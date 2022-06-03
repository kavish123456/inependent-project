function welcome() {
   localStorage.getItem("name");
   document.getElementById("welcome").innerHTML= "Welcome To Workable " + name;     
}
localStorage.getItem("name");
document.getElementById("welcome").innerHTML= "Welcome To Workable " + name;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   console.log("Room Name - " + Room_names); 
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
   document.getElementById("output").innerHTML += row; });
   });}
getData();

function redirectToRoomName(name) 
{ 
   console.log(name); 
   localStorage.setItem("room_name", name); 
   window.location = "kwitter_page.html"; }
   