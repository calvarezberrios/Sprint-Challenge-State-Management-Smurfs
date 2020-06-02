import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getSmurfs } from "../actions";

import SmurfsGrid from "../MaterialUI/Grid";

const SmurfsList = () => {
    const error = useSelector(state => state.smurfsReducer.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSmurfs());
    }, [dispatch])
    
    return (
        <>
            {error !== "" && <p>{error}</p>}
            <SmurfsGrid />
        </>

    );
};

export default SmurfsList;