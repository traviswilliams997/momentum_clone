import React, { useEffect, useState } from 'react'
import axios from 'axios'
const lat = '32.7767'
const lon = '96.7970'
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
  
    console.log(data)
    return (
    <div>

        <p> </p>

    </div>
  )
}

export default Weather