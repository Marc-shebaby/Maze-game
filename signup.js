
 function check(){

if(document.getElementById("username").value==""){
    alert("enter username");
    return false;

   
}
else if(document.getElementById("password").value==""){
    alert("enter password");
    return false;
  

}
else{

    var y=document.getElementById("username").value;
    if(localStorage.getItem(y)===null){
    
        store();
       }
       else{
      alert("Username already exists");
      return false;
    };
    
    

};
};




function store () {
  
    
    let u = document.getElementById("username").value;
   
    let pass = document.getElementById("password").value;
   
            
   const user = {
            username: u,
            password: pass,
            score:0,

        };
    let jsn = JSON.stringify(user);
    localStorage.setItem(u, jsn);

    
    };
  

