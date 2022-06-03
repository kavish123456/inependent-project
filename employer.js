var firebaseConfig = {
    apiKey: "AIzaSyB7EzZgAt_p16ejCGgWa-cQRczGoJDBM6Y",
    authDomain: "workable-a06a3.firebaseapp.com",
    databaseURL: "https://workable-a06a3-default-rtdb.firebaseio.com",
    projectId: "workable-a06a3",
    storageBucket: "workable-a06a3.appspot.com",
    messagingSenderId: "143557295414",
    appId: "1:143557295414:web:26681170480233aea0c797"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function check(){
    name = document.getElementById("name").value;
    age = document.getElementById("age").value;
    
    if (age > 2004) {
      document.getElementById("below_year").innerHTML = "Sorry " + name + " you are below the age of 18";
  
    }
  
   if (age < 2004){
    card_number = document.getElementById("card_number").value;
    email_id = document.getElementById("email_id").value;
    pasword = document.getElementById("pasword").value;
    console.log(name);
  localStorage.setItem("name", name);
  window.location = "employer_home.html ";
   }
  }