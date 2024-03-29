import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { registerUser } from '@/api/auth';
import { errorMsg } from '@/components/layout/toast';

interface RegisterFormProps {
    onSuccess: () => void;
}

interface NewUser {
    username: string;
    email: string;
    password: string;
    fname: string;
    lname: string;
    number: string;
}
const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess }) => {
    const { register, handleSubmit } = useForm<NewUser>();
    const { mutate: submitRegister, isPending, error } = useMutation({
        mutationFn: registerUser,
        onError: (error) => {
            errorMsg(error)
        }
    });

    if (error) {
        errorMsg(error);
    }

    const handleFormSubmit = async (data: NewUser) => {
        try {
            await submitRegister(data);
            onSuccess();
        } catch (error) {

            console.error('Login failed:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Username
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    {...register('username', { required: true })}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    placeholder="Enter your email"
                    {...register('email', { required: true })}
                />
            </div>


            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    {...register('password', { required: true })}
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fname">
                    First Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="fname"
                    type="text"
                    placeholder="Enter your fname"
                    {...register('fname', { required: true })}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lname">
                    Last Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="lname"
                    type="text"
                    placeholder="Enter your lname"
                    {...register('lname', { required: true })}
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
                    Number
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="number"
                    type="text"
                    placeholder="Enter your number"
                    {...register('number', { required: true })}
                />
            </div>
            <button
                className="bg-indigo-500 w-full hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={isPending}
            >
                {isPending ? 'Logging in...' : 'Register'}
            </button>
        </form>
    );
};

export default RegisterForm;
