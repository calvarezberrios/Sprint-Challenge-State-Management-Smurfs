import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

export const getSmurfs = () => dispatch => {
    console.log("cea: actions/index.js: getSmurfs");
    dispatch({type: FETCH_START});

    axios.get("http://localhost:3333/smurfs")
        .then(res => {
            console.log("cea: actions/index.js: getSmurfs: FETCH_SUCCESS: res ", res.data);

            dispatch({
                type: FETCH_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            console.log("cea: actions/index.js: getSmurfs: FETCH_FAILURE: err.response.data.Error ", err.response.status, "Smurfs List " + err.response.statusText);

            if(err.response.status === 404) {
                dispatch({
                    type: FETCH_FAILURE,
                    payload: "Smurfs List " + err.response.statusText
                });
            }
        })
};

export const addSmurf = smurf => dispatch => {

    axios.post("http://localhost:3333/smurfs", smurf)
        .then(res => {
            console.log("cea: actions/index.js: addSmurf: res.data", res.data);
            dispatch({
                type: ADD_SMURF_FAILURE,
                payload: ""
            });
        })
        .catch(err => {
            console.log("cea: actions/index.js: addSmurf: err.response.data.Error", err.response.data.Error);

            dispatch({
                type: ADD_SMURF_FAILURE,
                payload: err.response.data.Error
            });
        })
}