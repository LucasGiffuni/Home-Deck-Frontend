import React, { Component } from 'react'
//import styled from 'styled-components';
import './Styles/WeatherComponent.css';



// FONT: https://freetypography.com/2016/02/14/free-font-simple/
//https://dribbble.com/shots/2227157-Free-iPhone-Backgrounds/attachments/2227157?mode=media
export default class WeatherComponent extends Component {



    render() {


        return (
            <div class="WeatherCardBody">
                <p class="weatherCity"> Montevideo </p>

                <div class="weatherImage" />

                <p class="temperatureNumber"> 19 &#176;</p>
                <p class="weatherDesc"> Sunny</p>


                <hr class="weatherSeparator" />
                <div class="todayWeatherInfo">
                    <div class="one">
                        <p>Now</p>
                        <div class="weatherSun" />
                        <p class="weatherDegree">10&#176;</p>

                    </div>
                    <div class="two">
                        <p>Monday</p>
                        <div class="weatherStorm" />
                        <p class="weatherDegree">22&#176;</p>

                    </div>
                    <div class="thre">
                        <p>Tuesday</p>
                        <div class="weatherWindy" />
                        <p class="weatherDegree">2&#176;</p>

                    </div>
                </div>

            </div>
        )
    }

}