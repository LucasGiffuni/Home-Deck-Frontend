/* eslint-disable */
import React, { Component, useState, useEffect } from 'react'


import LightBulbRoundedImage from '../../Lights/LightBulbRoundedImage'
import DoorRoundedImage from '../../Doors/DoorRoundedImage'
import LampRoundedImage from '../../Lamps/LampRoundedImage'

import { getLightsFromRoom, getOpensFromRoom, getLayoutFromRoom2, createLightDevice } from '../../Services/DevicesService';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import styled from 'styled-components';
import '../Rooms/SalaEstar.css'
import GridLayout from "react-grid-layout";

import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveGridLayout = WidthProvider(Responsive);





function SalaEstar(props) {

    let lights = []
    let doors = []
    let Room1 = []
    let Doors1 = []


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
            const response = getLightsFromRoom(props.token, "3").then(data => {
                setluces({
                    lightsData: data[1],
                    dataFetched: true
                });
            })
            const response2 = getOpensFromRoom(props.token, "0").then(data2 => {
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
            Room1.push(element)
        });
    }

    if (puertas.dataFetched) {
        doors = puertas.doorsData
        doors.forEach(element => {
            Doors1.push(element)
        });
    }


    const [staticlayout, setstaticlayout] = useState(false);
    const layout = [
        { i: "a1", x: 0, y: 0, w: 3, h: 3, static: staticlayout },
        { i: "a2", x: 3, y: 0, w: 3, h: 3, static: staticlayout },
        { i: "a3", x: 6, y: 0, w: 3, h: 3, static: staticlayout },
        { i: "a4", x: 9, y: 0, w: 3, h: 3, static: staticlayout },
        { i: "a5", x: 12, y: 0, w: 3, h: 3, static: staticlayout },
        { i: "a6", x: 15, y: 0, w: 3, h: 3, static: staticlayout },

        { i: "b1", x: 0, y: 3, w: 3, h: 3, static: staticlayout },
        { i: "b2", x: 3, y: 3, w: 3, h: 3, static: staticlayout },
        { i: "b3", x: 6, y: 3, w: 3, h: 3, static: staticlayout },
        { i: "b4", x: 9, y: 3, w: 3, h: 3, static: staticlayout },
        { i: "b5", x: 12, y: 3, w: 3, h: 3, static: staticlayout },
        { i: "b6", x: 15, y: 3, w: 3, h: 3, static: staticlayout },


        { i: "c1", x: 0, y: 6, w: 3, h: 3, static: staticlayout },
        { i: "c2", x: 3, y: 6, w: 3, h: 3, static: staticlayout },
        { i: "c3", x: 6, y: 6, w: 3, h: 3, static: staticlayout },
        { i: "c4", x: 9, y: 6, w: 3, h: 3, static: staticlayout },
        { i: "c5", x: 12, y: 6, w: 3, h: 3, static: staticlayout },
        { i: "c6", x: 15, y: 6, w: 3, h: 3, static: staticlayout },

        { i: "d1", x: 0, y: 9, w: 3, h: 3, static: staticlayout },
        { i: "d2", x: 3, y: 9, w: 3, h: 3, static: staticlayout },
        { i: "d3", x: 6, y: 9, w: 3, h: 3, static: staticlayout },
        { i: "d4", x: 9, y: 9, w: 3, h: 3, static: staticlayout },
        { i: "d5", x: 12, y: 9, w: 3, h: 3, static: staticlayout },
        { i: "d6", x: 15, y: 9, w: 3, h: 3, static: staticlayout },

        { i: "e1", x: 0, y: 12, w: 3, h: 3, static: staticlayout },
        { i: "e2", x: 3, y: 12, w: 3, h: 3, static: staticlayout },
        { i: "e3", x: 6, y: 12, w: 3, h: 3, static: staticlayout },
        { i: "e4", x: 9, y: 12, w: 3, h: 3, static: staticlayout },
        { i: "e5", x: 12, y: 12, w: 3, h: 3, static: staticlayout },
        { i: "e6", x: 15, y: 12, w: 3, h: 3, static: staticlayout },

    ];
    const [layoutjson, setlayoutjson] = useState(JSON.stringify(layout));


    function onLayoutChange(layout, layouts) {
        saveToLS("layouts", layouts);
        setlayoutjson({ layouts });




    }


    function saveToLS(key, value) {
        console.log(JSON.stringify({
            [key]: value
        }))
    }




    function getFromLS(key) {
        let ls = {};
        try {
            if (!layoutquery.layoutFetched) {
                ls = JSON.parse(getLayoutFromRoom2(props.token, "0").then(data2 => {
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


    if ((puertas.dataFetched && luces.dataFetched && layoutquery.layoutFetched)) {

        return (
            <div className='RoomBody' onClick={getClickHandler(
                function () {
                    console.log('click');
                },
                function () {
                    /*
                    console.log('dblclick');
                    let r = (Math.random() + 1).toString(36).substring(7);
                    const ls =  createLightDevice(props.token, "0", "3", r, false).then(data2 => {

                        setluces({ lightCreated: true })

                    })
                  
                    */

                }
            )} >


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

                    <div key={"Lampara 1"} data-grid={{ i: Room1[0].name, x: 0, y: 0, w: 3, h: 3 }}>
                        <LampRoundedImage key={Room1[0].name} checked={Room1[0].state} />
                    </div>

                    <div key={"Lampara 2"} data-grid={{ i: Room1[0].name, x: 0, y: 0, w: 3, h: 3 }}>
                        <LampRoundedImage key={Room1[1].name} checked={Room1[1].state} />
                    </div>

                    {
                        Room1.map((i, index) => (
                            <div key={i.name} data-grid={{ i: i.name, x: 0, y: 0, w: 3, h: 3 }}>
                                <LightBulbRoundedImage key={i.name} checked={i.state} />
                            </div>
                        ))
                    }



                    <div key={Doors1[0].name} data-grid={{ i: Doors1[0].name, x: 0, y: 0, w: 3, h: 3 }}>
                        <DoorRoundedImage key={Doors1[0].name} checked={Doors1[0].state} />
                    </div>











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

