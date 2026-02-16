import React, { useContext, useState } from 'react'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import axios from 'axios';
import { authDataContext } from '../Context/AuthContext';
import { userDataContext } from '../Context/UserContext';
import { toast } from 'react-toastify';

function SignUp() {

    let [show,setShow] = useState(false)
    let navigate = useNavigate()
    let {serverUrl,loading,setLoading} = useContext(authDataContext)
    let {setUserData} = useContext(userDataContext)

    let [name,setName]= useState("")
    let [email,setEmail]= useState("")
    let [password,setPassword]= useState("")

    const handleSignUP = async (e) => {
      setLoading(true)
        try {
            e.preventDefault()
            let result = await axios.post(serverUrl + "/api/auth/signup",{
                name,email,password
            },{withCredentials:true})

            setUserData(result.data)
            navigate("/")
            toast.success("Signup Successfully")
        } catch (error) {
            toast.error("Somethings went wrong")
        }
        setLoading(false)
    }

  return (

    <div className='min-h-screen w-full bg-gradient-to-br from-rose-100 via-orange-50 to-amber-100 flex items-center justify-center relative overflow-hidden'>

        {/* back */}
        <div
            className='w-12 h-12 bg-white/80 backdrop-blur-md shadow-md hover:scale-105 transition rounded-full flex items-center justify-center absolute top-6 left-6 cursor-pointer'
            onClick={()=>navigate("/")}
        >
            <FaArrowLeftLong className='text-rose-500'/>
        </div>

        {/* card */}
        <div className='w-[95%] max-w-6xl h-[650px] bg-white/60 backdrop-blur-xl shadow-2xl rounded-3xl flex overflow-hidden border border-white/40'>

            {/* LEFT PANEL */}
            <div className='hidden md:flex w-1/2 bg-gradient-to-br from-rose-500 via-orange-500 to-amber-500 text-white p-12 flex-col justify-between'>

                <div>
                    <h1 className='text-5xl font-bold leading-tight'>
                        Join Us
                    </h1>
                    <p className='mt-4 text-white/90 text-lg'>
                        Start listing, booking and hosting stays in seconds.
                    </p>
                </div>

                <div className='text-sm text-white/80'>
                    Your journey into hosting begins today 🏡
                </div>

            </div>

            {/* FORM */}
            <form
                onSubmit={handleSignUP}
                className='w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 gap-5'
            >

                <div>
                    <h2 className='text-3xl font-bold text-gray-800'>Create Account</h2>
                    <p className='text-gray-500 text-sm'>It only takes a minute</p>
                </div>

                {/* name */}
                <div className='flex flex-col gap-2'>
                    <label className='text-gray-700'>Username</label>
                    <input
                        type="text"
                        required
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        className='h-12 rounded-xl border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-rose-400 transition'
                    />
                </div>

                {/* email */}
                <div className='flex flex-col gap-2'>
                    <label className='text-gray-700'>Email</label>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        className='h-12 rounded-xl border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-rose-400 transition'
                    />
                </div>

                {/* password */}
                <div className='flex flex-col gap-2 relative'>
                    <label className='text-gray-700'>Password</label>
                    <input
                        type={show?"text":"password"}
                        required
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        className='h-12 rounded-xl border border-gray-300 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-rose-400 transition'
                    />
                    {show
                        ? <IoMdEyeOff className='absolute right-4 bottom-3 text-xl text-gray-500 cursor-pointer' onClick={()=>setShow(false)}/>
                        : <IoMdEye className='absolute right-4 bottom-3 text-xl text-gray-500 cursor-pointer' onClick={()=>setShow(true)}/>
                    }
                </div>

                {/* button */}
                <button
                    disabled={loading}
                    className='h-12 rounded-xl bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 text-white font-semibold hover:scale-[1.02] active:scale-95 transition shadow-lg'
                >
                    {loading ? "Creating Account..." : "Create Account"}
                </button>

                <p className='text-sm text-gray-600 text-center'>
                    Already have an account?
                    <span
                        onClick={()=>navigate("/login")}
                        className='text-rose-500 font-semibold ml-2 cursor-pointer hover:underline'
                    >
                        Login
                    </span>
                </p>

            </form>

        </div>
    </div>
  )
}

export default SignUp
