import React,{forwardRef} from "react";
function Student(props,ref){
    return(
        <>
        <h1>Student Component</h1>
        <input type='text' ref={ref}/>
        </>
    );
}
export default forwardRef(Student);