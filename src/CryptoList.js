import React from "react";
// import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

const CryptoList = (props) => {
	return(
		<div>
			<ul>
			{props.crypto.map(cerrency =>
					<li key={cerrency.waluta}>
						<strong>Last rate:</strong>
						<span>{cerrency.waluta}</span> 
						<span className={cerrency.class}>{cerrency.lastRate}</span> 
						[{cerrency.symbol}]
					</li>
				)}
			</ul>
		</div>
	);
}

export default CryptoList;