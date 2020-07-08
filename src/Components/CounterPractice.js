import React, { useState } from "react"

function CounterPractice() {
	const [number, multiplyBy2] = useState(2)
	// const [, divideBy2] = useState(2)
	return (
		<div>
			<h1>{number}</h1>
			<h1 onClick={() => multiplyBy2(number * 2)}>Multiply By 2</h1>
			<h1 onClick={() => multiplyBy2(number / 2)}>Divide by 2</h1>
		</div>
	)
}

export default CounterPractice
