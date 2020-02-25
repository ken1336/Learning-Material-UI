import axios from 'axios'
export const TEST_API_CALL = 'test_api_call';
export const PUT_API_CALL = "put_api_call";
export const FETCH_API_CALL = "fetch_api_call";


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


export const putAPICall = (param) => {
    console.log("param: ", param);

    return(dispatch) =>{
        return axios.post("http://localhost:3001/put",param)
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
    console.log("fetch ");

    return(dispatch) =>{
        return axios.post("http://localhost:3001/getList",param)
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
    console.log('param: ', param);
    return (dispatch) => {
        return axios.post(`http://localhost:3001/TestAPI`, param)
            .then(response => {
                console.log('response: ', response.data)
                dispatch(testAPICallData(response.data))
            })
            .catch(error => {
                console.log("calling api error", error);
                throw (error);
            });
    }
}