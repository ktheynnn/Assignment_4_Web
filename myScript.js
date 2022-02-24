const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


//show input error message

function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show input success message

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// check require field

function checkRequire(inputArr){
    inputArr.forEach(function(input){
       if(input.value.trim() === ''){
        showError(input, `${getFieldName(input)} is Require`);
       }
       else {
           showSuccess(input);
       }
    });
}

// Get FieldName

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check email validation

function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(re.test(input.value.trim())){
        showSuccess(input);
    }
    else {
        showError(input, 'Email is not valid');
    }
}

// check input length

function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters` );
    }else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than  ${mix} characters` );
    }
    else {
        showSuccess(input);
    }
}

//check password match

function checkPasswordMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Password do no match');
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequire([username, email, password, password2]);
    checkLength(username,4,10);
    checkLength(password,6,25);
    checkEmail(email);
    checkPasswordMatch(password , password2);

});


$(".my_audio").trigger('load');
function play_audio(task) {
    if(task == 'play'){
         $(".my_audio").trigger('play');
    }
    if(task == 'stop'){
         $(".my_audio").trigger('pause');
         $(".my_audio").prop("currentTime",0);
    }
}

$(".hiddenBtn").click(function(){
    $(".myForm").removeClass("hidden");
    $(".myForm").css("text-align","left");

})

$(".for-shadow").mouseover(function(){
    $(".for-shadow").css("box-shadow", "0 0 5px #00fdf0, 0 0 10px #00fdf0, 0 0 15px #00fdf0");
});

$(".for-shadow").mouseover(function(){
    $(".for-shadow").css("box-shadow", "0 0 5px #00fdf0, 0 0 10px #00fdf0, 0 0 15px #00fdf0");
});

$(".for-shadow").mouseout(function(){
    $(".for-shadow").css("box-shadow", "none");
});
$(document).ready(function(){
    $("body").keypress(function(){
      $(".card").css("box-shadow","0 0 5px #ebaf23, 0 0 10px #ebaf23, 0 0 15px #ebaf23");
    });
  });
//search
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myDIV *").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

//mimh
function openCity(cityName,elmnt,color) { 
  var i, tabcontent, tablinks; 
  tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) { 
    tabcontent[i].style.display = "none"; 
  } 
  tablinks = document.getElementsByClassName("tablink"); 
  for (i = 0; i < tablinks.length; i++) { 
    tablinks[i].style.backgroundColor = ""; 
  } 
  document.getElementById(cityName).style.display = "block"; 
  elmnt.style.backgroundColor = color; 
 
} 
// Get the element with id="defaultOpen" and click on it 
document.getElementById("defaultOpen").click(); 
