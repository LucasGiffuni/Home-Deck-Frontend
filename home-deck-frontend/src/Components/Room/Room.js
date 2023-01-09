/* eslint-disable */
import React, { Component } from 'react'
import styled from 'styled-components';
import RoomDevices from './RoomDevices';
import '../Styles/Room.css'
import Weather from '../Weather/Weather';
import Clock from './Clock';

import CuartoPiso1 from './Rooms/CuartoPiso1'
import BañoPiso1 from './Rooms/BañoPiso1';
import OpensDevices from './OpensDevices';
import ComedorCocina from './Rooms/ComedorCocina';
import SalaEstar from './Rooms/SalaEstar';
import PasilloPiso1 from './Rooms/PasilloPiso1';
import VideoFeed from './VideoFeed';

import Carousel from 'react-bootstrap/Carousel';



export default class Room
    extends Component {

    state = {
        lightsDataFetched: false,
        lightsData: "",
        mod: true

    };


    handleNavBarButton = (Button) => {

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


    handleLightsData = (data) => {

        this.setState({
            lightsData: data,
            lightsDataFetched: true
        });
    }

    handleChangeDetected = (bool) => {

        this.setState({
            mod: bool

        });
    }

    render() {
        const { token } = this.props;


        return (
            <div>

                <div className='RoomStyle'>
                    <div className='Preview'>

                        <div className='Banio'>
                            <BañoPiso1 token={token} changeDetected={this.state.mod} />

                        </div>
                        <div className='CuartoNuestro'>
                            <CuartoPiso1 token={token} changeDetected={this.state.mod} />

                        </div>
                        <div className='ComedorCocina'>
                            <ComedorCocina token={token} changeDetected={this.state.mod} />

                        </div>
                        <div className='SalaEstar'>
                            <SalaEstar token={token} changeDetected={this.state.mod} />

                        </div>
                        <div className='Pasillo'>
                            <PasilloPiso1 token={token} changeDetected={this.state.mod} />

                        </div>
                    </div>

                    <div className='Devices'>
                        <RoomDevices token={token} changeDetected={this.handleChangeDetected} />

                    </div>

                    <div className='WeatherContainer'>
                        <div className='CarouselContainer'>
                            <Carousel controls={false} indicators={false}>
                                <Carousel.Item interval={20000}>
                                    <Clock />
                                </Carousel.Item>
                                <Carousel.Item interval={20000}>
                                    <Weather />
                                </Carousel.Item>
                            </Carousel>
                        </div>


                    </div>

                    <div className='Doors'>
                        <OpensDevices token={token} changeDetected={this.handleChangeDetected} />
                    </div>

                    <div className='Cameras'>
                        <Carousel interval={null}>
                            <Carousel.Item bsPrefix="camera-carousel-item">
                                <VideoFeed src="http://127.0.0.1:8083/stream/5d2c6aed-2c98-4481-b60b-da6b220dc1eb/channel/0/hls/live/index.m3u8" />
                            </Carousel.Item>

                            <Carousel.Item bsPrefix="camera-carousel-item">
                                <VideoFeed src="http://127.0.0.1:8083/stream/69e7e51d-592d-4951-857f-5f3725bdfe9c/channel/0/hls/live/index.m3u8" />
                            </Carousel.Item>
                        </Carousel>
                    </div>


                </div>

            </div>

        )

    }

}

