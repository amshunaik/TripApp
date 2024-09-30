// components/Popup.js
import React from 'react';
//Details={firstTraveler} Traveler={noOfTrav} TotalPrice={withoutDis-Dis} PerTrip={Selectedprice}
const Popup = ({ Details, Traveler, TotalPrice, PerTrip,isVisible, onClose }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed top-0 opacity-90 left-0 w-full h-full bg-zinc-300 flex justify-center items-center z-50">
            <div className="bg-blue-200 p-4 rounded-xl align-center shadow-md">
                <h1 className="text-center text-3xl font-semibold">Trip Info</h1>

                <div className='flex flex-col gap-2 mt-8 '>
                    <h1 className='text-blue-500 text-xl  font-semibold '>Customer Details </h1>
                    <div className='flex flex-row '>
                    <h1 className='absolute text-lg font-semibold'>Customer's Name </h1>
                    <h2 className='relative text-base font-normal ml-[220px]'>{Details.name}</h2>
                    </div>
                    <div className='flex flex-row '>
                    <h1 className='absolute text-lg font-semibold'>Age </h1>
                    <h2 className='relative text-base font-normal ml-[220px]'>{Details.age}</h2>
                    </div>
                    <div className='flex flex-row '>
                    <h1 className='absolute text-lg font-semibold'>Contact No. </h1>
                    <h2 className='relative text-base font-normal ml-[220px]'>{Details.contact}</h2>
                    </div>
                    <div className='flex flex-row '>
                    <h1 className='absolute text-lg font-semibold'>Email Id </h1>
                    <h2 className='relative text-base font-normal ml-[220px]'>{Details.email}</h2>
                    </div>

                </div>
                <div className='flex flex-col gap-4 mt-8'>
                    <h1 className='text-blue-500 text-xl  font-semibold '>Trip Details</h1>
                    <div className='flex flex-row '>
                    <h1 className='absolute text-lg font-semibold'>Total person travelling </h1>
                    <h2 className='relative text-base font-normal ml-[220px]'>{Traveler}</h2>
                    </div>
                    <div className='flex flex-row '>
                    <h1 className='absolute text-lg font-semibold'>Trip price per person </h1>
                    <h2 className='relative text-base font-normal ml-[220px]'>{PerTrip}</h2>
                    </div>
                    <div className='flex flex-row '>
                    <h1 className='absolute text-lg font-semibold'>Total trip price </h1>
                    <h2 className='relative text-base font-normal ml-[220px]'>{TotalPrice}</h2>
                    </div>
                </div>
                
                <button onClick={onClose} className="bg-blue-800 rounded-3xl text-lg text-white px-2 py-4 w-[100px] text-center ml-[100px] mt-12">Close</button>
            </div>
        </div>
    );
};

// const popupContentStyle = {
//     background: 'white',
//     padding: '20px',
//     borderRadius: '5px',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
//     textAlign: 'center',
// };
// const popupOverlayStyle = {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
// };


export default Popup;
