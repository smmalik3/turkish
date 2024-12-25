import '../styles/globals.css';
import '../styles/FlipAnimation.css'; // Import the global CSS here

import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;