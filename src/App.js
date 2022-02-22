import React, { useEffect, useMemo, useState,useRef } from 'react';
import User from './User';
import Student from './Student';
//UseState😀
// function App() {
//   const[data,setdata] = useState("Nikhil");
//   return (
//     <>
//     <h1>Hooks {data}</h1>
//     <button onClick={()=>setdata("Jain")}>Update Data</button>
//     </>
//   );
// }


// useEfffect😎
// function App(){
//   const[data,setdata] = useState(10);
//   const[count,setcount] = useState(100);
//   useEffect(()=>{
//     console.log('Call for count')
//   },[count])
//   useEffect(()=>{
//     console.log('call for data')
//   },[data])
//   return(
//     <>
//       {/* <h1>Count: {count}</h1>
//       <h1>Data: {data}</h1> */}
//       <User data={data} count={count}/>
//       <button onClick={()=>setcount(count + 1)}>Update Count</button>
//       <button onClick={()=>setdata(data + 1)}>Update Data</button>
//     </>
//   );
// }

// useMemo
// function App(){
//   const[count,setcount] = useState(0);
//   const[item,setitem] = useState(5);
//   const multicountMemo = useMemo( function multicount(){
//     console.log("Multicount Called");
//     return count * 5;
//   },[count])
//   return(
//     <>
//     <h1>UseMemo hook in React</h1>
//     <h2>Counter {count}</h2>
//     <h2>Item {item}</h2>
//     <h2>Multicount{multicountMemo}</h2>
//     <button onClick={()=>setcount(count+1)}>Update Count</button>
//     <button onClick={()=>setitem(item*5)}>Update Item</button>
//     </>
//   );

// }

//Input Ref🧡❤❤
// function App(){
//   let inputRef = useRef(null);
//   function handleinput(){
//     inputRef.current.value="Nikhil";
//     inputRef.current.focus();
//     inputRef.current.style.color="blue";
//   }
//   return(
//     <>
//       <h1>useRef in React Hook</h1>
//       <input type='text' ref={inputRef} />
//       <button onClick={handleinput}>Click Me</button>
//     </>
//   );
// }

//Forward Ref 💛🧡💚💙
function App(){
  let inputRef = useRef(null);
  function HandleInput(){
    inputRef.current.value="1000";
  }
  return(
    <>
      <h1>Forward Ref</h1>
      <Student ref={inputRef}/>
      <button onClick={HandleInput}>Update Input</button>
    </>
  );
}
export default App;
