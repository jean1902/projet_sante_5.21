//GET /cases?country=France
//recherchez un pays GET /cases?country=France
//https://github.com/M-Media-Group/Covid-19-API

let infecte_covid= document.querySelector('.text_number1') ;
let mort_covid =document.querySelector('.text_number2')
let infected_pays_death =document.querySelector('.container_row1')
fetch(`https://api.covid19api.com/summary`)
.then(res => res.json())
.then( data => {
  console.log(data.Countries[2].Country)
     console.log(data)
    //  console.log(data.Countries[i].Country)
     
    // console.log(data.Global.TotalConfirmed)
    // console.log(data.Countries)
    // console.log(data.Countries[0].TotalConfirmed)
    Display(data);
})

// fetch(`https://api.covid19api.com/countries`)
// .then(res => res.json())
// .then( data => {
//     console.log(data)
    
// })

function Display(data){
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
}
 
//navbar_menu

let btn_select=document.querySelector('.btn_menu_head');
let div_menu =document.querySelector('.div_menu');
let result_search_api =document.querySelector('.result_search_api')
let input_header = document.querySelector('.input_header')
let icon_form_header =document.querySelector('.icon_form_header')
let form_header =document.querySelector('.form_header')
btn_select.addEventListener('click' ,()=>{
  div_menu.classList.toggle('active')
  console.log(div_menu) 
})

//search

// function Search(data){
//  for(let i=0 ; i< data.Countries.length ;i++){
//    console.log(data.Countries)
//   if( input_header.value === data.Countries ){
   
//   }
//  }
// }
form_header.addEventListener('submit',(e)=>{
  e.preventDefault();
  fetch(`https://api.covid19api.com/summary?query=${input_header.value}`)
  .then(res => res.json())
  .then( data => {
    search(data);
  })

  })
  form_header.addEventListener('keyup',(e)=>{
    e.preventDefault();
    fetch(`https://api.covid19api.com/summary?query=${input_header.value}`)
    .then(res => res.json())
    .then( data => {
      search(data);
    })
  
    })

    if( input_header.value !==0){
      function search(data){
        for(let i=0; i<data.Countries.length;i++){
          if( input_header.value == data.Countries[i].Country){
            console.log('bravo')
            result_search_api.innerHTML=`
          
       <div class="result_search_api" id="result_page_search">
       <div class="container row_resultat_flex">
         <div class="row_resultat">
         <p class="result_p result_p1"> <span>Date:</span>  ${ data.Countries[i].Date}</p>
           <p class="result_p result_p1"> <span>Pays:</span>  ${ data.Countries[i].Country}</p>
           <p class="result_p result_p2"> <span>Nouveau confirmé</span> : ${ data.Countries[i].NewConfirmed}</p>
           <p class="result_p result_p3"><span>Nouveaux décès :</span> ${ data.Countries[i].NewDeaths}</p>
           <p class="result_p result_p4"><span>Nouveau Récupéré :</span>${data.Countries[i].NewRecovered}</p>
           <p class="result_p result_p5"><span>Total confirmé :</span>${data.Countries[i].TotalConfirmed} </p>
           <p class="result_p result_p6"><span>Décès totaux :</span> ${data.Countries[i].TotalDeaths} </p>
           <p class="result_p result_p7"><span>Total récupéré :</span>${data.Countries[i].TotalRecovered}</p>
         </div>
       </div>
         
      </div>
            `
          } else{
            console.log('helasssssss')
           
          }
      }
      }
    } else{

      result_search_api.classList.add('delete_result')
      


    }

   
//slider multiple
$('.bg_header').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
});
        
let prev= document.querySelector('.slick-prev').innerHTML =` <img src="image/left-arrow_left.png" alt="left_arrows" class="btn-size">`

let next= document.querySelector('.slick-next').innerHTML=` <img src="image/left-arrow_right.png" alt="right_arrows" class="btn-size" >`

// local storage
