const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("click", clickButton));

window.addEventListener("keydown", pushButton);

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

function pushButton(e) {
	const audio = document.querySelector(`
          audio[data-key="${e.keyCode}"]`);

	const key = document.querySelector(`
          .key[data-key="${e.keyCode}"]`);
	console.log(key);
	playSound(audio, key);
}

function clickButton(e) {
	const dataKey = this.getAttribute("data-key");

	const audio = document.querySelector(`audio[data-key = "${dataKey}"]`);

	const key = document.querySelector(`
          .key[data-key="${dataKey}"]`);

	playSound(audio, key);
}

function playSound(audio, key) {
	if (!audio) return; //Stop the function
	audio.currentTime = 0; // rewind to the start
	audio.play(); //start playing
	key.classList.add("playing"); //add css effecst
}

function removeTransition(e) {
	if (e.propertyName !== "transform") return; //skip if it's not transform
	this.classList.remove("playing");
}

//Change theme
const btn = document.getElementById("btn");
btn.addEventListener("click", changeTheme);

function changeTheme(e) {
	const html = document.querySelector("html");
	if (html.classList.contains("dark")) {
		html.classList.remove("dark");
		e.target.innerHTML = "Dark mode";
	} else {
		html.classList.add("dark");
		e.target.innerHTML = "Light mode";
	}
}

let first =
	"1. Разобраться в коде чужого проекта, понять его, воспроизвести исходное приложение - 10 баллов.";
let second =
	"2. Дополнить приложение возможностью проигрывать звуки не только при нажатии клавиш на клавиатуре, но и при кликах мышкой - 10 баллов.";
let third = "3. Возможность переключать тёмную светлую тему - 10 баллов.";

console.log(`%c${first}  \n${second}  \n${third}`, `color: orange`);
