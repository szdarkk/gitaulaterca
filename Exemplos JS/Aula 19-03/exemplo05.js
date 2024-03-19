class Livro {
    constructor(pNome, pPreco){
        this.nome = pNome;
        this.preco = pPreco;
    }

    get Nome() {return this.nome;}
    set Nome(pNome) {this.nome = pNome;}
    get Preco() {return this.preco;}
    set Preco(pPreco) {this.preco = pPreco;}

    calcularDescontoPercentual(percentualDesconto){
        const desconto = (this.preco * percentualDesconto) / 100;
        this.preco -= desconto;
    }
}

var obj_livro1 = new Livro('Use a cabeça Java', 120);
obj_livro1.calcularDescontoPercentual(70);
console.log('Nome: ' + obj_livro1.Nome + '\nPreço: R$' + obj_livro1.Preco.toFixed(2));
