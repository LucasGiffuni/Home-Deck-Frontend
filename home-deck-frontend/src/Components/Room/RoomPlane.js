/* eslint-disable */
import React, { Component, useState, useEffect } from 'react'
import styled from 'styled-components';
import planoLuzCuarto from '../Styles/Resources/planoLuzCuarto.png';
import planoBase from '../Styles/Resources/plane.png';
import planoLucesSalon from '../Styles/Resources/planoLucesSalon.png';
import planoLucesSalonCuarto from '../Styles/Resources/planoLucesSalonCuarto.png';
import planoLucesSalonComedor from '../Styles/Resources/planoLucesSalonComedor.png';
import planoLucesCuartoSalonComedorCocina from '../Styles/Resources/planoLucesCuartoSalonComedorCocina.png';



import RoomPlaneItem from './RoomPlaneItem'
import { getLightDevices, getOpenDevices, getLayoutFromRoom2, createLightDevice, setRoomLayout, setRoomLayoutState } from '../Services/DevicesService';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveGridLayout = WidthProvider(Responsive);


const handlerPlaneType = luces => {
    console.log(luces)
    if (luces[0].state && !(luces[1].state || luces[2].state || luces[3].state || luces[4].state)) {
        return `url(${planoLuzCuarto})`;
    } else if ((luces[3].state || luces[4].state) && !(luces[0].state || luces[1].state || luces[2].state)) {
        return `url(${planoLucesSalon})`;
    } else if ((luces[3].state || luces[4].state) && luces[0].state && !(luces[1].state || luces[2].state)) {
        return `url(${planoLucesSalonCuarto})`;
    } else if (((luces[1].state || luces[2].state) && (luces[3].state || luces[4].state)) && !(luces[0].state)) {
        return `url(${planoLucesSalonComedor})`;
    } else if (luces[0].state && (luces[1].state || luces[2].state) && (luces[3].state || luces[4].state)) {
        return `url(${planoLucesCuartoSalonComedorCocina})`;

    } else {
        return `url(${planoBase})`;
    }
};

const PlaneBody = styled.div`

 


    background: ${props => handlerPlaneType(props.luces)};

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

    let Room1 = []
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
                Room1.push(element)

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
            <PlaneBody id={"PlaneBody"} luces={Room1} onClick={getClickHandler(
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
                    breakpoints={{ lg: 300, md: 300, sm: 800, xs: 800, xxs: 800 }}
                    cols={{ lg: 75, md: 75, sm: 75, xs: 50, xxs: 75 }}
                    rowHeight={4}
                    autoSize={true}
                    preventCollision={true}
                    height={100}

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
                        Room1.map((i, index) => (

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

