const timeout = 1000  // tempo milisegundo, 1000 equivale a 1 segundo
const checking = () => console.log("checked!")
 
let interval = setInterval(checking, timeout);


setTimeout(() => clearInterval(interval), 5000);