
const Responsive = (grid) => {
    
    let classData;

    switch (grid){
        case '1':
            classData   = `gtc-1`;
            break;
        case '2':
            classData   = `gtc-xl-2 gtc-ld-2 gtc-md-2 gtc-sd-2 gtc-xm-1`;
            break;
        case '3':
            classData   = `gtc-xl-3 gtc-ld-3 gtc-md-3 gtc-sd-2 gtc-xm-1`;
            break;
        case '4':
            classData   = `gtc-xl-4 gtc-ld-4 gtc-md-2 gtc-sd-2 gtc-xm-1`;
            break;
        case '5':
            classData   = `gtc-xl-5 gtc-ld-5 gtc-md-3 gtc-sd-2 gtc-xm-1`;
            break;
        case '6':
            classData   = `gtc-xl-6 gtc-ld-6 gtc-md-3 gtc-sd-2 gtc-xm-1`;
            break;
        case '7':
            classData   = `gtc-xl-7 gtc-ld-7 gtc-md-3 gtc-sd-2 gtc-xm-1`;
            break;
        case '8':
            classData   = `gtc-xl-8 gtc-ld-6 gtc-md-3 gtc-sd-2 gtc-xm-1`;
            break;
            default:
                classData   = `gtc-1`;
                break;
    }

    return classData;

}

export default Responsive;