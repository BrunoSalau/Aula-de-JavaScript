async function trazer(){
  const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
  try{
    if(!resposta.ok){
      throw new Error("Algo deu errado");
    }
    const API = await resposta.json();

    return API

  }catch(Error){
    console.error("Sua api nao ta dando bom")
  }
}

const botao = document.querySelector('.gera')
botao.addEventListener('click',async()=>{
  const api = await trazer();
  const input = document.querySelector('.input')

  try{
  const usuario = api.find(item => item.id == input.value);
  
      document.querySelector('.mostrar').innerHTML = `<p>nome: ${usuario.name} <button class="mais">Saiba Mais</button></p>`
      const botao2 = document.querySelector('.mais')
      botao2.addEventListener('click',async()=>{
        console.log(api)
        document.querySelector('.mostrar').innerHTML += `
        <p>Username: ${usuario.username}</p>
        <p>Email: ${usuario.email}</p>
        <p>Telefone: ${usuario.phone}</p>
        <p>Compania: ${usuario.company.name}</p>
        <p>Cidade: ${usuario.address.city}</p>
        `
      })
      
        
      }catch(Error){
        document.querySelector('.mostrar').innerHTML = `<p>!NOME NÃO ENCONTRADO!</p>`
      }

  })
 /* api.forEach(item=>{
    if(input.value == item.id){
      vari = item.id;
      document.querySelector('.mostrar').innerHTML = `<p>nome: ${item.name} <button class="mais">Saiba Mais</button></p>`
      const botao2 = document.querySelector('.mais')
      botao2.addEventListener('click',async()=>{
        console.log(api)
        document.querySelector('.mostrar').innerHTML += `
        <p>Username: ${item.username}</p>
        <p>Email: ${item.email}</p>
        <p>Telefone: ${item.phone}</p>
        <p>Compania: ${item.company.name}</p>
        <p>Cidade: ${item.address.city}</p>
        `
  })
    }
  })*/
  //API.forEach(item=>document.querySelector('.mostrar').innerHTML += `<p>nome: ${item.name}</p>`)




/*const botao = document.querySelector('.gera')
botao.addEventListener('click',async()=>{
  const api = await trazer();
  const input = document.querySelector('.input')

  if(input.value == api.name)
  
  //API.forEach(item=>document.querySelector('.mostrar').innerHTML += `<p>nome: ${item.name}</p>`)

})*/


/*nome: Leanne Graham

nome: Ervin Howell

nome: Clementine Bauch

nome: Patricia Lebsack

nome: Chelsey Dietrich

nome: Mrs. Dennis Schulist

nome: Kurtis Weissnat

nome: Nicholas Runolfsdottir V

nome: Glenna Reichert

nome: Clementina DuBuque*/