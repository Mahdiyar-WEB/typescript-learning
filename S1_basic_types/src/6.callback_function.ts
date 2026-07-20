const logAfterDelay = (
  message: string,
  delay: number,
  callbackFn: (input: string) => void,
) => {
  setTimeout(() => callbackFn(message), delay);
};

logAfterDelay("test", 2000, (message: string) => {
  console.log("the delayed message is: " + message);
});
