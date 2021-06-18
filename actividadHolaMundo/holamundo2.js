// esto son cómo importaciones de módulos
let http = require("http");
let fs = require("fs");

// función que atiende la solicitud con un modelo asíncrono
function atender(solicitud, respuesta) {
	console.log("Se ha recibido una solicitud a las "+new Date());

	var archivoHtml = fs.readFileSync("hello.html");

	respuesta.write(archivoHtml);
	respuesta.end();
}

// creamos un servidor http
let server = http.createServer(atender);

// ponemos el servidor a escuchar
server.listen(9090);