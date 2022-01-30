//GET /cases?country=France
//recherchez un pays GET /cases?country=France
//https://github.com/M-Media-Group/Covid-19-API

let infecte_covid= document.querySelector('.text_number1') ;
let mort_covid =document.querySelector('.text_number2')
let infected_pays_death =document.querySelector('.container_row1')
fetch(`https://api.covid19api.com/summary`)
.then(res => res.json())
.then( data => {
    console.log(data)
    console.log(data.Global.TotalConfirmed)
    console.log(data.Countries)
    console.log(data.Countries[0].TotalConfirmed)
    infecte_covid.textContent = `
    ${data.Global.TotalConfirmed}
    `;
      
    mort_covid.textContent = `
    ${data.Global.TotalDeaths}
    `;
   
     for(let i=0 ; i < data.Countries.length ;i++ ){

        infected_pays_death.innerHTML += 
        `
      <div class="container_row_api">
      <span class="api_country">  ${ data.Countries[i].Country}</span>
      <div class="infecteDeath">
        <span class="api_inflected_by_contry">
      ${ data.Countries[i].TotalConfirmed}
        </span>
        <span class="api_mort_by_contry">${data.Countries[i].TotalDeaths}</span>
      </div>
      
      </div>
        `
    }
})

// fetch(`https://api.covid19api.com/countries`)
// .then(res => res.json())
// .then( data => {
//     console.log(data)
    
// })
 
//navbar_menu

let btn_select=document.querySelector('.btn_menu_head');
let div_menu =document.querySelector('.div_menu');
let result_search_api =document.querySelector('.result_search_api')
let input_header = document.querySelector('.input_header')
let form_header =document.querySelector('.form_header')
console.log(form_header)
btn_select.addEventListener('click' ,()=>{
  console.log('hello')
  div_menu.classList.toggle('active')
  console.log(div_menu) 
})

//search
form_header.addEventListener('submit',()=>{
  console.log(input_header.value)
  fetch(`https://api.covid19api.com/summary?query=${input_header.value}`)
  .then(res => res.json())
  .then( data => console.log(data))
})




//slider multiple
$('.bg_header').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
});
        
let prev= document.querySelector('.slick-prev').innerHTML =` <img src="image/left-arrow_left.png" alt="left_arrows" class="btn-size">`
console.log(prev);
let next= document.querySelector('.slick-next').innerHTML=` <img src="image/left-arrow_right.png" alt="right_arrows" class="btn-size" >`

     
