//cleartimeout cancela timeout

const timeout = 3000  // tempo milisegundo, 1000 equivale a 1 segundo
const finished = () => console.log("done!")

let timer = setTimeout(finished, timeout)
clearTimeout(timer)

