import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Delete = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm("Would you like to delete this user?")) {
      axios.delete(`http://localhost:3000/users/${id}`)
        .then(() => navigate('/'))
        .catch(err => console.log(err));
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border rounded-md bg-gray-100 shadow-md p-5 text-center">
        <h1 className="text-xl font-semibold mb-4">Delete User</h1>
        <p>Are you sure you want to delete this user?</p>
        <div className="flex justify-around mt-4">
          <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
          <button onClick={handleCancel} className="bg-blue-500 text-white px-4 py-2 rounded">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Delete;
