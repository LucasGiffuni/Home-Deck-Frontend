/* eslint-disable */
import React, { Component, useState, useEffect } from 'react'
import styled from 'styled-components';

import planoLuzCuarto from '../Styles/Resources/PlanosCasa/PlanoLuzCuarto.png';
import planoLucesSalon from '../Styles/Resources/PlanosCasa/PlanoLuzSala.png';
import planoLucesCuartoComedor from '../Styles/Resources/PlanosCasa/PlanoLuzCuartoComedor.png';
import planoLuzComedor from '../Styles/Resources/PlanosCasa/PlanoLuzComedor.png'
import planoLuzCuartoSalon from '../Styles/Resources/PlanosCasa/PlanoLuzCuartoSala.png'
import PlanoLuzCuartoComedorSala from '../Styles/Resources/PlanosCasa/PlanoLuzCuartoComedorSala.png'
import PlanoLuzComedorSala from '../Styles/Resources/PlanosCasa/PlanoLuzComedorSala.png'



import RoomPlaneItem from './RoomPlaneItem'
import { getLightDevices, getOpenDevices, getLayoutFromRoom2, createLightDevice, setRoomLayout, setRoomLayoutState } from '../Services/DevicesService';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveGridLayout = WidthProvider(Responsive);

479
const handlerPlaneType = luces => {



    if ((luces[0].state) && !((luces[1].state || luces[2].state || luces[3].state || luces[4].state))) {
        return `url(${planoLuzCuarto})`; // Plano Luz Cuarto
    } else if ((luces[1].state || luces[2].state) && !((luces[0].state || luces[3].state || luces[4].state))) {
        return `url(${planoLuzComedor})`; // Plano Luz Comedor
    } else if ((luces[3].state || luces[4].state) && !((luces[0].state || luces[1].state || luces[2].state))) {
        return `url(${planoLucesSalon})`; // Plano Luz Salon
    } else if ((luces[0].state && (luces[1].state || luces[2].state)) && !((luces[3].state || luces[4].state))) {
        return `url(${planoLucesCuartoComedor})`; // Plano Luz Cuarto Comedor
    } else if ((luces[0].state && (luces[3].state || luces[4].state)) && !((luces[1].state || luces[2].state))) {
        return `url(${planoLuzCuartoSalon})`; // Plano Luz Cuarto Salon
    } else if ((luces[0].state && (luces[3].state || luces[4].state)) && (luces[1].state || luces[2].state)) {
        return `url(${PlanoLuzCuartoComedorSala})`; // Plano Luz Cuarto Salon
    } else if (((luces[3].state || luces[4].state) && (luces[1].state || luces[2].state)) && !(luces[0].state)) {
        return `url(${PlanoLuzComedorSala})`; // Plano Luz Comedor Salon
    }
};

const handlerPlaneZIndex = luces => {
    if (luces[0].state && !(luces[1].state || luces[2].state || luces[3].state || luces[4].state)) {
        return 2;
    } else if ((luces[3].state || luces[4].state) && !(luces[0].state || luces[1].state || luces[2].state)) {
        return 2;
    } else if ((luces[3].state || luces[4].state) && luces[0].state && !(luces[1].state || luces[2].state)) {
        return 2;
    } else if (((luces[1].state || luces[2].state) && (luces[3].state || luces[4].state)) && !(luces[0].state)) {
        return 2;
    } else if (luces[0].state && (luces[1].state || luces[2].state) && (luces[3].state || luces[4].state)) {
        return 2;
    } else if ((luces[1].state || luces[2].state) && !(luces[0].state && luces[3].state && luces[4].state && luces[5].state)) {
        return 2;
    } else {
        return 1;
    }
};

const PlaneBody = styled.div`
    background: ${props => handlerPlaneType(props.luces)};
    z-index: ${props => handlerPlaneZIndex(props.luces)};

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 100%;
    width: 100%;
    height: 100%;
`;

function RoomPlane(props) {

    let lights = []
    let doors = []

    let Lights1 = []
    let Lamps1 = []

    let Doors1 = []
    let Windows1 = []


    const [layoutquery, setlayoutquery] = useState({
        layout: {},
        layoutFetched: false,
    });

    const [layoutstaticstate, setlayoutstaticstate] = useState(true);

    let originalLayout = getFromLS("layouts");

    const [luces, setluces] = useState({
        lightsData: "",
        dataFetched: false,
        lightCreated: false
    });

    const [puertas, setpuertas] = useState({
        doorsData: "",
        dataFetched: false
    });

    const [lucesState, setLucesState] = useState();






    useEffect(() => {
        const timeout = setTimeout(() => {
            const response = getLightDevices(props.token).then(data => {
                setluces({
                    lightsData: data[1].lights,
                    dataFetched: true
                });
            })
            const response2 = getOpenDevices(props.token).then(data2 => {
                setpuertas({
                    doorsData: data2[1].opens,
                    dataFetched: true
                });
            })



        }, 100);




        return () => clearTimeout(timeout);
    }, [props || luces.lightCreated])





    if (luces.dataFetched) {
        lights = luces.lightsData
        lights.forEach(element => {
            if (element.type == "Light") {
                Lights1.push(element)

            } else if (element.type == "Lamp") {
                Lamps1.push(element)
            }
        });
    }

    if (puertas.dataFetched) {
        doors = puertas.doorsData
        doors.forEach(element => {
            if (element.type == "Door") {
                Doors1.push(element)

            } else if (element.type == "Window") {
                Windows1.push(element)
            }
        });
    }

    function onLayoutChange(layout, layouts) {
        saveToLS("layouts", layouts);
    }
    function saveToLS(key, value) {
        /*
                console.log(JSON.stringify({
                    [key]: value
                }))
        */
    }
    function getFromLS(key) {
        let ls = {};
        try {
            if (!layoutquery.layoutFetched) {
                ls = JSON.parse(getLayoutFromRoom2(props.token, "3").then(data2 => {
                    setlayoutquery({
                        layout: data2[1],
                        layoutFetched: true
                    });
                })) || {};
                setlayoutstaticstate(layoutquery.layout["layouts"]["static"])
            }
        } catch (e) {
        }
        return layoutquery.layout[key];
    }

    function getClickHandler(onClick, onDblClick, delay) {
        var timeoutID = null;
        delay = delay || 250;
        return function (event) {
            if (!timeoutID) {
                timeoutID = setTimeout(function () {
                    onClick(event);
                    timeoutID = null
                }, delay);
            } else {
                timeoutID = clearTimeout(timeoutID);
                onDblClick(event);
            }
        };
    }

    const renderTooltip = (props, text) => (
        <Tooltip id="button-tooltip" {...props}>
            {text}
        </Tooltip>
    );
    if ((puertas.dataFetched && luces.dataFetched && layoutquery.layoutFetched)) {

        return (
            <PlaneBody id={"PlaneBody"} luces={Lights1} onClick={getClickHandler(
                function () {
                    const setRoom = setRoomLayout(props.token, "3", layoutquery.layout)
                },
                function () {
                    let r = (Math.random() + 1).toString(36).substring(7);
                    /*
                    const ls = createLightDevice(props.token, "0", "3", r, "Lamp", false).then(data2 => {
                        setluces({ lightCreated: true })
                        setlayoutquery({
                            layout: layoutquery.layout
                        });
                    })
                    */
                    const setRoomState = setRoomLayoutState(props.token, "3", layoutstaticstate).then(data2 => {
                        setlayoutquery({
                            layout: layoutquery.layout
                        });
                        setlayoutstaticstate(!layoutstaticstate)
                    })
                }
            )} >
                <ResponsiveGridLayout
                    layouts={layoutquery.layout["layouts"]}
                    breakpoints={{ lg: 1280, md: 800, sm: 1920, xs: 1080, xxs: 2 }}
                    cols={{ lg: 20, md: 20, sm: 20, xs: 70, xxs: 50 }}
                    rowHeight={4}
                    autoSize={true}
                    preventCollision={true}
                    width={996}

                    isBounded={true}
                    compactType={null}
                    onLayoutChange={(layout, layouts) =>
                        onLayoutChange(layout, layouts)
                    }>
                    {
                        Lamps1.map((i, index) => (
                            <div key={i.name} data-grid={{ i: i.name, x: 0, y: 0, w: 3, h: 3 }}>
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 50, hide: 50 }}
                                    overlay={renderTooltip(props, i.name)}
                                >
                                    <div>
                                        <RoomPlaneItem key={i.name} checked={i.state} type={"lamp"} />
                                    </div>
                                </OverlayTrigger>
                            </div>
                        ))
                    }

                    {
                        Lights1.map((i, index) => (

                            <div key={i.name} data-grid={{ i: i.name, x: 0, y: 0, w: 3, h: 3 }}>
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 50, hide: 50 }}
                                    overlay={renderTooltip(props, i.name)}
                                >
                                    <div>
                                        <RoomPlaneItem key={i.name} checked={i.state} type={"light"} />
                                    </div>
                                </OverlayTrigger>
                            </div>
                        ))
                    }
                    {
                        Doors1.map((i, index) => (
                            <div key={i.name} data-grid={{ i: i.name, x: 0, y: 0, w: 3, h: 3 }}>
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 50, hide: 50 }}
                                    overlay={renderTooltip(props, i.name)}
                                >
                                    <div>
                                        <RoomPlaneItem key={i.name} checked={i.state} type={"door"} />
                                    </div>
                                </OverlayTrigger>
                            </div>
                        ))
                    }
                    {
                        Windows1.map((i, index) => (
                            <div key={i.name} data-grid={{ i: i.name, x: 0, y: 0, w: 3, h: 3 }}>
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 50, hide: 50 }}
                                    overlay={renderTooltip(props, i.name)}
                                >
                                    <div>
                                        <RoomPlaneItem key={i.name} checked={i.state} type={"window"} />
                                    </div>
                                </OverlayTrigger>
                            </div>
                        ))
                    }



                </ResponsiveGridLayout>

            </PlaneBody>
        )

    } else {
        return (
            <div className="lds-facebook"><div></div><div></div><div></div></div>
        )
    }


}
export default RoomPlane;

