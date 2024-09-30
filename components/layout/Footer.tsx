import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col bg-blue-500 text-white h-[434px]  	">
        <div className="flex flex-row gap-52 mx-40 mt-16">
        <div>
            <img src="airplane.png" alt="" className="h-[120px]" />

        </div>
        <div className="flex flex-row gap-52">
            <div className="flex flex-col">
                <h2 className="text-2xl font-semibold">Company</h2>
                <ul className="mt-8 flex flex-col gap-2">
                <li className="text-lg font-normal">Home</li>
                <li className="text-lg font-normal">Community</li>
                <li className="text-lg font-normal">About Us</li>
                <li className="text-lg font-normal">Login</li>
            </ul>
            </div>
            <div className="flex flex-col">
                <h2 className="text-2xl font-semibold">Support</h2>
                <ul className="mt-8 flex flex-col gap-2">
                    <li className="text-lg font-normal">FAQ</li>
                    <li className="text-lg font-normal">Terms & Conditions</li>
                    <li className="text-lg font-normal">Privacy Policy</li>
                    <li className="text-lg font-normal">Cancellation Policy</li>
                </ul>
            </div>
            <div className="flex flex-col">
                <h2 className="text-2xl font-semibold">Contact</h2>
                <ul className="mt-8 flex flex-col gap-2">
                <li className="text-lg font-normal">+91 23456789</li>
                <li className="text-lg font-normal">WelcomeToTravo.com</li>

                </ul>
                
                <div className="flex flex-row gap-2 mt-2">
                    <img src="Vector.png" alt="" />
                    <img src="InstagramLogo.png" alt="" />
                    <img src="XLogo.png" alt="" />
                    <img src="YoutubeLogo.png" alt="" />
                </div>
            </div>
        </div>
            
        </div>
        <h1  className="mt-28 text-center ">
        2021 (c) — Mochlero Travel Ventures Pvt. Ltd. All Rights Reserved
        </h1>
        
      
    </div>
  )
}

export default Footer
