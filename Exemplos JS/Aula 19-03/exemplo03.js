class Livro {
    constructor(pNome, pPreco){
        this.nome = pNome;
        this.preco = pPreco;
    }

    get Nome() {return this.nome;}
    set Nome(pNome) {this.nome = pNome;}
    get Preco() {return this.preco;}
    set Preco(pPreco) {this.preco = pPreco;}

    calcularDesconto(){
        this.preco = this.preco - 10;
    }
}

var obj_livro1 = new Livro('Use a cabeça Java', 100);
obj_livro1.calcularDesconto();
console.log('O livro cujo nome é "' + obj_livro1.Nome + '" custa R$ ' + obj_livro1.Preco + ',00');