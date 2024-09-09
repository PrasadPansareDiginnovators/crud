import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Read = () => {
    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/users/${id}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div>
            <h1 className='text-lg font-semibold p-3'>Details of User</h1>
            <div className='border rounded bg-gray-100 m-2 p-4'>
                <div className='p-2 m-1 text-medium font-medium'>
                    Name: {data.name}
                </div>
                <div className='p-2 m-1 text-medium font-medium'>
                    Username: {data.username}
                </div>
                <div className='p-2 m-1 text-medium font-medium'>
                    Email: {data.email}
                </div>
                <div className='p-2 m-1 text-medium font-medium'>
                    Phone: {data.phone}
                </div>
                <div className='p-2 m-1 text-medium font-medium'>
                    Website: {data.website}
                </div>
                <div className="flex justify-between mt-4">
                    <Link
                        to={`/update/${id}`}
                        className='bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-300'
                    >
                        Edit
                    </Link>
                    <Link
                        to="/"
                        className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300'
                    >
                        Back
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Read;
