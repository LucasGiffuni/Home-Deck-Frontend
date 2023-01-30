import React, { useState } from "react";
import ReactPlayer from 'react-player';

import styled from 'styled-components';



const videoBody = styled.div`

  background-color: red;

`;


function VideoFeed(props) {

  const [videofetching, setvideofetching] = useState(true);



  function handleVideoError() {
    setvideofetching(!videofetching)
  }


  if (videofetching) {
    return (


      <videoBody>

        <ReactPlayer
          playing
          loop
          height={750}
          width={500}
          onError={handleVideoError()}

          url={props.src}>
        </ReactPlayer>
      </videoBody>

    );
  } else {
    return (
      <div className="lds-facebook"><div></div><div></div><div></div></div>
    )
  }

}

export default VideoFeed;