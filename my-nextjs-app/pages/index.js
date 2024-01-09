import React, { useState } from 'react';
// Run with: npm run dev
const Home = () => {
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Send the data to the NestJS backend
        const response = await fetch('http://localhost:3000/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        });

        const data = await response.json();
        console.log('Response from server:', data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Home;
