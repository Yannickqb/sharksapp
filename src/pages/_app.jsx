import '../app/styles/globals.css';
import Nav from '@/app/components/Nav';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
