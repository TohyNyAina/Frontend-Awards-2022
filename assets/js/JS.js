var modalBtn = document.querySelector('.modal-btn')
        var modalBg = document.querySelector('.modal-bg')
        var modalClose = document.querySelector('.modal-close')
        modalBtn.addEventListener('click' , function (){
        modalBg.classList.add('bg-active');

        })
        modalClose.addEventListener('click' , function (){
        modalBg.classList.remove('bg-active');


            
        })
        
        function loginBtn(){
            let email = document.getElementById("email_login").value;
            let password = document.getElementById("password_login").value;
    
            if( email === "test@gmail.com" && password === "test123"){
                window.location = "html/login.html";
            } else{
                alert("Email ou Mot de passe incorrect! ");
            }
        }


