import React from 'react';


class SecDropDown extends React.Component {
	state = {
		isOpen: false,
	}

	toggleDropDown = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
	render() {
		return (
			<div>
				<h3 onClick={this.toggleDropDown}>FUCK OFF, FUCKIN RETARD</h3>
				{this.state.isOpen && <h5>YOU GET ME, SON OF A BITCH?</h5>}
			</div>
		)
	}
}

export default SecDropDown;