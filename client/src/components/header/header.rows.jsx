import React from 'react';
import HeaderColumns from './header.columns';


const HeaderRows = (props) =>{

    const { rowData, currentUser } = props;
    //console.log(typeof rowData);
    //console.log(rowData);

    return(
        <>
            {
                Object.values(rowData).map((items, index) => (
                    <HeaderColumns columnData ={items.columns} key={index} />
                ))
            }
        </>
    )

}

export default HeaderRows;