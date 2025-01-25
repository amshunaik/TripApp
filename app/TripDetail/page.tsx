'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

const page = () => {
    const [person,setperson]=useState('');
    const [email,setemail]=useState('');
    const [phone,setphone]=useState('');
    const [size,setsize]=useState(1);
    const [start,setstart]=useState('');
    const [end,setend]=useState('');
    const [selectedOption, setSelectedOption] = useState("Join");
    const [plan,setplan]=useState('');
    const [userid,setuserid]=useState('');

    const router=useRouter();

    useEffect(()=>{
        const items = JSON.parse(localStorage.getItem('items'));
        setuserid(items._id);
    })

    const handleChange = (event) => {
        setSelectedOption(event.target.value); // Update state with the selected value
      };

    const Handledetail= async(e)=>{
        e.preventDefault();
        const tripplan={name:person,email:email,phone:phone,size:size,startdate:start,enddate:end,selectedOption:selectedOption,plan:plan};

        try {
            const response = await fetch(`http://localhost:3005/${userid}/addTrip`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(tripplan),
            });

            if (response.ok) {
                console.log("TripDetail : ",tripplan);
                const result = await response.json();
                alert("Details Submitted");
                if(selectedOption==="Guide"){
                    

                }
                
                router.push(`/TripDetail/${selectedOption}`);
            } else {
                const error = await response.json();
                alert("Some error occurred, can you please re-enter the details");
            }
        } catch (error) {
            //console.log('Fetch error:', error);
            alert('some error occurred, can you please re-enter the details');
        }

        
    }


  return (
    <div className=' flex flex-col w-[600px] gap-4 mx-auto my-12'>

        <div className=' my-4'>
            <h1 className='text-xl text-center text-blue-500 mb-2'>WELCOME TO TRIPTRAV !</h1>
            <h3 className='font-bold text-base text-center'>"Mapping your journey is the first step to travel the world, one adventure at a time."</h3>
            <p>Welcome to your journey of exploration! We're thrilled to assist you in planning the trip of a lifetime. Please fill in the details 
                below and let’s start mapping out your next great adventure.</p>

        </div>
        <form action="" onSubmit={Handledetail} className='flex flex-col w-[600px] gap-4 bg-blue-50 rounded-xl p-4'>
        <div className=' flex flex-col'>
            <label htmlFor="" className='font-medium text-lg '>First Person Name :</label>
            <input value={person} onChange={(e)=>{setperson(e.target.value)}} type="text" className='border-2 py-2 px-1  text-blue-800 capitalize' required />
        </div>
        <div className=' flex flex-col'>
            <label htmlFor="" className='font-medium text-lg '>Email Address :</label>
            <input value={email} onChange={(e)=>{setemail(e.target.value)}} type="email" className='border-2 py-2 px-1  text-blue-800 '   />
        </div>
        <div className=' flex flex-col'>
            <label htmlFor="" className='font-medium text-lg '>Phone Number :</label>
            <input value={phone} onChange={(e)=>{setphone(e.target.value)}} type="tel" className='border-2 py-2 px-1  text-blue-800 capitalize'  required/>
        </div>
       
        <div className=' flex flex-col'>
            <label htmlFor="" className='font-medium text-lg '>Total no of people in group :</label>
            <input value={size} onChange={(e)=>{setsize( Number(e.target.value))}} type="number" min={1} className='border-2 py-2 px-1  text-blue-800 capitalize'   />
        </div>
        <div className='flex flex-row gap-12 justify-between'>
            <div className=' flex flex-col'>
                <label htmlFor="" className='font-medium text-lg '>Start Date :</label>
                <input value={start} onChange={(e)=>{setstart( (e.target.value))}} type="date" min={1} className='border-2 py-2 px-1  text-blue-800  w-[250px]'  required />
            </div>
            <div className=' flex flex-col'>
                <label htmlFor="" className='font-medium text-lg '>End Date :</label>
                <input value={end} onChange={(e)=>{setend( (e.target.value))}} type="date" min={1} className='border-2 py-2 px-1  text-blue-800  w-[250px]'  required />
            </div>
        </div>
        <div className=' flex flex-col'>
            <label htmlFor=""className='font-medium text-lg '>Looking for :</label>
            <select name="options" id="" value={selectedOption} onChange={handleChange} className='border-2 py-2 px-1  text-blue-800  '>
                <option value="Join">Welcoming more individuals to join</option>
                <option value="Guide">Looking for a nice guide</option>
            </select>
        </div>
        <div className=' flex flex-col'>
            <textarea value={plan} onChange={(e)=>{setplan( e.target.value)}}  className='border-2 py-2 px-1  text-blue-800 ' cols={15} rows={10} placeholder="Got any travel plans? Or a place you're thinking about visiting which you want to share ?.....  "/>
        </div>
        <button type='submit' className='bg-black text-white w-auto text-xl rounded-lg p-2 text-center justify-center'>Add Trip</button>
        </form>
      
    </div>
  )
}

export default page
