import { exp } from './body.js';
import { textarea } from "./body.js";

function presser(event) {
	if(textarea === document.activeElement){
		return 0;
	}
	else {
		if (event.key === 'Control' || event.key === 'Alt' || event.key === 'Meta' || event.key === 'Shift'){
			event.preventDefault();
		}
		else if (event.key === 'ArrowLeft'){
			textarea.value += String.fromCharCode('9668');
			event.preventDefault();
		}
		else if (event.key === 'ArrowUp'){
			textarea.value += String.fromCharCode('9650');
			event.preventDefault();
		}
		else if (event.key === 'ArrowRight'){
			textarea.value += String.fromCharCode('9658');
			event.preventDefault();
		}
		else if (event.key === 'ArrowDown'){
			textarea.value += String.fromCharCode('9660');
			event.preventDefault();
		}
		else if (event.key === 'Enter'){
			textarea.value += '\r\n';
		}
		else if(event.key === 'Tab'){
			textarea.value += '    ';
			event.preventDefault();
		}
  else if (event.key === 'Backspace' || event.key === 'Delete') {
    const text = textarea.value;
    const back = text.substring(0, text.length - 1);
    textarea.value = back;
		console.log('1');
    }
  else {
		console.log('2');
		textarea.value += event.key;
	}
}
}

window.addEventListener('keydown', presser);