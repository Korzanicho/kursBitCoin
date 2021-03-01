import React, {Component} from "react";
import axios from "axios";
import './CryptoListItem.sass'

class CryptoListItem extends Component{
	constructor(props){
		super(props);
		this.state = {
			flag: '',
		}
	}

	componentDidMount() {
		this.getData();
	}

	getData = () =>{
		axios.get("https://restcountries.eu/rest/v2/currency/"+this.props.currency.currency)
		.then(response => {
			this.setState({flag: response.data[0].flag});
		})
		.catch(function(error){
			console.log(error);
		});
	}

	render() {
		return(
			<div className="CryptoListItem">
				<img src={this.state.flag} alt="Flag" className="CryptoListItem__flag"/>
				<span className="CryptoListItem__currency-name">{this.props.currency.currency}</span>
				<div className="CryptoListItem__content">
					<span className={this.props.currency.class}>{this.props.currency.lastRate} {this.props.currency.symbol}</span> 
				</div>
			</div>
		);
	}
}


export default CryptoListItem;