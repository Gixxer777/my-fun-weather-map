var APIKey = "14e4aba3cf6f2dc5536be3db0b7e6b7f";

var searchButton = document.querySelector("#searchButton")
var currentLocation= ""
searchButton.addEventListener("click", function(event) {
    event.preventDefault();
    var cityName = document.querySelector("#city").value
    geoLocation(cityName);
})
 
function geoLocation (city) {
    var locationUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" + APIKey
    fetch(locationUrl)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data)
        var currentlat = data[0].lat
        console.log(currentlat)
        currentLocation = data[0].name
        var currentlon = data[0].lon
        getWeather(currentlat, currentlon) 
    })
}

function getWeather (lat, lon) {
    var queryUrl = "https://api.openweathermap.org/data/3.0/onecall?lat="+lat+"&lon="+lon+"&units=imperial"+"&appid=" + APIKey 
    fetch(queryUrl)
    .then((res)=> {
        return res.json()
    })
    .then((data)=>{
        console.log(data)
        var dateTime = dayjs.unix(data.current.dt).format('MM-DD-YYYY')
        var currentIcon = data.current.weather[0].icon
        var currentWeather= document.querySelector("#currentWeather")
        var currentTemp = data.current.temp
        var currentHumidity = data.current.humidity
        var currentWind = data.current.wind_speed
       currentWeather.innerHTML = ` <p>${currentLocation} <img src="https://openweathermap.org/img/wn/${currentIcon}@2x.png"/></p> 
       <p>${dateTime}</P>
       <p>Current Temperature=${currentTemp}  Humidity=${currentHumidity}  Wind Speed=${currentWind} </p>
        `
    })
}







