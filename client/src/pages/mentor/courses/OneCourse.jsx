import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function OneCourse() {
    const navigate = useNavigate()
    const { courseId } = useParams();
    const token = localStorage.getItem('token');
    console.log(courseId);
    const [course, setCourse] = useState(null);
    const [sections, setSection] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/api/v1/mentor/courses/${courseId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                console.log('AEK  COURSE KA RES: ', response);
                setCourse(response.data.data.course);
                setSection(response.data.data.sections);
                setData(response.data.data);
            } catch (error) {
                console.error('Failed to fetch course', error);
            } finally {
                setLoading(false);
            }
        };
        fetchCourse();
    }, [courseId, token]);
    if (loading) {
        return <p className="p-6">Loading course...</p>;
    }
    console.log('DATA: ', data);

    return (
        <div className="min-h-screen w-full bg-gray-200 px-4 sm:px-6 lg:px-10 py-6">
            {/* COURSE HEADER */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                    {course.title}
                </h1>

                <p className="text-gray-600 mb-4">{course.description}</p>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-3 text-sm mb-4">
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                        Category: {course.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                        Level: {course.level}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700">
                        Status: {course.status}
                    </span>
                </div>

                <div className="text-sm text-gray-500">
                    Created by{' '}
                    <span className="font-medium">{course.mentorId.name}</span>{' '}
                    · Created on{' '}
                    {new Date(course.createdAt).toLocaleDateString()}
                </div>
            </div>

            {/* SECTIONS & LESSONS */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* LEFT: COURSE CONTENT */}
                <div className="lg:col-span-2 space-y-6">
                    {sections?.map((section) => (
                        <div
                            key={section._id}
                            className="bg-white rounded-xl shadow-sm p-6"
                        >
                            <h2 className="text-lg font-semibold text-gray-800 mb-4">
                                {section.order}. {section.title}
                            </h2>

                            <div className="space-y-3">
                                <button className="w-full px-4 py-2 rounded-lg border bg-blue-200 hover:bg-gray-100" onClick={()=>navigate(`/mentor/${section._id}/addlesson`)}>
                                Add Lesson
                            </button>
                                {section.lessons?.map((lesson) => (
                                    <div
                                        key={lesson._id}
                                        className="flex items-center justify-between border rounded-lg p-4"
                                    >
                                        <div>
                                            
                                            <h3 className="font-medium text-gray-800">
                                                {lesson.title}
                                            </h3>
                                            
                                            <p className="text-sm text-gray-500">
                                                Order: {lesson.order}
                                            </p>
                                        </div>

                                        {lesson.isPreview && (
                                            <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700 cursor-pointer" onClick={()=>{navigate(`/mentor/previewcourse`)}} >
                                                Preview
                                            </span>
                                        )}
                                    </div>
                                ))}

                                {section.lessons?.length === 0 && (
                                    <p className="text-sm text-gray-500">
                                        No lessons added yet.
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* RIGHT: COURSE STATS / ACTIONS */}
                <div className="space-y-6">
                    {/* Stats */}
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <h2 className="text-lg font-semibold mb-4">
                            Course Stats
                        </h2>

                        <div className="grid grid-cols-2 gap-4 text-center">
                            <div>
                                <p className="text-2xl font-semibold text-gray-800">
                                    {sections?.length}
                                </p>
                                <p className="text-sm text-gray-500">
                                    Sections
                                </p>
                            </div>
                            <div>
                                <p className="text-2xl font-semibold text-gray-800">
                                    {sections?.reduce(
                                        (acc, sec) => acc + sec.lessons.length,
                                        0
                                    )}
                                </p>
                                <p className="text-sm text-gray-500">Lessons</p>
                            </div>
                            <div>
                                <p className="text-2xl font-semibold text-gray-800">
                                    Free
                                </p>
                                <p className="text-sm text-gray-500">Price</p>
                            </div>
                            <div>
                                <p className="text-2xl font-semibold text-gray-800">
                                    Beginner
                                </p>
                                <p className="text-sm text-gray-500">
                                    Difficulty
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <h2 className="text-lg font-semibold mb-4">Actions</h2>

                        <div className="flex flex-col gap-2">
                            <button className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                                Add Section
                            </button>
                            
                            <button className="w-full px-4 py-2 rounded-lg border hover:bg-gray-100">
                                Edit Course
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OneCourse;
