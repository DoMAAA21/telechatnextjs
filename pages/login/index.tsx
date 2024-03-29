import React from 'react';
import LoginForm from './loginForm';

const LoginPage: React.FC = () => {
    const onSuccess = async () => {
        console.log('asd');
    };

    return (
        <div className="flex justify-center items-center h-screen bg-[#ebf0f7]">
            <div className="max-w-lg w-full px-6 bg-white rounded-md shadow-lg p-10 border-t-4 border-indigo-500 ">
                <h2 className="text-3xl font-semibold mb-6">Login</h2>
                <LoginForm onSuccess={onSuccess} />
            </div>
        </div>
    );
};

export default LoginPage;
