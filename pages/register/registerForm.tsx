import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { registerUser } from '@/api/auth';
import { errorMsg } from '@/components/toast';


interface User {
    username: string;
    email: string;
    password: string;
    fname: string;
    lname: string;
    number: string;
}

interface RegisterFormProps {
    onSuccess: (data: User) => void;
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
    const { register, handleSubmit, formState: { errors } } = useForm<NewUser>();
    const { mutate: submitRegister, isPending, reset, data } = useMutation({
        mutationFn: registerUser,
        onError: (error) => {
            errorMsg(error)
        },
        onSuccess: () => {
            onSuccess(data);
        },
        onSettled: () => {
            reset();
        }
    });

    const handleFormSubmit = async (data: NewUser) => {
        try {
            submitRegister(data);
        } catch (error) {
            errorMsg(error)
        }
    };



    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            {Object.keys(errors).length > 0 && (
                <span className="text-red-500 text-sm">
                    {Object.keys(errors).some(fieldName => errors[fieldName as keyof NewUser]?.type === 'required') &&
                        '**Missing fields required.'}
                </span>
            )}


            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fname">
                    First Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="fname"
                    type="text"
                    placeholder="Enter your first name"
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
                    placeholder="Enter your last name"
                    {...register('lname', { required: true })}
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
                    Phone Number
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="number"
                    type="text"
                    placeholder="Enter your number"
                    {...register('number', {
                        required: true,
                        pattern: {
                            value: /^0\d{10}(?:\*{6})?$/,
                            message: 'Please enter a valid phone number.'
                        }
                    })}
                />
                {errors.number && <span className="text-red-500 text-sm">{errors.number.message}</span>}
            </div>

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
                    {...register('email', {
                        required: true,
                        pattern: {
                            value: /^\S+@\S+\.\S+$/,
                            message: 'Please enter a valid email address.'
                        }
                    })}
                />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
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
