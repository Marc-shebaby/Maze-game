
 function check(){
    if(localStorage.getItem(document.getElementById("name").value)===null){
       
        alert("Username does not exist");
        return false;
}else if (JSON.parse(localStorage.getItem(document.getElementById("name").value))["password"]!=document.getElementById("pass").value){
    alert ("Wrong password");
    
    return false;
};
return localStorage.getItem(document.getElementById("name").value);
};



