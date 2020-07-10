import React from "react"
import { Link } from "react-router-dom"

function NavigationMenu(props) {
	return (
		<div>
			<div className="font-bold py-3">This is the menu</div>
			<ul>
				<li>
					<Link
						to="/"
						onClick={props.closeMenu}
						className="text-blue-500 py-3 border-t border-b block"
					>
						Home page
					</Link>
				</li>
				<li>
					<Link
						to="/about"
						onClick={props.closeMenu}
						className="text-blue-500 py-3 border-b block"
					>
						About page
					</Link>
				</li>
				<li>
					<Link
						to="/product"
						onClick={props.closeMenu}
						className="text-blue-500 py-3 border-b block"
					>
						Product page
					</Link>
				</li>
			</ul>
		</div>
	)
}
export default NavigationMenu
