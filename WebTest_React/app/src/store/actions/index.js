import axios from 'axios'

export const TEST_API_CALL = 'test_api_call';

export const testAPICallData = (data) => {
    console.log('data: ',data)
    return {
        type: TEST_API_CALL,
        data
    }
  }
  
  export const testAPICall = (param) => {
      console.log('param: ',param);
    return (dispatch) => {
        return axios.post(`http://localhost:3001/TestAPI`,param)
            .then(response => {
                console.log('response: ',response.data)
                dispatch(testAPICallData(response.data))
            })
            .catch(error => {
                console.log("calling api error",error);
                throw(error);
            });
    }
  }