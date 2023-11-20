
function login(){
  let uname=document.getElementById("Username").value
  let pass=document.getElementById("Password").value
if(uname!=="jagdish"){

  alert("enter valid userid")
   
}
else if(pass != 12345){
  alert("enter correct password")
  
}
else if(uname=="jagdish" && pass==12345){
  location.assign( " https://www.youtube.com/")
}

}