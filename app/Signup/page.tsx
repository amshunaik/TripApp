'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
//import Link from 'next/link';
const Page = () => {
    const router=useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(null);
    const [chatNo, setChatNo] = useState(null);
    const [password, setPassword] = useState('');
    

    const handleLogin = async (e) => {
        e.preventDefault();

        const loginData = { username: name, email: email,phone:phone,chatno:chatNo,password: password };
        console.log('Sending data:', loginData);

        try {
            const response = await fetch('http://localhost:3005/Signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Signed up successful:', result);
                alert("Signed up successfully");
                router.push('/Login');
            } else {
                const error = await response.json();
                console.log('Error logging in:', error.message);
                alert("Error signing up , retry");
            }
        } catch (error) {
            console.log('Fetch error:', error);
            alert('An error occurred while logging in. Please try again.');
        }
    };

    return (
        <div className="mt-[100px] mb-[200px]">
            <h1 className="text-center mb-4 font-medium text-xl">Welcome, Join us to TripApp</h1>
            <h1 className="text-center text-blue-800 mb-4 font-semibold text-xl">SignUp</h1>
            <form
                className="flex flex-col justify-center items-center gap-4"
                onSubmit={handleLogin}
            >
                <input
                    type="text"
                    placeholder="Enter Username"
                    className="border-2 p-2 w-[350px]"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Enter Email ID"
                    className="border-2 p-2 w-[350px]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="tel"
                    placeholder="Enter Phone Number :"
                    className="border-2 p-2 w-[350px]"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <input
                    type="tel"
                    placeholder="Wnter WhatsApp Number :"
                    className="border-2 p-2 w-[350px]"
                    value={chatNo}
                    onChange={(e) => setChatNo(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Enter Password"
                    className="border-2 p-2 w-[350px]"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className='flex flex-row gap-8'>
                  
                    <button 
                        
                        className="text-lg text-white border-2 bg-blue-700 px-4 rounded-lg"
                    >
                        SignUp
                    </button>
                </div>

            </form>
        </div>
    );
};

export default Page;
