import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {WeatherContainer, Temp, City} from './WeatherStyles'
const lat = '18.1096'
const lon = '-77.2975'
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
            {(((data.main.temp - 273.15)*1.8)+32).toFixed(1)}&#176;
        </Temp>
        <City>Kingston, Jamaica</City>

    </WeatherContainer>
  )
}

export default Weather