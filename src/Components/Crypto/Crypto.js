import axios from "axios";
import React, {Component} from "react";
import CryptoList from "./CryptoList/CryptoList";

class Crypto extends Component{
	constructor(props){
		super(props);
		this.state = {
			cryptoList: []
		}
	}
	
	componentDidMount() {
		this.getData();

		setInterval(() =>{
			this.getData()
		}, 5000);
	}

	getData = () =>{
		axios.get("https://blockchain.info/pl/ticker")
		.then(response => {
			const { data } = response;
			let newCryptoList = [];
			const oldCryptoList = this.state.cryptoList;

			Object.keys(data).map(currency =>{
				const newObject = {
					currency: currency,
					lastRate: data[currency].last,
					symbol: data[currency].symbol,					
				};

				let oldObject = oldCryptoList.find(oldObject => {
					if (oldObject.currency === newObject.currency) return oldObject;
					return {};
				});
				if (oldObject) {
					
					newObject.class = "blue";

					if (oldObject.lastRate < newObject.lastRate){
						newObject.class = "green";
					}
					else if(oldObject.lastRate > newObject.lastRate){
						newObject.class = "red";
					}
				}
				newCryptoList.push(newObject);

				return null;
			});
			this.setState({cryptoList: newCryptoList});
		})
		.catch(function(error){
			console.log(error);
		});
	}
	
	render(){
		return(
			<CryptoList crypto={this.state.cryptoList}/>
		);
	}
}

export default Crypto;