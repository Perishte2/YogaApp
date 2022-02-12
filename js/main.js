/*
let age = document.getElementById('age');

function showUser(surname, name) {
    //let connect = showUser.call(age);
alert("Пользователь " + surname + " " + name + ", его возраст " + this.value );
}
showUser.apply(age, ['Горький', ' Максим']);

*/



//2 task
class Options { 
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	newDiv() {
		let elem = document.createElement('div');
		document.body.appendChild(elem);
		let params = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
		elem.style.cssText = params;
	}
}

const item = new Options(300, 350, "blue", 14, "center");

item.newDiv();