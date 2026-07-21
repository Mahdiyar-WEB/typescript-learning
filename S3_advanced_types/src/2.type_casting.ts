// convert type in ts
//we shouldn't use type casting when we're not sure about it!!!

//we can put ? because ts don't know this element has textContent or not
const paragraph = document.querySelector(".paragraph");
paragraph?.textContent;

//we can put ! in the end of selection to define this element have mentioned property
const paragraph1 = document.querySelector(".paragraph")!;
paragraph1.textContent;

//also we can set the element type
const paragraph2 = <HTMLParagraphElement>document.querySelector(".paragraph");
paragraph2.textContent;

//or set type like this
const button = document.querySelector(".button") as HTMLInputElement;
button.value;
