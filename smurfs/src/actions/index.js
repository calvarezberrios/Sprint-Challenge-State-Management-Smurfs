import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";
export const EDIT_SMURF_SUCCESS = "EDIT_SMURF_SUCCESS";
export const EDIT_SMURF_FAILURE = "EDIT_SMURF_FAILRE";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILRE";

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
                type: ADD_SMURF_SUCCESS,
                payload: res.data
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

export const editSmurf = (id, smurf) => dispatch => {
    axios.put(`http://localhost:3333/smurfs/${id}`, smurf)
    .then(res => {
        console.log("cea: actions/index.js: editSmurf: res.data: ", res.data)
        dispatch({
            type: EDIT_SMURF_SUCCESS,
            payload: res.data
        });
    })
    .catch(err => {
        dispatch({
            type: EDIT_SMURF_FAILURE,
            payload: err.response.data.Error
        });
    });
}

export const deleteSmurf = id => dispatch => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_SMURF_SUCCESS,
                payload: id
            });
        })
        .catch(err => {
            dispatch({
                type: DELETE_SMURF_FAILURE,
                payload: err.response.data.Error
            });
        });
}