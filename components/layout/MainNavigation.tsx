//import classes from './MainNavigation.module.css';
'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
function MainNavigation() {
  
  const[usernew,setusernew]=useState('');
  useEffect(()=>{
    const items = JSON.parse(localStorage.getItem('items'));
    setusernew(items.username);

  },[])

  return (
  //   width: 100%;
  // height: 5rem;
  // display: flex;
  // align-items: center;
  // justify-content: space-between;
  // background-color: #77002e;
  // padding: 0 10%;
    <header className="flex w-full	h-20	items-center mt-14 ">
      <div className="ml-32" >
        <img src="airplane.png" className='h-[100px]  pl-[12px]' alt="" />
      </div>
      <nav>
        <ul className="flex items-center ml-[300px] gap-8 justify-between  p-4	">
          <li className="text-xl text-black-600 font-bold underline" ><Link href='/Home'>Home</Link></li>
          <li className="text-xl text-black-600 font-bold">Community</li>
          <li className="text-xl text-black-600 font-bold">About Us</li>
          <div className=' flex flex-row gap-4 justify-left ml-[350px]'>
          <li><h1 className='text-white text-lg border-2 rounded-full px-2 bg-gray-400'>{usernew}</h1></li>
          <li><Link className=" text-lg text-black-600 font-bold shadow-md px-4 py-2 bg-blue-500 text-white rounded-lg" href='/Login'>Login</Link></li>
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
