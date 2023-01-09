/* eslint-disable */
import React, {  useState, useEffect} from 'react'
import '../Styles/WeatherComponent.css';
import { getWeather } from '../Services/UserService';







function Weather(props) {


    const [values, setValues] = useState({
        dataFetched: false,
        weatherType: "Clear",
        weatherDesc: "Despejado",
        temperature: "",
        minTemperature: "",
        maxTemperature: "",
        windSpeed: "",
        humidity: ""

    });

    useEffect(() => {

        const data = window.localStorage.getItem('WeatherData');
        const jsonData =JSON.parse(data);
        if (data !== null && jsonData.dataFetched) {
            setValues(JSON.parse(data));
        } else {
            const validateUserResponse = getWeather().then(data => {

                setValues({
                    dataFetched: true,
                    weatherType: data[1][0].main,
                    weatherDesc: data[1][0].description,
                    temperature: data[0].temp,
                    minTemperature: data[0].temp_min,
                    maxTemperature: data[0].temp_max

                });
                localStorage.setItem('WeatherData', JSON.stringify(values));

            });
        }



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