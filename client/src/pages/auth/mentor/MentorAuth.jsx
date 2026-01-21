import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';


function MentorAuth() {
    const navigate = useNavigate();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth()


    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        // authentication logic here
        try {
            const response = await axios.post(
                'http://localhost:3000/api/v1/users/login',
                { email, password }
            );
            console.log(response);
            if (response.data.data.user.role !== 'mentor') {
                alert('You are not authorized');
                logout();
                navigate('/', { replace: true });
                return;
            }
            login(response.data.data.user, response.data.data.accessToken);
            setLoading(false);
            navigate('/mentor/dashboard', { replace: true });
        } catch (err) {
            console.log('ERROR: ', err);
        }
    };
    return (
        <div className="bg-white min-h-screen flex flex-col items-center justify-center">
            <form
                onSubmit={handleLogin}
                className="bg-gray-100 p-6 rounded shadow-md"
            >
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className="border p-2 mb-4 w-full"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    className="border p-2 mb-4 w-full"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded w-full"
                >
                    Login
                </button>
            </form>
            <div className="mt-4 text-center">
                <p className="text-gray-600">
                    Not registered?
                    <a
                        href="mailto:email@example.com?subject=Mentor Registration Request&body=Hello,%0D%0A%0D%0AI would like to register as a Mentor on your application.%0D%0A%0D%0AThank you."
                        className="text-blue-500 hover:underline ml-2"
                    >
                        Click here to request access
                    </a>
                </p>
            </div>
        </div>
    );
}

export default MentorAuth;
