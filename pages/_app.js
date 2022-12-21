import '../styles/globals.css'
import { createReactClient, studioProvider,LivepeerConfig } from '@livepeer/react';


const client = createReactClient({
  provider: studioProvider({ apiKey: '22d7a2a1-79b0-4d1d-a547-7924a8522dd2' }),
});


function MyApp({ Component, pageProps }) {
  return (
    <LivepeerConfig client={client}>
    <Component {...pageProps} />
    </LivepeerConfig>
  );
}

export default MyApp



