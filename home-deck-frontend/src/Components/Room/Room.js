/* eslint-disable */
import React, { Component } from 'react'
import '../Styles/Room.css'
import Weather from '../Weather/Weather';
import Clock from './Clock';

import LightsDevices from './LightsDevices';


import OpensDevices from './OpensDevices';
import VideoFeed from './VideoFeed';
import RoomPlane from './RoomPlane';
import Carousel from 'react-bootstrap/Carousel';

import Menu from './Menu';


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
                        <RoomPlane token={token} />

                    </div>

                    <div className='Devices'>
                        <LightsDevices token={token} changeDetected={this.handleChangeDetected} />

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

                    <div className='Menu'>

                        <Menu />
                    </div>
                </div>

            </div>

        )

    }

}

