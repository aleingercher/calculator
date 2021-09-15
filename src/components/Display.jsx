import React from "react";
import styled from "styled-components";

export const Display = ({ value }) => {
	return (
		// uso el slice para que no se me salgan los numeros de la calculadora
		<DisplayStyled>{value.slice(0,14)}</DisplayStyled>
		
	);
};

const DisplayStyled = styled.div`
	font-size: 2.7em;
	font-weight: 300;
	text-align: right;
	padding-right: 20px;
	background-color: #4f4a4c;
	padding: 0.5em 0.2em;
	border-radius: 10px 10px 0 0;
`;

export default Display;
