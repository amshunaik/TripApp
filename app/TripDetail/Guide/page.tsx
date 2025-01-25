import React from 'react'
import guidedetail from './guidedetail.json';

const page = () => {
  return (
    <div className=' px-12 mb-12'>
        <h1 className=' text-center text-blue-700 font-bold text-xl my-12'>Guide list</h1>
        <div className='flex flex-row gap-8'>
        {guidedetail.guidedetail.map((guide, index) => (
        <div className='flex flex-col border-2 rounder-xl w-[350px]  gap-2 px-2 py-2' key={index}>
          <img src={guide.img} className='w-[350px] h-[300px]'alt={guide.name} />
          <div className=''>
          <h2 className=' absolute text-sm text-black font-medium text-zinc-700'>{guide.name} / {guide.age} yrs</h2>
          
          <p className=' relative float-right text-sm  text-black font-medium text-zinc-700'>YOE : {guide.experience} </p>
            </div>
          <div>
          <div className=' relative border-2 mb-2 text-sm font-normal text-zinc-700'>
          <p>Guiding Locations :</p>  
          <p>{guide.placesExpertGuideFor.map((place, idx) => (
                <span key={idx} className="bg-blue-200 font-medium  inline rounded-xl px-2 w-[5px] ml-[5px]">
                  {place}
                </span>
              ))}
              </p>
          </div>
          <div className='text-sm border-2 font-normal text-zinc-700'>
          <p>Fluent In: </p>

          {guide.languagesSpoken.map((place, idx) => (
                <span key={idx}  className="bg-blue-200 font-medium  inline  rounded-xl px-2 w-[5px] ml-[5px]">
                  {place}
                </span>
              ))}
          </div>
          
          </div>
          
        </div>
      ))}
      </div>

        </div>
        

  )
}

export default page
