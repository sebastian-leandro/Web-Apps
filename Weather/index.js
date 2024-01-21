/*
const userAdress = document.getElementById('input-search');
const cityRemove = document.getElementById('city-remove');
const holdMain = document.querySelector('.weather-head');
const mainTitle = document.getElementById('city-remove')

userAdress.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        weatherDay();
        e.preventDefault();
    }
});

userAdress.addEventListener('click', weatherDay());

function weatherDay() {
    async function fetchWeather() {
        const userAdress = await document.getElementById('input-search').value;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userAdress},&appid=c83e2fcb0eb3e38d1add94653b89d1e3`);
        const data = await response.json();
        return data;
    }
    fetchWeather().then(data => {
        if(Array.isArray(data.weather) && data.weather.length > 0) {
            try {
                data.weather.map(({id,main,description}) => {
                    document.getElementById('weather-description').innerText = description;
                    document.getElementById('weather-condition').innerText = main;
                    document.getElementById('weather').innerText = id;
                    const image = document.getElementById('weather-image')
                    if (image === null) {
                      const img = document.createElement('img');
                      img.setAttribute('id', 'weather-image');
                      holdMain.append(img)
                    } 
                    const weatherImg = document.getElementById('weather-image');
                    switch(main) {
                        case 'Clear' :
                            weatherImg.src = './img/sunny.jpg'; 
                            break;
                        case 'Rain' : 
                            weatherImg.src = './img/rain.jpg'; 
                            break;
                        case 'Storm' : 
                            weatherImg.src = './img/storm.jpg'; 
                            break;
                        case 'Clouds' :
                            weatherImg.src = './img/clouds.jpg'; 
                            break;
                    }
                })
            }catch(err){console.error(err)};
        }
        try {
            document.getElementById('city-name').innerText = data.sys.country;
        }catch(err){console.error(err)};

    })
    .catch(err => console.error(err));
}   
*/




