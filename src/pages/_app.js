import Head from 'next/head';
import NavBar from '../components/navigaion/nav';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';

import SocketProvider, { SocketContext } from '../context/socketContext';

export default function App({ Component, pageProps }) {
  return (
    <SocketProvider store={SocketContext}>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="chaty app" />
        <title>chaty app</title>
      </Head>
      <ThemeProvider attribute="class">
        <NavBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </SocketProvider>
  );
}
