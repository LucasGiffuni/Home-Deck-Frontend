/* eslint-disable */
import React, { Component, useState } from 'react'
import styled from 'styled-components';
import InfiniteScroll from "react-infinite-scroll-component";
import Device from './Device';
import DoorComponent from '../Doors/DoorComponent'
import Carousel from 'react-bootstrap/Carousel';

import '../Styles/RoomDevices.css'
import { getOpenDevices } from '../Services/DevicesService';




const DoorsBody = styled.div`
  margin-left: 1%;
  margin-right: 1%;
`;

export default class OpensDevices
    extends Component {

    state = {
        dataFetched: false,
        opensData: "",
        jwtToken: ""
    };




    fetchData() {
        const { token } = this.props;

        const response = getOpenDevices(token).then(data => {
            this.setState({
                opensData: data[1].opens,
                dataFetched: true
            });
        })
    }


    render() {

        const { token } = this.props;

        let opens = []
        if (!this.state.dataFetched) {
            this.fetchData()
        } else {
            opens = this.state.opensData
        }
        return (
            <DoorsBody >
                <Carousel interval={null}>
                    <Carousel.Item >

                        {
                            this.state.dataFetched
                                ?
                                opens.map((i, index) => (
                                    <DoorComponent key={index} componentName={i.name} deviceState={i.state} token={token} gridValue={i.gridSite} id={i.id} mod={this.props.changeDetected} />

                                ))
                                : ""
                        }
                    </Carousel.Item>
                    <Carousel.Item >

                        {
                            this.state.dataFetched
                                ?
                                opens.map((i, index) => (
                                    <DoorComponent key={index} componentName={i.name} deviceState={i.state} token={token} gridValue={i.gridSite} id={i.id} mod={this.props.changeDetected} />

                                ))
                                : ""
                        }
                    </Carousel.Item>
                </Carousel>

            </DoorsBody>
        )

    }

}
