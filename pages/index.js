import Head from 'next/head';
import Image from 'next/image';
import { Rating } from '@/components/index';
import products from 'products';
import { useShoppingCart } from '@/hooks/use-shopping-cart';
import { formatCurrency } from '@/lib/utils';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


export default function Home() {

  const { addItem } = useShoppingCart();

  return (
    <div>
      <>
        <Head>
          <title
            E-commerce ike
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="container mx-auto py-12 px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map(product => (
              <div
                key={product.sku}
                className="border rounded-md cursor-pointer p-6 group relative"
              >
                {/* Add to whishlist button */}
                <button
                  onClick={null}
                  className="absolute top-0 right-0 mt-2 mr-2 p-2 rounded-lg border-rose-100"
                >
                </button>

                {/* Product's image */}
                <div className="relative w-full h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>

                {/* Name + Rating */}
                <div className="mt-4 sm:mt-8">
                  <p className="font-semibold text-lg capitalize">
                    {product.name}
                  </p>
                  <Rating
                    rate={product?.rating?.rate}
                    count={product?.rating?.count}
                  />
                </div>

                {/* Price + CTA */}
                <div className="mt-4 flex items-center justify-between space-x-2">
                  <div>
                    <p className="text-gray-500">Preço</p>
                    <p className="text-lg font-semibold">
                      {formatCurrency(product.price, product.currency)}
                    </p>
                  </div>
                  <button onClick={() => addItem(product)} className="bg-rose-500 py-2 px-4 rounded inline-flex items-center text-center text-white ">
                  <FontAwesomeIcon icon={faCartShopping} className="w-4  " />
                    <span>Adicionar</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </div>
  )
}
