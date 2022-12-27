import '../styles/globals.css'
import { createReactClient, studioProvider,LivepeerConfig } from '@livepeer/react';


const client = createReactClient({
  provider: studioProvider({ apiKey: 'c2e0b46b-fbb2-4e1e-8228-316d92987d15' }),
});


function MyApp({ Component, pageProps }) {
  return (
    <LivepeerConfig client={client}>
    <Component {...pageProps} />
    </LivepeerConfig>
  );
}

export default MyApp



