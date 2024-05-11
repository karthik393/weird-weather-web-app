const apiKey = "9fe7f765616c349a807cfe8169bb84a4";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");

const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
    }else{
        let data = await response.json();

        console.log(data);
    
        document.querySelector(".city-name").innerHTML = data.name;
    
        document.querySelector(".temp .temp-data").innerHTML = Math.round(data.main.temp) + "°C";
    
        document.querySelector(".details-para").innerHTML = data.weather[0].description;
    
        document.querySelector(".hum-percentage").innerHTML = data.main.humidity + "%";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Humidity"){
            weatherIcon.src = "images/humidity.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png";
        }

        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});

