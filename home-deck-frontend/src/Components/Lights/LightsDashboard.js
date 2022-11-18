/* eslint-disable */
import React, { Component } from 'react'
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';

import LightDeviceComponent from './LightDeviceComponent'
import LightComponent from './LightComponent';

import '../Styles/LightsDashboard.css'




const LightDevicesContainer = styled.div`   
    width: fit-content;
    display: grid;
    grid-template-columns: min-content min-content;
    grid-template-rows: min-content min-content;

`;


export default class LightsDashboard extends Component {




    render() {




        return (
            <LightDevicesContainer id='LightDevicesContainer'>

                <Carousel interval={null}>
                    <Carousel.Item>
                        <LightComponent gridValue={"1 / 1 / 2 / 2"} componentName={"Light1"} />
                        <LightComponent gridValue={"1 / 2 / 2 / 3"} componentName={"Light2"} />
                        <LightComponent gridValue={"2 / 1 / 3 / 2"} componentName={"Light3"} />
                        <LightComponent gridValue={"2 / 2 / 3 / 3"} componentName={"Light4"} />

                    </Carousel.Item>

                    <Carousel.Item>
                        <LightComponent gridValue={"1 / 1 / 2 / 2"} componentName={"Light5"} />
                        <LightComponent gridValue={"1 / 2 / 2 / 3"} componentName={"Light6"} />
                        <LightComponent gridValue={"2 / 1 / 3 / 2"} componentName={"Light7"} />
                        <LightComponent gridValue={"2 / 2 / 3 / 3"} componentName={"Light8"} />
                    </Carousel.Item>


                </Carousel>
            </LightDevicesContainer>

        )
    }

}