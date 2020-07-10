import React from "react"
import { Link } from "react-router-dom"

function Card(props) {
	return (
		<Link to={`/product/${props.product.id}`}>
			<div className="border mb-4 p-3  rounded overflow-hidden">
				<div>{props.product.name}</div>
				<div>{props.product.email}</div>
				<div>{props.product.phone}</div>
			</div>
		</Link>
	)
}

export default Card
