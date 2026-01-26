import React, { useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function WatchCourse() {
    const { user } = useAuth();
    const { courseId } = useParams;
    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const response = await axios.get(
                    `localhost:3000/api/v1/courses/${token}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
            } catch (error) {
                console.log(
                    'ERR SOMETHIHNG WENT WRONG IN /pages/student/WatchCourse.jsx',
                    error
                );
            }
        };

        fetchCourse();
    }, []);

    return <div>{JSON.stringify(user)}</div>;
}

export default WatchCourse;
