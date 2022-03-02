import '../styles/globals.css'
import { CartProvider } from '@/hooks/use-shopping-cart';
import { Header, Footer } from '@/components/index';
import { Toaster } from 'react-hot-toast';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
         <title>
           E-commerce ike shop
         </title>
         <meta
           name="description"
           content="E-commerce store built with Next.js and Stripe checkout by AlterClass.io"
         />
         <link rel="icon" href="/favicon.ico" />
       </Head>
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </CartProvider>
    <Toaster />
  </>
  );
}

export default MyApp
