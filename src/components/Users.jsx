import React from 'react';

const UserCard = ({ name, role, email, phone, createdDate, verified, isOwner }) => {
    const initial = name ? name[0].toUpperCase() : 'B';
    
    const avatarClasses = isOwner 
        ? 'bg-indigo-600 text-white' 
        : 'bg-gray-200 text-gray-800';
    
    const cardBorderClasses = isOwner 
        ? 'border-indigo-500' 
        : 'border-gray-200';

    return (
        <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-5 border ${cardBorderClasses} rounded-lg bg-white shadow-sm relative`}>
            
            <div className="flex items-center flex-1 w-full sm:w-auto min-w-0">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 ${avatarClasses}`}>
                    {initial}
                </div>
                
                <div className="ml-4 min-w-0">
                    <div className="flex flex-wrap items-center mb-0.5">
                        <span className="font-semibold text-gray-900 truncate mr-3">{name || initial}</span>
                        {role && (
                            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded-md">
                                {role}
                            </span>
                        )}
                    </div>
                    {email && <div className="text-sm text-gray-500 truncate">{email}</div>}
                    {phone && <div className="text-sm text-gray-500 truncate">{phone}</div>}
                </div>
            </div>
            
            <div className="w-full sm:w-auto mt-3 sm:mt-0 flex flex-col sm:flex-row justify-between items-start sm:items-center sm:ml-4 pt-3 sm:pt-0 border-t sm:border-t-0 border-dashed border-gray-100">

                <div className="flex flex-col items-start sm:items-end text-right text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                         <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                        <span className='font-medium text-gray-900'>Created: {createdDate}</span>
                    </div>
                    {verified && (
                        <div className="flex items-center text-green-600 mt-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            <span className="text-xs ml-1 font-medium">Verified</span>
                        </div>
                    )}
                </div>
            </div>
            
            <button className="text-gray-400 hover:text-gray-600 p-1 rounded-full absolute top-2 right-2 sm:relative sm:top-auto sm:right-auto sm:ml-4 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z" /></svg>
            </button>
        </div>
    );
};

export default function Users() {
    const userData = [
        {
            name: "John",
            role: "Owner",
            email: "john3875@gmail.com",
            phone: "+91 6206971311",
            createdDate: "Sep 21, 2025",
            verified: true,
            isOwner: true,
        },
        {
            name: "B",
            role: null,
            email: "member@org.com",
            phone: null,
            createdDate: "Sep 28, 2025",
            verified: false,
            isOwner: false,
        },
        {
            name: "C",
            role: "Admin",
            email: "admin@org.com",
            phone: null,
            createdDate: "Sep 28, 2025",
            verified: true,
            isOwner: false,
        },
        {
            name: "K",
            role: null,
            email: "member@org.com",
            phone: null,
            createdDate: "Sep 28, 2025",
            verified: false,
            isOwner: false,
        },
        {
            name: "G",
            role: null,
            email: "abcdef@org.com",
            phone: null,
            createdDate: "Sep 28, 2025",
            verified: false,
            isOwner: false,
        },
    ];

    return (
        <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 font-sans">
            
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b pb-4">
                <div className="mb-4 md:mb-0">
                    <h1 className="text-2xl font-bold text-gray-900">Team Management</h1>
                    <p className="text-gray-500 text-sm mt-1">Manage your organization members and their permissions</p>
                </div>
                <div className="flex space-x-3 w-full md:w-auto">
                    <button className="flex items-center justify-center cursor-pointer px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-indigo-600 bg-white hover:bg-gray-50 transition duration-150 ease-in-out w-1/2 md:w-auto">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zm-3.5-4h3a.5.5 0 010 1h-3a.5.5 0 010-1z" /></svg>
                        Invite Member
                    </button>
                    <button className="flex items-center justify-center cursor-pointer px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 ease-in-out w-1/2 md:w-auto">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" /></svg>
                        Add User
                    </button>
                </div>
            </header>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-6">
                <div className="relative flex-1">
                    <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                    <input 
                        type="text" 
                        placeholder="Search users by name, email, or employee ID..." 
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                    />
                </div>
                <button className="flex-shrink-0 flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition duration-150 ease-in-out sm:w-auto w-full">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" /></svg>
                    Filters
                </button>
            </div>

            <main className="space-y-3">
                {userData.map((user, index) => (
                    <UserCard 
                        key={index}
                        name={user.name}
                        role={user.role}
                        email={user.email}
                        phone={user.phone}
                        createdDate={user.createdDate}
                        verified={user.verified}
                        isOwner={user.isOwner}
                    />
                ))}
            </main>
        </div>
    );
};
