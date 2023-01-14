/* eslint-disable */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

import LightComponent from '../Lights/LightComponent'
import Carousel from 'react-bootstrap/Carousel';

import '../Styles/RoomDevices.css'

import { getDatabase, ref, onValue, get, child } from "firebase/database";




const LightsBody = styled.div`
  justify-content: center;
  height: 100%;
  width:100%;
`;


function LightsDevice(props) {

    const [devices, setDevices] = useState([]);

    const [luces, setluces] = useState({
        lightsData: "",
        dataFetched: false
    });

    let lightsMatrix = [];
    let auxiliarArray = [];
    let counter = 0;

    function fetchDeviceData() {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `/Devices`)).then((snapshot) => {
            if (snapshot.exists()) {
                setDevices(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    useEffect(() => {
        fetchDeviceData()


        const db = getDatabase();
        const starCountRef = ref(db, "/Devices");

        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            if (data !== null) {
                setDevices(data);
                setluces({
                    lightsData: devices,
                    dataFetched: true
                });

            }
        });

        if (luces.dataFetched) {
            devices.forEach(element => {
                auxiliarArray.push(element);
                counter++;
                if (counter == 6) {

                    lightsMatrix.push(auxiliarArray);
                    auxiliarArray = [];
                    counter = 0;
                }
            });

            if (auxiliarArray.length != 4 && auxiliarArray.length != 0) {
                lightsMatrix.push(auxiliarArray);
            }
        }
    }, [])



    if (luces.dataFetched) {
        console.log(devices)

        devices.forEach(element => {
            auxiliarArray.push(element);
            counter++;
            if (counter == 6) {

                lightsMatrix.push(auxiliarArray);
                auxiliarArray = [];
                counter = 0;
            }
        });

        if (auxiliarArray.length != 4 && auxiliarArray.length != 0) {
            lightsMatrix.push(auxiliarArray);
        }


        return (
            <LightsBody >
                <Carousel interval={null}>
                    {
                        lightsMatrix.map((j, index) => (
                            <Carousel.Item key={index}>
                                {
                                    j.map((i, index) => (
                                        <LightComponent key={index} componentName={i.Name} deviceID={i.ID} type={i.Type} RoomID={i.RoomID} deviceState={i.state} token={props.token} />

                                    ))
                                }
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
            </LightsBody>
        )
    } else {
        return (
            <div>
                <div className="lds-facebook"><div></div><div></div><div></div></div>
            </div>
        )
    }




}

export default LightsDevice;