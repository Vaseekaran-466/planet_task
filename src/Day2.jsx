import { useEffect, useRef, useState } from "react";

const Day2 = () => {

  const [input, setInput] = useState("");
  const [value, setValues] = useState("");
  const InputClear = useRef();

  useEffect(()=>{
    const saved = localStorage.getItem("userdata");
    if(saved){
      setValues(saved);
    }
  },[])

  const handlinginput =(e)=>{
    setInput(e.target.value);
  }

  const handlingbutton = ()=>{
    localStorage.setItem("userdata", input);
    setValues(input);
  }

  const handlingclear = ()=>{
    localStorage.removeItem("userdata");
    setValues("");
    setInput("");
    InputClear.current.value = "";
  }

  return (
    <>
      <div className="bg-blue-100 min-h-[200px] p-6 m-4 rounded-xl shadow-md flex items-center justify-center">
        <div className="w-full max-w-md space-y-4">
          
          <input
            ref={InputClear}
            type="text"
            onChange={handlinginput}
            placeholder="Type something..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="flex gap-3">
            <button
              onClick={handlingbutton}
              className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Submit
            </button>

            <button
              onClick={handlingclear}
              className="flex-1 bg-gray-300 text-gray-800 py-2 rounded-lg hover:bg-gray-400 transition"
            >
              Clear
            </button>
          </div>

          <h1 className="text-lg font-semibold text-gray-700 text-center">
            {value}
          </h1>

        </div> 


      </div>
      <div className="flex justify-center items-center p-2">
                <button  className="bg-blue-600 rounded text-white w-25"
                 onClick={()=>window.scrollTo({
                    top:0,
                    behavior:"smooth"
                })}>mve to top</button>
             </div>
      
    </>
  );
};

export default Day2;
