import React, { useState } from 'react'
import {fetchWeather} from './api/featchWeather'
import './App.css'

const App = ()=>{ 
    const [query, setQuery] =useState('')
    const [weather,setWeather] = useState('')
    const search = async (e) =>{
        if(e.key ==='Enter'){
            const data = await fetchWeather(query)
           setWeather(data)
           setQuery('')
        }
    }
    return (
        <div className='container'>
            <input
            type='text'
            className='d-flex justify-content-center'
           size={50}
            onChange={(e)=> setQuery(e.target.value)}
           value={query}
           onKeyPress={search}
            placeholder='search...'/>
            {weather.main && (
                <div className='row' >
                    <div className='col-sm-8 col-md-5 col-6' style={{width:'15rem'}}>
                        <div className='card' id='result'>
                            <h2 className='card-title'><span>{weather.name}</span>
                            <sup className=''>{weather.sys.country}</sup>
                            </h2>
                            <div className="card-text ">
                                {Math.round(weather.main.temp)} 
                                <sup>&deg;C</sup>
                                <div >
                                    <img className='card-img' src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                    alt={weather.weather[0].description}/>   
                                    <p>{weather.weather[0].description} </p> 
                                </div>
                            </div>
                    
                    </div>
                    </div>
                </div>
              
            )}
        </div>
    )
}
export default App