/*
*******************************Creacion de un servidor basico en nodeJs
*******************************
*/
//Importamos el modulo http
const http = require('http')
//lo guardamos en una variable y creamos un servidor con el metodo createServer el cual recibe 2 parametros req y res
//req contiene la solicitud http y res representa la respuesta http q se va enviar al cliente 
const server = http.createServer((req, res)=>{
    res.end('Hola mundo') //end nos permite enviar la rpta al cliente el cual enviara hola mundo al cliente que seria el navegador
});
//tomamos el servidor donde guardamos el servido y usamos el metodo listen el cual escucha el servidor que recibe 2 parametros
//y el segundo parametro hace una funcion flecha definira lo que ocurra cuando se ejecute el servidor
server.listen(3000, ()=>{ //
    console.log('El servidor esta escuchando');
    
})