/* eslint-disable */
import React, { Component, useState, useEffect } from 'react'


import RoomPlaneItem from '../RoomPlaneItem'

import { getLightsFromRoom, getOpensFromRoom, getLayoutFromRoom2, createLightDevice } from '../../Services/DevicesService';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import styled from 'styled-components';
import '../Rooms/ComedorCocina.css'



import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveGridLayout = WidthProvider(Responsive);




function ComedorCocina(props) {

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



    let lights = []
    let Room1 = []



    useEffect(() => {

        const timeout = setTimeout(() => {
            const response = getLightsFromRoom(props.token, "2").then(data => {
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
                ls = JSON.parse(getLayoutFromRoom2(props.token, "2").then(data2 => {
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


    const renderTooltip = (props, text) => (
        <Tooltip id="button-tooltip" {...props}>
            {text}
        </Tooltip>
    );

    if ((luces.dataFetched && layoutquery.layoutFetched)) {

        return (
            <div className='ComedorCocinaBody'>
                <div className='VentanaComedorCocina' />
                <div className='PuertaComedorCocina' />

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
                </ResponsiveGridLayout >

            </div>
        )
    } else {
        return (
            <div className="lds-facebook"><div></div><div></div><div></div></div>
        )
    }

}
export default ComedorCocina;