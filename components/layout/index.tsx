import React, { ReactNode, ComponentType } from 'react';
import Head from 'next/head';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex">
            <div className="flex-1 flex flex-col">
                <Head>
                    <title>TeleChat</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <header className="bg-white text-white py-8 px-6" />
                <main className="flex-1 p-6 bg-[#e4ebf5]">{children}</main>
            </div>
        </div>
    );
};

const withLayout = <P extends React.JSX.IntrinsicAttributes>(Component: ComponentType<P>): React.FC<P> => {
    return function WrappedComponent(props: P): React.ReactElement {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
}

export default withLayout;
