"use client"

import React, { useEffect, useState } from 'react'
//import MeetupList from '@/components/meetups/MeetupList'
import MeetupList from '../../components/meetups/MeetupList'

import dum from '../Data'
import { Suspense } from 'react'
import dt from '../Datainf'
const Homepage = () => {

    const [loaded,setloaded]=useState<dt[]>([])
    const [loc,setloc]=useState<string>(null);
    const [trav,settrav]=useState<string>(null)
    const [date,setdate]=useState<string>(null);
    function printSelectedLocation() {
        const selectElement = document.getElementById('location') as HTMLSelectElement;
        const selectedValue = selectElement.value;
        setloc(selectedValue)
        console.log(selectedValue);
      }
      const printSelectedtraveler=()=>{
          const selectElement = document.getElementById('traveller') as HTMLSelectElement;
        const selectedValue = selectElement.value;
        settrav(selectedValue)
        console.log(trav);
      }
      const printSelectedDate=()=>{
          const selectElement = document.getElementById('date') as HTMLSelectElement;
          const selectedValue = selectElement.value;
          
          setdate(selectedValue);
          console.log(date);
      }
  useEffect(()=>{
    setloaded(dum);
    filterData();
  },[loc,date,trav])
  
  // Function to filter data based on the selected criteria
  const filterData = () => {
    
    let filteredData:dt[] = dum;
    console.log("data : ",filteredData);

    if (loc) {
        console.log(loc)
      filteredData = filteredData.filter(item => item.location === loc);
    }

    if (trav) {
      filteredData = filteredData.filter(item => item.traveller === trav);
    }

    if (date) {
      filteredData = filteredData.filter(item => item.date === date);
    }
    //console.log("after change",filterData)
    setloaded(filteredData);
  };
    

    
    
  return (
    <div className=" justify-center  " >
        <div className="flex flex-row justify-center gap-8 items-center h-[130px] w-[892px] shadow-md  mt-20 ml-[340px] px-[29px]rounded-3xl	">
            <h2 className="text-xs font-semibold">Select any one</h2>
            <div className="p-4">
                <div className="flex flex-row gap-2">
                <img src="Send.png" alt="" />
                <h1 className="text-lg">Select Location</h1>
                </div>
                <select name="" id="location" onChange={printSelectedLocation}>
                    <option value="">Location</option>
                    {dum.map((d)=>
                        
                    <option value={d.location}>{d.location}</option>

                    )}
                </select>
            </div>
            <div className="p-4">
            <div className="flex flex-row gap-2">
            <img src="system-uicons_clock.png" alt="" />
            <h1 className="text-lg">Select Traveller</h1>
            </div>
                <select name="" id="traveller" onChange={printSelectedtraveler}>
                    <option value="">Traveller</option>
                    {dum.map((d)=>
                        
                    <option value={d.traveller}>{d.traveller}</option>

                    )}
                </select>
            </div>
            <div className="p-4">
            <div className="flex flex-row gap-2">
            <img src="system-uicons_calendar-month.png" alt="" />
            <h1 className="text-lg">Select Date</h1>
            </div>
                <select name="" id="date" onChange={printSelectedDate}>
                    <option value="">Date</option>
                    
                    {dum.map((d)=>
                        
                        <option value={d.date}>{d.date}</option>
    
                        )}
                </select>
            </div>
            <img src="Search.png" alt="Search" className="p-6 " />

        </div>
         
       
        <div>
        <Suspense fallback={<p>Fetching data ..........</p>}>
        <MeetupList meetups={loaded}/>
        </Suspense>

        </div>



      
    </div>
  )
}

export default Homepage
