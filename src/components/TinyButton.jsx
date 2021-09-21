import styled from "styled-components";

export const TinyButton = ({ content, onClickButton }) => {
    
	return (
		<TinyButtonStyled
			onClick={() => onClickButton()}
		>	

			{content}
			
		</TinyButtonStyled>
	);
};

const TinyButtonStyled = styled.div`
	font-size: 1em;
	display: flex;
	align-items: center;
	justify-content: center;
	align-items: center;
	background-color: #555555;
    color: orange;
	/* width: 100%; */
	border-radius:50%;
    width:40px;
    height: 40px;
	cursor: pointer;
	user-select: none;

	&:hover {
		opacity: 0.7;
	}
`;

export default TinyButton;

