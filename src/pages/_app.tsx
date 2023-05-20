import { Inter, Space_Grotesk } from 'next/font/google';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });

const Fonts = createGlobalStyle`
    body {
        font-family: ${inter.style.fontFamily};
    }
`;

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Lei — Design Technologist</title>
            </Head>
            <Fonts />
            <Component {...pageProps} />
        </>
    );
}
