import styled from "styled-components";
import Button from "./Button";
import TinyButton from "./TinyButton";


// el keypad, recibira las funciones que aplicaran la logica de negocio como props
export const Keypad = ( props ) => {
	
// array con caracteres para la funcion que genera la botonera	
	const characters = ["C", "/", "x", "-", "7", "8", "9", "+", "4", "5", "6", "1", "2", "3", "=", "0", "." , "←"];
	
	const createKeypad = (array)=> {
		return (
			array.map((e) => (
				<Button 
				content={e} 
				onClickButton={ defineFunction(e) }
				/>
			))
		)
	}

// define segun el valor, que funcion pasa al componente boton
	const defineFunction = (e)=> {
		switch (e) {
			case "=":
				return props.onClickEval;
			case "←":
				return props.onClickDel;
			case "C":
				return props.onClickClear;
			case ".":
				return props.onClickPoint;
			default:
				return props.onClickAdd;
		}
	}

	return (
/* El Keypad se compone de dos partes:
		tira de botones de memoria
		numeros y botones de operacion
		*/
		<KeyPadStyled>

			<MemoryStripStyled>
				<TinyButton content="MS" onClickButton={props.onClickSetMemory} />
				<TinyButton content="MC" onClickButton={props.onClickClearMemory} />
				<TinyButton content="MR" onClickButton={props.onClickRecoverMemory} />
			</MemoryStripStyled>

			{ createKeypad(characters) }

		</KeyPadStyled>
	);	
};


/* Estilos del keypad con styled components para hacer mas modularizable la calculadora.
La calculadora esta armada con display grid.Facil de plantear y responsive como pocos */
const KeyPadStyled = styled.div`
	display: grid;
	grid-template-rows: 40px repeat(5, 80px);
	grid-template-columns: repeat(4, 1fr);
	padding: 10px;
	grid-gap: 10px;
`;

/* 
  Tira donde van los botones de memoria (TinyButton)
  Flexbox nos ayuda a distribuirlos sin estar atados al grid del keypad 
 */
const MemoryStripStyled = styled.div`
	display: flex;
    justify-content: space-around;
	grid-column: span 4;
`;

