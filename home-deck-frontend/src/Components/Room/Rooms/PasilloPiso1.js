/* eslint-disable */
import React, { Component, useState, useEffect } from 'react'


import RoomPlaneItem from '../RoomPlaneItem'

import '../Rooms/PasilloPiso1.css'





function PasilloPiso1(props) {


    return (
        <div className='PasilloPiso1Body'>
            <div className='EntradaPuertaPasillo'>
                <div className='ImagenPuertaPasillo'>
                <RoomPlaneItem key={"a"} checked={true} type={"door"} />
                </div>
            </div>



        </div>
    )


}
export default PasilloPiso1;