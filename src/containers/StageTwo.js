import React, { Component } from 'react';
import '../styles/StageTwo.css';

class StageTwo extends Component {
	constructor() {
		super();
		this.state = {
			show: ''
		};
		this.handleBack = this.handleBack.bind(this);
	}

	handleBack() {
		this.props.resetState();
	}

	componentDidMount() {
		this.setState({ show: 'stage-two-hide' });
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.isVisible !== this.props.isVisible) {
			this.setState({
				show: this.props.isVisible ? 'stage-two-hide' : 'stage-two-show'
			});
		}
	}

	render() {
		return (
			<div className={[ 'stage-two-container', this.state.show ].join(' ')}>
				<span>Selected user: {this.props.selectedUser}</span>
				<div className="button-back-container">
					<button onClick={this.handleBack}>Back</button>
				</div>
			</div>
		);
	}
}

export default StageTwo;
