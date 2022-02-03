let user_name =document.getElementById('user_name');
let user_pass =document.getElementById('user_pass');
let form_loggin =document.querySelector('.form_loggin')
let Message =document.querySelector('.text_form_login')
let input_login_green_color_connexion =document.querySelector('.input_login_green_color_connexion')
let case_btn =document.querySelector('.login_row_btn')

console.log(input_login_green_color_connexion )
console.log(Message)



let text_password =document.querySelector('.text_password')

form_loggin.addEventListener('submit',(e)=>{
    e.preventDefault();
    let data = {
        username : user_name.value,
        password : user_pass.value,
    }
    let data_parse = JSON.stringify(data);
    localStorage.setItem("connexion",data_parse);

   for (let user in data) {
    console.log(data.username)
    if( data.username ==="jean" && data.password ==="jeanrodolphe"){
        input_login_green_color_connexion.style.backgroundColor="green"
       
    location.href="http://127.0.0.1:5500/menbre.html"
     case_btn.style.display="none"
    
    }else{
      console.log(Message)
      Message.textContent=`username ou mot de Pass incorrect`;
      Message.style.display="block";
    
    }
   }
    
   
})
