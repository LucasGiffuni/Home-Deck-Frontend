/* eslint-disable */
import React, { Component, useState } from 'react'
import styled from 'styled-components';

import LightComponent from '../Lights/LightComponent'
import Carousel from 'react-bootstrap/Carousel';

import '../Styles/RoomDevices.css'
import { getLightDevices } from '../Services/DevicesService';




const LightsBody = styled.div`

  justify-content: center;
  height: 100%;
  width:100%;
  
`;

export default class LightsDevices
    extends Component {

    state = {
        dataFetched: false,
        lightsData: "",
        jwtToken: ""
    };




    fetchData() {
        const { token } = this.props;

        const lightsResponse = getLightDevices(token).then(data => {
            this.setState({
                lightsData: data[1].lights,
                dataFetched: true
            });
        })
    }


    render() {

        const { token } = this.props;

        let opens = []
        let lights4 = [];
        let lightsMatrix = [];
        let auxiliarArray = [];
        let counter = 0;


        if (!this.state.dataFetched) {
            this.fetchData()
        } else {
            lights4 = this.state.lightsData



            for (let k = 0; k < lights4.length; k++) {
                auxiliarArray.push(lights4[k]);
                counter++;
                if (counter == 6) {

                    lightsMatrix.push(auxiliarArray);
                    auxiliarArray = [];
                    counter = 0;
                }
            }
            if (auxiliarArray.length != 4 && auxiliarArray.length != 0) {
                lightsMatrix.push(auxiliarArray);

            }


        }


        if (this.state.dataFetched) {

            return (
                <LightsBody >
                    <Carousel interval={null}>
                        {

                            lightsMatrix.map((i, index) => (
                                <Carousel.Item key={index}>
                                    {
                                        i.map((z, index) => (
                                            <LightComponent key={index} componentName={z.name} deviceState={z.state} token={token} gridValue={z.gridSite} id={z.id} mod={this.props.changeDetected} type={z.type} />
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

}
