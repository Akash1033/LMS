import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get(
                    "http://localhost:3000/api/v1/users/current-user",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                console.log("Check Auth: ", response.data.data);
                setUser(response.data.data); // ✅ CRITICAL
                console.log("USER IN AUTHCONTEXT: ", user);
            } catch (err) {
                localStorage.removeItem("token");
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    const login = (userData, token) => {
        localStorage.setItem("token", token);
        setUser(userData); // userData MUST already be the user object
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, setLoading, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
