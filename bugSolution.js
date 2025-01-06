function myFunc() {
  const argsArray = Array.from(arguments);
  argsArray.forEach(arg => {
    console.log(arg);
  });
}

// Or using spread syntax
function myFunc2(...args) {
  args.forEach(arg => {
    console.log(arg);
  });
}

myFunc(1,2,3);
myFunc2(1,2,3);