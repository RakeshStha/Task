//integrating map into website through javascript web sdk
function initMap(){
    var location = {lat:27.69041308480009 , lng:85.34429478335618 };
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom: 20,
        center: location
    });
    var marker = new google.maps.Marker({
    position: location,
    map:map
})
}

//End of map integration 


//  function suscribe() {
//      alert('Thank you for suscribe.');
//  }

//crating modal form popup on sucribitions

const toggleModal = () => {
    document.querySelector('.modal').classList.toggle('hidden');
    document.querySelector('.overlay').classList.toggle('hidden');
}

document.querySelector('#show-modal').addEventListener('click', toggleModal);
document.querySelector('.overlay').addEventListener('click', toggleModal);

document.querySelector('#suscribe-form')
  .addEventListener('click', (e) => {
  e.preventDefault();
  toggleModal();
  var email = document.getElementById('suscribe-email').value;
  alert("Congratulation! " + email + " you have been suscribed to our channel.");
});

document.querySelector('.modal-close span').addEventListener('click', toggleModal);
document.querySelector('.overlay').addEventListener('click', toggleModal);

//End of modal form pop up

//Clock code

setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
  
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + ":" 
            + min + ":" + sec + am_pm;
  
    document.getElementById("clock")
            .innerHTML = currentTime;
}
showTime();

//end of clock functions


// Contact Form validation

const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInput();
})

function checkInput(){
    // trim to remove whitespace
    const lnameValue = lname.value.trim();
    const fnameValue = fname.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const msgValue = msg.value.trim();

    //Validation if user input is blank

    if(fnameValue === ''){
        setErrorFor(fname, 'First name cannot be blank');

    }
    else{
        setSuccessFor(fname);
    }

    if(lnameValue === ''){
        setErrorFor(lname, 'First name cannot be blank');

    }
    else{
        setSuccessFor(lname);
    }

    if(emailValue === ''){
        setErrorFor(email, 'First name cannot be blank');

    }
    else{
        setSuccessFor(email);
    }

    if(phoneValue === ''){
        setErrorFor(phone, 'Phone number ');

    }
    else{
        setSuccessFor(phone);
    }

    if(msgValue === ''){
        setErrorFor(msg, 'Phone number ');

    }
    else{
        setSuccessFor(msg);
    }

}

function setErrorFor(input, messages) {
	const formControl = input.parentElement;
    formControl.className = 'input errors';
	// const small = form.querySelector('small');
	
	// small.innerText = messages;


}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'input success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}