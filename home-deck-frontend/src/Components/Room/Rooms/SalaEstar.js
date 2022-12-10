/* eslint-disable */
import React, { Component, useState, useEffect } from 'react'



import RoomPlaneItem from '../RoomPlaneItem'
import { getLightsFromRoom, getOpensFromRoom, getLayoutFromRoom2, createLightDevice, setRoomLayout, setRoomLayoutState } from '../../Services/DevicesService';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import '../Rooms/SalaEstar.css'

import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveGridLayout = WidthProvider(Responsive);





function SalaEstar(props) {

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






    useEffect(() => {
        const timeout = setTimeout(() => {
            const response = getLightsFromRoom(props.token, "3").then(data => {
                setluces({
                    lightsData: data[1],
                    dataFetched: true
                });
            })
            const response2 = getOpensFromRoom(props.token, "3").then(data2 => {
                setpuertas({
                    doorsData: data2[1],
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
            <div className='RoomBody' onClick={getClickHandler(
                function () {


                    //const setRoom = setRoomLayout(props.token, "3", layoutquery.layout) ( ##### WIP ##### )

                },
                function () {

                    console.log('dblclick');
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
                    cols={{ lg: 18, md: 18, sm: 18, xs: 18, xxs: 18 }}
                    rowHeight={7}
                    width={400}
                    autoSize={false}
                    preventCollision={true}
                    isBounded={true}
                    compactType={null}
                    onLayoutChange={(layout, layouts) =>
                        onLayoutChange(layout, layouts)
                    }

                >

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



                </ResponsiveGridLayout >
                <div className='VentanaComedorCocina' />

                <div className='PuertaSalaEstar' />

                <div className='EntradaSalaEstar' />

                <div className='Lights'>

                </div>
            </div >
        )

    } else {
        return (
            <div className="lds-facebook"><div></div><div></div><div></div></div>
        )
    }


}
export default SalaEstar;

