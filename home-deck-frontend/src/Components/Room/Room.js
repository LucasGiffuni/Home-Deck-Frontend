/* eslint-disable */
import React, { Component } from 'react'
import styled from 'styled-components';
import RoomDevices from './RoomDevices';
import '../Styles/Room.css'
import Weather from '../Weather/Weather';

import RoomPlane from './RoomPlane'
import CuartoPiso1 from './Rooms/CuartoPiso1'
import BañoPiso1 from './Rooms/BañoPiso1';
import OpensDevices from './OpensDevices';
import ComedorCocina from './Rooms/ComedorCocina';
import SalaEstar from './Rooms/SalaEstar';
import PasilloPiso1 from './Rooms/PasilloPiso1';



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
                            <PasilloPiso1 token={token} changeDetected={this.state.mod}  />

                        </div>
                    </div>
                    <div className='Devices'>
                        <RoomDevices token={token} changeDetected={this.handleChangeDetected} />

                    </div>
                   
                    <div className='WeatherContainer'>
                        <Weather />
                    </div>
                    

                    <div className='Doors'>

                        <OpensDevices token={token} changeDetected={this.handleChangeDetected} />

                    </div>
                   

                </div>

            </div>

        )

    }

}

