import React from 'react';
import SecDropDown from './SecDropDown';

class DropDown extends React.Component {
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
				<h1 onClick={this.toggleDropDown}>Click me plz ( ͡° ͜ʖ ͡°)</h1>
				{this.state.isOpen && <SecDropDown />}
			</div>
		)
	}
}

export default DropDown;