import React, { useContext } from 'react'
import Nav from '../Component/Nav'
import Card from '../Component/Card';
import { listingDataContext } from '../Context/ListingContext';

function Home() {

  let { listingData, setListingData, newListData } = useContext(listingDataContext)

  return (
    <div className="min-h-screen w-full bg-[#f7f7f7]">

      {/* NAV */}
      <Nav />

      {/* page container */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 pt-[170px] pb-20">

        {/* title section */}
        <div className="mb-10">
          <h1 className="text-[28px] md:text-[32px] font-semibold text-[#222] tracking-tight">
            Explore nearby stays
          </h1>
          <p className="text-[15px] text-[#6a6a6a] mt-1">
            Handpicked homes for your next trip
          </p>
        </div>

        {/* cards grid */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-x-7
          gap-y-10
        ">
          {newListData.map((list) => (
            <div
              key={list._id}
              className="
                transition-all duration-300
                hover:-translate-y-[4px]
                hover:scale-[1.01]
              "
            >
              <Card
                title={list.title}
                landMark={list.landMark}
                city={list.city}
                image1={list.image1}
                image2={list.image2}
                image3={list.image3}
                rent={list.rent}
                id={list._id}
                ratings={list.ratings}
                isBooked={list.isBooked}
                host={list.host}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Home
