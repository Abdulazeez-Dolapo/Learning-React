import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
import Loader from "../Components/Loader"

function Product() {
	const { id } = useParams()
	const [product, setProduct] = useState({
		loading: true,
		data: null,
		error: false,
	})
	const URL = `https://jsonplaceholder.typicode.com/users/${id}`

	useEffect(() => {
		setProduct({
			loading: true,
			data: null,
			error: false,
		})
		axios
			.get(URL)
			.then(res => {
				setProduct({
					loading: false,
					data: res.data,
					error: false,
				})
			})
			.catch(err => {
				setProduct({
					loading: false,
					data: null,
					error: true,
				})
			})
	}, [URL])

	let content = null

	if (product.loading) {
		content = <Loader />
	}

	if (product.data) {
		content = (
			<div>
				<Link to={`/`}>Home</Link>
				<div className="border mb-4 p-3  rounded overflow-hidden">
					<div>{product.data.name}</div>
					<div>{product.data.email}</div>
					<div>{product.data.phone}</div>
				</div>
			</div>
		)
	}

	if (product.error) {
		content = (
			<div>
				<h1 className="text-2xl font-bold mb-3">
					Sorry!! Requested product does not exist
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

export default Product
