var numeroInicialwrapper = document.getElementById('numberInput')
var numeroInicial = 0
function increment() {
  numeroInicial = numeroInicial + 1
  numeroInicialwrapper.innerHTML = numeroInicial
}

function decrement() {
  numeroInicial = numeroInicial - 1
  numeroInicialwrapper.innerHTML = numeroInicial
  if ((numeroInicial = null)) {
    alert('Insira um número')
  }
}
