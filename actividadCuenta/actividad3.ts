class Cuenta {
	//Propiedades
	saldo: number;
	cliente: string;
	numero: number;

	constructor (saldo: number, cliente: string, numero: number) {
		this.saldo = 0;
		this.cliente = cliente;
		this.numero = numero;
	}

	estadoCuenta() {
		return this.cliente + " con número de cuenta: " + this.numero + " tiene un sueldo de: " + this.saldo+" euros";
	}

	ingresar(cuanto: number) {
		this.saldo = this.saldo + cuanto; 
	}

	retirar(cuanto: number) {
		this.saldo = this.saldo - cuanto;
	}
}

// Aquí el punto de inicio de programa
let cuenta1 = new Cuenta(1000, "Adaya", 123456789);
cuenta1.ingresar(800);
cuenta1.retirar(500);
console.log(cuenta1.estadoCuenta());