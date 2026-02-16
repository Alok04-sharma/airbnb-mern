import React, { useContext, useState } from 'react'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { authDataContext } from '../Context/AuthContext';
import axios from 'axios';
import { userDataContext } from '../Context/UserContext';
import { toast } from 'react-toastify';

function Login() {

    let [show,setShow] = useState(false)
    let {serverUrl,loading,setLoading} = useContext(authDataContext)
    let {setUserData} = useContext(userDataContext)
    let [email,setEmail]= useState("")
    let [password,setPassword]= useState("")
    let navigate = useNavigate()

    const handleLogin = async (e) => {
        setLoading(true)
        try {
            e.preventDefault()
            let result = await axios.post(serverUrl + "/api/auth/login",{
                email,
                password
            },{withCredentials:true})

            setLoading(false)
            setUserData(result.data)
            navigate("/")
            toast.success("Login Successfully")

        } catch (error) {
            setLoading(false)
            toast.error(error.response.data.message)
        }
    }

  return (

    <div className='min-h-screen w-full flex'>

        {/* LEFT PANEL */}
        <div className='hidden lg:flex w-1/2 relative overflow-hidden bg-gradient-to-br from-rose-500 via-pink-500 to-orange-400 text-white p-14 flex-col justify-between'>

            <div className='text-3xl font-semibold tracking-wide'>
                StayFinder
            </div>

            <div className='space-y-6 max-w-md'>
                <h2 className='text-5xl leading-tight font-bold'>
                    Find your perfect stay anywhere.
                </h2>
                <p className='text-white/90 text-lg'>
                    Discover villas, apartments and unique homes around the world.
                    Book instantly and travel smarter.
                </p>
            </div>

            <div className='text-sm text-white/80'>
                © 2026 StayFinder Inc.
            </div>

            {/* Glow */}
            <div className='absolute w-[500px] h-[500px] bg-white/20 blur-[140px] rounded-full -bottom-32 -right-32'></div>
        </div>


        {/* RIGHT PANEL */}
        <div className='flex-1 flex items-center justify-center bg-[#f4f5f7] relative px-4'>

            {/* Back */}
            <div className='w-[42px] h-[42px] bg-white/80 backdrop-blur border shadow-sm hover:shadow-md transition cursor-pointer absolute top-6 left-6 rounded-full flex items-center justify-center'
                 onClick={()=>navigate("/")}>
                <FaArrowLeftLong className='w-[18px] h-[18px] text-gray-700'/>
            </div>


            {/* CARD */}
            <form
            onSubmit={handleLogin}
            className='w-full max-w-[420px] bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl rounded-3xl p-8 flex flex-col gap-6'>

                {/* Heading */}
                <div className='space-y-1'>
                    <h1 className='text-3xl font-semibold text-gray-900'>Welcome back</h1>
                    <p className='text-gray-500 text-sm'>Login to continue your journey</p>
                </div>

                {/* Email */}
                <div className='flex flex-col gap-2'>
                    <label className='text-sm text-gray-600'>Email</label>
                    <input
                    type="email"
                    className='h-[46px] px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400 transition'
                    required
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    />
                </div>

                {/* Password */}
                <div className='flex flex-col gap-2 relative'>
                    <label className='text-sm text-gray-600'>Password</label>
                    <input
                    type={show?"text":"password"}
                    className='h-[46px] px-4 pr-10 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400 transition'
                    required
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                    />

                    {!show &&
                    <IoMdEye
                    className='absolute right-3 top-[40px] w-[20px] h-[20px] text-gray-500 cursor-pointer'
                    onClick={()=>setShow(true)}
                    />}

                    {show &&
                    <IoMdEyeOff
                    className='absolute right-3 top-[40px] w-[20px] h-[20px] text-gray-500 cursor-pointer'
                    onClick={()=>setShow(false)}
                    />}
                </div>

                {/* Button */}
                <button
                className={`h-[48px] rounded-xl font-semibold text-white transition-all
                ${loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-rose-500 to-orange-400 hover:scale-[1.02] active:scale-[0.98]"
                }`}
                disabled={loading}>
                    {loading ? "Signing in..." : "Login"}
                </button>

                {/* Signup */}
                <p className='text-center text-sm text-gray-600'>
                    Don’t have an account?
                    <span
                    className='ml-2 text-rose-500 font-semibold cursor-pointer hover:underline'
                    onClick={()=>navigate("/SignUP")}>
                        Sign up
                    </span>
                </p>

            </form>

        </div>

    </div>
  )
}

export default Login
