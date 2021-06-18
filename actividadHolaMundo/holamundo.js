// esto son cómo importaciones de módulos
let http = require("http");
let c = 0;

// función que atiende la solicitud con un modelo asíncrono
function atender(solicitud, respuesta) {
	if (solicitud.url != "/favicon.ico") {
	c++;
	console.log("Solicitud recibida a las "+new Date());
	console.log("Peticion nº "+c);


	let salida = "<!DOCTYPE html>";

	salida += "<html>";

	salida += "<head>";

	salida += "<meta charset='utf-8'>";

	salida += "<title>Hola Mundo node</title>";

	salida += "</head>";

	salida += "<body>";

	salida += "<h1>Hola Mundo</h1>";

	salida += "<h2>Hola Mundo</h2>";

	salida += "<h3>Hola Mundo</h3>";

	salida += "</body>";

	salida += "</html>";

	respuesta.end(salida);
	
	}
}

// creamos un servidor http
let server = http.createServer(atender);

// ponemos el servidor a escuchar
server.listen(9090);