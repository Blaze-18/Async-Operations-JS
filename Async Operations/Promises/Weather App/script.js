function getCoordinates(){
    return new Promise(function (resolve,reject){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                function(position){
                    const userCoordinates ={
                        longitude: position.coords.longitude,
                        latitude: position.coords.latitude
                    }
                    resolve(userCoordinates);
                },
                function(error){
                    console.error("Error getting user coordinates");
                    reject(error);
                }
            )
        }else{
            reject("Navigator not supported in the browser")
        }
    });
}
function getLocationData(coordinates){
    let longitude = coordinates.longitude;
    let latitude = coordinates.latitude;
    const query = `${latitude},${longitude}`;
    const api_url = 'https://api.opencagedata.com/geocode/v1/json';
    const api_key = '263e6c6efbdd42dcae9aa6c5e41790fe';
    const requestURL = `${api_url}?key=${api_key}&q=${encodeURIComponent(query)}&pretty=1&no_annotations=1`;
    return fetch(requestURL)
            .then(function(response){
                if(!response.ok){
                    throw new Error(`Network Error. Response status : ${response.status}`);
                }else{
                    return response.json();
                }
            })
            .then(function(data){
                if(data.results && data.results.length > 0){
                    console.log(data.results[0]);
                    const address = data.results[0].formatted;
                   // console.log(`user address : ${address}`);
                    return address;
                }
            })
            .catch(function(error){
                console.error(`Error fetching Location Data : ${error}`);
                return null;
            })
}
function getWeatherData(coordinates,cityName = null){

   
    const api_key = 'b93bf265e2c5d37751ffe8a0eccdbcec';
    let requestURL;
    if(cityName !== null){
        requestURL = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${api_key}`
    }else{
        requestURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${api_key}`;
    }
    
    
    return fetch(requestURL)
            .then(function(response){
                if(response.ok){
                    return response.json()
                }else{
                    throw new Error("Weather API Failed\nNetwork response: " + response.status);
                }
            })
            .then(function(data){
                if(data === null || data === undefined){
                    console.log("Parsed json data is null/undefined");
                
                }else{
                    console.log("weather fetch successful returning weather object");
                    return data;
                }
            })
}
function weatherNow(){
    getCoordinates()
        .then(function (userCoordinates){
            console.log(`longitude : ${userCoordinates.longitude} latitude : ${userCoordinates.latitude}`);
            return getWeatherData(userCoordinates);
        })

        .catch((error) => console.log(error))
        .then(function(weatherData){
            //TODO - dom manipulation kore show korte hobe (cityname, long, lat, weather details)
            const weather = formatWeatherData(weatherData);
            const weatherElement = document.getElementById('local-area-weather');
            weatherElement.innerText = weather;
        })
        .catch(function(error){
            console.error(error);
        })
        
}
function formatWeatherData(weatherData) {
    // Extract relevant data from the API response
    const cityName = weatherData.city.name;
    const country = weatherData.city.country;
    const lon = weatherData.city.coord.lon;
    const lat = weatherData.city.coord.lat;
    const tempKelvin = weatherData.list[0].main.temp; // Temperature in Kelvin
    const tempCelsius = (tempKelvin - 273.15).toFixed(2); // Convert to Celsius
    const tempFahrenheit = ((tempKelvin - 273.15) * 9/5 + 32).toFixed(2); // Convert to Fahrenheit
    const weatherDescription = weatherData.list[0].weather[0].description;

    // Format the data into a readable string
    const formattedData = `
        City: ${cityName}, ${country}
        Coordinates: (Longitude: ${lon}, Latitude: ${lat})
        Temperature: ${tempCelsius}°C / ${tempFahrenheit}°F
        Weather: ${weatherDescription}
    `;

    return formattedData;
}
function weatherByCity(){
    let cityName = document.getElementById('cityInput').value;
    getWeatherData(null, cityName)
        .then(function(weatherData){
            // console.log(weather.city.name+ " " + weather.list[0].weather[0].description)
            //TODO - Dom manipulation kore show korte hobe (city Name) (long lat) (weather details)
            const weather = formatWeatherData(weatherData);
            const weatherElement = document.getElementById('city-weather');
            weatherElement.innerText = weather;
        })
        .catch(function(error){
            console.log(error);
        })
}
