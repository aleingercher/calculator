import { useState } from "react";
import Display from "./Display";
import { Keypad } from "./Keypad";
import styled from "styled-components";

export const App = () => {
	
	// genero un useState para el display
	const [result, setResult] = useState("0");

/*  junto a la funcion onclickPoint, 
	valido que no ocurra algo como esto:  32.15.18.186.
	Al tocar el punto, se setea a false.
	Cuando toco un simbolo, vuelve a true.
	Si pointAloud es false, en vez de agregar un "." agrega ""
	*/		 
	const [pointAloud, setPointAloud] = useState(true)

	const onClickPoint = () => {
		setPointAloud(false)
		// para que no borre el 0 cuando pongo un punto como primer caracter
		if (result === "0") return setResult(cAdd("0.")) ;		
		setResult(cAdd(pointAloud ? "." : ""))
	}

	// *****************************************************

	/* 
	Aca van las funciones especificas para los botones. 
	Las paso como props al keypad */

	/* . Agrega el content del target al toEvaluate (display)
	 Use regexp para que antes de agregar un elemento al resultado, 
	chequee que tenga el formato correspondiente para que no tire error luego el eval.
	Si no pasa esa prueba, devuelve el mismo que ingreso */
	const cAdd = (tecla) => {

		const exp = /^(\d+(\.)?(\d)*[x/+-]?)+$/g;

// al ingresar un operador, puedo volver a ingresar un punto
		if(isOperator(tecla)) {setPointAloud(true)}

		if (result !== "0") {
			if (exp.test(result)) {
				//  si el ultimo char era una operacion y tecla tambien ,reemplazo el ultimo char por tecla
				if (isOperator(result.slice(-1)) && isOperator(tecla)) {
					return result.slice(0, -1) + tecla;
				}
				// sino, la agrego
				return result + tecla;
			}

			// si no pasa el test, el resultado no cambia
			return result;
		}

		// si result era 0 y tecla es diferente a un simbolo, retorna su valor
		return tecla.match(/[/x+-]/) ? "0" : tecla;
	};

	// . borra de a un caracter. Si es el ultimo, retorna 0
	const cDel = () => {
		return valueToDisplay.length > 1
			? valueToDisplay.substring(0, valueToDisplay.length - 1)
			: setResult("0");
	};

	// . evalua la cuenta.
	const cEval = () => {
		setPointAloud(true);
		// no dejo que se evalue un string con una operacion al final
		const resultToEvaluate = isOperator(result.slice(-1))
			? cDel(result)
			: result;

		// reemplazo la x por el * para que pueda operar
		return eval(resultToEvaluate.replaceAll("x", "*")).toString();
	};

	// . guarda en localStorage el numero si no contiene operaciones
	const cSetMemory = () => {
		return /[-+x/]/g.test(result) ? null : localStorage.memoria = result;
	};

	// . si hay memoria salvada en localStorage, guarda su valor como content de la tecla MR
	const cRecover = () => {
		const memoria = localStorage.getItem('memoria')
		return memoria ? setResult(cAdd(memoria)) : null;
	};

	// . la uso para evaluar si un char es una operacion
	const isOperator = (char) => {
		// return char.match(/[/x+-]/);
		return /[/x+-]/.test(char);
	};

	// *****************************************************

	const valueToDisplay = result.slice(0, 11)

	return (
		<AppStyled>
			<Display value={valueToDisplay} />
			<Keypad
				onClickAdd={(e) => setResult(cAdd(e))}
				onClickClear={() => {setPointAloud(true); setResult("0")}}
				onClickDel={() => setResult(cDel)}
				onClickEval={() => setResult(cEval)}
				onClickSetMemory={() => cSetMemory()}
				onClickClearMemory={() => localStorage.removeItem('memoria')}
				onClickRecoverMemory={cRecover}
				onClickPoint= { ()=> onClickPoint() }
			/>
		</AppStyled>
	);
};

// ESTILOS

const AppStyled = styled.div`
	max-width: 20%;
	min-width: 300px;
	background-color: #111;
	color: white;
	border-radius: 10px;
	margin: 2em auto;
`;

export default App;
