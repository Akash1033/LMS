import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import axios from 'axios';
import Loading from '../../../components/Loading'
import { useNavigate } from 'react-router-dom';

function CreateCourses() {
    const { user } = useAuth();
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const initialCourseState = {
        title: '',
        description: '',
        category: '',
        level: '',
    };
    const [courseDetails, setCourseDetails] = useState(initialCourseState);
    const [loading, setloading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setCourseDetails((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const createCourse = async () => {
        try {
          setloading(true)
            const response = await axios.post(
                'http://localhost:3000/api/v1/mentor/courses',
                courseDetails,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log('Creating Course', response.data.data);
            setCourseDetails(initialCourseState);
            navigate('/mentor/dashboard', { replace: true });
        } catch (error) {
            console.log(
                'ERR SOMETHING WENT WRONG INSIDE MENTOR CREATE COURSE PAGE: CreateCourse: ',
                error
            );
        }finally{
          setloading(false)
        }
    };

    if(loading) return <Loading></Loading>
    return (
        <div className="min-h-screen w-full bg-gray-200 flex items-start justify-center px-4 py-10">
            <div className="w-full max-w-xl bg-white rounded-xl shadow-sm p-8">
                <h1 className="text-2xl font-semibold text-gray-800 mb-1">
                    New Course
                </h1>
                <p className="text-sm text-gray-600 mb-6">
                    Please enter the course details below
                </p>

                <div className="space-y-4">
                    <input
                        type="text"
                        name="title"
                        placeholder="Course Title"
                        value={courseDetails.title}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={courseDetails.description}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        value={courseDetails.category}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="text"
                        name="level"
                        placeholder="Level"
                        value={courseDetails.level}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                        type="submit"
                        onClick={createCourse}
                        className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition"
                    >
                        Create Course
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreateCourses;
