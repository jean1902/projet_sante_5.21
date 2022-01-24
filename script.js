//GET /cases?country=France
//recherchez un pays GET /cases?country=France
//https://github.com/M-Media-Group/Covid-19-API

let api_keys= 
fetch(`https://covid-api.mmediagroup.fr/v1/cases`)
.then(res => res.json())
.then( data => {
    console.log(data)
    console.log( data.Albania.All)
})


//site a reproduire