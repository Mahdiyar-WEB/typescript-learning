//define same functions with same name with different inputs type to define output in all scenarios

type InputType = string | number;

function sumFunc(a: number, b: number): number;
function sumFunc(a: string, b: string): string;
function sumFunc(a: string, b: number): string;
function sumFunc(a: number, b: string): string;
function sumFunc(a: InputType, b: InputType) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

//as you can see we defined all the scenarios for output now ts can guess the output type so we can use ts intel
let result;

result = sumFunc(1, 2);
result.toFixed(2);

result = sumFunc("mahdiyar", "marvi");
result.toUpperCase();

result = sumFunc("mahdiyar", 2);
result.toUpperCase();

result = sumFunc(2, "mahdiyar");
result.toUpperCase();
