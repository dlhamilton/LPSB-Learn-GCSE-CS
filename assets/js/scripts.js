
// ------------------------------lesson----------------------------------
loadCompleteSection();
// load in local storage to fill in checkboxes
function loadCompleteSection() {
  if (localStorage.getItem("s_3_1") == 1) {
    document.getElementById("cb_s_3_3_1").checked = true;
  }
  if (localStorage.getItem("s_3_2") == 1) {
    document.getElementById("cb_s_3_3_2").checked = true;
  }
  if (localStorage.getItem("s_3_3") == 1) {
    document.getElementById("cb_s_3_3_3").checked = true;
  }
  if (localStorage.getItem("s_3_4") == 1) {
    document.getElementById("cb_s_3_3_4").checked = true;
  }
  if (localStorage.getItem("s_3_5") == 1) {
    document.getElementById("cb_s_3_3_5").checked = true;
  }
  if (localStorage.getItem("s_3_6") == 1) {
    document.getElementById("cb_s_3_3_6").checked = true;
  }
  if (localStorage.getItem("s_3_7") == 1) {
    document.getElementById("cb_s_3_3_7").checked = true;
  }
  if (localStorage.getItem("s_3_8") == 1) {
    document.getElementById("cb_s_3_3_8").checked = true;
  }
}
// on click set local storage for the checkboxes
function completeSection() {
  if (document.getElementById("cb_s_3_3_1").checked == false) {
    localStorage.setItem("s_3_1", 0);
  } else {
    localStorage.setItem("s_3_1", 1);
  }
  if (document.getElementById("cb_s_3_3_2").checked == false) {
    localStorage.setItem("s_3_2", 0);
  } else {
    localStorage.setItem("s_3_2", 1);
  }
  if (document.getElementById("cb_s_3_3_3").checked == false) {
    localStorage.setItem("s_3_3", 0);
  } else {
    localStorage.setItem("s_3_3", 1);
  }
  if (document.getElementById("cb_s_3_3_4").checked == false) {
    localStorage.setItem("s_3_4", 0);
  } else {
    localStorage.setItem("s_3_4", 1);
  }
  if (document.getElementById("cb_s_3_3_5").checked == false) {
    localStorage.setItem("s_3_5", 0);
  } else {
    localStorage.setItem("s_3_5", 1);
  }
  if (document.getElementById("cb_s_3_3_6").checked == false) {
    localStorage.setItem("s_3_6", 0);
  } else {
    localStorage.setItem("s_3_6", 1);
  }
  if (document.getElementById("cb_s_3_3_7").checked == false) {
    localStorage.setItem("s_3_7", 0);
  } else {
    localStorage.setItem("s_3_7", 1);
  }
  if (document.getElementById("cb_s_3_3_8").checked == false) {
    localStorage.setItem("s_3_8", 0);
  } else {
    localStorage.setItem("s_3_8", 1);
  }
}

// ------------------drop in--------------------------
// passing data to form-confirmation page script
var myFormArray = new Array();

function ShareData_dropin() {
  myFormArray[0] = "First Name"
  myFormArray[1] = document.getElementById('fname').value;
  myFormArray[2] = "Last Name"
  myFormArray[3] = document.getElementById('lname').value;
  myFormArray[4] = "Email"
  myFormArray[5] = document.getElementById('email').value;
  myFormArray[6] = "Appointment Time"
  myFormArray[7] = document.getElementById('appointmenttime').value;
  myFormArray[8] = "Session Notes"
  myFormArray[9] = document.getElementById('session_notes').value;
  sessionStorage.setItem("myFormArray", JSON.stringify(myFormArray));
}
var myFormArray = new Array();
myFormArray = JSON.parse(sessionStorage.getItem("myFormArray"));


// ------------------------form_confirmation-------------------------------
for (let step = 0; step < myFormArray.length; step++) {
  var tag = document.createElement("span");
  var text = document.createTextNode(myFormArray[step]);
  tag.appendChild(text);
  if (step % 2 == 0) {
    tag.classList.add("item_label");
  } else {
    tag.classList.add("item_data");
  }
  var element = document.getElementById("form_details");
  element.appendChild(tag);
}

var timeleft = 10;
var downloadTimer = setInterval(function () {
  if (timeleft <= 0) {
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Back to home page";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds";
  }
  timeleft -= 1;
}, 1000);



//--------------------------------upload--------------------------------------
//passing data to form-confirmation page script
var myFormArray = new Array();

function ShareData_upload() {
  myFormArray[0] = "First Name"
  myFormArray[1] = document.getElementById('fname').value;
  myFormArray[2] = "Last Name"
  myFormArray[3] = document.getElementById('lname').value;
  myFormArray[4] = "Student Number"
  myFormArray[5] = document.getElementById('snumber').value;
  myFormArray[6] = "Email"
  myFormArray[7] = document.getElementById('email').value;
  myFormArray[8] = "Specification Unit"
  myFormArray[9] = document.getElementById('unit').value;
  myFormArray[10] = "File Uploaded"
  myFormArray[11] = document.getElementById('studentFile').value;
  sessionStorage.setItem("myFormArray", JSON.stringify(myFormArray));
}