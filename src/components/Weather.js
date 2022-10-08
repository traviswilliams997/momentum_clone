import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {WeatherContainer, Temp, City} from './WeatherStyles'
const lat = '32.77'
const lon = '-96.79'
const key = '14146d00fb318db04b855675ae052d9c'

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
const Weather = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error)=> {
            console.log(error)
        })
    },[])

    if(!data) return null
  
    return (
    <WeatherContainer>

        <Temp> 
            {(((data.main.temp - 273.15)*1.8)+32).toFixed(1)}
        </Temp>
        <City>Dallas, TX</City>

    </WeatherContainer>
  )
}

export default Weather