import React from "react"
import Loader from "../Components/Loader"
import Card from "../Components/ProductCard"
import useAxios from "../Hooks/requests"

function Home() {
	const URL = `https://jsonplaceholder.typicode.com/users`

	let products = useAxios(URL)

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
