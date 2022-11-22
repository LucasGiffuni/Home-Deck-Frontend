/* eslint-disable */
import React, { Component, useState } from 'react'
import styled from 'styled-components';
import InfiniteScroll from "react-infinite-scroll-component";
import Device from './Device';

import '../Styles/RoomDevices.css'
import lightsData from "../Services/Lights.json"






export default class RoomDevices
    extends Component {

    state = {
        items: lightsData.Lights,
    };

 


    render() {
   
        return (
            <div className='RoomDevicesStyle'>
                <h1 className='Title'>Devices</h1>
                <InfiniteScroll
                className='infinite-scroll-component'
                    dataLength={this.state.items.length}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    height={230}
                >
                    {this.state.items.map((i, index) => (
                        <Device key={index} text={i.name} value={i.lightBrightness} />
                    ))}
                </InfiniteScroll>
            </div>
        )

    }

}