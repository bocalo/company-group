import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import AppLayout from './pages/AppLayout';
import PageNotFound from './pages/PageNotFound';
import CityList from './components/CityList';
import { useEffect, useState } from 'react';

const BASE_URL = 'http://localhost:4000/';

export default function App() {
	const [cities, setCities] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	useEffect(function () {
		async function fetchCities() {
			try {
				setIsLoading(true);
				const res = await fetch(`${BASE_URL}/cities`);
				const data = await res.json();
				setCities(data);
			} catch {
				alert('There was an error loading data...');
			} finally {
				setIsLoading(false);
			}
		}
		fetchCities();
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Homepage />} />
				<Route path="pricing" element={<Pricing />} />
				<Route path="product" element={<Product />} />
				<Route path="login" element={<Login />} />
				<Route path="app" element={<AppLayout />}>
					<Route index element={<CityList />} />
					<Route path="cities" element={<CityList />} />
					<Route path="contries" element={<p>Countries</p>} />
					<Route path="form" element={<p>Form</p>} />
				</Route>
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}
