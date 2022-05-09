export const exp = document.createElement('div');
export const textarea = document.createElement('textarea');
let main = document.createElement('main');
let header = document.createElement('header');
let div_title = document.createElement('div');
let p_title = document.createElement('p');
let test = document.createElement('div');
//Classes
textarea.className = 'screen';
p_title.className = 'headerTitle';

//Adding into the document
document.body.append(header);
header.append(div_title);
div_title.append(p_title);
header.after(main);
main.append(textarea);


let keyboard = document.createElement('div');
keyboard.className = 'keyboard';

for (let i = 1; i <= 5; i++) {
	const keyboard_row = document.createElement('div');
	keyboard.append(keyboard_row);
	keyboard_row.classList.add('keyboard_row', 'row' + i);
	keyboard_row.id = 'row' + i;
}

main.append(keyboard);

const row1 = document.querySelector('.row1');
const row2 = document.querySelector('.row2');
const row3 = document.querySelector('.row3');
const row4 = document.querySelector('.row4');
const row5 = document.querySelector('.row5');


for (let i = 0; i < 14; i++) {
	let key = document.createElement('div');
	row1.append(key);
	key.classList.add('key', 'key1_' + i, 'active');
}

for (let i = 0; i < 15; i++) {
	let key = document.createElement('div');
	row2.append(key);
	key.classList.add('key', 'key2_' + i, 'active');
}

for (let i = 0; i < 13; i++) {
	let key = document.createElement('div');
	row3.append(key);
	key.classList.add('key', 'key3_' + i, 'active');
}

for (let i = 0; i < 13; i++) {
	let key = document.createElement('div');
	row4.append(key);
	key.classList.add('key', 'key4_' + i, 'active');
}

for (let i = 0; i < 9; i++) {
	let key = document.createElement('div');
	row5.append(key);
	key.classList.add('key', 'key5_' + i, 'active');
}

p_title.innerHTML = 'RSS виртуальная клавиатура';




