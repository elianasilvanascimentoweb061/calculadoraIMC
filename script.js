const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () =>{
  if (altura.value != '' && peso.value != ''){
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
    let classificacao = ''
    if(imc<18.5){
			classificacao = "Abaixo do peso";
		}
    if(imc>18.5 && imc<24.9){
      classificacao = " Peso normal";
    }
    if(imc>25 && imc<29.9){
      classificacao = " Sobrepeso";
    }
    if(imc>30 && imc<34.9){
      classificacao = " Obesidade grau 1";
    }
    if(imc>35 && imc<39.9){
      classificacao = " Obesidade grau 2";
    }
    if(imc>40){
      classificacao = " Obesidade grau 3";
    }

    resultado.innerHTML = `IMC: ${imc} (${classificacao})`
  }else{
    resultado.innerHTML = "Preencha os campos"
  }
}