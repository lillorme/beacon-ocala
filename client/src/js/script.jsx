import { useState, useEffect }from 'react'; 
import $ from 'jquery';

export const scrollAction = () => {
    return document.addEventListener('click', () => {
        const isTop = window.scrollY < 100;
        if (isTop && document.body.classList.contains("home")) {
            document.body.classList.add("top")
        }else{
            document.body.classList.remove("top")
        }
    });
}

export const projectTabClick = () => {
    return $(document).on('click', 'li.project-tab', function(){
        const targetColumn = $(this).data('column');
        $.each($('.project-columns'), function(){
            const columnId = $(this).attr('id');
            $(this).removeClass('show');
            if(targetColumn == columnId){
                $(this).addClass('show');
            }
        });
    })
}

export const GetAsyncAwaitResponse = (promise) =>{
   
    const [valueState, setValueState] = useState([]);
     
    useEffect(
        () => {
           

            const asynchronousFunction = callback => {
                const response = promise.then(response => {
                    
                    callback(response);
                });
               
                    return response;
                
            }

            const callbackFunction = result => {
                
                setValueState(valueState => result);
                
            }

            const mainFunction = callback => {
                
                 asynchronousFunction(callback);
                
            }
     
            mainFunction(callbackFunction);


        },
        
        []
    );
    function isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key)) {
            return false;
            }
        }
        
        return true
    }
    
    if(isEmpty(valueState) === false){
        return valueState;
    }else{
        return null;
    }
}

export const avocardroSlider = () => {

   return $.each($('.avocardro-slider-container'), function(){
        const sliderId = $(this).data('id');
        const slider = $('#' + sliderId);
        slider.slick({});
    });

}
