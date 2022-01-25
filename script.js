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
