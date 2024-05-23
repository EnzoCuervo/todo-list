var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// add item to list
function createListElement() {
    var div = document.createElement("div");
    var li = document.createElement("li");
    var buttons = createButtons();
    div.classList.add("wrapper");
    ul.appendChild(div);
    div.append(li);
    li.appendChild(document.createTextNode(input.value));
    li.append(buttons[0], buttons[1]);
    input.value = "";
}

function inputLength() {
    return input.value.length;
}

function createButtons() {
    var doneBtn = document.createElement("button");
    var delBtn = document.createElement("button");
    doneBtn.innerHTML = "done";
    delBtn.innerHTML = "delete";
    doneBtn.classList = "doneClass";
    delBtn.classList = "del";
    return [doneBtn, delBtn]
}

function addListAfterClick() {
    if (0 < inputLength() && inputLength() < 64) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (0 < inputLength() && inputLength() < 64 && event.key === "Enter") {
        createListElement();
    }
}

function doneTask(task) {
	if (task.target.tagName === "LI") {
		task.target.classList.toggle("done");
	}
}

function doneBtnClick(task) {
	if (task.target.className === "doneClass") {
		task.target.parentElement.classList.toggle("done");
	}
}

function deleteListElement(element) {
	if (element.target.className === "del") {
		element.target.parentElement.remove();
	}
}

function handleUlClick (target) {
    doneTask(target);
    doneBtnClick(target);
	deleteListElement(target);
}

ul.addEventListener("click", handleUlClick);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
