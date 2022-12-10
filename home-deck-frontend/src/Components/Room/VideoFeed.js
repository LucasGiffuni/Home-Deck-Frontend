import React, { useState } from "react";
import ReactPlayer from 'react-player';







function VideoFeed(props) {

  const [videofetching, setvideofetching] = useState(true);


  console.log(props.src)

  function handleVideoError() {
    setvideofetching(!videofetching)
  }


  if (videofetching) {
    return (


      <div>

        <ReactPlayer
          playing
          loop
          height={250}
          width={500}
          onError={handleVideoError()}

          url={props.src}>
        </ReactPlayer>
      </div>

    );
  } else {
    return (
      <div className="lds-facebook"><div></div><div></div><div></div></div>
    )
  }

}

export default VideoFeed;