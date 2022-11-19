/* eslint-disable */
import React, { Component } from 'react'
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';

import LightComponent from './LightComponent';

import lightsData from "../Services/Lights.json"

import '../Styles/LightsDashboard.css'




const LightDevicesContainer = styled.div`   
    width: fit-content;
    display: grid;
    grid-template-columns: min-content min-content;
    grid-template-rows: min-content min-content;

`;


export default class LightsDashboard extends Component {




    render() {

        let lights4 = lightsData.Lights;
        let lightsMatrix = [];
        let auxiliarArray = [];
        let counter = 0;

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


        return (

                <LightDevicesContainer id='LightDevicesContainer'>
                        {this.renderLightsCarouselItem(lightsMatrix)}
                </LightDevicesContainer>
        )
    }


    renderLightsCarouselItem(lightsMatrix) {

        return (
            <Carousel>
                {
                    lightsMatrix.map((item, index) => {
                        return (
                            <Carousel.Item key={index}>
                                {this.renderLightItem(item)}
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        )
    }

    renderLightItem(light) {

        return (
            <LightDevicesContainer>
                {
                    light.map((item, index) => {
                        return <LightComponent key={index} gridValue={item.gridSite} componentName={item.name} />
                    })
                }
            </LightDevicesContainer>
        )

    }

}