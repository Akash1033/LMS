import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function StudentRegister() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [submitting, setSubmitting] = useState(false);
    const [confirmPass, setConfirmPass] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const response = await axios.post(
                'http://localhost:3000/api/v1/users/register',
                {
                    ...form,
                }
            );
            console.log(response);
            alert(response.data.message);
            navigate('/student/login', { replace: true });
        } catch (err) {
            if (err.response?.status === 409) {
                alert('User already exists. Please log in.');
                navigate('/student/login');
            } else {
                alert('Registration failed');
            }
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className=" min-h-screen flex items-center justify-center w-1/2">
            <form onSubmit={handleSubmit} className=" p-6 rounded shadow-lg ">
                <div className=" p-6 rounded  ml-8">
                    <h2 className="text-xl font-bold mb-4">Register</h2>
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={form.name}
                        onChange={(e) =>
                            setForm((prev) => ({
                                ...prev,
                                name: e.target.value,
                            }))
                        }
                        required
                        className="border p-2 mb-4 w-full rounded-lg"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={(e) =>
                            setForm((prev) => ({
                                ...prev,
                                email: e.target.value,
                            }))
                        }
                        required
                        className="border p-2 mb-4 w-full rounded-lg"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={(e) =>
                            setForm((prev) => ({
                                ...prev,
                                password: e.target.value,
                            }))
                        }
                        required
                        className="border p-2 mb-4 w-full rounded-lg"
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPass}
                        onChange={(e) => setConfirmPass(e.target.value)}
                        required
                        className="border p-2 mb-4 w-full rounded-lg"
                    />
                    <button
                        disabled={submitting}
                        type="submit"
                        className="bg-green-500 text-white p-2 rounded w-full"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
}

export default StudentRegister;
