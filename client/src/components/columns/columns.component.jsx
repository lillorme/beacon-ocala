import React from 'react';
import ColumnContent from './columns';

const Columns  = (props) => {

    const {dataColumn} = props;

    return(
        <>
            {
                Object.values(dataColumn).map((items, index) => (
                    <ColumnContent items={items} type={items.type} key={index} />
                ))
            }
        </>
    )
}

export default Columns;