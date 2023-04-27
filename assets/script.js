var APIKey = "14e4aba3cf6f2dc5536be3db0b7e6b7f";

var searchButton = document.querySelector("#searchButton")

searchButton.addEventListener("click", function(event) {
    event.preventDefault();
    var cityName = document.querySelector("#city").value
    geoLocation(cityName);
})
 
function geoLocation (city) {
    var locationUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" + APIKey
    fetch(locationUrl)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data)
        var currentlat = data[0].lat
        console.log(currentlat)
        var currentlon = data[0].lon
        getWeather(currentlat, currentlon) 
    })
}

function getWeather (lat, lon) {
    var queryUrl = "https://api.openweathermap.org/data/3.0/onecall?lat="+lat+"&lon="+lon+"&appid=" + APIKey
    fetch(queryUrl)
    .then((res)=> {
        return res.json()
    })
    .then((data)=>{
        console.log(data)
        
    })
}





