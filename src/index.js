import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
  document.getElementById('root')
);


/* README
---------------------------------
		La App principal, se compone de estos componentes:

					App
					/  \
				   /    \
				  /      \
			Display    Keypad
					   /   \
					  /	    \
				TinyButton    Button

Por cuestiones de mejorar la lectura, las constantes con los styled components
iran al final de cada componente
*/