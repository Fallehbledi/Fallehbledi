'use client'
import { cookies } from "next/headers"
import React, { useState } from "react"
import data from '../../../data/profile.json'
import axios from "axios"

const EditProfile = () => {
  const [editField, setEditField] = useState({
    firstName: false,
    lastName: false,
    phone: false,
    address: false,
    location: false,
  });
  const [profile, setProfile] = useState({
    firstName: data[0].firstName,
    lastName: data[0].lastName,
    phone: data[0].phone,
    address: data[0].adress,
    location: data[0].location,
  });

  const toggleEdit = (field : any) => {
    setEditField((prev : any) => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleInputChange = (e : any) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUpdateFarmer = async () => {
    try {
      await axios.put(`http://127.0.0.1:5000/api/farmer/${data[0].id}`, profile);
      console.log('profile updated successfully');
      // router.push('/Dashboard'); // Redirect to Dashboard after successful update
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-24 px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-lg">
      <div className="p-6 bg-[#058f1a] rounded-t-lg">
        <h2 className="text-2xl text-white text-center sm:text-left">Edit your Profile</h2>
      </div>

      {data.map((element) => (
        <div className="flex flex-col sm:flex-row p-8" key={element.id}>
          <div className="w-full sm:w-1/4 text-center sm:text-left">
            <img src={element.profileImage} alt="Profile" className="w-32 h-32 rounded-full mx-auto sm:mx-0" />
            <button className="mt-2  px-4 py-2 bg-[#058f1a] text-white rounded-full mx-auto block">Update Image</button>
          </div>
          <div className="w-full sm:w-3/4 sm:pl-6 mt-6 sm:mt-0">
            <div className="flex border-b mb-6">
              <button className="py-2 px-4 text-green-700 border-b-2 border-green-500 focus:outline-none">Personal</button>
            </div>
            <div>
              {['firstName', 'lastName', 'phone', 'address', 'location'].map((field ) => (
                <div key={field} className="mb-10 flex flex-col sm:flex-row items-center">
                  <label className="block text-gray-900 text-lg font-semibold capitalize">{field.replace('Name', ' Name')}:</label>
                  {editField[field] ? (
                    <input
                      type="text"
                      name={field}
                      className="w-full sm:w-96 mt-1 p-2 border rounded sm:ml-32"
                      value={profile[field]}
                      onChange={handleInputChange}
                      onBlur={() => toggleEdit(field)}
                    />
                  ) : (
                    <h1 className="text-gray-900 text-lg font-semibold sm:ml-32 mt-1 sm:mt-0" onClick={() => toggleEdit(field)}>
                      {profile[field]}
                    </h1>
                  )}
                </div>
              ))}
              <button onClick={handleUpdateFarmer} className='px-28 py-3 bg-[#058f1a] text-white rounded mx-auto block sm:ml-12'>Update</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default EditProfile
