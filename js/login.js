


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
document.cookie = "Your data matter most. Thank you!"
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


function btnGoogle(){
    alert('Login Success')
}

function btnFacebook(){
    alert('succeed');
}
