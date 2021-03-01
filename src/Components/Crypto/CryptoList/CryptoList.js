import React from "react";
import './CryptoList.sass';
import CryptoListItem from "./CryptoListItem/CryptoListItem";

const CryptoList = (props) => {
	return(
		<div className="CryptoList">
			{props.crypto.map(currency =>
				<CryptoListItem currency={currency} key={currency.currency} />
				)}
		</div>
	);
}

export default CryptoList;