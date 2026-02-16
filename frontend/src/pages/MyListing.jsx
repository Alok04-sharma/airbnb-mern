import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";
import { userDataContext } from '../Context/UserContext';
import Card from '../Component/Card';

function MyListing() {
    let navigate = useNavigate()
    let {userData}= useContext(userDataContext)

  return (
    <div className='min-h-screen w-full bg-gradient-to-br from-rose-50 via-orange-50 to-amber-100 flex flex-col items-center relative pb-20'>

        {/* Back Button */}
        <div
            className='w-12 h-12 md:w-14 md:h-14 bg-white/80 backdrop-blur-md shadow-lg hover:scale-105 active:scale-95 transition rounded-full flex items-center justify-center absolute top-6 left-5 cursor-pointer border border-white/60'
            onClick={()=>navigate("/")}
        >
            <FaArrowLeftLong className='w-5 h-5 text-rose-500'/>
        </div>

        {/* Heading Section */}
        <div className='mt-20 flex flex-col items-center gap-3 text-center px-4'>
            <h1 className='text-3xl md:text-5xl font-bold bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 bg-clip-text text-transparent tracking-wide'>
                My Listings
            </h1>

            <p className='text-gray-600 text-sm md:text-base max-w-xl'>
                Manage all properties you have published on the platform
            </p>

            <div className='h-[3px] w-24 rounded-full bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400 mt-2'/>
        </div>

        {/* Empty State */}
        {(!userData?.listing || userData.listing.length === 0) && (
            <div className='mt-24 text-center text-gray-500 text-lg'>
                No listings added yet 🏠
            </div>
        )}

        {/* Listings Grid */}
        <div className='w-full max-w-[1400px] px-4 md:px-10 mt-14 grid gap-8
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-3
                        xl:grid-cols-4'>

            {userData?.listing?.map((list)=>(
                <div className='transform transition duration-300 hover:-translate-y-2 hover:scale-[1.02]'>
                    <Card
                        title={list.title}
                        landMark={list.landMark}
                        city={list.city}
                        image1={list.image1}
                        image2={list.image2}
                        image3={list.image3}
                        rent={list.rent}
                        id={list._id}
                        isBooked={list.isBooked}
                        ratings={list.ratings}
                        host={list.host}
                    />
                </div>
            ))}
        </div>

    </div>
  )
}

export default MyListing
