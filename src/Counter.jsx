import { useState } from "react"

const Counter = () => {

    const [count, setCount] = useState(0)
    const [login, setLogin] = useState(true)
    const [user, setUser] = useState({
        name: "vasee",
        age: "24"
    })
    const [roll, setRoll] = useState("")
    const [like, setLike] = useState(false)
    const [them, setThem] = useState(false)
    const [magic, setMagic] = useState(true)
    const [input, setInput] = useState("")

    const handlechangeadd = () => setCount(count + 1)
    const handlechangeminus = () => setCount(count - 1)
    const handlelogin = () => setLogin(!login)
    const updeteobj = () => {
        setUser(prev => ({
            ...prev,
            name: "karan", age: "23"
        }))
    }

    return (
        <>
            <div className={them ? "bg-white min-h-screen" : "bg-black text-white min-h-screen"}>

                {/* THEME BUTTON */}
                <div className="p-4">
                    <button 
                        onClick={() => setThem(!them)} 
                        className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
                    >
                        {them ? "Dark Mode" : "Light Mode"}
                    </button>
                </div>

                {/* ROLE SWITCH */}
                <div className="flex flex-col items-center justify-center mt-6 gap-4">

                    <div className="flex gap-4">
                        <button
                            onClick={() => setRoll("admin")}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                        >
                            Admin
                        </button>

                        <button 
                            onClick={() => setRoll("user")}
                            className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
                        >
                            User
                        </button>
                    </div>

                    <div className="text-2xl font-semibold h-10">
                        {roll === "admin" && (
                            <h1 className="text-blue-500">Welcome Admin 👑</h1>
                        )}

                        {roll === "user" && (
                            <h2 className="text-green-400">Welcome User 😊</h2>
                        )}
                    </div>

                </div>

                {/* LOGIN BUTTON */}
                <div className="flex justify-end items-end p-4">
                    <button 
                        onClick={handlelogin} 
                        className="bg-red-600 px-5 py-2 text-white rounded-lg shadow hover:bg-red-700 transition"
                    >
                        {login ? "Login" : "Logout"}
                    </button>
                </div>

                {/* MAIN SECTION */}
                <div className="flex justify-center items-start mt-10 gap-10 flex-wrap">

                    {/* COUNTER CARD */}
                    <div className="bg-gray-900 w-80 h-80 flex flex-col text-2xl text-white rounded-3xl gap-y-3 items-center justify-center shadow-xl border border-gray-700">

                        <button 
                            className="bg-amber-200 w-24 text-black rounded-lg py-1 hover:scale-105 transition shadow"
                            onClick={handlechangeadd}
                        >
                            Plus
                        </button>

                        <h1 className="font-bold tracking-wide">Count : {count}</h1>

                        <button 
                            className="bg-amber-200 w-24 text-black rounded-lg py-1 hover:scale-105 transition shadow"
                            onClick={handlechangeminus}
                        >
                            Minus
                        </button>

                        <h1 
                            className="bg-red-500 px-4 py-1 rounded-lg hover:cursor-pointer hover:bg-red-600 shadow"
                            onClick={() => { setCount('') }}
                        >
                            Reset
                        </h1>
                    </div>

                    {/* OBJECT UPDATE */}
                    <div className="text-xl space-y-3">
                        <h2 className="font-bold mb-2">Object Update</h2>

                        <h1
                            onClick={updeteobj}
                            className="bg-blue-500 text-white px-4 py-2 rounded-xl cursor-pointer hover:bg-blue-600 shadow"
                        >
                            update : {user.name} , {user.age}
                        </h1>
                    </div> 

                    {/* LIKE SECTION */}
                    <div className="text-center text-5xl">
                        <h1 
                            onClick={() => setLike(!like)} 
                            className="cursor-pointer"
                        >
                            {like ? "❤️" : "🤍"}
                        </h1>
                        <h2 className="text-sm mt-2">{like ? "Unlike" : "Like"}</h2>
                    </div>

                    {/* MAGIC BUTTON */}
                    <div className="text-center">
                        <h1 className="font-semibold mb-2">Click button to show magic</h1>
                        {magic ? (
                            <button 
                                onClick={() => setMagic(false)}
                                className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700 transition"
                            >
                                Click Me
                            </button>
                        ) : null}
                 </div>

                    {/* INPUT BOX */}
                    <div className="space-y-2">
                        <input 
                            onChange={(e) => setInput(e.target.value)} 
                            type="text" 
                            className=" bg-amber-50 px-3 py-2 rounded-lg border outline-none text-black"
                            placeholder="Type something..."
                        />
                        <h1 className="font-semibold text-lg">{input}</h1>
                    </div>

                </div>


           
          
            </div>
        </>
    )
}

export default Counter
