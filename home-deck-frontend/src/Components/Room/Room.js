/* eslint-disable */
import React, { Component } from 'react'
import styled from 'styled-components';
import RoomDevices from './RoomDevices';
import '../Styles/Room.css'
import Carousel from 'react-bootstrap/Carousel';
import DoorComponent from '../Doors/DoorComponent'
import Weather from '../Weather/Weather';





export default class Room
    extends Component {

    handleNavBarButton = (Button) => {
        console.log(Button)

        if (Button === "LogoutButton") {
            this.setState({
                logged: false
            });
        } else if (Button === "RoomButton") {
            this.setState({
                roomButton: true
            });
        }
    }


    render() {



        return (
            <div>

                <div className='RoomStyle'>
                    <div className='Preview'>

                    </div>
                    <div className='Devices'>
                        <RoomDevices />

                    </div>
                    <div className='Temperature'>

                    </div>
                    <div className='Weather'>
                        <Weather />
                    </div>
                    <div className='Entries'>

                    </div>

                    <div className='Doors'>
                        <Carousel interval={null}>
                            <Carousel.Item >
                                <DoorComponent key={1} gridValue={"1 / 1 / 2 / 2"} componentName={"nose 1"} />
                                <DoorComponent key={2} gridValue={"1 / 2 / 2 / 3"} componentName={"nose 2"} />
                                <DoorComponent key={3} gridValue={"1 / 3 / 2 / 4"} componentName={"nose 3"} />
                                <DoorComponent key={4} gridValue={"1 / 4 / 2 / 5"} componentName={"nose 4"} />

                            </Carousel.Item>
                            <Carousel.Item >
                                <DoorComponent key={5} gridValue={"1 / 1 / 2 / 2"} componentName={"nose"} />

                            </Carousel.Item>
                            <Carousel.Item >
                                <DoorComponent key={6} gridValue={"1 / 1 / 2 / 2"} componentName={"nose"} />

                            </Carousel.Item>
                        </Carousel>

                    </div>
                    <div className='Example2'>

                    </div>

                </div>

            </div>

        )

    }

}