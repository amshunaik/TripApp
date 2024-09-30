
"use client"
import { useEffect, useState }  from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import AddedTrav from "./AddedTrav";
import Popup from "./Popup";
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
const MeetupDetail:React.FC<MeetupItemProps> = (props) => {
  // popup open or close
  const [isopen,setIsopen]=useState(false)

  // Trip detail
  const [val,setval]=useState(null) // a html code
  const [Selectedprice, setSelectedprice] = useState("0");// per person trip value
  const [noOfTrav,setnoOfTrav]=useState(1); // no of person travelling
  const [Dis,setDis]=useState(0); // Discount added
  const [withoutDis,setwithoutDis]=useState(0)//(Selectedprice*noOfTrav);

    // State to hold the first traveler's details
    const [firstTraveler, setFirstTraveler] = useState({
      name: '',
      age: '',
      contact: '',
      email: '',
    });
  
    // Handle change function to update traveler details
    const handleChange = (field:string, value:string) => {
      setFirstTraveler((prevDetails) => ({
        ...prevDetails,
        [field]: value,
      }));
    };
  
   
  // UseEffect hook to update total price
  useEffect(()=>{
    let cost=Number(Selectedprice.substring(4));
    let notrav=noOfTrav;
    let r=cost*noOfTrav;
    console.log(r)
    setwithoutDis(r)

  },[Selectedprice,noOfTrav])

  // function to add friend to trip
  const AddTrav=()=>{
    setnoOfTrav((prev)=>prev+1);
  }
  // function to remove friend from trip
  const RemoveTrav=()=>{
    if(noOfTrav>0){
    setnoOfTrav((prev)=>prev-1);
    }
  }

  // Function to store the start point of the trip by the customer
  const handleOptionClick = (city:string,  price:string, date:string) => {

    setSelectedprice(price); // Set the selected option label
    let f=<div className="flex flex-col gap-0 ">
       <h1 className=" text-[14px] font-medium ">Start Point : {city} - {price}</h1>
       <p className=" text-sm font-normal  mt-10px text-sm">{date}</p>
    </div>
    // val to store html option detial choosen
    setval(f);
    
    setIsopen(false); // Close the dropdown
  };

  // start point of trip details
  const options = [
    { value: 'Goa', label: 'INR 135', date:'16Dec 09:00AM' },
    { value: 'Pune', label: 'INR 135', date:'16Dec 09:00AM'},
    { value: 'Jaipur', label: 'INR 8350', date:'16Dec 09:00AM' },
    { value: 'Delhi', label: 'INR 135', date:'16Dec 09:00AM' },
    { value: 'Chennai', label: 'INR 135', date:'16Dec 09:00AM' },
    { value: 'Lucknow', label: 'INR 135' , date:'16Dec 09:00AM'},
  ];


  // Pop up element 
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [butClick,setbutClick]=useState(false);
  // All the customer and travellers detila not filled or the staring point not choosen then it give a alert message
  const handleButtonClick = () => {
  
  
    if(val==null){
      alert("Choose a starting Point");
      return;
    }
    if(selectedPayment.razorpay==false&&selectedPayment.phonepe==false||selectedPayment.razorpay==true&&selectedPayment.phonepe==true){
      alert("Select one Payment mode");
      return;
    }
    if(firstTraveler.name==''||firstTraveler.age==''|| firstTraveler.contact==''||firstTraveler.email==''){
      alert("Fill your Details ");
      return;
    }
    setbutClick(true);
    console.log(firstTraveler); // Store or process the details as needed
    // Open the popup page
    setIsPopupVisible(true);
    
  };
  // close the popup page
    const handleClosePopup = () => {
        setIsPopupVisible(false);
        firstTraveler.name='';
        firstTraveler.email='';
        firstTraveler.contact='';
        firstTraveler.age='';
        setnoOfTrav(1);
        setval(null);
        setSelectedprice("0");
        setwithoutDis(0);
        
        
        setbutClick(false)
    };
  // Handeling payment 
 
    // State to track which checkbox is selected
    const [selectedPayment, setSelectedPayment] = useState({
      razorpay: false,
      phonepe: false,
    });
    const handleChange2 = (event:React.ChangeEvent<HTMLInputElement>) => {
  
      const { name, checked } = event.target;
      setSelectedPayment((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    };

  return (
    <div className="flex flex-row gap-4 mx-[146px]">
    <div className=" flex flex-col gap-3">
   
   
    <div className="flex flex-row gap-2 shadow-md  mt-16 mb-20 w-[720px] h-[240px]" >
      <div >
        <img src={props.image} alt={props.title} className="h-[240px] w-[280px] p-4 absolute" />
      </div>
      <div className="flex flex-col gap-2 mt-4 relative ml-72">
        <h3 className="text-xl font-semibold">{props.title}</h3>
        <div className="flex flex-row gap-32">
        <h3 className="text-xs font-normal">Start Date :{props.date}</h3>
        <h3 className="text-xs font-normal">{props.traveler}</h3>
      </div>
        <p className="text-sm font-normal w-[263px]">{props.des}</p>
        <p className="text-sm text-blue-500 mt-8">Best Price Guarantee</p>
      </div>
      <div>
          <h3 className="items-center justify-center text-center mt-24 text-xs font-normal">{props.days[0]} Days {props.days[3] } Nights</h3>
      </div>
      
    </div >



   <div className="flex flex-col">
    <div className="flex flex-row">
      <div className="flex flex-row w-[470px] h-[100px] gap-0 shadow-md mb-8">
        <div className=" flex flex-col items-center w-[280px] " >
          <button onClick={()=>setIsopen((prev)=>!prev)} className=" absolute p-4 flex flex-row gap-2 items-center justify-center w-full rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white">
           { val?val:<h1>Choose Starting Point</h1>}
            {
              !isopen?(
                <AiOutlineCaretDown className="h-8 relative"/>
              ):
              <AiOutlineCaretUp className="h-8"/>
            }
            </button>
            {isopen&&
            <div className="  flex flex-col bg-white items-start w-[590px] ml-[240px] mt-[120px] z-20">
              {options.map((option) => (
                <div  onClick={() => handleOptionClick(option.value,option.label,option.date)} className=" flex flex-row hover:bg-blue-300 px-2 py-1 border-b-[1px]" >
                  <h1 className="absolute ml-[10px]">{option.value}</h1>
                  <h1 className=" absolute ml-[200px]">{option.label}</h1>
                  <h1 className=" relative ml-[400px]  ">{option.date}</h1>
                  </div>
              ))}
          
            </div>
            }
             
        </div>
        <div  className="flex flex-col ml-0 w-42 mt-[15px]">
          <h1 className="text-sm">End Point : Rishikesh</h1>
          <p className="text-sm">December 21st 5:00AM</p>
        </div>
      </div>
      <div className="ml-12 flex flex-row gap-4 mt-8">
        
      <h1 >#8394617</h1>  
      <h1 >{props.location}</h1>
      </div>
      </div>

      <div className="flex flex-col gap-12 z-10 mb-32">
        <h1 className="text-lg font-semibold">Group Size: 20 Travellers</h1>
        <div className="flex flex-row items-center">
        <p className=" absolute text-base font-medium">Number of traveler </p>
        <img className="absolute ml-[150px]" src="MinusCircle.png" alt="" onClick={RemoveTrav} />
          <p className="absolute ml-[195px]">{noOfTrav}</p>
          <img className="absolute ml-[220px]"src=" PlusCircle.png" alt="" onClick={AddTrav} />

         
        </div>
        <form action="" className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold">First Traveller</h2>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="">Name </label>
            <input
              type="text"
              className="border-b-[1px] border-black w-[200px]"
              value={firstTraveler.name}
              onChange={(e) => handleChange('name', e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Age </label>
            <input
              type="number"
              className="border-b-[1px] border-black w-[200px]"
              value={firstTraveler.age}
              onChange={(e) => handleChange('age', e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="">Contact No. </label>
            <input
              type="tel"
              className="border-b-[1px] border-black w-[200px]"
              value={firstTraveler.contact}
              onChange={(e) => handleChange('contact', e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Email ID </label>
            <input
              type="email"
              className="border-b-[1px] border-black w-[200px]"
              value={firstTraveler.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
          </div>
          </div>
          <AddedTrav Trav={noOfTrav} butClick={butClick}/>
          
          
        </form>
      </div>
    </div>

    </div>
    <div className="flex flex-col w-96  ml-24 mt-[50px]">
      <div className="flex flex-col gap-4 ml-20">
        <div >
         
          
        <img src="user.png" alt="" className="ml-8 h-[160px]" />
        </div>
       
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl mt-4 font-semibold text-center">Message from CEO</h1>
        <p className="text-base font-normal text-center">Nunc justo eros, vehicula vel vehicula ut, lacinia a erat. Nam fringilla eros... Nullam aliquam interdumNunc
           justo eros, vehicula vel vehicula ut, lacinia a erat. Nam fringilla eros...
            Nullam aliquam interdumNunc justo eros, vehicula vel 
            vehicula ut, lacinia a erat. Nam fringilla eros...</p>

      </div>

      
      <div className="mt-12 shadow-md p-4 flex flex-col gap-2 mb-24 ">
        <h1 className="text-lg font-semibold ">Payment details</h1>
        <div >
          <h1 className="absolute font-normal text-base">Trip price per person</h1>
          <h2 className="relative ml-64 text-base font-semibold"> {Selectedprice}</h2>

        </div>
        <div>
          <h1 className="absolute font-normal text-base">Total Person in booking</h1>
          <h2 className="relative ml-64 text-base font-semibold">{noOfTrav}</h2>
          
        </div>
        <div>
          <h1 className="absolute font-normal text-base">Total Discount</h1>
          <h2 className="relative ml-64 text-base font-semibold">₹ {Dis}</h2>
          
        </div>
        <div >
          <h1 className="absolute font-normal text-base">Total price</h1>
          <h2 className="relative ml-64 text-base font-semibold"> ₹ {withoutDis} </h2>
          
        </div>
        <div>
          <h1 className="text-lg font-semibold">Payment Via</h1>
          <div className="flex flex-col">
          <div className="flex flex-row gap-8 mt-2">
          <input
            type="checkbox"
            name="razorpay"
            checked={selectedPayment.razorpay}
            onChange={handleChange2}
          />
          <label>Razorpay</label>
          </div>
          <div className="flex flex-row gap-8">
          <input
            type="checkbox"
            name="phonepe"
            checked={selectedPayment.phonepe}
            onChange={handleChange2}
          />
          <label>Phonepe</label>

          </div>


           

          </div>
        </div>
        <hr />

        <div  >
          <h1 className="absolute text-base font-semibold ">Grand Total</h1>
          <h1  className="relative ml-64 text-base font-semibold">₹ {withoutDis-Dis}</h1>
        </div>

        <button className="bg-blue-700 text-base text-white py-2 px-4 rounded-full w-32" onClick={handleButtonClick}>Book Now</button>
        <Popup Details={firstTraveler} Traveler={noOfTrav} TotalPrice={withoutDis-Dis} PerTrip={Selectedprice}
         isVisible={isPopupVisible} onClose={handleClosePopup} />

        <p className="text-sm font-normal text-zinc-700">
        By Clicking on Book Now you confirm that all the
         details provided by you are
         correct, and accepting our TnC & Cancellation Policy.
        </p>
      </div>
    </div>

    </div>
  )
}

export default MeetupDetail
