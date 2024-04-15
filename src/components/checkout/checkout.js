'use client';
import { useBasket } from '@/context/basket';
import styles from './checkout.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Checkout = () => {
	const { basket, addToBasket, cleanBasket, getProductsForBasket } =
		useBasket();

	const [basketItems, setBasketItems] = useState([]);
	const [productsFromBasket, setProductsFromBasket] = useState([]);
	const router = useRouter();

	useEffect(() => {
		const getProducts = async () => {
			let p = await getProductsForBasket();
			setProductsFromBasket(p);
		};

		getProducts();
	}, [getProductsForBasket]);

	const handleCheckout = async () => {
		try {
			const orderItems = basket.map((item) => ({
				id: item.id,
				amount: item.amount,
			}));

			console.log({ products: orderItems });

			const response = await fetch('/api/order', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					products: orderItems,
					created: new Date().toISOString(),
				}),
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.error('Error in handleCheckout:', error);
		}
		router.push('/thankyou');
	};

	return (
		<div className={styles.container}>
			<h1>Checkout</h1>
			{productsFromBasket.map((p) => {
				return (
					<div className={styles.products} key={p.id}>
						<Image src={p.image} alt={p.name} width={300} height={300} />
						{/* Display the product image */}
						<h2>{p.title}</h2> {/* Display the product title */}
						<p>${p.price.toFixed(2)}</p> {/* Display the product price */}
						{/* {p.amount} */}
					</div>
				);
			})}
			<div className={styles.checkoutSection}>
				{' '}
				<div className={styles.checkoutTotal}>
					{' '}
					<p>
						Total: $
						{productsFromBasket
							.reduce((total, p) => total + p.price * p.amount, 0)
							.toFixed(2)}
					</p>
				</div>
				<div className={styles.buttonContainer}>
					{/* <button onClick={(handleCheckout) => router.push('/thankyou</div>')}> </div> Checkout</button> */}
					<button type="button" onClick={handleCheckout}>
						Checkout
					</button>
				</div>
			</div>
		</div>
	);
	return (
		<div>
			<h1>Checkout</h1>
			{products.map((product, index) => (
				<div key={index}>
					<Image
						src={product.image}
						alt={product.name}
						width={300}
						height={300}
					/>
					<p>{product.name}</p>
					<p>{product.price}</p>
					<p>Quantity: {product.amount}</p>
					<button
						onClick={() => changeProductAmount(product.id, product.amount + 1)}
					>
						Increase Quantity
					</button>
					<button onClick={() => removeFromBasket(product.id)}>
						Remove from Basket
					</button>
				</div>
			))}
			<form>
				<label>
					Email:
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
				<label>
					Address:
					<input
						type="text"
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					/>
				</label>
				<button type="button" onClick={handleBuy}>
					Buy
				</button>
			</form>
		</div>
	);
};

export default Checkout;

{
	/* {basket.map((product) => {
      return (
        <div key={product.id}>
          Product {product.id} amount {product.amount}

          <div className={styles.productAmountSelector}>
            <button onClick={() => addToBasket(product.id, parseInt(product.amount) + 1)}>+1</button>
            <span>{product.amount}</span>
            <button onClick={() => addToBasket(product.id, parseInt(product.amount) - 1)}>-1</button>
          </div>
        </div>
      );
    })}

    <button onClick={() => cleanBasket()}>CLEAN BASKET</button> */
}
