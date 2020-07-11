import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
import Loader from "../Components/Loader"
import useAxios from "../Hooks/requests"

function Product() {
	const { id } = useParams()

	const URL = `https://jsonplaceholder.typicode.com/users/${id}`

	const product = useAxios(URL)

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
