import errorCode from "./ErrorCodes";
import messages from "./Messages";
console.log();

const b = Object.keys(errorCode)
  .map(v => v.slice(v.indexOf("_") + 1))
  .map((v, i) => Array.apply(0, [v]).concat(Object.values(errorCode)[i]));


  console.log(b);

  const c = Object.keys(messages)
  .map(v => v.slice(v.indexOf("_") + 1))
  .map((v, i) => Array.apply(0, [v]).concat(Object.values(messages)[i]));
  console.log(c);