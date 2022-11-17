import React, { useState } from 'react'
import styled from 'styled-components';
import './Styles/LightDeviceComponent.css'


//https://react-bootstrap.netlify.app/forms/checks-radios/#switches



const Button = styled.div`   
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    margin-top:5%;
    margin-left:10%;

`;
const OnOff = styled.p`   
    text-align: left;
    color: white;
    margin: auto;
    margin-left: -2%;
`;

function SwitchExample(props) {

  const [isToggled, setIsToggled] = useState({
    value: false
   
});
  const onToggle = () => setIsToggled(!isToggled);

  React.useEffect(() => {
    if (props.onChange) {
      props.onChange(isToggled)
    }
  }, [isToggled.value])


  return (
    <div>
      <Button>

        <OnOff>{isToggled ? "ON" : "OFF"}</OnOff>
        <label className="toggle-switch">
          <input type="checkbox" checked={isToggled} onChange={onToggle} />
          <span className="switch" />
        </label>
      </Button>

      <div className="light-image" />

    </div>
  );
}

export default SwitchExample;