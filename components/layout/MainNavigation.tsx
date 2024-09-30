//import classes from './MainNavigation.module.css';
import Link from 'next/link';
function MainNavigation() {

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
        <img src="airplane.png" className='h-[100px]  pl-[125px]' alt="" />
      </div>
      <nav>
        <ul className="flex  items-center mr-auto ml-[300px] gap-8 justify-between  p-4	">
          <li className="text-xl text-black-600 font-bold underline" ><Link href='/Home'>Home</Link></li>
          <li className="text-xl text-black-600 font-bold">Community</li>
          <li className="text-xl text-black-600 font-bold">About Us</li>
          <li><button className="text-xl text-black-600 font-bold shadow-md px-[64px] py-[18px] rounded-full ">Login</button></li>
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
