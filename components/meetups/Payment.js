
// "use client"
// import { useEffect, useState }  from "react";

// import Popup from "./Popup";

// const Payment = ({Selectedprice,noOfTrav,firstTraveler,Dis,val}) => {
//     const [isopen,setIsopen]=useState(false)
    
//   const [withoutDis,setwithoutDis]=useState(Selectedprice*noOfTrav);
    
//     useEffect(()=>{
//         let cost=Number(Selectedprice.substring(4));
//         let notrav=noOfTrav;
//         let r=cost*noOfTrav;
//         console.log(r)
//         setwithoutDis(r)
    
//       },[Selectedprice,noOfTrav])

      
//   // Pop up element 
//   const [isPopupVisible, setIsPopupVisible] = useState(false);
//   const [butClick,setbutClick]=useState(false);
//   // All the customer and travellers detila not filled or the staring point not choosen then it give a alert message
//   const handleButtonClick = () => {
  
  
//     if(val==null){
//       alert("Choose a starting Point");
//       return;
//     }
//     if(firstTraveler.name==''||firstTraveler.age==''|| firstTraveler.contact==''||firstTraveler.email==''){
//       alert("Fill your Details ");
//       return;
//     }
//     setbutClick(true);
//     console.log(firstTraveler); // Store or process the details as needed
//     // Open the popup page
//     setIsPopupVisible(true);
    
//   };
//   // close the popup page
//     const handleClosePopup = () => {
//         setIsPopupVisible(false);
//         setbutClick(false)
//     };
//   return (
//     <div>
//               <div className="mt-12 shadow-md p-4 flex flex-col gap-2 mb-24 ">
//         <h1 className="text-lg font-semibold ">Payment details</h1>
//         <div >
//           <h1 className="absolute font-normal text-base">Trip price per person</h1>
//           <h2 className="relative ml-64 text-base font-semibold">₹ {Selectedprice}</h2>

//         </div>
//         <div>
//           <h1 className="absolute font-normal text-base">Total Person in booking</h1>
//           <h2 className="relative ml-64 text-base font-semibold">{noOfTrav}</h2>
          
//         </div>
//         <div>
//           <h1 className="absolute font-normal text-base">Total Discount</h1>
//           <h2 className="relative ml-64 text-base font-semibold">₹ {Dis}</h2>
          
//         </div>
//         <div >
//           <h1 className="absolute font-normal text-base">Total price</h1>
//           <h2 className="relative ml-64 text-base font-semibold">₹ {withoutDis} </h2>
          
//         </div>
//         <div>
//           <h1 className="text-lg font-semibold">Payment Via</h1>
//           <div>
//             <h1>Razorpay</h1> 
//             <h2>Phonepe</h2>
//           </div>
//         </div>
//         <hr />

//         <div  >
//           <h1 className="absolute text-base font-semibold ">Grand Total</h1>
//           <h1  className="relative ml-64 text-base font-semibold">{withoutDis-Dis}</h1>
//         </div>

//         <button className="bg-blue-700 text-base text-white py-2 px-4 rounded-full w-32" onClick={handleButtonClick}>Book Now</button>
//         <Popup Details={firstTraveler} Traveler={noOfTrav} TotalPrice={withoutDis-Dis} PerTrip={Selectedprice}
//          isVisible={isPopupVisible} onClose={handleClosePopup} />

//         <p className="text-sm font-normal text-zinc-700">
//         By Clicking on Book Now you confirm that all the
//          details provided by you are
//          correct, and accepting our TnC & Cancellation Policy.
//         </p>
//       </div>
      
//     </div>
//   )
// }

// export default Payment
