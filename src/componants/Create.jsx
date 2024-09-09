import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Create = () => {
  const [values, setValues] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/users', values)
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h1 className='text-xl font-semibold p-3'>Add a user</h1>

      <div className='border rounded-md bg-gray-100 shadow-md p-5 text-left text-md font-semibold '>
        <form onSubmit={handleSubmit}>
          <div className='m-2'>
            <label htmlFor='name' className='block'>Name:</label>
            <input 
              type='text' 
              name='name' 
              className='border rounded px-3 py-1 w-full' 
              placeholder='Enter a Name...'
              onChange={e => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className='m-2'>
            <label htmlFor='username' className='block'>Username:</label>
            <input 
              type='text' 
              name='username' 
              className='border rounded px-3 py-1 w-full' 
              placeholder='Enter a username...'
              onChange={e => setValues({ ...values, username: e.target.value })}
            />
          </div>
          <div className='m-2'>
            <label htmlFor='email' className='block'>Email Id:</label>
            <input 
              type='text' 
              name='email' 
              className='border rounded px-3 py-1 w-full' 
              placeholder='Enter an email...'
              onChange={e => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className='m-2'>
            <label htmlFor='phone' className='block'>Phone:</label>
            <input 
              type='text' 
              name='phone' 
              className='border rounded px-3 py-1 w-full' 
              placeholder='Enter a phone...'
              onChange={e => setValues({ ...values, phone: e.target.value })}
            />
          </div>
          <div className='m-2'>
            <label htmlFor='website' className='block'>Website:</label>
            <input 
              type='text' 
              name='website' 
              className='border rounded px-3 py-1 w-full' 
              placeholder='Enter a website...'
              onChange={e => setValues({ ...values, website: e.target.value })}
            />
          </div>
          <div className="flex justify-between mt-4">
            <button 
              type='submit' 
              className='bg-green-500 text-white px-4 py-2 rounded'
            >
              Submit
            </button>
            <Link 
              to="/" 
              className='bg-blue-500 text-white px-4 py-2 rounded'
            >
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
