import React, { Component } from 'react'
//import styled from 'styled-components';
import './Styles/WeatherComponent.css';



// FONT: https://freetypography.com/2016/02/14/free-font-simple/
//https://dribbble.com/shots/2227157-Free-iPhone-Backgrounds/attachments/2227157?mode=media
export default class WeatherComponent extends Component {



    render() {


        return (
            <div className="WeatherCardBody">
                <p className="weatherCity"> Montevideo </p>

                <div className="weatherImage" />

                <p className="temperatureNumber"> 19 &#176;</p>
                <p className="weatherDesc"> Sunny</p>


                <hr className="weatherSeparator" />
                <div className="todayWeatherInfo">
                    <div className="one">
                        <p>Now</p>
                        <div className="weatherSun" />
                        <p className="weatherDegree">10&#176;</p>

                    </div>
                    <div className="two">
                        <p>Monday</p>
                        <div className="weatherStorm" />
                        <p className="weatherDegree">22&#176;</p>

                    </div>
                    <div className="thre">
                        <p>Tuesday</p>
                        <div className="weatherWindy" />
                        <p className="weatherDegree">2&#176;</p>

                    </div>
                </div>

            </div>
        )
    }

}