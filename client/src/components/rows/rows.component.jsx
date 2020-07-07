import React from 'react';
import Columns from '../../components/columns/columns.component';
import Responsive from '../responsive/responsive.component';

import {Slides} from '../../components/slides/slides.component';

const Rows = (props) => {

  const {dataRow} = props;

  if(dataRow.display === false || dataRow.display === null || dataRow.display === undefined || dataRow.display === '' ){
    return null;
  }

  return(

    <>
      {dataRow ? (
        <div className={`grid-row  ${dataRow.class } ${Responsive(dataRow.settings.grid)} gg-${dataRow.settings.grid_gap}`} >

          {(() => {

            switch (dataRow.type) {

              case 'slider':
                
                return <Slides type = {dataRow.type} sliderSettings={dataRow.sliderSettings} dataColumn={dataRow.columns}/>;

              case 'normal':

                return <Columns type = {dataRow.type} dataColumn={dataRow.columns}/>;  

              default:

                return null;

            }

          })()}

        </div>
      ):(
        <></>
      )}
    </>
  )

}

export default Rows;