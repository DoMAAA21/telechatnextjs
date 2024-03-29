import React from 'react';
import LoginForm from './loginForm';

const LoginPage: React.FC = () => {
    
    const onSuccess = async () => {
        console.log('asd');
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-300">
            <div className="max-w-lg w-full px-6 bg-white shadow-lg p-10 border-t-8 border-indigo-500 ">
                <h2 className="text-3xl font-semibold mb-6">Login</h2>
                <LoginForm onSuccess={onSuccess} />
            </div>
        </div>
    );
};

export default LoginPage;