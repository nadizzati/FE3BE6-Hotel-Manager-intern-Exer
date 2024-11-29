import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        alert("Registration Successful!");
        navigate('/login');
    };

    return (
        <div className="min-h-screen flex bg-white">
            <div
                className="relative w-1/2 min-h-screen bg-cover bg-center flex items-center justify-center text-center"
                style={{
                    backgroundImage: "url('https://hackmd.io/_uploads/Syeul1U71g.png')",
                }}
            >
                <div className="absolute inset-0 flex items-center text-left">
                    <h1 className="text-6xl font-bold px-8 bg-gradient-to-r from-rose-200 to-red-400 text-transparent bg-clip-text">
                        Welcome to Our Platform
                    </h1>
                </div>
            </div>

            <div className="flex-grow flex flex-col justify-center px-[95px] bg-white">
                <h1 className="text-4xl font-semibold mb-2">
                    Create Account
                </h1>
                <p>Welcome to K Hotel. Create account to get started.</p>
                <form onSubmit={handleRegister}>
                    <div className="mb-4 mt-[10px]">
                        <label className="block text-gray-700 font-bold mb-2">Email</label>
                        <input
                            type="email"
                            className="shadow border rounded-xl w-full py-2 px-3 text-gray-700 outline-none focus:ring-4 focus:ring-rose-300"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Password</label>
                        <input
                            type="password"
                            className="shadow border rounded-xl w-full py-2 px-3 text-gray-700 outline-none focus:ring-4 focus:ring-rose-300"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Confirm Password</label>
                        <input
                            type="password"
                            className="shadow border rounded-xl w-full py-2 px-3 text-gray-700 outline-none focus:ring-4 focus:ring-rose-300"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-slate-500 hover:bg-pink-300 text-white hover:text-slate-700 font-bold py-2 px-4 rounded-xl w-full transition duration-300 ease-in-out"
                    >
                        Register
                    </button>
                </form>
                <p className="mt-4 text-gray-600">
                    Already have an account? <Link to="/login" className="text-[#6eb3e3] hover:text-[#56a8e2]">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
