import React, { Component, useState, useEffect, useRef } from 'react'
import styled from 'styled-components';
import '../Styles/WeatherComponent.css';
import { getWeather } from '../Services/UserService';







function Weather(props) {


    const [values, setValidLogin] = useState({
        weatherType: "Clear",
        weatherDesc: "Despejado",
        temperature: "",
        minTemperature: "",
        maxTemperature: "",
        windSpeed: "",
        humidity: ""

    });

    useEffect(() => {
        const timeout = setTimeout(() => {
            const validateUserResponse = getWeather().then(data => {

                setValidLogin({
                    weatherType: data[1][0].main,
                    weatherDesc: data[1][0].description,
                    temperature: data[0].temp,
                    minTemperature: data[0].temp_min,
                    maxTemperature: data[0].temp_max
                });
            });

        }, 100000);

        return () => clearTimeout(timeout);
    }, []);


    return (
        <div className="Weather">
            <div className={values.weatherType} />
            <div className='WeatherInfo'>
                <h2>{values.weatherDesc}</h2>
                <p>Montevideo</p>

            </div>
            <div className='WeatherDegree'>
                <h1>{values.temperature}&deg;C</h1>
                <p>{values.maxTemperature}&deg;C  /  {values.minTemperature}&deg;C</p>
            </div>
        </div>
    )


}
export default Weather;