import React from 'react';

class GetPromiseValue extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            proviceValue: props.promise,
        };
    }
    
    async componentDidMount(props){
        console.log(props);
        const proviceValue = await proviceValue;
        this.setState({proviceValue});
    }

    returnPromise(){
        const {proviceValue} = this.state;

        if(!proviceValue){
            return null;
        }

        console.log(proviceValue);

        return proviceValue;
    }

};


export default GetPromiseValue;