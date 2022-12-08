/* eslint-disable */
import React, { Component, useState, useEffect } from 'react'


import LightBulbRoundedImage from '../../Lights/LightBulbRoundedImage'
import DoorRoundedImage from '../../Doors/DoorRoundedImage'
import { getLightsFromRoom } from '../../Services/DevicesService';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import styled from 'styled-components';
import '../Rooms/CuartoPiso1.css'





function CuartoPiso1(props) {

    const [luces, setluces] = useState({
        lightsData: "",
        dataFetched: false
    });



    let lights = []
    let Room1 = []
    let Room2 = []
    let Room3 = []

    const renderTooltip = (props, text) => (
        <Tooltip id="button-tooltip" {...props}>
            {text}
        </Tooltip>
    );

    useEffect(() => {

        const timeout = setTimeout(() => {
            const response = getLightsFromRoom(props.token, "1").then(data => {
                setluces({
                    lightsData: data[1],
                    dataFetched: true
                });

            })
        }, 100);

        return () => clearTimeout(timeout);

    }, [props])

    if (luces.dataFetched) {
        lights = luces.lightsData
        lights.forEach(element => {

            Room1.push(element)

        });

    }

    return (
        <div className='Room1Body'>
            <div className='Ventana' >

            </div>
            <div className='Puerta'>

            </div>

            <div className='Lights'>
                {
                    luces.dataFetched
                        ?
                        Room1.map((i, index) => (
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 100, hide: 50 }}
                                overlay={renderTooltip(props, i.name)}
                            >
                                <div>
                                    <LightBulbRoundedImage key={i.name} checked={i.state} />

                                </div>
                            </OverlayTrigger>
                        ))
                        : ""
                }

            </div>
        </div>
    )


}
export default CuartoPiso1;