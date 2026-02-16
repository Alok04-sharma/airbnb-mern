import React, { useContext, useState, useRef, useEffect } from 'react'
import { userDataContext } from '../Context/UserContext'
import { listingDataContext } from '../Context/ListingContext'
import { useNavigate } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { FcCancel } from "react-icons/fc";
import { bookingDataContext } from '../Context/BookingContext';

function Card({ title, landMark, image1, image2, image3, rent, city, id, ratings, isBooked, host }) {

    let navigate = useNavigate()
    let { userData } = useContext(userDataContext)
    let { handleViewCard } = useContext(listingDataContext)
    let [popUp, setPopUp] = useState(false)
    let { cancelBooking } = useContext(bookingDataContext)

    // 🔥 slider refs
    const sliderRef = useRef(null)
    const intervalRef = useRef(null)

    const handleClick = () => {
        if (userData) {
            handleViewCard(id)
        }
        else {
            navigate("/login")
        }
    }

    // 🔥 auto sliding images
    useEffect(() => {
        const slider = sliderRef.current
        if (!slider) return

        let index = 0
        const total = 3

        const startSlider = () => {
            intervalRef.current = setInterval(() => {
                index = (index + 1) % total
                slider.scrollTo({
                    left: slider.clientWidth * index,
                    behavior: "smooth"
                })
            }, 1500)
        }

        const stopSlider = () => clearInterval(intervalRef.current)

        startSlider()
        slider.addEventListener("mouseenter", stopSlider)
        slider.addEventListener("mouseleave", startSlider)

        return () => {
            stopSlider()
            slider.removeEventListener("mouseenter", stopSlider)
            slider.removeEventListener("mouseleave", startSlider)
        }
    }, [])

    return (
        <div className='w-[330px] max-w-[85%] h-[460px] flex items-start justify-start flex-col rounded-xl cursor-pointer relative z-[10] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-md border border-white/40'
            onClick={() => !isBooked ? handleClick() : null}>

            {isBooked && <div className='text-[green] bg-white/90 rounded-lg absolute flex items-center justify-center right-2 top-2 gap-[5px] px-[8px] py-[4px] shadow-md'>
                <GiConfirmed className='w-[18px] h-[18px] text-[green]' />Booked
            </div>}

            {isBooked && host == userData?._id &&
                <div className='text-[red] bg-white/90 rounded-lg absolute flex items-center justify-center right-2 top-[48px] gap-[5px] px-[8px] py-[4px] shadow-md hover:scale-105 transition'
                    onClick={() => setPopUp(true)}>
                    <FcCancel className='w-[18px] h-[18px]' />Cancel
                </div>}

            {popUp &&
                <div className='w-[300px] h-[110px] bg-white/95 backdrop-blur-md absolute top-[110px] left-[13px] rounded-xl shadow-xl border'>
                    <div className='w-full h-1/2 text-[#2e2d2d] flex items-center justify-center text-[18px] font-semibold'>
                        Cancel this booking?
                    </div>
                    <div className='w-full h-1/2 flex items-center justify-center gap-[10px]'>
                        <button className='px-[18px] py-[4px] bg-red-500 text-white rounded-lg hover:bg-red-600'
                            onClick={() => { cancelBooking(id); setPopUp(false) }}>Yes</button>
                        <button className='px-[18px] py-[4px] bg-gray-300 rounded-lg hover:bg-gray-400'
                            onClick={() => setPopUp(false)}>No</button>
                    </div>
                </div>
            }

            {/* IMAGE SLIDER */}
            <div
                ref={sliderRef}
                className='w-full h-[67%] rounded-t-xl overflow-x-auto flex snap-x snap-mandatory scroll-smooth no-scrollbar'
            >
                <img src={image1} alt="" className='w-full flex-shrink-0 snap-start object-cover' />
                <img src={image2} alt="" className='w-full flex-shrink-0 snap-start object-cover' />
                <img src={image3} alt="" className='w-full flex-shrink-0 snap-start object-cover' />
            </div>

            {/* DETAILS */}
            <div className='w-full h-[33%] px-[14px] py-[14px] flex flex-col gap-[4px]'>

                <div className='flex items-center justify-between text-[16px] font-semibold'>
                    <span className='w-[75%] text-ellipsis overflow-hidden text-nowrap text-[#3d2f2f]'>
                        In {landMark.toUpperCase()}, {city.toUpperCase()}
                    </span>
                    <span className='flex items-center gap-[4px] text-[15px]'>
                        <FaStar className='text-rose-500' /> {ratings}
                    </span>
                </div>

                <span className='text-[14px] w-[90%] text-ellipsis overflow-hidden text-nowrap text-gray-600'>
                    {title.toUpperCase()}
                </span>

                <span className='text-[17px] font-bold text-rose-600 mt-[6px]'>
                    ₹{rent}/day
                </span>
            </div>

        </div>
    )
}

export default Card
