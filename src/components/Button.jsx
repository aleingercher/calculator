import React from "react";
import styled from "styled-components";

export const Button = ( { content, onClickButton } ) => {
	const symbols = ["+", "-", "/", "x", "="];

	/*# funciones */
	const isOperation = (e) => symbols.includes(e);
	const isTall = (e) => ["+", "="].includes(e);

	return (
		<ButtonStyled
			className={`${isTall(content) ? "tall" : null}
						 ${isOperation(content) ? "painted" : null}`}
			onClick={() => onClickButton(content)}
		>
			{content}
		</ButtonStyled>
	);
};

const ButtonStyled = styled.div`
	font-size: 1.5em;
	display: flex;
	align-items: center;
	justify-content: center;
	align-items: center;
	background-color: #333;
	/* width: 100%; */
	border-radius: 5px;
	cursor: pointer;
	user-select: none;

	&:hover {
		opacity: 0.7;
	}
`;

export default Button;
