const pai = { nome: 'Pedro', corCabelol: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true}
})


console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

// Teste para puxar somente os atributos que não vem do protótipo
for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança ${key}`)
}