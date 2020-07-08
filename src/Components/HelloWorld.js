import React from "react"

// function HelloWorld(props) {
// 	return <h1>Hello {props.name}</h1>
// }

class HelloWorld extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello {this.props.name}</h1>
			</div>
		)
	}
}
export default HelloWorld
