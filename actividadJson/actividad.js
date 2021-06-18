// esto son cómo importaciones de módulos
let http = require("http");
let fs = require("fs");

// función que atiende la solicitud con un modelo asíncrono
function atender(solicitud, respuesta) {
	console.log("Se ha recibido una solicitud a las "+new Date());

	var archivoHTML = fs.readFileSync("hello.html");
	var archivoJson = fs.readFileSync("agenda.json");
	var agenda = JSON.parse(archivoJson);

		
		respuesta.write(archivoHTML);

		respuesta.write("DNI: "+agenda[0].dni+"<br> NOMBRE Y APELLIDOS: "+agenda[0].nombre+" "+agenda[0].apellidos+"<br> EDAD: "+agenda[0].edad+"<br><br>");

		respuesta.write("DNI: "+agenda[1].dni+"<br> NOMBRE Y APELLIDOS: "+agenda[1].nombre+" "+agenda[1].apellidos+"<br> EDAD: "+agenda[1].edad);

		respuesta.end();
}

// creamos un servidor http
let server = http.createServer(atender);

// ponemos el servidor a escuchar
server.listen(9090);

