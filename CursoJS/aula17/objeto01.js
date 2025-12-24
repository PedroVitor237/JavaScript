let pessoa = {
    nome: 'John',
    sexo: 'M',
    peso: 75.4,
    altura: 1.75,
    engordar(p=0) {
        console.log('Engordou')
        this.peso += p
    }, //Sempre usar vírgula para separar os atributos, mesmo quando forem funções
    idade: 30 //último atributo não precisa de vírgula
}

console.log(pessoa)
pessoa.engordar(2)
console.log(`${pessoa.nome} pesa ${pessoa.peso}kg`)
