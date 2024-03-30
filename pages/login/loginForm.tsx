import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { login } from '@/api/auth';
import { errorMsg } from '@/components/toast';

interface LoginFormProps {
    onSuccess: () => void;
}

interface FormData {
    username: string;
    password: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
    const { register, handleSubmit } = useForm<FormData>();
    const { mutate: submitLogin, isPending, error } = useMutation({ mutationFn: login });

    if (error) {
        errorMsg(error);
    }

    const handleFormSubmit = async (data: FormData) => {
        try {
            await submitLogin(data);
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
                {isPending ? 'Logging in...' : 'Sign In'}
            </button>
        </form>
    );
};

export default LoginForm;
