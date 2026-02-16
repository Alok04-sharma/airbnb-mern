import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";
import { userDataContext } from '../Context/UserContext';
import Card from '../Component/Card';

export default function MyBooking() {
  const navigate = useNavigate()
  const { userData } = useContext(userDataContext)

  const bookings = userData?.booking || []

  return (
    <div className='min-h-screen w-full bg-gradient-to-br from-[#fff5f5] via-[#ffecec] to-[#ffdede] relative overflow-x-hidden'>
      {/* top blur decor */}
      <div className='absolute w-[500px] h-[500px] bg-red-300/30 blur-[140px] rounded-full -top-40 -left-40'/>
      <div className='absolute w-[500px] h-[500px] bg-pink-300/30 blur-[140px] rounded-full top-[40%] -right-40'/>

      {/* header */}
      <div className='sticky top-0 z-20 backdrop-blur-md bg-white/70 border-b border-white/40 px-6 py-4 flex items-center gap-4 shadow-sm'>
        <button
          onClick={() => navigate('/')}
          className='w-[45px] h-[45px] bg-red-500 hover:bg-red-600 active:scale-95 transition rounded-full flex items-center justify-center shadow-md'>
          <FaArrowLeftLong className='text-white text-xl'/>
        </button>

        <div className='flex flex-col'>
          <h1 className='text-2xl md:text-3xl font-bold text-gray-800 tracking-wide'>My Bookings</h1>
          <p className='text-sm text-gray-500'>{bookings.length} reservations</p>
        </div>
      </div>

      {/* content */}
      <div className='max-w-[1400px] mx-auto px-5 py-10'>

        {bookings.length === 0 ? (
          <div className='w-full flex flex-col items-center justify-center mt-24 gap-6 text-center'>
            <div className='text-7xl'>🏠</div>
            <h2 className='text-3xl font-semibold text-gray-700'>No bookings yet</h2>
            <p className='text-gray-500 max-w-md'>Looks like you haven't reserved any stays. Start exploring and book your next trip.</p>
            <button
              onClick={() => navigate('/')}
              className='px-8 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl shadow-md transition active:scale-95'>
              Explore Places
            </button>
          </div>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {bookings.map((list) => (
              <div key={list._id} className='transform hover:scale-[1.02] transition duration-300'>
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
        )}
      </div>
    </div>
  )
}
