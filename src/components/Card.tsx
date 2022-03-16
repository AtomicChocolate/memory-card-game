import React from "react";
import { CardImage } from "../utils/Types";

type Props = {
	data: CardImage;
	onClick: () => void;
};

const Card = (props: Props) => {
	return (
		<button className="card" onClick={props.onClick}>
			<img src={props.data.url} alt={props.data.name} />
			<p>{props.data.name}</p>
		</button>
	);
};

export default Card;
