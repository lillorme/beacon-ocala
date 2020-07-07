import React from 'react';
import VideoData from '../../data/media/videos.data';

import { VideoBackground } from './video.styles';


const VideoMedia = ({video}) => {
  const {id, type, display, videoClass, styles} = video;
  const videoId = parseInt(id);
  let videos;

  VideoData.map(items  => {
    videos = items[videoId];
    if(videos)
    return true
  });
  
  const VideoPlayer = ({item}) => {

    return (
            <VideoBackground >
                <div 
                    style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                    }} 
                    className="video-container"
                >
                        <video 
                            style={{
                                objectFit: 'cover',
                                width: '100%',
                                height: '100%',
                            }} 
                            autoPlay="autoplay" loop="loop" muted="muted" preload="auto"
                        >
                            <source src={item.src ? item.src : null} type="video/mp4"/>
                        </video> 
                </div>
            </VideoBackground>
    )
}

  return(
    <>
          {display ? (
              <>
                {
                    Object.values(videos).map((item, index) => (
                    
                            <div className="grid-row_column_inner_video" key={index}>
                                <div  className={videoClass ? videoClass: null} style={styles ? styles : null}>
                                {(() => {
                                    switch (type) {
                                    case 'embeded':
                                        return (
                                        <div className={`video embeded`}>
                                            
                                        </div>
                                        ) 
                                    case 'normal':
                                        return <VideoPlayer item={item}/>   
                                    default:
                                        return <> </>;
                                    }
                                })()}
                                </div>
                            </div>
                    
                    ))
                }
              </>

          ):(
            <></>
          )}

    </>
 
  )
}


export default VideoMedia;