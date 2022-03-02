import Link from 'next/link';
import Image from 'next/image';
import { useShoppingCart } from '@/hooks/use-shopping-cart';
import { formatCurrency } from '@/lib/utils';
import { XCircleIcon, MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline';

const Cart = () => {
    const { cartDetails, totalPrice, cartCount, addItem, removeItem, clearCart } =
        useShoppingCart();

    return (
        <div className="container xl:max-w-screen-xl mx-auto py-12 px-6">
            {cartCount > 0 ? (
                <>
                    <h2 className="text-4xl font-semibold">Meu Carrinho</h2>
                    <p className="mt-1 text-xl">
                        {cartCount} items{' '}
                        <button
                            onClick={clearCart}
                            className="opacity-50 hover:opacity-100 text-base capitalize"
                        >
                            (Limpar carrinho)
                        </button>
                    </p>
                </>
            ) : (
                <>
                    <h2 className="text-4xl font-semibold">
                        Seu carrinho de compras está vazio.
                    </h2>
                    <p className="mt-1 text-xl">
                        Confira nossos vapes incríveis{' '}
                        <Link href="/">
                            <a className="text-red-500 underline">Aqui!</a>
                        </Link>
                    </p>
                </>
            )}

            {cartCount > 0 ? (
                 <div className="mt-12">
                    {Object.entries(cartDetails).map(([key, product]) => (
                        <div
                            key={key}
                            className="flex justify-between space-x-4 hover:shadow-lg hover:border-opacity-50 border border-opacity-0 rounded-md p-4"
                        >
                            {/* Image + Name */}
                            <Link href={`/products/${product.sku}`}>
                                <a className="flex space-x-4 group">
                                    <div className="relative w-20 h-20 group-hover:scale-110 transition-transform">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            layout="fill"
                                            objectFit="contain"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-xl group-hover:underline">
                                            {product.name}
                                        </p>
                                        <p>
                                            <span className="text-gray-500">Product code: </span>
                                            {product.sku}
                                        </p>
                                    </div>
                                </a>
                            </Link>

                            {/* Price + Actions */}
                            <div className="flex items-center">
                                {/* Quantity */}
                                <div className="flex items-center space-x-3">
                                    <button
                                        onClick={() => removeItem(product)}

                                        className="disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-current hover:bg-rose-100 hover:text-rose-500 rounded-md p-1"
                                    >
                                        <MinusSmIcon className="w-6 h-6 flex-shrink-0" />
                                    </button>
                                    <p className="font-semibold text-xl">{product.count}</p>
                                    <button
                                        onClick={() => addItem(product)}
                                        className="hover:bg-green-100 hover:text-green-500 rounded-md p-1"
                                    >
                                        <PlusSmIcon className="w-6 h-6 flex-shrink-0 " />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-end border-t py-4 mt-8">
                        <p className="text-xl">
                            Total:{' '}
                            <span className="font-semibold">
                                {formatCurrency(totalPrice)}
                            </span>
                        </p>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Cart;