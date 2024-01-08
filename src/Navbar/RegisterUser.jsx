<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

function RegisterUser() {
  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem('formData');
    return storedData ? JSON.parse(storedData) : {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  });
  
=======
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

function RegisterUser() {
  const navigate = useNavigate(); // Use useNavigate hook instead of useHistory
  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem("formData");
    return storedData
      ? JSON.parse(storedData)
      : {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        };
  });

>>>>>>> f47d33857fd80ba8c97e8d47a2779dd538520f0c
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  useEffect(() => {
<<<<<<< HEAD
    localStorage.setItem('formData', JSON.stringify(formData));
=======
    localStorage.setItem("formData", JSON.stringify(formData));
>>>>>>> f47d33857fd80ba8c97e8d47a2779dd538520f0c
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: false });
  };

<<<<<<< HEAD
  const handleSubmit = (e) => {
=======
  const handleSubmit = async (e) => {
>>>>>>> f47d33857fd80ba8c97e8d47a2779dd538520f0c
    e.preventDefault();
    let hasErrors = false;
    const newErrors = { ...errors };

<<<<<<< HEAD
    // Check for empty fields
=======
>>>>>>> f47d33857fd80ba8c97e8d47a2779dd538520f0c
    for (const key in formData) {
      if (!formData[key]) {
        newErrors[key] = true;
        hasErrors = true;
      }
    }

<<<<<<< HEAD
    // Check if passwords match
=======
>>>>>>> f47d33857fd80ba8c97e8d47a2779dd538520f0c
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = true;
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
    } else {
<<<<<<< HEAD
      // Perform registration logic here using formData state
      console.log('Form Submitted:', formData);
    }
=======
      try {
        const response = await axios.post(
          "http://localhost:8000/api/register",
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            password: formData.password,
            // Add other necessary fields here
          }
        );

        console.log("Registration successful:", response.data);
        // Handle success, redirect user, etc.
      } catch (error) {
        console.error("Registration failed:", error);
        // Handle error, show error message, etc.
      }
    }
    navigate('/');
>>>>>>> f47d33857fd80ba8c97e8d47a2779dd538520f0c
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-4">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
<<<<<<< HEAD
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name<span className="text-red-500">*</span>
=======
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
>>>>>>> f47d33857fd80ba8c97e8d47a2779dd538520f0c
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className={`w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
<<<<<<< HEAD
                errors.firstName ? 'border-red-500' : ''
=======
                errors.firstName ? "border-red-500" : ""
>>>>>>> f47d33857fd80ba8c97e8d47a2779dd538520f0c
              }`}
              required
            />
            {errors.firstName && (
<<<<<<< HEAD
              <p className="text-red-500 text-xs mt-1">First Name cannot be empty.</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name<span className="text-red-500">*</span>
=======
              <p className="text-red-500 text-xs mt-1">
                First Name cannot be empty.
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
>>>>>>> f47d33857fd80ba8c97e8d47a2779dd538520f0c
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className={`w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
<<<<<<< HEAD
                errors.lastName ? 'border-red-500' : ''
=======
                errors.lastName ? "border-red-500" : ""
>>>>>>> f47d33857fd80ba8c97e8d47a2779dd538520f0c
              }`}
              required
            />
            {errors.lastName && (
<<<<<<< HEAD
              <p className="text-red-500 text-xs mt-1">Last Name cannot be empty.</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email<span className="text-red-500">*</span>
=======
              <p className="text-red-500 text-xs mt-1">
                Last Name cannot be empty.
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
>>>>>>> f47d33857fd80ba8c97e8d47a2779dd538520f0c
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
<<<<<<< HEAD
                errors.email ? 'border-red-500' : ''
=======
                errors.email ? "border-red-500" : ""
>>>>>>> f47d33857fd80ba8c97e8d47a2779dd538520f0c
              }`}
              required
            />
            {errors.email && (
<<<<<<< HEAD
              <p className="text-red-500 text-xs mt-1">Email cannot be empty.</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password<span className="text-red-500">*</span>
=======
              <p className="text-red-500 text-xs mt-1">
                Email cannot be empty.
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
>>>>>>> f47d33857fd80ba8c97e8d47a2779dd538520f0c
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={`w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
<<<<<<< HEAD
                errors.password ? 'border-red-500' : ''
=======
                errors.password ? "border-red-500" : ""
>>>>>>> f47d33857fd80ba8c97e8d47a2779dd538520f0c
              }`}
              required
            />
            {errors.password && (
<<<<<<< HEAD
              <p className="text-red-500 text-xs mt-1">Password cannot be empty.</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password<span className="text-red-500">*</span>
=======
              <p className="text-red-500 text-xs mt-1">
                Password cannot be empty.
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
>>>>>>> f47d33857fd80ba8c97e8d47a2779dd538520f0c
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className={`w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
<<<<<<< HEAD
                errors.confirmPassword ? 'border-red-500' : ''
=======
                errors.confirmPassword ? "border-red-500" : ""
>>>>>>> f47d33857fd80ba8c97e8d47a2779dd538520f0c
              }`}
              required
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                Passwords do not match. Please try again.
              </p>
            )}
          </div>
          <button
<<<<<<< HEAD
            type="submit"
=======
            onClick={handleSubmit}
>>>>>>> f47d33857fd80ba8c97e8d47a2779dd538520f0c
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterUser;
