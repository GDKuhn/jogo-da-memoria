import React from "react";

export default function GameOver(props) {
	return props.show ? (
		<div id="gameOver">
			<div>PARABÉSN GRAN GORI!</div>
			<button id="restart" onClick={props.handleRestart}>
				RESTART
			</button>
		</div>
	) : (
		<></>
	);
}
