let user_menbers =document.querySelector('.user_menbers')
let hover_text_profile =document.querySelector('.hover_text_profile')
console.log(user_menbers)
user_menbers.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('hello')
    hover_text_profile.classList.toggle('active_text_user')
 })