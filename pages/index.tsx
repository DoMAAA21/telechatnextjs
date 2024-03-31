import { useEffect } from "react";
import Layout from "@/components/layout";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/router";

const Home = () => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login');
        }
    }, [isAuthenticated, router]);

    if(!isAuthenticated){
        return
    }

    return (
            <h1 className="text-3xl font-semibold">Hello Mga Tanga edi mag NextJs na tayo</h1>
    );
}

export default Layout(Home);
