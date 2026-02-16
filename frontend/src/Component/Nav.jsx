import React, { useContext, useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdWhatshot } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { MdBedroomParent } from "react-icons/md";
import { MdOutlinePool } from "react-icons/md";
import { GiWoodCabin } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoBedOutline } from "react-icons/io5";
import { FaTreeCity } from "react-icons/fa6";
import { BiBuildingHouse } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { authDataContext } from '../Context/AuthContext';
import axios from 'axios';
import { userDataContext } from '../Context/UserContext';
import { listingDataContext } from '../Context/ListingContext';

function Nav() {

    let [showpopup,setShowpopup]= useState(false)
    let {userData ,setUserData}= useContext(userDataContext)
    let navigate = useNavigate()
    let {serverUrl} = useContext(authDataContext)
    let [cate,setCate]= useState()
    let {listingData,setNewListData,searchData,handleSearch,handleViewCard}=useContext(listingDataContext)
    let [input,setInput]=useState("")

    const handleLogOut = async () => {
        try {
            await axios.post(serverUrl + "/api/auth/logout", {}, {withCredentials:true})
            setUserData(null)
        } catch (error) {
            console.log(error)
        }
    }

    const handleCategory = (category)=>{
       setCate(category)
       if(category=="trending"){
        setNewListData(listingData)
       }
       else{
       setNewListData(listingData.filter((list)=>list.category==category))}
    }

    const handleClick = (id) => {
        if (userData) handleViewCard(id)
        else navigate("/login")
    }

    useEffect(()=>{
      handleSearch(input)
    },[input])

    return (
        <div className='fixed top-0 left-0 w-full z-50'>

            {/* GLASS NAVBAR */}
            <div className='
                backdrop-blur-xl
                bg-white/70
                border-b border-white/40
                shadow-[0_8px_30px_rgba(0,0,0,0.08)]
            '>

                {/* TOP BAR */}
                <div className='w-full min-h-[80px] px-[20px] md:px-[40px] flex items-center justify-between'>

                    <img src={logo} alt="" className='w-[130px] cursor-pointer' onClick={()=>navigate("/")}/>

                    {/* SEARCH */}
                    <div className='w-[38%] relative hidden md:block'>
                        <input
                            type="text"
                            className='w-full px-[25px] py-[11px] rounded-full border border-gray-200 bg-white/80 backdrop-blur-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 text-[16px]'
                            placeholder='Anywhere • Any location • Any city'
                            onChange={(e)=>setInput(e.target.value)}
                            value={input}
                        />
                        <button className='absolute right-[6px] top-[6px] bg-red-500 hover:bg-red-600 transition p-[9px] rounded-full text-white shadow-md'>
                            <FiSearch/>
                        </button>
                    </div>

                    {/* PROFILE MENU */}
                    <div className='flex items-center gap-[12px] relative'>
                        <span className='hidden md:block text-[15px] font-medium px-4 py-2 rounded-full hover:bg-gray-100 cursor-pointer'
                        onClick={()=>navigate("/listingpage1")}>
                            List your home
                        </span>

                        <button className='flex items-center gap-2 border border-gray-300 rounded-full px-3 py-2 hover:shadow-md transition'
                        onClick={()=>setShowpopup(prev=>!prev)}>
                            <GiHamburgerMenu/>
                            {!userData
                                ? <CgProfile className='text-[22px]'/>
                                : <span className='w-[30px] h-[30px] bg-black text-white rounded-full flex items-center justify-center text-sm font-semibold'>
                                    {userData?.name?.slice(0,1)}
                                  </span>}
                        </button>

                        {/* DROPDOWN */}
                        {showpopup &&
                        <div className='absolute right-0 top-[120%] w-[230px] bg-white rounded-2xl shadow-2xl border overflow-hidden'>
                            {!userData &&
                                <div className='p-3 hover:bg-gray-100 cursor-pointer'
                                onClick={()=>{navigate("/login");setShowpopup(false)}}>Login</div>}

                            {userData &&
                                <div className='p-3 hover:bg-gray-100 cursor-pointer'
                                onClick={()=>{handleLogOut();setShowpopup(false)}}>Logout</div>}

                            <div className='h-[1px] bg-gray-200'></div>

                            <div className='p-3 hover:bg-gray-100 cursor-pointer'
                            onClick={()=>{navigate("/listingpage1");setShowpopup(false)}}>List your Home</div>

                            <div className='p-3 hover:bg-gray-100 cursor-pointer'
                            onClick={()=>{navigate("/mylisting");setShowpopup(false)}}>My Listing</div>

                            <div className='p-3 hover:bg-gray-100 cursor-pointer'
                            onClick={()=>{navigate("/mybooking");setShowpopup(false)}}>My Booking</div>
                        </div>}
                    </div>
                </div>

                {/* CATEGORY BAR */}
                <div className='flex gap-10 overflow-x-auto px-[20px] md:justify-center py-[14px]'>

                    {[
                        ["trending",MdWhatshot,"Trending"],
                        ["villa",GiFamilyHouse,"Villa"],
                        ["farmHouse",FaTreeCity,"Farm House"],
                        ["poolHouse",MdOutlinePool,"Pool House"],
                        ["rooms",MdBedroomParent,"Rooms"],
                        ["flat",BiBuildingHouse,"Flat"],
                        ["pg",IoBedOutline,"PG"],
                        ["cabin",GiWoodCabin,"Cabins"],
                        ["shops",SiHomeassistantcommunitystore,"Shops"]
                    ].map(([key,Icon,label])=>(
                        <div
                            key={key}
                            onClick={()=>handleCategory(key)}
                            className={`flex flex-col items-center min-w-[70px] pb-2 cursor-pointer transition
                            ${cate===key
                                ? "text-red-500 border-b-2 border-red-500 scale-105"
                                : "text-gray-600 hover:text-black"}`}
                        >
                            <Icon className='text-[26px]'/>
                            <span className='text-[13px]'>{label}</span>
                        </div>
                    ))}

                </div>
            </div>

            {/* SEARCH RESULT POPUP */}
            {searchData?.length>0 &&
            <div className='absolute top-[95px] w-full flex justify-center'>
                <div className='w-[700px] max-h-[350px] overflow-auto bg-white shadow-2xl rounded-2xl border p-2'>
                    {searchData.map((search)=>(
                        <div key={search._id}
                        className='p-3 hover:bg-gray-100 rounded-lg cursor-pointer'
                        onClick={()=>handleClick(search._id)}>
                            {search.title} in {search.landMark}, {search.city}
                        </div>
                    ))}
                </div>
            </div>}
        </div>
    )
}

export default Nav
