//import classes from './MainNavigation.module.css';
'use client'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
function MainNavigation() {
  const [user,setuser]=useState({})
  
  const[usernew,setusernew]=useState('');
  const [userid,setuserid]=useState('');

  const router=useRouter();

  const handleMapping=()=>{
    router.push("./");
  }
 
  useEffect(()=>{

    const items = JSON.parse(localStorage.getItem('items'));
    if(items){
        setusernew(items.username);
        setuser(items);
        setuserid(items._id);
    }
  },[])

  return (
 
    <header className=" top-0 flex w-full	h-20	items-center pt-2 bg-blue-200 mb-[200px]fixed  ">
      <div className="ml-12" >
        <img src="airplane.png" className='h-[90px]  pl-[12px]' alt="" />
      </div>
      <nav>
        <ul className="flex items-center ml-[300px] gap-12 justify-between  p-4	">
          <li className="text-base text-black-600 font-bold underline" ><Link href='/Home'>Home</Link></li>
          <li className="text-base text-black-600 font-bold"> <Link href="/TripDetail" onClick={handleMapping}>Map your trip</Link></li>

          <li className="text-base text-black-600 font-bold">Community</li>
          <li className="text-base text-black-600 font-bold">About Us</li>
          
          <div className=' flex flex-row gap-4 justify-center ml-[250px]'>
          <li>{usernew.length==0?<h1> </h1>:<h1 className='text-white text-xl border-2 rounded-full px-2 bg-gray-400'>{usernew[0]}</h1>}</li>
          <li>

</li>
          <li><Link className=" text-base text-black-600 font-bold shadow-md px-4 py-2 bg-blue-500 text-white rounded-lg" href='/Login'>Login</Link></li>
          </div>
          {/* <li>
            <Link href='/'>All Meetups</Link>
          </li>
          <li>
            <Link href='/NewMeet'>Add New Meetup</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
