    
          //

            var loginform = document.getElementById("loginform");                          ///edited
            var registerform = document.getElementById("registerform");
            var divBtn = document.getElementById("btn");

            function register(){
                loginform.style.left="-400px";
                registerform.classList.remove('hidden');
                registerform.style.left="50px";
                divBtn.style.left="110px";
                loginform.classList.add('hidden');
            }
            
            function login(){
                loginform.classList.remove('hidden');
                registerform.classList.add('hidden');
                loginform.style.left="50px";
                registerform.style.left="450px";
                divBtn.style.left="0px";
            }

            //check for register
            let registerButton = document.getElementById("register");
            let nameInput = document.getElementById("username");
            let emailInput = document.getElementById("email");
            let passwordInput = document.getElementById("password");
            let errorDiv = document.getElementById("error-messages");
            let errorMessage = "";
            
            registerButton.addEventListener("click",onSubmit);
            
               function onSubmit(e) { 
                errorMessage="";
                e.preventDefault();
                if (nameInput.value ===""){
                    //console.log("name is required");
                            errorMessage ="<p> Name is required </p>";
                }
                if (emailInput.value ===""){
                    //console.log("email is required");
                            errorMessage +="<p> Email is required </p>";
            
                }
                if (passwordInput.value ===""){
                    //console.log("password is required");
                            errorMessage +="<p> Password is required </p>";
            
                }
                errorDiv.innerHTML = errorMessage;
                if (errorMessage===""){

                    document.location.href="../home/index.html";

                }
                
            }
            
            
            //check for login
            let loginButton = document.getElementById("login");
            let nameIp = document.getElementById("userId");
            let passwordIp = document.getElementById("pass");
            let errorsDiv = document.getElementById("errors-messages");
            let errorsMessage = "";
            //loginButton.addEventListener("click",OnSubmit);
            
             loginButton.onclick=function OnSubmit(l) { 
                l.preventDefault();
                errorsMessage="";
                
                
               if (nameIp.value ===""){
                    errorsMessage +="<p> Name is required </p>";
                }
               
                if (passwordIp.value ===""){
                    errorsMessage +="<p> Password is required </p>";
            
                }
                errorsDiv.innerHTML = errorsMessage;

                if (nameIp.value !=="" && passwordIp.value !=="" ){

                    //document.location.href="../home/index.html";           
                    window.location.replace("index.html");
                }
               
            }
            
           
     //document.errorsDiv.innerHTML login
     //document.errorDiv.innerHTML register