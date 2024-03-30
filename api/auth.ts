import axios from 'axios';

interface NewUser {
    username: string;
    email: string;
    password: string;
    fname: string;
    lname: string;
    number: string;
}
export const login = async (credentials: { username: string; password: string }) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/login`, credentials);
        return response.data;
    } catch (error) {
        throw new Error('Login failed');
    }
};


export const registerUser = async (NewUserData: NewUser) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/register`, NewUserData, config);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(error.response)
            throw error.response?.data?.message || 'An error occured';
        }
        throw new Error('Register failed');
    }
};