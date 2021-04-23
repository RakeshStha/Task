


///login logics

var usrAccount = [ //making an array of username and password for verification
    {
        username: "rakesh",
        password: "rakesh"
    },
    {
        username: "admin",
        pasword: "admin"
    }
]

//Creating cookies

document.cookie = "Your data matter most"
console.log(document.cookie);



function btnLogin(){

    //Array (JSON) login
   
        var username = document.getElementById('username').value
        var password = document.getElementById('password').value
       
        for(var i = 0; i < usrAccount.length; i++) {
            // check is user input matches username and password of a current index of the objPeople array
            if(username == usrAccount[i].username && password == usrAccount[i].password) {
                console.log(username + " is logged in!!!")
                // stop the function if this is found to be true
                return
            }
        }
        console.log("incorrect username or password")

  
      

}


function onSignIn(googleUser){
    // var profile = googleUser.getBasicProfile();
    // console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    // console.log('Full Name: ' + profile.getName());
    // console.log('Given Name: ' + profile.getGivenName());
    // console.log('Family Name: ' + profile.getFamilyName());
    // console.log("Image URL: " + profile.getImageUrl());
    // console.log("Email: " + profile.getEmail());

    // // The ID token you need to pass to your backend:
    // var id_token = googleUser.getAuthResponse().id_token;
    // console.log("ID Token: " + id_token);


    const profile = googleUser.getBasicProfile();
     $(".container").css("display", "none");
    $(".data").css("display","block");
     $("#pic").attr('src',profile.getImageUrl());
      $("#email").text(profile.getEmail());
      $("#name").text(profile.getName());
      $("#id").text(profile.getId());
   
}

function signOut(){
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function(){
        $(".container").css("display", "block");
        $(".data").css("display","none");
        alert('You have been successfully signout');
        
        console.log("Logging out");
    });
}


