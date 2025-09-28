import React, { useState } from 'react';

const CalendarIcon = (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);
const DocumentIcon = (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);
const RefreshIcon = (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.34 3.59M20 20v-5h-.581m0 0a8.003 8.003 0 01-15.357-2.124" />
    </svg>
);
const UsersIcon = (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h-5m-5 0h10a2 2 0 002-2V7a2 2 0 00-2-2h-5m-5 12V7a2 2 0 012-2h5M8 7v6h.01M16 17a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const StatCard = ({ title, value, icon: Icon, colorClass }) => (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between min-w-[150px] flex-1">
        <div className="flex flex-col">
            <h3 className="text-sm font-medium text-gray-500">{title}</h3>
            <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
        <div className={`p-3 rounded-full ${colorClass} bg-opacity-10`}>
            <Icon className={`w-6 h-6 ${colorClass}`} />
        </div>
    </div>
);

export default function Schedule () {
    const mockStats = {
        activeTimetables: Math.floor(Math.random() * 5) + 1,
        totalLessons: Math.floor(Math.random() * 100) + 20,
        substitutes: Math.floor(Math.random() * 5),
        activeClasses: Math.floor(Math.random() * 10) + 1,
    };

    const [selectedView, setSelectedView] = useState('Classes');
    const [selectedDate] = useState('09 / 28 / 2025');

    const twoPerLineClass = 'w-[calc(50%-6px)] sm:w-auto';

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Institute Schedule</h1>
                    <p className="text-gray-500 text-sm mt-1">View schedules across {mockStats.activeTimetables} active timetables</p>
                </div>
                
                <div className="flex flex-wrap gap-3 mt-4 md:mt-0 w-full md:w-auto">
                    <button className={`flex items-center justify-center cursor-pointer px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition ${twoPerLineClass}`}>
                        <svg className="w-5 h-5 mr-1" fill="white" viewBox="0 0 24 24"><path d="M19 8H5c-1.65 0-3 1.35-3 3v6h4v4h12v-4h4v-6c0-1.65-1.35-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V4z"/></svg>
                        Print Substitutes
                    </button>
                    <button className={`flex items-center justify-center cursor-pointer px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition ${twoPerLineClass}`}>
                        <RefreshIcon className="w-5 h-5 mr-1 text-gray-600" />
                        Refresh
                    </button>
                    <button className={`flex items-center justify-center cursor-pointer px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition ${twoPerLineClass}`}>
                        <svg className="w-5 h-5 mr-1" fill="white" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
                        Export All
                    </button>
                </div>
            </header>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <StatCard 
                    title="Active Timetables" 
                    value={mockStats.activeTimetables} 
                    icon={CalendarIcon} 
                    colorClass="text-indigo-600"
                />
                <StatCard 
                    title="Total Lessons" 
                    value={mockStats.totalLessons} 
                    icon={DocumentIcon} 
                    colorClass="text-blue-600"
                />
                <StatCard 
                    title="Substitutes" 
                    value={mockStats.substitutes} 
                    icon={RefreshIcon} 
                    colorClass="text-yellow-600"
                />
                <StatCard 
                    title="Active Classes" 
                    value={mockStats.activeClasses} 
                    icon={UsersIcon} 
                    colorClass="text-green-600"
                />
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-md mb-6">
                
                <div className="flex flex-col space-y-2 w-full lg:flex-row lg:space-x-2 lg:space-y-0 lg:w-auto mb-3 lg:mb-0">
                    
                    <button className="p-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition w-full lg:w-auto flex justify-center">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    
                    <button className="flex items-center justify-center p-2 border border-indigo-500 bg-indigo-50 text-indigo-600 rounded-lg transition w-full">
                        <CalendarIcon className="w-5 h-5 mr-2" />
                        <span className="font-medium text-sm">{selectedDate}</span>
                    </button>

                    <button className="p-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition w-full lg:w-auto flex justify-center">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>

                    <button className="px-3 py-2 text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition hidden sm:block cursor-pointer">Today</button>
                    <button className="px-3 py-2 text-sm font-medium rounded-lg text-indigo-600 bg-indigo-100 hover:bg-indigo-200 transition hidden sm:block cursor-pointer">Tomorrow</button>
                </div>
                
                <div className="flex items-center space-x-2 w-full lg:w-auto justify-end">
                    <span className="text-gray-600 text-sm font-medium hidden sm:block">View by:</span>
                    <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                        <button 
                            className={`px-3 py-2 text-sm font-medium cursor-pointer transition ${selectedView === 'Classes' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                            onClick={() => setSelectedView('Classes')}
                        >
                            Classes
                        </button>
                        <button 
                            className={`px-3 py-2 text-sm cursor-pointer font-medium transition ${selectedView === 'Teachers' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                            onClick={() => setSelectedView('Teachers')}
                        >
                            Teachers
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white p-16 rounded-lg shadow-xl min-h-[400px] flex flex-col items-center justify-center">
                <div className="text-center">
                    <svg className="mx-auto h-16 w-16 text-gray-300 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM12 7c-2.21 0-4 1.79-4 4v4c0 2.21 1.79 4 4 4s4-1.79 4-4v-4c0-2.21-1.79-4-4-4zm0 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2s-2-.9-2-2v-4c0-1.1.9-2 2-2z"/></svg>
                    <h2 className="text-xl font-semibold text-gray-900 mt-2">No Published Timetables</h2>
                    <p className="text-gray-500 mt-1">
                        Create and publish timetables to view schedules here
                    </p>
                </div>
            </div>
        </div>
    );
};