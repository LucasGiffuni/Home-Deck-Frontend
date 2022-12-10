/* eslint-disable */
import React, { Component, useState } from 'react'
import styled from 'styled-components';
import InfiniteScroll from "react-infinite-scroll-component";
import Device from './Device';

import '../Styles/RoomDevices.css'
import { getLightDevices } from '../Services/DevicesService';






export default class RoomDevices
    extends Component {

    state = {
        dataFetched: false,
        lightsData: "",
        jwtToken: ""
    };




    fetchData() {
        const { token } = this.props;

        const response = getLightDevices(token).then(data => {
            this.setState({
                lightsData: data[1].lights,
                dataFetched: true
            });
        })
    }


    render() {

        const { token } = this.props;

        let lights = []
        if (!this.state.dataFetched) {
            this.fetchData()
        } else {
            lights = this.state.lightsData
        }


        if (this.state.dataFetched) {
            return (
                <div className='RoomDevicesStyle'>
                    <h1 className='Title'>Devices</h1>
                    <InfiniteScroll
                        className='infinite-scroll-component'
                        dataLength={this.state.lightsData.length}
                        hasMore={true}
                        loader={<h4>Loading...</h4>}
                        height={230}
                    >

                        {

                            lights.map((i, index) => (
                                <Device key={index} token={token} id={i.id} text={i.name} value={i.lightBrightness} deviceState={i.state} mod={this.props.changeDetected} />
                            ))

                        }
                    </InfiniteScroll>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="lds-facebook"><div></div><div></div><div></div></div>
                </div>
            )
        }


    }

}
