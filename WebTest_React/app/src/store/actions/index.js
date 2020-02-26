import axios from 'axios'
import hostURL from "../../Config"


const API_URL = hostURL.hostURL;
export const TEST_API_CALL = 'test_api_call';
export const PUT_API_CALL = "put_api_call";
export const FETCH_API_CALL = "fetch_api_call";

export const CARD_COUNTER = "card_counter";


export const putAPICallData = (data) => {
    return {
        type: PUT_API_CALL,
        data
    }
}
export const FetchListAPICallData = (data) => {
    return {
        type: FETCH_API_CALL,
        data
    }
}

export const testAPICallData = (data) => {
    return {
        type: TEST_API_CALL,
        data
    }
}

export const cardCounter = (id) => {
    return {
        type: CARD_COUNTER,
        id
    }
}



export const putAPICall = (param) => {
    

    return(dispatch) =>{
        return axios.post("http://"+API_URL+":3001/put",param)
        .then(response =>{
            dispatch(putAPICallData(response.data))
        })
        .catch(error =>{
            console.log("calling api error", error);
            throw(error);
        });
    }
}

export const FetchListAPICall = (param) => {
    

    return(dispatch) =>{
        return axios.post("http://"+API_URL+":3001/getList",param)
        .then(response =>{
            dispatch(FetchListAPICallData(response.data))
        })
        .catch(error =>{
            console.log("calling api error", error);
            throw(error);
        });
    }
}
export const testAPICall = (param) => {
    
    return (dispatch) => {
        return axios.post("http://"+API_URL+":3001/TestAPI", param)
            .then(response => {
                
                dispatch(testAPICallData(response.data))
            })
            .catch(error => {
                console.log("calling api error", error);
                throw (error);
            });
    }
}

export const cardCounterCall = (id) => cardCounter(id);