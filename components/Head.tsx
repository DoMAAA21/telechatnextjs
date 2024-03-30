import Head from 'next/head';

interface HeadProps {
    title: string;
    description: string;
}

const HeadComponent: React.FC<HeadProps> = ({ title, description }) => (
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
    </Head>
);

export default HeadComponent;
