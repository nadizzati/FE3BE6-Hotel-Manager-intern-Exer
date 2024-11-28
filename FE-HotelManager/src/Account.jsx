import React, { useState } from 'react';

const Account = () => {
    const [activeTab, setActiveTab] = useState('Account Information');
    const [activeMenu, setActiveMenu] = useState('My Account');

return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar Kiri */}
        <div className="w-1/4 bg-white shadow-lg p-6">
            <div className="flex items-center space-x-4">
                <img
                    className="w-10 h-10 rounded-full border-2"
                    src="https://hackmd.io/_uploads/BkXoMRNXkl.png"
                    alt="Profile"
                />
                <span className="font-bold font-mono text-lg text-slate-800">Dummy of Dummydumb</span>
            </div>
            <div className="mt-6">
                <ul className="space-y-4">
                    <li
                        className={`cursor-pointer ${
                        activeMenu === 'My Account' ? 'text-rose-300 font-semibold' : 'text-gray-700'
                        }`}
                        onClick={() => setActiveMenu('My Account')}
                    >
                        My Account
                    </li>
                    <li
                        className={`cursor-pointer ${
                        activeMenu === 'My Booking' ? 'text-rose-300 font-semibold' : 'text-gray-700'
                        }`}
                        onClick={() => setActiveMenu('My Booking')}
                    >
                        My Booking
                    </li>
                    <li
                        className={`cursor-pointer ${
                        activeMenu === 'Purchase List' ? 'text-rose-300 font-semibold' : 'text-gray-700'
                        }`}
                        onClick={() => setActiveMenu('Purchase List')}
                    >
                        Purchase List
                    </li>
                    <li
                        className={`cursor-pointer ${
                        activeMenu === 'Refunds' ? 'text-rose-300 font-semibold' : 'text-gray-700'
                        }`}
                        onClick={() => setActiveMenu('Refunds')}
                    >
                        Refunds
                    </li>
                    <li
                        className={`cursor-pointer ${
                        activeMenu === 'Flight Price Alerts' ? 'text-rose-300 font-semibold' : 'text-gray-700'
                        }`}
                        onClick={() => setActiveMenu('Flight Price Alerts')}
                    >
                        Flight Price Alerts
                    </li>
                    <li
                        className={`cursor-pointer ${
                        activeMenu === 'Saved Passenger Details' ? 'text-rose-300 font-semibold' : 'text-gray-700'
                        }`}
                        onClick={() => setActiveMenu('Saved Passenger Details')}
                    >
                        Saved Passenger Details
                    </li>
                    <li
                        className={`cursor-pointer ${
                        activeMenu === 'Promo Info' ? 'text-rose-300 font-semibold' : 'text-gray-700'
                        }`}
                        onClick={() => setActiveMenu('Promo Info')}
                    >
                        Promo Info
                    </li>
                    <li
                        className={`cursor-pointer ${
                        activeMenu === 'Logout' ? 'text-rose-300 font-semibold' : 'text-gray-700'
                        }`}
                        onClick={() => setActiveMenu('Logout')}
                    >
                        Logout
                    </li>
                </ul>
            </div>
        </div>

        <div className="w-3/4 bg-white shadow-lg p-6 flex-1">
        {/* Header and Tabs */}
            <div className="border-b border-gray-300 pb-4">
                <h1 className="text-2xl font-bold text-slate-800">Settings</h1>
                <div className="flex space-x-6 mt-4">
                    <button
                        onClick={() => setActiveTab('Account Information')}
                        className={`pb-2 border-b-2 ${
                            activeTab === 'Account Information'
                            ? 'border-rose-300 text-rose-300' : 'border-transparent text-gray-600'
                        }`}
                    >
                        Account Information
                    </button>
                    <button
                        onClick={() => setActiveTab('Password & Security')}
                        className={`pb-2 border-b-2 ${
                            activeTab === 'Password & Security'
                            ? 'border-rose-300 text-rose-300' : 'border-transparent text-gray-600'
                        }`}
                    >
                        Password & Security
                    </button>
                    <button
                        onClick={() => setActiveTab('Newsletter & Promo Info')}
                        className={`pb-2 border-b-2 ${
                            activeTab === 'Newsletter & Promo Info'
                            ? 'border-rose-300 text-rose-300' : 'border-transparent text-gray-600'
                        }`}
                    >
                        Newsletter
                    </button>
            </div>
        </div>

        {/* Content */}
        {activeTab === 'Account Information' && (
            <div className="mt-6">
                <h2 className="text-lg font-bold text-slate-800 mb-4">Personal Data</h2>
            <form className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                    type="text"
                    className="mt-1 p-2 block w-full font-mono border-rose-300 rounded-lg shadow-sm placeholder:text-slate-400 focus:ring-rose-300 focus:border-rose-300 sm:text-sm"
                    placeholder="Your Full Name..."
                />
            </div>

            <div className="flex space-x-4">
                <div className="w-1/3">
                    <label className="block text-sm font-medium text-gray-700">Gender</label>
                    <select className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-rose-300 focus:border-rose-300 sm:text-sm">
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div className="w-2/3">
                    <label className="block text-sm font-medium text-gray-700">Birthdate</label>
                    <div className="flex space-x-2">
                        <select className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-rose-300 focus:border-rose-300 sm:text-sm">
                            <option>Day</option>
                                {[...Array(31).keys()].map((day) => (
                            <option key={day}>{day + 1}</option>
                                ))}
                        </select>
                        <select className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-rose-300 focus:border-rose-300 sm:text-sm">
                            <option>Month</option>
                                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(
                                (month, index) => (
                                    <option key={index} value={month}>
                                {month}
                            </option>
                                ))}
                        </select>
                        <select className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-rose-300 focus:border-rose-300 sm:text-sm">
                            <option>Year</option>
                                {[...Array(100).keys()].map((year) => (
                            <option key={year}>{2024 - year}</option>
                                ))}
                        </select>
                    </div>
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">City of Residence</label>
                <input
                    type="text"
                    className="mt-1 p-2 block w-full font-mono placeholder:text-slate-400 border-gray-300 rounded-lg shadow-sm focus:ring-rose-300 focus:border-rose-300 sm:text-sm"
                    placeholder="City of Residence"
                />
            </div>

            <div className="flex justify-end space-x-4 mt-6">
                <button
                    type="button"
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-rose-300 hover:text-gray-100 font-semibold"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="bg-rose-300 text-white px-4 py-2 rounded-lg hover:bg-slate-300 hover:text-gray-700 font-semibold"
                >
                    Save
                </button>
            </div>
            </form>
        </div>
        )}
        </div>
    </div>
);
};
export default Account;
