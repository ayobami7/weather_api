const express = require('express')
const axios = require('axios')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 8000


app.set('trust proxy', true);

app.get('/', async(req, res) =>{
    const visitorName = req.query.visitor_name || 'Guest'
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    // const clientIp = req.ip
    const openWeatherApiKey = process.env.apiKey


    // console.log(clientIp)
    try {
        // geolocation api to identify the city and getting longitude and latitude
        const geoResponse = await axios.get(`http://ip-api.com/json/${clientIp}`)
        const city = geoResponse.data.city || 'lagos'
        const lat = geoResponse.data.lat
        const lng = geoResponse.data.lon

        console.log(city, lat, lng)

        // weather api to get the temperature
        // const url = "https://api.openweathermap.org/data/3.0/onecall"
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&exclude=hourly,daily&appid=${openWeatherApiKey}`
       
        const weatherResponse = await axios.get(url)

        const temperature = weatherResponse.data.main.temp

        // response to return
        res.json({
            "client_ip": clientIp,
            "location": city,
            "greeting": `Hello, ${visitorName}! The temperature is ${temperature} degrees Celsius in ${city}.`
        })

    } catch (error) {
        res.status(400).json({error: 'Unable to fetch data'})
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}...`)
});