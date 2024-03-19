calcularIMC(70, 1.75);

function calcularIMC(locPeso, locAltura) {
    let imc = locPeso / (locAltura ** 2);
    imc = locPeso / (locAltura ** 2);
    resultadoIMC = imc.toFixed(2);

    //Abaixo de 18.5
    if (imc < 18.5) {
        console.log("Seu peso é de: " + locPeso);
        console.log("Sua altura é de: " + locAltura);
        console.log("Seu IMC é de: " + resultadoIMC + " - Você está com Desnutrição");
    } 

    //Entre 18.5 e 25
    else if (imc >= 18.5 && imc < 25) {
        console.log("Seu peso é de: " + locPeso);
        console.log("Sua altura é de: " + locAltura);
        console.log("Seu IMC é de: " + resultadoIMC + " - Você está com Peso normal");
    } 

    //Entre 25 e 30
    else if (imc >= 25 && imc < 30) {
        console.log("Seu peso é de: " + locPeso);
        console.log("Sua altura é de: " + locAltura);
        console.log("Seu IMC é de: " + resultadoIMC + " - Você está com Sobrepeso");
    } 

    //Entre 30 e 35
    else if (imc >= 30 && imc < 35) {
        console.log("Seu peso é de: " + locPeso);
        console.log("Sua altura é de: " + locAltura);
        console.log("Seu IMC é de: " + resultadoIMC + " - Você está com Obesidade I");
    } 

    //Entre 35 e 40
    else if (imc >= 35 && imc < 40) {
        console.log("Seu peso é de: " + locPeso);
        console.log("Sua altura é de: " + locAltura);
        console.log("Seu IMC é de: " + resultadoIMC + " - Você está com Obesidade II");
    } 

    //Acima de 40
    else if (imc >= 40) {
        console.log("Seu peso é de: " + locPeso);
        console.log("Sua altura é de: " + locAltura);
        console.log("Seu IMC é de: " + resultadoIMC + " - Você está com Obesidade III");
    } 

    else {
        console.log("Insira um valor válido");
    }
}