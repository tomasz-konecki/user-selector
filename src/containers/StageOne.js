import React, { Component } from 'react';
import '../styles/StageOne.css';

class StageOne extends Component {
	constructor() {
		super();

		this.state = {
			show: '',
			searchText: ''
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleInput = this.handleInput.bind(this);
	}

	componentDidMount() {
		this.setState({ show: 'stage-one-show' });
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.isVisible !== this.props.isVisible) {
			this.setState({
				show: this.props.isVisible ? 'stage-one-hide' : 'stage-one-show'
			});
		}
	}

	handleInput(e) {
		this.setState({ searchText: e.target.value });
	}

	handleClick(e) {
		// console.log('You wrote: ', this.state.searchText);
		this.props.setSelectedUser(this.state.searchText);
	}
	render() {
		return (
			<div className={[ 'stage-one-container', this.state.show ].join(' ')}>
				<input name="user" type="text" onChange={this.handleInput} />
				<input type="button" value="Search" onClick={this.handleClick} />
			</div>
		);
	}
}

export default StageOne;
