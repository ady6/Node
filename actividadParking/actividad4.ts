class Coche { 
	matricula: string; 
	marca: string; 
	modelo: string; 

	constructor (matricula: string, marca: string, modelo: string) {
		this.matricula = matricula; 
		this.marca = marca; 
		this.modelo = modelo; 
	} 

	ver() { 
		return this.matricula + " - " + this.marca + " - " + this.modelo;
	} 
} 

class Parking { 
// Parking con 6 plazas de garaje donde puede aparcarse un coche
	plazas: Coche[]; 

	constructor() { 
		this.plazas = [null, null, null, null, null, null]; 
	} 

	aparcar(coche: Coche) { 
	// Busca la primera plaza libre y aparca un Coche
		for (let p=0; p<this.plazas.length; p++) {
			if (this.plazas[p] == null) {
				this.plazas[p] = coche;
				return "Acaba de aparcar el coche: "+coche.ver();
			}
		}
		return "No queda ninguna plaza libre";
	} 
	todasLasPlazas() { 
		let salida = ""; 
		// Retorna un listado con todas las plazas 
		// Para cada una informa sobre si está libre u ocupada
		for (let p=0; p<this.plazas.length; p++){
			if (this.plazas[p]==null) {
		  	salida=salida+"Plaza nº "+p+" (libre)";
			}
			else {
			salida= salida+"Plaza nº " + p + " "+this.plazas[p].ver();
			}
			salida = salida + "\n";
		} 
		return salida; 
	} 
	plazasLibres() { 
		let salida = ""; 
		// Retorna una cadena que informa de los números de plaza libres
		for (let p=0; p<this.plazas.length; p++){
			if (this.plazas[p]==null) {
		  	salida=salida+"Plaza nº "+p+" libre";
			}
			salida = salida + "\n";
		} 
		return salida; 
	}   
	plazasOcupadas() { 
		let salida = ""; 
		// Retorna una cadena que informa de los números de plazas ocupadas // Y sobre qué coche las ocupa.
		for (let p=0; p<this.plazas.length; p++){
			if (this.plazas[p]!=null) {
		  	salida=salida+"Plaza nº "+p+" ocupada";
			}
			salida = salida + "\n";
		} 
		return salida; 
	} 
} 

// Aquí el punto de ejecución del programa. 
// Creamos el parking y aparcamos coches.
let c1 = new Coche("55665FGK", "Seat", "Ibiza");
let c2 = new Coche("13823AJS", "Skoda", "Scala");
let c3 = new Coche("12334AEF", "Lexus", "Axis");
let c4 = new Coche("1234A5SD", "otro", "coche");
let c5 = new Coche("35565RTF", "otro", "mas");

let parking1 = new Parking();
parking1.aparcar(c1);
parking1.aparcar(c2);  
parking1.aparcar(c3);
parking1.aparcar(c4); 
parking1.aparcar(c5); 
console.log(parking1.todasLasPlazas());
console.log(parking1.plazasLibres());
console.log(parking1.plazasOcupadas());
