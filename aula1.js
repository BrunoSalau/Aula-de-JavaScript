let professores = [
    {
        nome: "Flavin",
        idade: 2,
        serie: "masculino",
        rico: false
    },
    {
        nome: "Gotin",
        idade: 54,
        serie: "babaduuir",
        rico: true
    },
    {
        nome: "Papu",
        idade: 5798,
        serie: "Maconha",
    },
    {
        nome: "Palito",
        idade: 5,
        serie: "Coxinha",
    },
    {
        nome: "gotin",
        idade: 54,
        serie: "babaduuir",
    },
    {
        nome: "Gaput",
        idade: 98,
        serie: "careca",
    },
];

console.log('Tipo:' + typeof professores);
console.log('Valor:', professores);
console.log('Nome:', professores[3].nome);
console.log('Idade:', professores[3].idade);


professores[2].nome = "flavio";

console.log(professores[2].nome);

let curso = {
    curso: 'ADS',
    intituição: 'positivo'
}

console.log(professores);

curso.professores = professores;
console.log(curso);
console.log(curso.professores[2].nome);

function saudação(){
    console.log('Vamooo');
}

saudação();

function pessoas(nome = "Anonimo"){
    console.log(`Eae fulando, meu nome é ${nome} e tenho pernas e praços`)
}

pessoas();
pessoas("Flavin");

let fruita = "abavaxi";
console.log("Tipo: ", typeof fruita);
fruita = "banana" + 123;
console.log("Tipo: ", typeof fruita);

let idade = 22;
console.log("Tipo idade: ", typeof idade)
idade = 23 + "aboboras";
console.log("Novo tipo de idade:", typeof idade)



let preco = 23.34;
console.log("Tipo de preco: ", typeof preco);

console.log(typeof String(preco));
//OU
let novoPreco = String(preco);

console.log("Novo tipo de preco: ",typeof novoPreco);



let dia = "Segunda feira, 23";
console.log("Tipo de dia: ", typeof dia);

diaMes = Number(dia);
console.log("Novo tipode dia", typeof diaMes);
console.log("Valor do dia do mes: ", diaMes);

if( "5" == 5){

}
