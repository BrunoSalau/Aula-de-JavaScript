const express = require('express');
const app = express();

const port = 3000;

//configuração
app.set('view engine','ejs');
app.set('views','./src/views');
app.use(express.urlencoded({extended: true}));

//nosso "Banco de dados" em memoria
let usuarios = [
    {id: 1, nome: 'Helon', email: 'hazevedo@up.edu.br'},
    {id: 2, nome: 'Juliana', email: 'guria@up.edu.br'},
    {id: 3, nome: 'Thiago', email: 'thiago@up.edu.br'},
    {id: 4, nome: 'JJ', email: 'jamesjumes@up.edu.br'}
];

//READ: listar os usuarios

app.get('/', (req, res)=>{
    res.render('index',{ usuarios });
});

app.listen(port,()=>{console.log('Servidor Rodando 🚀')})