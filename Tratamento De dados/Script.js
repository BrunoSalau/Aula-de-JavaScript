
/*let jsonString = '[{"id": "1", "name": "Helton"}, {"id": "67", "name": "Jujuba"}]'


try{
    let objeto = JSON.parse(jsonString);
    console.log(JSON.stringify(objeto))
    console.log(`Usuario: ${objeto[0].id} e ${objeto[0].name}`)
}catch(error){
    console.error("Erro a converter String em objeto",error)
}
console.log("Vhegou até aqui");
*/
try{
    console.log("Conectando ao banco")

    let jsonString2 = '[{"id": "1", "name": "Helton"}, {"id": "67", "name": "Jujuba"}]';

    let carro = JSON.parse(jsonString2);
    console.log("Conexão realizada com sucesso!")

}catch(error){

    console.error(`Falha ao conectar ao banco ${error}`)

}finally{

    console.log("Banco de dados fechado!")

}

function verificarMaiorIdade(idade){
    if(!idade){
        throw new Error("É obrigatorio o preenchimento da idade!")
    }
    if(idade < 0){
        throw new Error("A idade nao pode ser menor que 0!")
    }
    if(idade >= 18){
        return "Maior de idade";
    }else{
        return "Menor de idade";
    }

    
}
try{
    console.log("19: ", verificarMaiorIdade(19));
    console.log("5: ", verificarMaiorIdade(5));
    //console.log("nada: ", verificarMaiorIdade());
    console.log("-23: ", verificarMaiorIdade(-23));

}catch(error){
    console.error("Deu erro",error);
}




