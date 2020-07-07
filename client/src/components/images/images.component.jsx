import React from 'react';
import ImageData from '../../data/media/images.data';
import { Link } from 'react-router-dom';
import { Img } from './image.styles';


const ImageMedia = (props) => {

  const {id, alt, caption, imageClass, display, linkUrl} = props;
  const imageId = parseInt(id);
  let Images;

  ImageData.map(items  => {
         
    Images = items[imageId];
    if(Images)
    return true;
  });

  return(
    <>
      {display ? (
        <>
          {
              Object.values(Images).map((item, index) => (
                <div key={index}>
                  <div className={`grid-row_column_inner_image ${imageClass}`}>
                      <div  className={item.class ? item.class : null} style={item.style ? item.style : null}>
                        
                        {(() => {
                            switch (item.type) {
                              
                            case 'html':
                              return (
                                <div className={`image`} dangerouslySetInnerHTML={{__html: item.html}}>
                                  
                                </div>
                              ) 
                            case 'normal':
                                return (
                                  <div className={`image`}>
                                    <Link to={linkUrl ? linkUrl : '/'}>
                                    <picture>
                                      <source srcSet={item.src ? item.src : null} media="(min-width: 800px)"></source>
                                      <Img src={item.src} alt={alt ? alt : item.alt} caption={caption ? caption : item.caption} style={item.style ? item.style : null}/>
                                    </picture>
                                    </Link>
                                  </div>
                                )   
                            default:
                                return <> </>;
                            }
                        })()}
                      </div>
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


export default ImageMedia;