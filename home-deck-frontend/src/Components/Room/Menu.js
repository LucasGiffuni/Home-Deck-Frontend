/* eslint-disable */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import '../Styles/RoomPlaneItem.css'





const MenuBody = styled.div`
  justify-content: center;
  height: 100%;
  width:100%;
`;

const PreviewButton = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  width: 100%;
  height:100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
    border-radius: 20px;
    width: 100px;
    height: 75px;

  :hover {
    background-color: #2bbfe240; 
    transition: 500ms;
    border:2px solid #fff; 

  }

    display: grid;
    
`;


function Menu(props) {


  useEffect(() => {

  }, [])





  return (
    <MenuBody>
      <PreviewButton>
        <Button>
          <div className='config-menu-item-image'></div>

        </Button>
      </PreviewButton>
    </MenuBody>
  )
}

export default Menu;