"use client"
import Card from '../ui/Card';
import { useParams } from 'next/navigation';

//import { useRouter } from 'next/navigation'; // Make sure this is imported at the top of the file
import { usePathname , useRouter} from 'next/navigation'
import React from 'react';

interface MeetupItemProps {
  id: string;
  title: string;
  image:string;
  traveler:string;
  date:string;
  des:string;
  days:string;
  cost:string
         
  location: string;
}
const MeetupItem:React.FC<MeetupItemProps>=(props)=> {
  const router = useRouter();
  //const param=useParams();
  const pathname = usePathname()
  // const SHowdet=()=>{
    
  //   console.log(pathname);
    
  
  // }
  const Pop=()=>{
    console.log(props.id);
    router.push(`/${props.id}`);

  }
  return (
    <li onClick={Pop} className="flex flex-col  gap-4 w-[310px] h-[400px] shadow-md" >
      <Card >
        <div >
          <img src={props.image} alt={props.title} className="h-[250px] w-[435px]"/>
        </div>
        <div className="mt-2" >
          <h3 className="text-xs font-normal text-zinc-700">{props.title}</h3>
          <p className="font-medium text-base">{props.des}</p>
        </div>
        <div className="flex flex-row gap-20 mb-2">
          <h3 className="text-xs font-normal">Start Date :{props.date}</h3>
          <h3 className="text-xs font-normal">{props.traveler}</h3>
        </div>
        <hr />
        <div className="flex flex-row gap-40 mt-2 mb-4">
          <h3 className="text-xs font-normal">{props.days}</h3>
          <h3 className="text-xs font-normal"> ₹ {props.cost}</h3>
        </div>
       
      </Card>
    </li>
  );
}

export default MeetupItem;
