
import React from 'react';
import Thesis from './Thesis';
import Description from './Description';
import Header from './Header';

class Adventure extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			description: "",
			counter: 0,
			srcCounter: 0,
			arr: this.props.arr,
			len: this.props.arr.length
		}

	}

	onClickDisplay = (event) => {

		if (this.state.counter === 0) {
			this.setState({
				description: this.props.description,
				counter: 1
			});
		}
		else if (this.state.counter === 1) {
			this.setState({ 
				description: "",
				counter: 0 });
		}

	}

	onClickChangeImage = (event) => {
		
		if (this.state.srcCounter +1 < this.state.len) {
			let a = this.state.srcCounter +1;
			this.setState({ srcCounter: a });
		}
		else {
			this.setState({ srcCounter: 0 });
		}
	}

	render() {
	return(
		<div className="adventureContainer" >
			<img src={this.state.arr[this.state.srcCounter]} alt={this.props.alt} onClick={this.onClickChangeImage}/>
			<div className="coverDiv" onClick={this.onClickDisplay}>
			<Header header={this.props.header} />
			<Thesis thesis={this.props.thesis}/>
			</div>
			<Description description={this.state.description}/>
		</div>
	);
	}
}

export default Adventure;


