function formataMoeda(numero) {
	return numero.toFixed(2).replace(".", ",") 
}

function calcular() {
	distanciaKm = inputDistancia.value
	tempoMin = inputTempo.value
	valorCorrida = 2 + distanciaKm * 1.4 + tempoMin * 0.26
	botaoCalcular.innerHTML = 'Tota: R$' + formataMoeda(valorCorrida)
}

function voltarBotao () {
	botaoCalcular.innerHTML = 'Calcular'
}
