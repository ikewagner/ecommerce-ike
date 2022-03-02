import Head from 'next/head';
import { ProductCard } from '@/components/index';





import products from 'products';

export default function Home() {


  return (
    <div>
      <>
        <Head>
          <title
            E-commerce ike
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="container xl:max-w-screen-xl mx-auto py-12 px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map(product => (
             <ProductCard key={product.key} {...product} />
            ))}
          </div>
        </div>
      </>
    </div>
  )
}
