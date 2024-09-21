import React from 'react';

const ContestNotLive = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Contest is Not Live</h1>
                <p className="text-xl text-gray-600">The contest is currently not active. Please check back later for updates.</p>
            </div>
        </div>
    );
};

export default ContestNotLive;