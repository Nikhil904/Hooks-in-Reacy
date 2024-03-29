import React, {
  useEffect,
  useMemo,
  useState,
  useRef,
  useReducer,
  useLayoutEffect,
  useImperativeHandle,
} from "react";
//UseState😀
// function App() {
//   const[Counter,setCounter] = useState(0);
//   const increment = () =>{
//     setCounter(Counter + 1);
//   }
//   const decrement = () =>{
//     setCounter(Counter - 1);
//   }
//   return (
//     <>
//     <h1>Hooks {Counter}</h1>
//     <button onClick={increment}>Increment</button>
//     <button onClick={decrement}>Decrement</button>
//     </>
//   );
// }

//useReducer
function App() {
  const initialState = {
    count: 0,
    showText:true
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1, showtext: state.showtext };
      case "TOGGLE":
        return { count: state.count, showtext: !state.showtext };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>useReducer</h1>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "TOGGLE" });
        }}
      >
        Counter
      </button>
      {state.showtext && <p>This is Dummy Text</p>}
    </>
  );
}

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

//useRef🧡❤❤
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

// useLayoutEffect💥💢💢💥
// function App() {
//   const inputRef = useRef();
//   useLayoutEffect(()=>{
// console.log(inputRef.current.value);
//   },[])
//   useEffect(()=>{
//     inputRef.current.value="Hello";
//   },[])
//   return (
//     <>
//       <input type="text" ref={inputRef} value="Nikhil" />
//     </>
//   );
// }

// useContext❌❌❌❌❌❌
// function App() {
//   return (
//     <>
//       <h1>useContxt</h1>
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

//Forward Ref 💛🧡💚💙
// function App(){
//   let inputRef = useRef(null);
//   function HandleInput(){
//     inputRef.current.value="1000";
//   }
//   return(
//     <>
//       <h1>Forward Ref</h1>
//       <Student ref={inputRef}/>
//       <button onClick={HandleInput}>Update Input</button>
//     </>
//   );
// }
export default App;
