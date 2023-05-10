let upSize = document.getElementById('upSize')

let rMensal = document.getElementById('rMensal')

let pCompra = document.getElementById('pCompra')

let txtUpSize = document.getElementById('txtUpSize')

let txtRMensal = document.getElementById('txtRMensal')

let txtPCompra = document.getElementById('txtPCompra')

let txtRentMetro = document.getElementById('txtRentMetro')

let txtPrecoMetro = document.getElementById('priceMetro')

function calcular() {
  rentMetro = rMensal.value / upSize.value
  priceMetro = pCompra.value / upSize.value

  console.log(rentMetro)
  console.log(priceMetro)

  txtUpSize.innerHTML = upSize.value
  txtRMensal.innerHTML = rMensal.value
  txtPCompra.innerHTML = pCompra.value
  txtRentMetro.innerHTML = rentMetro
  txtPrecoMetro.innerHTML = priceMetro
}
