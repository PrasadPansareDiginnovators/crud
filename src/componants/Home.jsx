import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/users')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='flex flex-col justify-center bg-white'>
            <h1 className='max-w-full text-lg font-semibold'>List of Users</h1>
            <div className='text-right m-2'>
                <Link to="/create" className='px-3 py-1 border rounded-md bg-pink-400'>Create</Link>
            </div>
            <div className='w-full rounded bg-white p-2'>
                <table className="w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100 border-b">
                            <th className="py-3 px-4 font-semibold">Id</th>
                            <th className="py-3 px-4 font-semibold">Name</th>
                            <th className="py-3 px-4 font-semibold">UserName</th>
                            <th className="py-3 px-4 font-semibold">Email</th>
                            <th className="py-3 px-4 font-semibold">Phone</th>
                            <th className="py-3 px-4 font-semibold">Website</th>
                            <th className="py-3 px-12 font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((d, i) => (
                                <tr key={i} className="border-b hover:bg-gray-50">
                                    <td className="py-3 px-4">{d.id}</td>
                                    <td className="py-3 px-4">{d.name}</td>
                                    <td className="py-3 px-4">{d.username}</td>
                                    <td className="py-3 px-4">{d.email}</td>
                                    <td className="py-3 px-4">{d.phone}</td>
                                    <td className="py-3 px-4">{d.website}</td>
                                    <td className="py-3 px-4 flex space-x-4">
                                        <Link to={`/read/${d.id}`} className="bg-green-500 text-white px-2 py-1 rounded">Read</Link>
                                        <Link to={`/update/${d.id}`} className="bg-blue-500 text-white px-2 py-1 rounded">Update</Link>
                                        <Link to={`/delete/${d.id}`} className="bg-red-500 text-white px-2 py-1 rounded">Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;
