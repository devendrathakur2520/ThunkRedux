import { LOG_DETAILS} from "../action";
const initialState = {
    usr:{
        show:'false',
     
        
    }
        
    
}
const logDetails =(state=initialState,action)=>{
    switch (action.type) {
        case LOG_DETAILS:
            return {
                ...state,
        show: action.payload,
            };
            default:
                return state;
        
    }
}
export default logDetails;
