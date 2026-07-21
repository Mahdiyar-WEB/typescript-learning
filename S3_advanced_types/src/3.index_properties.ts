// the key and value type is defined

interface ResponseConfig {
  [key: string]: string;
}

const responseMsgsConfig: ResponseConfig = {
  success: "successful",
  unauthorized: "unauthorized",
  failed: "failed",
};

//or if you have another type
interface ResponseConfig1 {
  timeout: number;
  [key: string]: string | number;
}

const responseMsgsConfig1: ResponseConfig1 = {
  timeout: 1000,
  success: "successful",
  unauthorized: "unauthorized",
  failed: "failed",
};

//or we can defined it like this:
type Keys = "A" | "B" | "C";

type KeysConfig = {
  [keys in Keys]: string;
};

const options: KeysConfig = {
  A: "test1",
  B: "test2",
  C: "test3",
};
