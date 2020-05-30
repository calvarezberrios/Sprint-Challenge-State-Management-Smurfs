import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getSmurfs } from "../actions";

const SmurfsList = () => {
    const { isFetching, error } =  useSelector(state => state.smurfsReducer);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getSmurfs());
    }, [dispatch]);

    console.log("cea: components/SmurfsList.js: isFetching: ", isFetching);
    
    if(isFetching) return <h2>Loading Smurfs...</h2>;
    else if(error !== "") return <h2>{error}</h2>
    return (
        <div>
            
        </div>
    );
};

export default SmurfsList;