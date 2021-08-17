import Head from 'next/head';
import 'tailwindcss/tailwind.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <title>Next Starter Lite</title>
      </Head>
      <div className="subpixel-antialiased bg-white optimize-legibility text-gray-9">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default App;
