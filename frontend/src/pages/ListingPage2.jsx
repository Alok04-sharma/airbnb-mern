import React, { useContext } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { GiFamilyHouse } from "react-icons/gi";
import { MdBedroomParent } from "react-icons/md";
import { MdOutlinePool } from "react-icons/md";
import { GiWoodCabin } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoBedOutline } from "react-icons/io5";
import { FaTreeCity } from "react-icons/fa6";
import { BiBuildingHouse } from "react-icons/bi";
import { listingDataContext } from '../Context/ListingContext';

function ListingPage2() {

    let navigate = useNavigate()
    let {category,setCategory} = useContext(listingDataContext)

    const cardStyle = (type) =>
    `group w-[160px] md:w-[185px] h-[120px] flex justify-center items-center flex-col cursor-pointer 
    rounded-2xl border backdrop-blur-md transition-all duration-300 relative overflow-hidden
    ${category === type
      ? "bg-gradient-to-br from-rose-500 to-orange-400 text-white border-transparent shadow-2xl scale-105"
      : "bg-white/70 hover:bg-white border-gray-200 hover:border-orange-300 hover:shadow-xl text-gray-700"
    }`;

  return (
    <div className='w-full min-h-screen flex items-center justify-center relative overflow-hidden py-20
    bg-gradient-to-br from-rose-100 via-orange-50 to-yellow-100'>

        {/* decorative blobs */}
        <div className="absolute w-[500px] h-[500px] bg-rose-300 opacity-20 blur-3xl rounded-full top-[-150px] left-[-150px]"></div>
        <div className="absolute w-[500px] h-[500px] bg-orange-300 opacity-20 blur-3xl rounded-full bottom-[-150px] right-[-150px]"></div>

        {/* Back */}
        <div className='w-[48px] h-[48px] bg-white/80 backdrop-blur border shadow-lg hover:scale-105 transition cursor-pointer absolute top-6 left-6 rounded-full flex items-center justify-center'
             onClick={()=>navigate("/listingpage1")}>
          <FaArrowLeftLong className='w-[20px] h-[20px] text-gray-700' />
        </div>

        {/* Header */}
        <div className='px-7 h-[46px] text-[17px] bg-gradient-to-r from-rose-500 to-orange-400 text-white flex items-center justify-center rounded-full absolute top-6 right-6 shadow-lg'>
          Set Your Category
        </div>

        <div className='max-w-[950px] w-full flex items-center justify-start flex-col gap-10 mt-10 relative z-10'>

            <h1 className='text-[22px] md:text-[32px] font-semibold text-gray-800 text-center px-4'>
              Which of these best describes your place?
            </h1>

            {/* Cards */}
            <div className='w-full flex flex-wrap items-center justify-center gap-5 md:gap-7 px-4'>

                <div className={cardStyle("villa")} onClick={()=>setCategory("villa")}>
                    <GiFamilyHouse className='w-[34px] h-[34px] group-hover:scale-110 transition' />
                    <h3 className='mt-2 font-medium'>Villa</h3>
                </div>

                <div className={cardStyle("farmHouse")} onClick={()=>setCategory("farmHouse")}>
                    <FaTreeCity className='w-[34px] h-[34px] group-hover:scale-110 transition' />
                    <h3 className='mt-2 font-medium'>Farm House</h3>
                </div>

                <div className={cardStyle("poolHouse")} onClick={()=>setCategory("poolHouse")}>
                    <MdOutlinePool className='w-[34px] h-[34px] group-hover:scale-110 transition' />
                    <h3 className='mt-2 font-medium'>Pool House</h3>
                </div>

                <div className={cardStyle("rooms")} onClick={()=>setCategory("rooms")}>
                    <MdBedroomParent className='w-[34px] h-[34px] group-hover:scale-110 transition' />
                    <h3 className='mt-2 font-medium'>Rooms</h3>
                </div>

                <div className={cardStyle("flat")} onClick={()=>setCategory("flat")}>
                    <BiBuildingHouse className='w-[34px] h-[34px] group-hover:scale-110 transition' />
                    <h3 className='mt-2 font-medium'>Flat</h3>
                </div>

                <div className={cardStyle("pg")} onClick={()=>setCategory("pg")}>
                    <IoBedOutline className='w-[34px] h-[34px] group-hover:scale-110 transition' />
                    <h3 className='mt-2 font-medium'>PG</h3>
                </div>

                <div className={cardStyle("cabin")} onClick={()=>setCategory("cabin")}>
                    <GiWoodCabin className='w-[34px] h-[34px] group-hover:scale-110 transition' />
                    <h3 className='mt-2 font-medium'>Cabin</h3>
                </div>

                <div className={cardStyle("shops")} onClick={()=>setCategory("shops")}>
                    <SiHomeassistantcommunitystore className='w-[34px] h-[34px] group-hover:scale-110 transition' />
                    <h3 className='mt-2 font-medium'>Shops</h3>
                </div>

            </div>

            {/* Next Button */}
            <div className="w-full flex justify-center mt-6">
                <button
                className={`px-10 md:px-16 py-3 text-[17px] rounded-full font-semibold shadow-lg transition-all duration-300
                ${category
                  ? "bg-gradient-to-r from-rose-500 to-orange-400 text-white hover:scale-105 hover:shadow-2xl"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                onClick={()=>navigate("/listingpage3")}
                disabled={!category}
                >
                Next
                </button>
            </div>

        </div>
    </div>
  )
}

export default ListingPage2
