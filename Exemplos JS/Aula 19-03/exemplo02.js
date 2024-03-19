class Livro {
    constructor(pNome, pPreco){
        this.nome = pNome;
        this.preco = pPreco;
    }

    get Nome() {return this.nome;}
    set Nome(pNome) {this.nome = pNome;}
    get Preco() {return this.preco;}
    set Preco(pPreco) {this.preco = pPreco;}
}

var obj_livro1 = new Livro('Use a cabeça Java', 100);
console.log('O livro cujo nome é "' + obj_livro1.Nome + '" custa R$ ' + obj_livro1.Preco);