import React, { useState } from 'react'

const ListUser = () => {

   console.log("running")
    const [name, setname] = useState(["vasee", "thiru", "sri", "vikey",])
    

const adduser=()=>{
    setname(prev=>[...prev,"vaseekaran"])
}

   const deleteuser=(index)=>{
    
    setname(prev=>prev.filter((e,i)=>(i!==index))
        
    )
   }
   console.log(name);
   
console.log("second")
    return (
        <>
            <div className='flex flex-col gap-y-4 justify-center items-center p-3 bg-amber-100 mt-2 h-60'>
                <h1>list of array user</h1>
                {name.map((e,  i) => (
                    <div >
                        <h1 key={i} >{i+1}: {e}</h1>
                        
                         <button onClick={()=>deleteuser(i)} className='bg-blue-300 rounded '>delete</button>
                    </div>
                    
                ))}
               <button onClick={adduser}>add</button>
            </div>
            
            
        </>
    )
}

export default ListUser