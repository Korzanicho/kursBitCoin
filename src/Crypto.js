import React, {Component} from "react";
import CryptoList from "./CryptoList";
import axios from "axios";

class Crypto extends Component{
	constructor(props){
		super(props);
		this.state = {
			cryptoList : []
		}
	}
	
	componentDidMount(){ //służy do uruchamiania funkcji 
			this.getData();
			setInterval(() =>{
				this.getData()
			},5000);
	}
		
	getData = () =>{
			axios.get("https://blockchain.info/pl/ticker")
			.then(response => {
				let data = response.data;
				let newCryptoList = [];
				let oldCryptoList = this.state.cryptoList;
				Object.keys(data).map(waluta =>{
					let newObject = {
						waluta : waluta,
						lastRate : data[waluta].last,
						symbol : data[waluta].symbol,					
					};
					let oldObject = oldCryptoList.find(oldObject => {
						if(oldObject.waluta === newObject.waluta) return oldObject;
					});
					if(oldObject !== undefined){
						
						if(oldObject.lastRate < newObject.lastRate){
							newObject.class = "green";
						}
						else if(oldObject.lastRate>newObject.lastRate){
							newObject.class = "red";
						}
						else{
							newObject.class = "blue";
						}
					}
					console.log(oldObject);
					newCryptoList.push(newObject);
					return null;
				});
				this.setState({cryptoList : newCryptoList});
				// console.log(this.state.cryptoList);
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