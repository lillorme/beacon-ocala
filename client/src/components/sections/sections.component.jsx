import React from 'react';
import Rows from '../../components/rows/rows.component';
import { SectionBackground, SectionWrapper, SectionOverlay, Section } from './section.styles';
import SectionIntroduction from './section.introduction';
import { Parallax} from 'react-parallax';
import styles from './section.module.scss';
import { loadSingleReusable } from '../../graphql/request';
import VideoMedia from '../video/video.component';
import Buttons from '../buttons/buttons.components';
import {GetAsyncAwaitResponse} from '../../js/script';
import AsNavFor from '../slides/asNavFor.component';

const Sections = ({dataRow}) =>{
 
    const SectionOverlayContainer = ({items}) => {
          
        return (
            <SectionOverlay className="section_overlay" style={ items.styles.overlay ? items.styles.overlay : {} }>
    
                <SectionWrapper className={items.wrapper} settings={ items.styles.wrapper ? items.styles.wrapper : {} }>
                        
                    { items.introduction ? (
                        <SectionIntroduction {...items.introduction} />
                    ):(
                        <> </>
                    )}

                    { items.rows ? (
                            <Rows dataType={items.type} dataRow ={items.rows}/>
                    ):(
                        <> </>
                    )}

                    {items.buttons ? (
                        <Buttons {...items.buttons}/>
                    ):(
                        <></>
                    )}

                </SectionWrapper>
            </SectionOverlay>
        )
    }

    const SectionParalax = ({items, parallax}) => {
    
        return(
            <Parallax
                {...parallax}
                className={styles.p_img}
                >

                <SectionOverlayContainer items={items} />
            
            </Parallax>
        )
    }

    const SectionBackgroundImage = ({items}) => {
    
        return(
        <SectionOverlayContainer items={items} />
        )
    }

    
    const SectionBackgroundVideo = ({items}) => {
    
        return(
            <>
                <VideoMedia video={items.video}/>
                <SectionOverlayContainer items={items} />
            </>
        )
    }

    const BackGrounfTypes = ({dataRow}) => {
        return(
            <>
            {(() => {
                
                switch (dataRow.background_type) {
                    case 'video':
                        return  <SectionBackgroundVideo items={dataRow} />;
                    case 'normal':
                        return  <SectionBackgroundImage items={dataRow} />;
                    case 'parallax':
                        return  <SectionParalax items={dataRow} parallax={dataRow.parallax ? dataRow.parallax : {}}/>;
                                
                    default:
                        return <> </>;
                                  
                }

                
            })()}
        </>            
        )
    }

    const DisplayAsNavFar = ({items}) => {
    
        return(
            <SectionOverlay className="section_overlay" style={ items.styles.overlay ? items.styles.overlay : {} }>
                <SectionWrapper className={items.wrapper} settings={ items.styles.wrapper ? items.styles.wrapper : {} }>
                        
                    <AsNavFor 
                    topData={items.introduction ? items.introduction : null}
                    bottomData={items.rows ? items.rows : null} 
                    buttonData={items.buttons ? items.buttons : null}/>

                </SectionWrapper>
            </SectionOverlay>
        )
    }

    const DefaultSection = ({dataRow}) =>{
       
        return(
                      
            <Section className={`section ${dataRow.type} ${dataRow.class}`} style={dataRow.styles.section ? dataRow.styles.section : {} }>
                <SectionBackground className={`section_background ${dataRow.type} ${dataRow.background_type}`} style={dataRow.styles.background ? dataRow.styles.background : {} }>
                    <>
                        {(() => {
                            
                            switch (dataRow.type) {
                                case 'asNavFor':
                                    return <DisplayAsNavFar items={dataRow} />;
                                    break;

                                default:
                                    return <BackGrounfTypes dataRow={dataRow} />
                                        
                            }

                            
                        })()}
                    </>
                </SectionBackground>
            </Section>

        )
    }

    return (

        dataRow.map((items, index) => (
            <div key={index} className={items.className}>
            {(() => {
              
                switch(items.type){
                    case 'reusable':
                        const reusables = GetAsyncAwaitResponse(loadSingleReusable(items.reusable.id)); 
                        if(reusables == null){
                            return null;
                        }
                        const sectionData = JSON.parse(reusables.sections)[0];
                        if(items.display){
                        return <DefaultSection dataRow={sectionData} />
                        }
                        break;
                    default :
                        //console.log(items);
                        if(items.display){
                            return <DefaultSection dataRow={items} />
                        }
                        
                }
            })()}
          </div>
        ))

    )
  
}

export default Sections;