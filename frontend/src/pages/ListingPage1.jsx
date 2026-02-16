import React, { useContext } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { listingDataContext } from '../Context/ListingContext';

function ListingPage1() {

   let navigate = useNavigate()

   let {
    title,setTitle,
    description,setDescription,
    frontEndImage1,setFrontEndImage1,
    frontEndImage2,setFrontEndImage2,
    frontEndImage3,setFrontEndImage3,
    backEndImage1,setBackEndImage1,
    backEndImage2,setBackEndImage2,
    backEndImage3,setBackEndImage3,
    rent,setRent,
    city,setCity,
    landmark,setLandmark
   } = useContext(listingDataContext)

   const handleImage1 = (e)=>{
        let file = e.target.files[0]
        setBackEndImage1(file)
        setFrontEndImage1(URL.createObjectURL(file))
   }
   const handleImage2 = (e)=>{
        let file = e.target.files[0]
        setBackEndImage2(file)
        setFrontEndImage2(URL.createObjectURL(file))
   }
   const handleImage3 = (e)=>{
        let file = e.target.files[0]
        setBackEndImage3(file)
        setFrontEndImage3(URL.createObjectURL(file))
   }

return (

<div className='min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-yellow-50 py-10 px-4'>

{/* HEADER */}
<div className='max-w-3xl mx-auto flex items-center justify-between mb-6'>
    <button
    onClick={()=>navigate("/")}
    className='w-11 h-11 flex items-center justify-center rounded-full bg-white shadow-md hover:scale-105 transition'
    >
        <FaArrowLeftLong className='w-5 h-5 text-rose-500'/>
    </button>

    <div className='px-6 py-2 rounded-full bg-gradient-to-r from-rose-500 to-orange-400 text-white text-sm font-semibold shadow-lg tracking-wide'>
        Setup your home
    </div>
</div>

{/* FORM CARD */}
<form
onSubmit={(e)=>{e.preventDefault(); navigate("/listingpage2")}}
className='max-w-3xl mx-auto backdrop-blur-md bg-white/80 border border-white/60 rounded-3xl shadow-xl p-6 md:p-8 space-y-6'
>

{/* TITLE */}
<div className='space-y-2'>
<label className='text-sm font-semibold text-gray-700'>Title</label>
<input
type="text"
required
value={title}
onChange={(e)=>setTitle(e.target.value)}
placeholder='2BHK apartment near metro'
className='w-full h-11 px-4 rounded-xl bg-rose-50 border border-rose-200 focus:ring-2 focus:ring-rose-400 outline-none'
/>
</div>

{/* DESCRIPTION */}
<div className='space-y-2'>
<label className='text-sm font-semibold text-gray-700'>Description</label>
<textarea
required
value={description}
onChange={(e)=>setDescription(e.target.value)}
className='w-full h-24 px-4 py-2 rounded-xl bg-orange-50 border border-orange-200 focus:ring-2 focus:ring-orange-400 outline-none resize-none'
/>
</div>

{/* IMAGES */}
<div className='grid md:grid-cols-3 gap-4'>

<div className='p-4 rounded-xl bg-gradient-to-br from-rose-100 to-rose-50 border border-rose-200 space-y-2'>
<label className='text-sm font-medium text-gray-700'>Image 1</label>
<input type="file" required onChange={handleImage1}
className='w-full text-xs file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:bg-rose-500 file:text-white hover:file:bg-rose-600 cursor-pointer'/>
</div>

<div className='p-4 rounded-xl bg-gradient-to-br from-orange-100 to-orange-50 border border-orange-200 space-y-2'>
<label className='text-sm font-medium text-gray-700'>Image 2</label>
<input type="file" required onChange={handleImage2}
className='w-full text-xs file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:bg-orange-500 file:text-white hover:file:bg-orange-600 cursor-pointer'/>
</div>

<div className='p-4 rounded-xl bg-gradient-to-br from-yellow-100 to-yellow-50 border border-yellow-200 space-y-2'>
<label className='text-sm font-medium text-gray-700'>Image 3</label>
<input type="file" required onChange={handleImage3}
className='w-full text-xs file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:bg-yellow-500 file:text-white hover:file:bg-yellow-600 cursor-pointer'/>
</div>

</div>

{/* RENT + CITY */}
<div className='grid md:grid-cols-2 gap-4'>

<div className='space-y-2'>
<label className='text-sm font-semibold text-gray-700'>Rent per day</label>
<input
type="number"
required
value={rent}
onChange={(e)=>setRent(e.target.value)}
placeholder='₹ 1500'
className='w-full h-11 px-4 rounded-xl bg-emerald-50 border border-emerald-200 focus:ring-2 focus:ring-emerald-400 outline-none'
/>
</div>

<div className='space-y-2'>
<label className='text-sm font-semibold text-gray-700'>City</label>
<input
type="text"
required
value={city}
onChange={(e)=>setCity(e.target.value)}
placeholder='Lucknow'
className='w-full h-11 px-4 rounded-xl bg-sky-50 border border-sky-200 focus:ring-2 focus:ring-sky-400 outline-none'
/>
</div>

</div>

{/* LANDMARK */}
<div className='space-y-2'>
<label className='text-sm font-semibold text-gray-700'>Landmark</label>
<input
type="text"
required
value={landmark}
onChange={(e)=>setLandmark(e.target.value)}
className='w-full h-11 px-4 rounded-xl bg-purple-50 border border-purple-200 focus:ring-2 focus:ring-purple-400 outline-none'
/>
</div>

{/* SUBMIT */}
<div className='pt-4'>
<button className='w-full h-12 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white rounded-xl font-semibold tracking-wide shadow-lg transition'>
Continue →
</button>
</div>

</form>
</div>
)
}

export default ListingPage1
