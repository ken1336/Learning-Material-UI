import axios from 'axios'
import hostURL from "../../Config"

const API_URL = hostURL.hostURL;
export const TEST_API_CALL = 'test_api_call';

export const testCalendarAPIData = (data) => {
    return {
        type: TEST_API_CALL,
        data
    }
}

export const testCalendarAPICall = (param) => {
    
    return (dispatch) => {
        console.log("calling Calendar api");
        return axios.post("http://"+API_URL+":3002/TestAPI", param)
            .then(response => {
                
                dispatch(testCalendarAPIData(response.data))
            })
            .catch(error => {
                console.log("calling api error", error);
                throw (error);
            });
    }
}
