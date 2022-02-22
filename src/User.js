import React, { useEffect } from "react";

function User(props){
    useEffect(()=>{
        console.log('useEffect Called');
    },[props.count])
    useEffect(()=>{
        console.log('useEffect Called');
    },[props.data])
    return(
        <>
        <h1>Count Props : {props.count}</h1>
        <h1>Data Props : {props.data}</h1>
        </>
    );
}
export default User;