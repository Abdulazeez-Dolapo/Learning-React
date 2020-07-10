import React, { useState, useEffect } from "react"
import axios from "axios"
import Loader from "../Components/Loader"
import Card from "../Components/ProductCard"

function Home() {
	const [products, setProducts] = useState({
		loading: true,
		data: null,
		error: false,
	})
	const URL = `https://jsonplaceholder.typicode.com/users`

	useEffect(() => {
		setProducts({
			loading: true,
			data: null,
			error: false,
		})
		axios
			.get(URL)
			.then(res => {
				setProducts({
					loading: false,
					data: res.data,
					error: false,
				})
			})
			.catch(err => {
				setProducts({
					loading: false,
					data: null,
					error: true,
				})
			})
	}, [URL])

	let content = null

	if (products.loading) {
		content = <Loader />
	}

	if (products.data) {
		content = products.data.map(product => (
			<div key={product.id}>
				<Card product={product} />
			</div>
		))
	}

	if (products.error) {
		content = (
			<div>
				<h1 className="text-2xl font-bold mb-3">
					Sorry!! Products can not be found. Please refresh or try again
					later.
				</h1>
			</div>
		)
	}

	return (
		<div>
			<h1>{content}</h1>
		</div>
	)
}

export default Home
