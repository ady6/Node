class Coche {
	//Propiedades
	matricula: string;
	marca: string;
	modelo: string;
	velocidad: number;

	constructor (matricula: string, marca: string, modelo: string) {
		this.matricula = matricula;
		this.marca = marca;
		this.modelo = modelo;
		this.velocidad = 0;
	}

	estadoCoche() {
		return this.matricula + " " + this.marca + " " + this.modelo + " va a " + this.velocidad;
	}

	acelerar(cuanto: number) {
		this.velocidad = this.velocidad + cuanto; 
	}

	frenar(cuanto: number) {
		this.velocidad = this.velocidad - cuanto;
	}
}

// Aquí el punto de inicio de programa
let miCoche = new Coche("5566FTX", "Ford", "Fiesta");
miCoche.acelerar(50);
miCoche.frenar(10);
console.log(miCoche.estadoCoche());
