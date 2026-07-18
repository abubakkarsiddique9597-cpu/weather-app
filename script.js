const apiKey = "83dd0d375302b57c30aa777f963af0a8";

function getWeather() {
    let city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            document.getElementById("weatherResult").innerHTML = `
                <h2>${data.name}</h2>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
                <h3>${data.main.temp}°C</h3>
                <p>${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
        })
        .catch(error => {
            console.log(error);
            alert("City not found");
        });
}