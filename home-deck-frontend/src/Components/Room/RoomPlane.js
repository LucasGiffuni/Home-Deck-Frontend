/* eslint-disable */
import React, { Component, useState, useEffect } from 'react'


import DoorRoundedImage from '../Doors/DoorRoundedImage'
import { getLightDevices } from '../Services/DevicesService';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import styled from 'styled-components';

import '../Styles/Room.css'





function RoomPlane(props) {

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
            const response = getLightDevices(props.token).then(data => {
                setluces({
                    lightsData: data[1].lights,
                    dataFetched: true
                });

            })

        }, 100);

        return () => clearTimeout(timeout);

    }, [props])









    if (luces.dataFetched) {
        lights = luces.lightsData
        lights.forEach(element => {
            if (element.roomId === "1") {
                Room1.push(element)
            } else if (element.roomId === "2") {
                Room2.push(element)
            }
            else if (element.roomId === "3") {
                Room3.push(element)
            }
        });

    }
    return (
        <div>
            <div className='Room'>


                <div className='Room1'>
                    <div className='VentanaCuarto1' />
                    <div className='PuertaCuarto1' />
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

                <div className='Comedor'>
                    <div className='VentanaComedor' />
                    <div className='PuertaComedor' />
                    {
                        luces.dataFetched
                            ?
                            Room2.map((i, index) => (
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


                <div className='Sala'>
                    <div className='VentanaSala' />
                    <div className='PuertaSala' >
                        <div className='ImagenPuertaSala'>
                            <DoorRoundedImage state={true} />
                        </div>
                    </div>
                    <div className='PuertaSala2' />
                    {
                        luces.dataFetched
                            ?
                            Room3.map((i, index) => (
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


                <div className='Cocina'>



                </div>

                <div className='BathRoom'>
                    <div className='PuertaBaño1' />

                </div>


                <div className='PuertaPrincipal' >
                    <div className='ImagenPuertaPrincipal'>
                        <DoorRoundedImage state={true} />

                    </div>
                </div>

                <div className='Pared' />

            </div>
        </div>
    )


}
export default RoomPlane;