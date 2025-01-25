import React, { useEffect, useState } from 'react';

const Page = () => {
  const [req, setReq] = useState([]); // State to store fetched data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3005/requests');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); // Parse the JSON response
        setReq(data); // Update the state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetch function
  }, []); // Empty dependency array to run useEffect only once

  return (
    <div>
      <h1>Requests</h1>
      <ul>
        {req.map((request, index) => (
          <li key={index}>
            {request.name} - {request.email} - {request.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
