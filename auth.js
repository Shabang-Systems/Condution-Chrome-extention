
email = document.getElementById("email").value;
password = document.getElementById("password").value;

alert(email, password)

firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    
}).then(function(user){
    console.log(user)
    alert(user)
});