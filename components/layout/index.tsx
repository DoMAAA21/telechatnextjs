import { ReactNode, useState } from 'react';
import Head from 'next/head';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="min-h-screen flex">
            <div className="flex-1 flex flex-col">
                <Head>
                    <title>TeleChat</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <header className="bg-white text-white py-8 px-6">
                    <button
                        className="block sm:hidden"
                        onClick={toggleSidebar}
                        aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
                    >
                        {isSidebarOpen ? 'Close' : 'Open'} Sidebar
                    </button>
                </header>

                <main className="flex-1 p-6 bg-gray-200">{children}</main>

            </div>
        </div>
    );
};

export default Layout;
