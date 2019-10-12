import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Context
import {ProductContext, CartContext} from './context/ProductContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};

	return (
		
		<div className="App">
			<CartContext.Provider value={{cart}} >
			<ProductContext.Provider value={{products, addItem}} >
			<Navigation cart={cart} />
			{/* Routes */}
			<Route
				exact
				path="/"
				component={Products}
				
			/>
			</ProductContext.Provider>
			<Route
				path="/cart"
				component={ShoppingCart}
			/>
			</CartContext.Provider>
		</div>
		
	);
}

export default App;
