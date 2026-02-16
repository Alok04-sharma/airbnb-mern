import React, { useContext } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { listingDataContext } from '../Context/ListingContext';

function ListingPage3() {

    let navigate = useNavigate()

    let {
        title,description,
        frontEndImage1,frontEndImage2,frontEndImage3,
        rent,city,landmark,category,
        handleAddListing,adding
    } = useContext(listingDataContext)

  return (
    <div className='w-full min-h-screen bg-[#f7f7f7] flex justify-center py-16 px-3 relative'>

        {/* Back */}
        <div className='w-[44px] h-[44px] bg-white border hover:shadow-md transition cursor-pointer absolute top-6 left-6 rounded-full flex items-center justify-center'
             onClick={()=>navigate("/listingpage2")}>
          <FaArrowLeftLong className='w-[18px] h-[18px] text-gray-700' />
        </div>

        <div className='w-full max-w-[1100px] flex flex-col gap-6'>

            {/* Location */}
            <h1 className='text-[24px] md:text-[34px] font-semibold text-gray-900'>
                {landmark}, {city}
            </h1>

            {/* Image gallery */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:h-[460px]'>

                <div className='rounded-xl overflow-hidden'>
                    <img src={frontEndImage1} className='w-full h-full object-cover'/>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-1 gap-3'>
                    <div className='rounded-xl overflow-hidden'>
                        <img src={frontEndImage2} className='w-full h-full object-cover'/>
                    </div>
                    <div className='rounded-xl overflow-hidden'>
                        <img src={frontEndImage3} className='w-full h-full object-cover'/>
                    </div>
                </div>

            </div>

            {/* Details card */}
            <div className='bg-white rounded-xl border p-5 md:p-7 flex flex-col gap-5 shadow-sm'>

                <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-3'>

                    <div>
                        <h2 className='text-[20px] md:text-[26px] font-semibold text-gray-900'>
                            {title} · {category}
                        </h2>
                        <p className='text-gray-500 text-[14px] md:text-[16px]'>
                            {landmark}, {city}
                        </p>
                    </div>

                    <div className='text-[22px] md:text-[28px] font-bold text-gray-900'>
                        ₹{rent}
                        <span className='text-gray-500 text-[14px] font-normal'> / day</span>
                    </div>

                </div>

                <div className='text-gray-700 text-[15px] md:text-[17px] leading-relaxed border-t pt-4'>
                    {description}
                </div>

                {/* CTA */}
                <button
                className={`mt-3 w-full md:w-[320px] self-center py-3 rounded-lg text-[17px] font-semibold transition
                ${adding
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-black text-white hover:bg-gray-900"
                }`}
                onClick={handleAddListing}
                disabled={adding}
                >
                {adding ? "Adding..." : "Add Listing"}
                </button>

            </div>

        </div>

    </div>
  )
}

export default ListingPage3
