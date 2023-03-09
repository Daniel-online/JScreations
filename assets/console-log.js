let numeroInicial = 0
var numeroInicialwrapper = document.getElementById('numeroInicial')

function increment() {
  numeroInicial++
  numeroInicialwrapper.innerHTML = numeroInicial
}

function decrement() {
  numeroInicial--
  numeroInicialwrapper.innerHTML = numeroInicial
}
function test() {
  alert('test')
}
