/* eslint-disable */
import React, { Component } from 'react'
import styled from 'styled-components';
import RoomDevices from './RoomDevices';
import '../Styles/Room.css'
import Carousel from 'react-bootstrap/Carousel';
import DoorComponent from '../Doors/DoorComponent'
import Weather from '../Weather/Weather';

import GridLayout from "react-grid-layout";



const block = styled.div`
    background-color: white;
`;

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
        const layout = [
            { i: "a", x: 0, y: 0, w: 1, h: 2, static: false },
            { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
            { i: "c", x: 4, y: 0, w: 1, h: 2 }
        ];


        return (
            <div>

                <div className='RoomStyle'>
                    <div className='Preview'>
                        <GridLayout
                            className="layout"
                            layout={layout}
                            cols={20}
                            rowHeight={20}
                            width={700}
                            height={760}
                        >
                            <block key="a">a</block>
                            <block key="b">b</block>
                            <block key="c">c</block>
                        </GridLayout>
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