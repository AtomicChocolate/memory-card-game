import React from "react";
import { CardImage } from "../utils/Types";

type Props = {
	image: CardImage;
};

const Card = (props: Props) => {
	return (
		<button className="card">
			<img src={props.image.url} alt={props.image.name} />
			<p>{props.image.name}</p>
		</button>
	);
};

export default Card;
