import axios from 'axios';

export const login = async (credentials: { username: string; password: string }) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/login`, credentials);
        console.log(credentials);
        console.log(response);
        return response.data;
    } catch (error) {
        throw new Error('Login failed'); 
    }
};