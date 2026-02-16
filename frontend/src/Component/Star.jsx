import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";

function Star({ starValue = 5, onRate }) {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    return (
        <div className='flex gap-1 select-none'>
            {
                [...Array(starValue)].map((_, index) => {

                    const value = index + 1
                    const isFilled = value <= (hover || rating)

                    return (
                        <span
                            key={value}
                            onClick={() => {
                                setRating(value)
                                onRate && onRate(value)
                            }}
                            onMouseEnter={() => setHover(value)}
                            onMouseLeave={() => setHover(0)}
                        >
                            <FaStar
                                className={`cursor-pointer text-2xl transition-all duration-150 
                                ${isFilled ? "text-yellow-400 scale-110" : "text-gray-300 hover:text-yellow-300"}`}
                            />
                        </span>
                    )
                })
            }
        </div>
    )
}

export default Star
