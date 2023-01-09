import React, { Component, useState, useEffect, useRef } from 'react'
import styled from 'styled-components';
import '../Styles/WeatherComponent.css';







function Clock(props) {

    var today = new Date();

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    options.timeZone = 'UTC';
    options.timeZoneName = 'short';

    var now = today.toLocaleString('es-Uy', options);

    const [values, setValues] = useState({
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        actualTime: today.toLocaleTimeString('es-UY'),
        now: today.toLocaleString('es-Uy', options)

    });

    const [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);


    return (
        <div className="ClockBody">
            <div className='WeatherInfo'>
                <h5>{values.now}</h5>
                <h1>{date.toLocaleTimeString()} PM</h1>
            </div>
        </div>
    )


}
export default Clock;