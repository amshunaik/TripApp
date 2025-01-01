'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter(); // Initialize the router
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        
        e.preventDefault();

        const loginData = { username: name, email: email, password: password };
        console.log('Sending data:', loginData);

        try {
            const response = await fetch('http://localhost:3005/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Login successful:', result);
                localStorage.setItem('items', JSON.stringify(loginData));
                router.push('/Home')
                alert("Logged in successfully")
            } else {
                const error = await response.json();
                console.log('Error logging in:', error.message);
                alert("Error logging in");
            }
        } catch (error) {
            console.log('Fetch error:', error);
            alert('An error occurred while logging in. Please try again.');
        }
    };

    return (
        <div className="mt-[100px] mb-[200px]">
            <h1 className="text-center mb-4 font-medium text-xl">Login</h1>
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
                    type="password"
                    placeholder="Enter Password"
                    className="border-2 p-2 w-[350px]"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className='flex flex-row gap-8'>
                    <button
                        type="submit"
                        className="text-lg text-white border-2 bg-black px-4 rounded-lg"
                    >
                        Login
                    </button>
                    <Link href='/Signup'
                        
                        className="text-lg text-white border-2 bg-blue-700 px-4 rounded-lg"
                    >
                        SignUp
                    </Link>
                </div>

            </form>
        </div>
    );
};

export default Page;
