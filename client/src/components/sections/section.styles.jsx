import styled from 'styled-components';

export const SectionBackground = styled.div`
    
    &.hero{
        overflow:hidden;
        position: relative;
        display:grid;
        .section_overlay{
            padding:100px 0;
        }
    }
`;

export const Section = styled.section`
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    padding-bottom: 0;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 0;
    box-shadow: initial;
    width:100%;

`;

export const SectionOverlay = styled.div`
    background-color: initial;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    padding-bottom: 0;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 0;
    display:grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    position: relative;
`;

export const H1 = styled.h1`

`;

export  const SectionWrapper = styled.div`
    width:100%;
    max-width:1480px;
    margin: auto;
    padding-left:15px;
    padding-right:15px;
    &.small{
        max-width:960px;
    }
    &.medium{
        max-width:1200px; 
    }
    &.large{
        max-width:1480px;
    }
    &.full{
        max-width:100%;
    }
`;

export const VideoBackground = styled.div`
    left: 0;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    overFlow:hidden;
    z-index: -1;
    .video-container{
      
        video {
            width: 100%;
        }
    }
        
`;

export const SectionIntroductionStyles  = styled.div`
    width: 100%;
    margin: 0 auto 40px auto;
    .section-description{
        line-height: 30px;
    }
`;