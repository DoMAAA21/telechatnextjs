import React from 'react';
import RegisterForm from './registerForm';
import Head from '@/components/Head';
const RegiserPage: React.FC = () => {

    const onSuccess = async () => {
        console.log('asd');
    };

    return (
        <>
            <Head title="Register" description="Register to telechat" />
            <div className="flex justify-center items-center h-[50rem] bg-gray-300">
                <div className="max-w-lg w-full px-6 bg-white shadow-lg p-10 border-t-8 border-indigo-500 ">
                    <h2 className="text-3xl font-semibold mb-6">Register</h2>
                    <RegisterForm onSuccess={onSuccess} />
                </div>
            </div>
        </>
    );
};

export default RegiserPage;
