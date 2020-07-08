import React from "react"
import "./App.css"
import HelloWorld from "./Components/HelloWorld"
import Header from "./Components/Header"
// import Counter from "./Components/Counter"
// import CounterPractice from "./Components/CounterPractice"

function App() {
	return (
		<div>
			{/* <Counter name="World" /> */}
			{/* <CounterPractice /> */}
			<Header />
			<HelloWorld name="World" />
		</div>
	)
}

export default App
