//your JS code here. If required.


let element = document.querySelector("#level");

let lvl = 0;
while (element) {
    lvl++;
    element = element.parentElement;
}

alert("The level of the element is: " + lvl);
