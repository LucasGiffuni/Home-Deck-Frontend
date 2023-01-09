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

  display: flex; 
  justify-content: center;

  
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
        let lights4 = opens;
        let lightsMatrix = [];
        let auxiliarArray = [];
        let counter = 0;


        if (!this.state.dataFetched) {
            this.fetchData()
        } else {
            lights4 = this.state.opensData



            for (let k = 0; k < lights4.length; k++) {
                auxiliarArray.push(lights4[k]);
                if (counter == 3) {
                    lightsMatrix.push(auxiliarArray);
                    auxiliarArray = [];
                    counter = 0;
                } else {
                    counter++;
                }
            }


        }


        if (this.state.dataFetched) {

            return (
                <DoorsBody >
                    <Carousel interval={null}>
                        {

                            lightsMatrix.map((i, index) => (
                                <Carousel.Item>
                                    {
                                        i.map((z, index) => (
                                            <DoorComponent key={index} componentName={z.name} deviceState={z.state} token={token} gridValue={z.gridSite} id={z.id} mod={this.props.changeDetected} />
                                        ))
                                    }
                                </Carousel.Item>
                            ))


                        }


                    </Carousel>

                </DoorsBody>
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
