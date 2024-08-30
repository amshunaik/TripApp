"use client"
import MeetupDetail from "@/components/meetups/MeetupDetail"
import { useState , useEffect} from "react"
import dum from '../Data'


const Mealfine=({params})=>{
    var dataset;
    var selectdata
    const [selected,setselected]=useState([]);
    useEffect(()=>{
        if(params.meetup){
        var id1=params.meetup;
         selectdata=dum.filter((trip) => trip.id==id1);

        dataset=selectdata
        ///setTimeout(() => {
            setselected(selectdata);
            
     
        //
        
     
        }
    
      },[params.meetup])
      console.log("jj" ,selected)
    return(
        <div>
           
           
                {selected.length==0?<h1>Loading....</h1>: 
                <MeetupDetail   key={selected[0].id}
               id={selected[0].id}
               title={selected[0].title}
               image={selected[0].image}
               traveler={selected[0].traveller}
               date={selected[0].date}
               des={selected[0].des}
               days={selected[0].days}
               cost={selected[0].cost}
               location={selected[0].location}/>}
         
           
           
     
        </div>
        
    )

}
export default Mealfine