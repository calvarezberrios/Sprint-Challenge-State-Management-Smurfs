import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getSmurfs } from "../actions";

import SmurfsGrid from "../MaterialUI/Grid";

const SmurfsList = () => {
    const { isFetching, error, smurfs } =  useSelector(state => state.smurfsReducer);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getSmurfs());
    }, [dispatch]);

    console.log("cea: components/SmurfsList.js: isFetching: ", isFetching);
    
    if(isFetching) return <h2>Loading Smurfs...</h2>;
    else if(error !== "" && smurfs.length === 0) return <h2>{error}</h2>;
    return (
        <SmurfsGrid />
    );
};

export default SmurfsList;