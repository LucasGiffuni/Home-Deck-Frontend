/* eslint-disable */
import React, { Component, useState, useEffect } from 'react'


import RoomPlaneItem from '../RoomPlaneItem'


import { getLightsFromRoom, getOpensFromRoom, getLayoutFromRoom2, createLightDevice } from '../../Services/DevicesService';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import '../Rooms/CuartoPiso1.css'



import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveGridLayout = WidthProvider(Responsive);


function CuartoPiso1(props) {


    let lights = []
    let doors = []
    let Room1 = []
    let Doors1 = []
    let Lamps1 = []


    const [layoutquery, setlayoutquery] = useState({
        layout: {},
        layoutFetched: false
    });
    const originalLayout = getFromLS("layouts");

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
            const response = getLightsFromRoom(props.token, "1").then(data => {
                setluces({
                    lightsData: data[1],
                    dataFetched: true
                });
            })
            const response2 = getOpensFromRoom(props.token, "1").then(data2 => {
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
            Doors1.push(element)
        });
    }
    const layout = [];
    const [layoutjson, setlayoutjson] = useState(JSON.stringify(layout));


    function onLayoutChange(layout, layouts) {
        saveToLS("layouts", layouts);
        setlayoutjson({ layouts });




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
                ls = JSON.parse(getLayoutFromRoom2(props.token, "1").then(data2 => {
                    setlayoutquery({
                        layout: data2[1],
                        layoutFetched: true
                    });
                })) || {};
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
            <div className='Room1Body'>

                <ResponsiveGridLayout
                    layouts={originalLayout}
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
                </ResponsiveGridLayout >

                <div className='Ventana' />

                <div className='Puerta' />



            </div>
        )
    } else {
        return (
            <div className="lds-facebook"><div></div><div></div><div></div></div>
        )
    }

}
export default CuartoPiso1;