/* eslint-disable */
import React, { Component } from 'react'


import LightBulbRoundedImage from '../Lights/LightBulbRoundedImage'
import DoorRoundedImage from '../Doors/DoorRoundedImage'

import '../Styles/Room.css'






export default class RoomDevices
    extends Component {




    render() {

        return (
            <div>
                <div className='Room'>


                    <div className='Room1'>
                        <div className='VentanaCuarto1' />
                        <div className='PuertaCuarto1' />
                        <LightBulbRoundedImage key={"Luz Cuarto 1"} />

                    </div>

                    <div className='Comedor'>
                        <div className='VentanaComedor' />
                        <div className='PuertaComedor' />
                        <LightBulbRoundedImage key={"Luz Cuarto 1"} />
                        <LightBulbRoundedImage key={"Luz Cuarto 1"} />
                        <LightBulbRoundedImage key={"Luz Cuarto 1"} />

                    </div>


                    <div className='Sala'>
                        <div className='VentanaSala' />
                        <div className='PuertaSala' >
                            <div className='ImagenPuertaSala'>
                                <DoorRoundedImage state={true} />
                            </div>
                        </div>
                        <div className='PuertaSala2' />
                        <LightBulbRoundedImage key={"Luz Cuarto 1"} />

                    </div>


                    <div className='Cocina'>



                    </div>

                    <div className='BathRoom'>
                        <div className='PuertaBaño1' />

                    </div>


                    <div className='PuertaPrincipal' >
                        <div className='ImagenPuertaPrincipal'>
                            <DoorRoundedImage state={true} />

                        </div>
                    </div>

                    <div className='Pared' />

                </div>
            </div>
        )
    }

}